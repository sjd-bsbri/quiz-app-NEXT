import { z } from 'zod';

export const QuestionSchema = z.object({
  id: z.string(),
  question: z.string(),
  options: z.array(z.string()).length(4),
  correctAnswer: z.number().min(0).max(3),
});

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  color: z.string(),
  questions: z.array(QuestionSchema),
});

export const QuizResultSchema = z.object({
  categoryId: z.string(),
  categoryName: z.string(),
  totalQuestions: z.number(),
  correctAnswers: z.number(),
  wrongAnswers: z.number(),
  score: z.number(),
  timeSpent: z.number(),
  completedAt: z.date(),
});

export type Question = z.infer<typeof QuestionSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type QuizResult = z.infer<typeof QuizResultSchema>;

export interface QuizState {
  currentCategory: Category | null;
  currentQuestionIndex: number;
  answers: (number | null)[];
  timeLeft: number;
  isQuizActive: boolean;
  isQuizCompleted: boolean;
  startTime: Date | null;
  endTime: Date | null;
}

export interface QuizStore extends QuizState {
  startQuiz: (category: Category) => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  completeQuiz: () => QuizResult | null;
  resetQuiz: () => void;
  setTimeLeft: (time: number) => void;
}