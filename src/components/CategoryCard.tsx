'use client';

import { Category } from '../types/quiz';

interface CategoryCardProps {
  category: Category;
  onSelect: (category: Category) => void;
}

export default function CategoryCard({ category, onSelect }: CategoryCardProps) {
  const Icon = category.icon; // آیکون را به عنوان یک کامپوننت دریافت می‌کنیم

  return (
    <div
      onClick={() => onSelect(category)}
      className={`
        relative overflow-hidden rounded-2xl p-6 cursor-pointer
        bg-gradient-to-br ${category.color}
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25
        group border border-white/10
        animate-fade-in
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 flex justify-center text-white">
          <Icon size={40} /> {/* رندر کردن آیکون */}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 font-vazirmatn">
          {category.name}
        </h3>
        <p className="text-white/80 text-sm font-vazirmatn">
          ۷ سوال چهارگزینه‌ای
        </p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-300" />
    </div>
  );
}