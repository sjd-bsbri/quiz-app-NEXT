import { z } from 'zod';
import type { LucideIcon } from 'lucide-react'; // ایمپورت تایپ آیکون


export const QuestionSchema = z.object({
  id: z.string(),
  question: z.string(),
  options: z.array(z.string()).length(4),
  correctAnswer: z.number().min(0).max(3),
});

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  // icon: z.string(),
  icon: z.any(),
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
  questions: z.array(QuestionSchema),
  answers: z.array(z.nullable(z.number())),
});

export type Question = z.infer<typeof QuestionSchema>;
// export type Category = z.infer<typeof CategorySchema>;
export interface Category extends Omit<z.infer<typeof CategorySchema>, 'icon'> {
  icon: LucideIcon; // تایپ دقیق آیکون را اینجا تعریف می‌کنیم
}
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