'use client';

import { useEffect } from 'react';
import { formatTime } from '../utils/helpers';
import { useQuizStore } from '../store/quizStore';
import { Clock, AlertTriangle, Siren } from 'lucide-react'; // ایمپورت آیکون‌ها


export default function Timer() {
  const { timeLeft, setTimeLeft, isQuizActive } = useQuizStore();

  useEffect(() => {
    if (!isQuizActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isQuizActive, setTimeLeft]);

   const getTimerStyle = () => {
    if (timeLeft > 120) return { colorClass: 'text-green-400', borderColor: 'border-green-400/30', bgColor: 'bg-green-400/10', icon: <Clock /> };
    if (timeLeft > 60) return { colorClass: 'text-yellow-400', borderColor: 'border-yellow-400/30', bgColor: 'bg-yellow-400/10', icon: <AlertTriangle /> };
    return { colorClass: 'text-red-400', borderColor: 'border-red-400/30', bgColor: 'bg-red-400/10', icon: <Siren /> };
  };
    const { colorClass, borderColor, bgColor, icon } = getTimerStyle();


    return (
    <div className={`
      flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm
      ${colorClass} ${borderColor} ${bgColor}
      transition-all duration-300
    `}>
      <div className="text-xl">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-vazirmatn opacity-80">
          زمان باقی‌مانده
        </span>
        <span className="text-lg font-bold font-mono">
          {formatTime(timeLeft)}
        </span>
      </div>
      
      {timeLeft <= 30 && (
        <div className="absolute inset-0 rounded-xl border-2 border-red-400 animate-ping opacity-30" />
      )}
    </div>
  );

}