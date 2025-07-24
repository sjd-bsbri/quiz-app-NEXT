'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export default function ProgressBar({ current, total, className = '' }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300 font-vazirmatn">
          پیشرفت آزمون
        </span>
        <span className="text-sm font-medium text-blue-400 font-vazirmatn">
          {current} از {total}
        </span>
      </div>
      
      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gray-600/30">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse-slow" />
        </div>
      </div>
      
      <div className="text-center mt-2">
        <span className="text-xs text-gray-400 font-vazirmatn">
          {percentage}% تکمیل شده
        </span>
      </div>
    </div>
  );
}