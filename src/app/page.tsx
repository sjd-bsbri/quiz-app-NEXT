'use client';

import { useState } from 'react';
import { useQuizStore } from '../store/quizStore';
import { quizCategories } from '../data/quizData';
import { Category, QuizResult as QuizResultType } from '../types/quiz';
import CategoryCard from '../components/CategoryCard';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import QuizResult from '../components/QuizResult';


export default function Home() {
  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null);
  
  const {
    currentCategory,
    currentQuestionIndex,
    isQuizActive,
    isQuizCompleted,
    startQuiz,
    answerQuestion,
    nextQuestion,
    completeQuiz,
    resetQuiz,
    answers
  } = useQuizStore();

  const handleCategorySelect = (category: Category) => {
    startQuiz(category);
  };

  const handleAnswer = (answerIndex: number) => {
    answerQuestion(answerIndex);
  };

  const handleNextQuestion = () => {
    nextQuestion();
  };

  const handleCompleteQuiz = () => {
    const result = completeQuiz();
    if (result) {
      setQuizResult(result);
    }
  };

  const handleRestart = () => {
    resetQuiz();
    setQuizResult(null);
  };

  // Show quiz result
  if (quizResult) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
        <div className="container mx-auto py-8">
          <QuizResult result={quizResult} onRestart={handleRestart} />
        </div>
      </main>
    );
  }

  // Show quiz questions
  if (isQuizActive && currentCategory) {
    const currentQuestion = currentCategory.questions[currentQuestionIndex];
    const selectedAnswer = answers[currentQuestionIndex];
    
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
        <div className="container mx-auto py-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
            <div className="text-center lg:text-right">
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-vazirmatn">
                آزمون {currentCategory.name}
              </h1>
              <p className="text-gray-400 font-vazirmatn">
                به سوالات با دقت پاسخ دهید
              </p>
            </div>
            <Timer />
          </div>

          {/* Progress Bar */}
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={currentCategory.questions.length}
            className="mb-8"
          />

          {/* Question */}
          <div className="mb-8">
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              onAnswer={handleAnswer}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            {currentQuestionIndex < currentCategory.questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`
                  px-8 py-4 rounded-xl font-bold font-vazirmatn
                  transform transition-all duration-300
                  border backdrop-blur-sm
                  ${selectedAnswer !== null
                    ? 'bg-gradient-to-r from-blue-500 to-purple-900 text-white border-white/10 hover:scale-105 hover:shadow-lg'
                    : 'bg-gray-700/50 text-gray-400 border-gray-600/30 cursor-not-allowed'
                  }
                `}
              >
                سوال بعدی ←
              </button>
            ) : (
              <button
                onClick={handleCompleteQuiz}
                disabled={selectedAnswer === null}
                className={`
                  px-8 py-4 rounded-xl font-bold font-vazirmatn
                  transform transition-all duration-300
                  border backdrop-blur-sm
                  ${selectedAnswer !== null
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white border-white/10 hover:scale-105 hover:shadow-lg'
                    : 'bg-gray-700/50 text-gray-400 border-gray-600/30 cursor-not-allowed'
                  }
                `}
              >
                پایان آزمون 🎯
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }

  // Show category selection
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6 animate-bounce">🧠</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-vazirmatn">
            آزمون آنلاین
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-vazirmatn">
            یکی از موضوعات زیر را انتخاب کنید و دانش خود را محک بزنید
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-600/30">
              <span>⏱️</span>
              <span className="text-sm text-gray-300 font-vazirmatn">۷ دقیقه زمان</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-600/30">
              <span>❓</span>
              <span className="text-sm text-gray-300 font-vazirmatn">۷ سوال</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-600/30">
              <span>🎯</span>
              <span className="text-sm text-gray-300 font-vazirmatn">چهار گزینه‌ای</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quizCategories.map((category, index) => (
            <div
              key={category.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard
                category={category}
                onSelect={handleCategorySelect}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 font-vazirmatn">
            برای شروع آزمون، روی یکی از موضوعات کلیک کنید
          </p>
        </div>
      </div>
    </main>
  );
}