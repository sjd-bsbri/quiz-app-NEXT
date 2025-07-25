'use client';

import { Question } from '../types/quiz';
import { useQuizStore } from '../store/quizStore';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  onAnswer: (answerIndex: number) => void;
}

export default function QuestionCard({ question, questionNumber, onAnswer }: QuestionCardProps) {
  const { answers, currentQuestionIndex } = useQuizStore();
  const selectedAnswer = answers[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    onAnswer(optionIndex);
  };

  const getOptionStyle = (optionIndex: number) => {
    const isSelected = selectedAnswer === optionIndex;
    const baseStyle = `
      w-full p-4 text-right rounded-xl border-2 transition-all duration-300 cursor-pointer
      font-vazirmatn transform hover:scale-[1.02] hover:shadow-lg
      backdrop-blur-sm
    `;
    
    if (isSelected) {
      return `${baseStyle} bg-blue-500/20 border-blue-400 text-blue-100 shadow-lg shadow-blue-500/25`;
    }
    
    return `${baseStyle} bg-gray-800/40 border-gray-600/30 text-gray-200 hover:bg-gray-700/50 hover:border-gray-500/50`;
  };

  const optionLabels = ['الف', 'ب', 'ج', 'د'];

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      {/* Question Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-lg">
            {questionNumber}
          </div>
          <h2 className="text-xl font-bold text-white font-vazirmatn">
            سوال {questionNumber} از ۷
          </h2>
        </div>
        
        {/* Question Text */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
          <p className="text-lg leading-relaxed text-gray-100 font-vazirmatn">
            {question.question}
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(index)}
            className={getOptionStyle(index)}
          >
            <div className="flex items-center gap-4">
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full border-2 
                ${selectedAnswer === index 
                  ? 'bg-blue-500 border-blue-400 text-white' 
                  : 'border-gray-500 text-gray-400'
                }
                transition-all duration-300
              `}>
                <span className="text-sm font-bold">
                  {optionLabels[index]}
                </span>
              </div>
              <span className="flex-1 text-base">
                {option}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Selection Indicator */}
      {/* {selectedAnswer !== null && (
        <div className="mt-6 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 font-vazirmatn">
            <Check size={16} />
            <span>پاسخ انتخاب شد</span>
          </div>
        </div>
      )} */}
    </div>
  );
}