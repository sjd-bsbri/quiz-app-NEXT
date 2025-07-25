'use client';

import { QuizResult as QuizResultType, Question } from '../types/quiz';
import { formatTimeSpent, getScoreColor, getScoreMessage } from '../utils/helpers';
import { Rocket, CheckCircle, XCircle } from 'lucide-react'; // ایمپورت آیکون‌ها


interface QuizResultProps {
  result: QuizResultType;
  onRestart: () => void;
}

export default function QuizResult({ result, onRestart }: QuizResultProps) {
  const scorePercentage = (result.score / 100) * 360; // For circular progress

  // پیدا کردن سوالاتی که اشتباه پاسخ داده شده‌اند
  const incorrectQuestions = result.questions.map((question, index) => ({
    ...question,
    userAnswer: result.answers[index]
  })).filter(q => q.userAnswer !== null && q.userAnswer !== q.correctAnswer);

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-up">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎯</div>
        <h1 className="text-3xl font-bold text-white mb-2 font-vazirmatn">
          نتیجه آزمون
        </h1>
        <p className="text-gray-400 font-vazirmatn">
          آزمون {result.categoryName}
        </p>
      </div>

      {/* Score Circle */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgb(55 65 81)"
              strokeWidth="8"
              fill="none"
              className="opacity-30"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${scorePercentage * 0.785} 283`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{
                animation: 'drawCircle 2s ease-out'
              }}
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Score Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}%
              </div>
              <div className="text-sm text-gray-400 font-vazirmatn">
                نمره نهایی
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Message */}
      <div className="text-center mb-8">
        <div className={`text-2xl font-bold mb-2 font-vazirmatn ${getScoreColor(result.score)}`}>
          {getScoreMessage(result.score)}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 text-center">
          <div className="text-3xl mb-2 flex justify-center text-green-400">
            <CheckCircle size={32} />
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {result.correctAnswers}
          </div>
          <div className="text-sm text-gray-400 font-vazirmatn">
            پاسخ صحیح
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 text-center">
          <div className="text-3xl mb-2 flex justify-center text-red-400">
            <XCircle size={32} />
          </div>
          <div className="text-2xl font-bold text-red-400 mb-1">
            {result.wrongAnswers}
          </div>
          <div className="text-sm text-gray-400 font-vazirmatn">
            پاسخ غلط
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 mb-8">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-blue-400 mb-1">
              {result.totalQuestions}
            </div>
            <div className="text-sm text-gray-400 font-vazirmatn">
              کل سوالات
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-400 mb-1">
              {formatTimeSpent(result.timeSpent)}
            </div>
            <div className="text-sm text-gray-400 font-vazirmatn">
              زمان صرف شده
            </div>
          </div>
        </div>
      </div>
      
      {/* Incorrect Answers Review */}
      {incorrectQuestions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white text-center mb-6 font-vazirmatn">مرور پاسخ‌های اشتباه</h2>
          <div className="space-y-6">
            {incorrectQuestions.map((question) => (
              <div key={question.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
                <p className="text-lg leading-relaxed text-gray-100 font-vazirmatn mb-4">
                  {question.question}
                </p>
                <div className="space-y-2">
                  <p className="text-red-400 font-vazirmatn">
                    <span className="font-bold">پاسخ شما: </span>
                    {question.options[question.userAnswer!]}
                  </p>
                  <p className="text-green-400 font-vazirmatn">
                    <span className="font-bold">پاسخ صحیح: </span>
                    {question.options[question.correctAnswer]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* Completion Date */}
      <div className="text-center mb-8 mt-8">
        <div className="text-sm text-gray-400 font-vazirmatn">
          تاریخ تکمیل: {result.completedAt.toLocaleDateString('fa-IR')} - {result.completedAt.toLocaleTimeString('fa-IR')}
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className={`
            px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 
            text-white font-bold rounded-xl font-vazirmatn
            transform transition-all duration-300 hover:scale-105 hover:shadow-lg
            border border-white/10 backdrop-blur-sm flex items-center gap-2 mx-auto`}
        >
          آزمون جدید <Rocket color='red' size={20} />
        </button>
      </div>

      <style jsx>{`
        @keyframes drawCircle {
          from {
            stroke-dasharray: 0 283;
          }
          to {
            stroke-dasharray: ${scorePercentage * 2.83} 283;
          }
        }
      `}</style>
    </div>
  );
}