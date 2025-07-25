export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const formatTimeSpent = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes > 0) {
    return `${minutes} دقیقه و ${remainingSeconds} ثانیه`;
  }
  return `${remainingSeconds} ثانیه`;
};

export const getScoreColor = (score: number): string => {
  if (score >= 80) return 'text-green-400';
  if (score >= 60) return 'text-yellow-400';
  if (score >= 40) return 'text-orange-400';
  return 'text-red-400';
};

export const getScoreMessage = (score: number): string => {
  if (score >= 90) return 'عالی! 🎉';
  if (score >= 80) return 'خوب! 👏';
  if (score >= 70) return 'قابل قبول 👍';
  if (score >= 60) return 'متوسط 😐';
  if (score >= 50) return 'ضعیف 😔';
  return 'خیلی ضعیف 😞';
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};


