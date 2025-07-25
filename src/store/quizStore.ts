import { create } from 'zustand';
import { QuizStore, Category, QuizResult } from '../types/quiz';

const QUIZ_TIME_LIMIT = 420; // 7 minutes in seconds

export const useQuizStore = create<QuizStore>((set, get) => ({
  // Initial state
  currentCategory: null,
  currentQuestionIndex: 0,
  answers: [],
  timeLeft: QUIZ_TIME_LIMIT,
  isQuizActive: false,
  isQuizCompleted: false,
  startTime: null,
  endTime: null,

  // Actions
  startQuiz: (category: Category) => {
    // Shuffle questions randomly
    const shuffledQuestions = [...category.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 7); // Take only 7 questions

    const shuffledCategory = {
      ...category,
      questions: shuffledQuestions
    };

    set({
      currentCategory: shuffledCategory,
      currentQuestionIndex: 0,
      answers: new Array(7).fill(null),
      timeLeft: QUIZ_TIME_LIMIT,
      isQuizActive: true,
      isQuizCompleted: false,
      startTime: new Date(),
      endTime: null,
    });
  },

  answerQuestion: (answerIndex: number) => {
    const { answers, currentQuestionIndex } = get();
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    
    set({ answers: newAnswers });
  },

  nextQuestion: () => {
    const { currentQuestionIndex, currentCategory } = get();
    const nextIndex = currentQuestionIndex + 1;
    
    if (currentCategory && nextIndex < currentCategory.questions.length) {
      set({ currentQuestionIndex: nextIndex });
    } else {
      // Quiz completed
      get().completeQuiz();
    }
  },

  completeQuiz: (): QuizResult | null => {
    const { 
      currentCategory, 
      answers, 
      startTime, 
      timeLeft 
    } = get();
    
    if (!currentCategory || !startTime) return null;

    const endTime = new Date();
    const timeSpent = QUIZ_TIME_LIMIT - timeLeft;
    
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer !== null && currentCategory.questions[index] && 
          answer === currentCategory.questions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    const wrongAnswers = currentCategory.questions.length - correctAnswers;
    const score = Math.round((correctAnswers / currentCategory.questions.length) * 100);

    const result: QuizResult = {
      categoryId: currentCategory.id,
      categoryName: currentCategory.name,
      totalQuestions: currentCategory.questions.length,
      correctAnswers,
      wrongAnswers,
      score,
      timeSpent,
      completedAt: endTime,
      questions: currentCategory.questions,
      answers,
    };

    set({
      isQuizActive: false,
      isQuizCompleted: true,
      endTime,
    });

    return result;
  },

  resetQuiz: () => {
    set({
      currentCategory: null,
      currentQuestionIndex: 0,
      answers: [],
      timeLeft: QUIZ_TIME_LIMIT,
      isQuizActive: false,
      isQuizCompleted: false,
      startTime: null,
      endTime: null,
    });
  },

  setTimeLeft: (time: number) => {
    set({ timeLeft: time });
    
    if (time <= 0) {
      get().completeQuiz();
    }
  },
}));