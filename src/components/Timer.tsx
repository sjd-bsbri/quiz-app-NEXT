'use client';

import { useEffect } from 'react';
import { formatTime } from '@/utils/helpers';
import { useQuizStore } from '@/store/quizStore';

export default function Timer() {
  const { timeLeft, setTimeLeft, isQuizActive } = useQuizStore();

  useEffect(() => {
    if (!isQuizActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isQuizActive, setTimeLeft]);

  const getTimerColor = () => {
    if (timeLeft > 120) return 'text-green-400 border-green-400/30 bg-green-400/10';
    if (timeLeft > 60) return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
    return 'text-red-400 border-red-400/30 bg-red-400/10';
  };

  const getTimerIcon = () => {
    if (timeLeft > 120) return '⏰';
    if (timeLeft > 60) return '⚠️';
    return '🚨';
  };

  return (
    <div className={`
      flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm
      ${getTimerColor()}
      transition-all duration-300
    `}>
      <div className="text-xl">
        {getTimerIcon()}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-vazirmatn opacity-80">
          زمان باقی‌مانده
        </span>
        <span className="text-lg font-bold font-mono">
          {formatTime(timeLeft)}
        </span>
      </div>
      
      {/* Pulse animation for low time */}
      {timeLeft <= 30 && (
        <div className="absolute inset-0 rounded-xl border-2 border-red-400 animate-ping opacity-30" />
      )}
    </div>
  );
}