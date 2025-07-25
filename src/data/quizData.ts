import { Category } from '../types/quiz';
import { BrainCircuit, Globe, Languages, Landmark, FlaskConical, BookOpen } from 'lucide-react';


export const quizCategories: Category[] = [
  {
    id: 'intelligence',
    name: 'هوش',
    icon: BrainCircuit,
    color: 'from-purple-500 to-pink-500',
    questions: [
      {
        id: 'int-1',
        question: 'اگر A = 1، B = 2، C = 3 باشد، آنگاه CAB چقدر می‌شود؟',
        options: ['312', '321', '123', '132'],
        correctAnswer: 0
      },
      {
        id: 'int-2',
        question: 'کدام عدد در دنباله زیر جای خالی را پر می‌کند؟ 2، 6، 12، 20، ؟',
        options: ['28', '30', '32', '24'],
        correctAnswer: 1
      },
      {
        id: 'int-3',
        question: 'اگر همه گربه‌ها حیوان هستند و برخی حیوانات سیاه هستند، کدام نتیجه درست است؟',
        options: ['همه گربه‌ها سیاه هستند', 'برخی گربه‌ها ممکن است سیاه باشند', 'هیچ گربه‌ای سیاه نیست', 'همه حیوانات گربه هستند'],
        correctAnswer: 1
      },
      {
        id: 'int-4',
        question: 'کدام کلمه با بقیه متفاوت است؟',
        options: ['خودرو', 'هواپیما', 'کشتی', 'جاده'],
        correctAnswer: 3
      },
      {
        id: 'int-5',
        question: 'اگر 5 نفر در 5 دقیقه 5 سیب بخورند، 10 نفر در چند دقیقه 10 سیب می‌خورند؟',
        options: ['5 دقیقه', '10 دقیقه', '15 دقیقه', '20 دقیقه'],
        correctAnswer: 0
      },
      {
        id: 'int-6',
        question: 'کدام شکل هندسی بیشترین تعداد ضلع را دارد؟',
        options: ['مثلث', 'مربع', 'پنج‌ضلعی', 'شش‌ضلعی'],
        correctAnswer: 3
      },
      {
        id: 'int-7',
        question: 'اگر دیروز فردای شنبه بود، امروز چه روزی است؟',
        options: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'شنبه'],
        correctAnswer: 0
      },
      {
        id: 'int-8',
        question: 'کدام عدد جای خالی را در الگوی زیر پر می‌کند؟ 1، 4، 9، 16، ؟',
        options: ['20', '25', '30', '36'],
        correctAnswer: 1
      },
      {
        id: 'int-9',
        question: 'اگر کتاب به کتابخانه تعلق دارد، آنگاه ماشین به کجا تعلق دارد؟',
        options: ['خیابان', 'پارکینگ', 'نمایشگاه', 'کارخانه'],
        correctAnswer: 1
      },
      {
        id: 'int-10',
        question: 'کدام گزینه منطق جمله را کامل می‌کند؟ همه پرندگان بال دارند، کبوتر پرنده است، پس...',
        options: ['کبوتر پرواز می‌کند', 'کبوتر بال دارد', 'کبوتر حیوان است', 'کبوتر زیبا است'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'general',
    name: 'اطلاعات عمومی',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    questions: [
      {
        id: 'gen-1',
        question: 'پایتخت ایران کدام شهر است؟',
        options: ['اصفهان', 'تهران', 'شیراز', 'تبریز'],
        correctAnswer: 1
      },
      {
        id: 'gen-2',
        question: 'بزرگترین اقیانوس جهان کدام است؟',
        options: ['اطلس', 'هند', 'آرام', 'شمالگان'],
        correctAnswer: 2
      },
      {
        id: 'gen-3',
        question: 'کدام سیاره به سیاره سرخ معروف است؟',
        options: ['ونوس', 'مریخ', 'مشتری', 'زحل'],
        correctAnswer: 1
      },
      {
        id: 'gen-4',
        question: 'اولین انسانی که به ماه سفر کرد چه نام داشت؟',
        options: ['یوری گاگارین', 'نیل آرمسترانگ', 'باز آلدرین', 'جان گلن'],
        correctAnswer: 1
      },
      {
        id: 'gen-5',
        question: 'کدام کشور بیشترین جمعیت جهان را دارد؟',
        options: ['هند', 'چین', 'آمریکا', 'اندونزی'],
        correctAnswer: 1
      },
      {
        id: 'gen-6',
        question: 'بلندترین قله جهان کدام است؟',
        options: ['K2', 'اورست', 'کانچنجانگا', 'لهوتسه'],
        correctAnswer: 1
      },
      {
        id: 'gen-7',
        question: 'کدام عنصر شیمیایی نماد Au دارد؟',
        options: ['نقره', 'طلا', 'آلومینیوم', 'آرگون'],
        correctAnswer: 1
      },
      {
        id: 'gen-8',
        question: 'جنگ جهانی دوم در چه سالی پایان یافت؟',
        options: ['1944', '1945', '1946', '1947'],
        correctAnswer: 1
      },
      {
        id: 'gen-9',
        question: 'کدام حیوان بزرگترین پستاندار جهان است؟',
        options: ['فیل', 'نهنگ آبی', 'زرافه', 'خرس قطبی'],
        correctAnswer: 1
      },
      {
        id: 'gen-10',
        question: 'کدام کتاب اثر حافظ شیرازی است؟',
        options: ['شاهنامه', 'دیوان حافظ', 'گلستان', 'بوستان'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'english',
    name: 'زبان انگلیسی',
    icon: Languages,
    color: 'from-green-500 to-teal-500',
    questions: [
      {
        id: 'eng-1',
        question: 'کدام کلمه معنی "خوشحال" را می‌دهد؟',
        options: ['Sad', 'Happy', 'Angry', 'Tired'],
        correctAnswer: 1
      },
      {
        id: 'eng-2',
        question: 'جمع کلمه "Child" چیست؟',
        options: ['Childs', 'Children', 'Childes', 'Child'],
        correctAnswer: 1
      },
      {
        id: 'eng-3',
        question: 'کدام جمله گرامری درست است؟',
        options: ['I am go to school', 'I go to school', 'I goes to school', 'I going to school'],
        correctAnswer: 1
      },
      {
        id: 'eng-4',
        question: 'معنی کلمه "Beautiful" چیست؟',
        options: ['زشت', 'زیبا', 'بزرگ', 'کوچک'],
        correctAnswer: 1
      },
      {
        id: 'eng-5',
        question: 'کدام کلمه با "Cat" قافیه می‌سازد؟',
        options: ['Dog', 'Hat', 'Bird', 'Fish'],
        correctAnswer: 1
      },
      {
        id: 'eng-6',
        question: 'گذشته ساده فعل "Go" چیست؟',
        options: ['Goed', 'Gone', 'Went', 'Going'],
        correctAnswer: 2
      },
      {
        id: 'eng-7',
        question: 'کدام کلمه یک صفت است؟',
        options: ['Run', 'Quick', 'Book', 'Water'],
        correctAnswer: 1
      },
      {
        id: 'eng-8',
        question: 'معنی "Good morning" چیست؟',
        options: ['شب بخیر', 'صبح بخیر', 'ظهر بخیر', 'عصر بخیر'],
        correctAnswer: 1
      },
      {
        id: 'eng-9',
        question: 'کدام حرف اضافه در جمله "I live ___ Tehran" استفاده می‌شود؟',
        options: ['at', 'in', 'on', 'by'],
        correctAnswer: 1
      },
      {
        id: 'eng-10',
        question: 'جمع کلمه "Mouse" چیست؟',
        options: ['Mouses', 'Mice', 'Mouse', 'Mousees'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'history',
    name: 'تاریخ',
    icon: Landmark,
    color: 'from-yellow-500 to-orange-500',
    questions: [
      {
        id: 'his-1',
        question: 'کوروش کبیر پادشاه کدام امپراتوری بود؟',
        options: ['روم', 'هخامنشی', 'ساسانی', 'پارت'],
        correctAnswer: 1
      },
      {
        id: 'his-2',
        question: 'انقلاب اسلامی ایران در چه سالی رخ داد؟',
        options: ['1357', '1358', '1359', '1356'],
        correctAnswer: 0
      },
      {
        id: 'his-3',
        question: 'کدام شهر اولین پایتخت ایران در دوره صفویه بود؟',
        options: ['اصفهان', 'تبریز', 'قزوین', 'تهران'],
        correctAnswer: 1
      },
      {
        id: 'his-4',
        question: 'جنگ جهانی اول در چه بازه زمانی رخ داد؟',
        options: ['1912-1918', '1914-1918', '1913-1919', '1915-1919'],
        correctAnswer: 1
      },
      {
        id: 'his-5',
        question: 'کدام خلیفه امپراتوری عثمانی را منحل کرد؟',
        options: ['عبدالحمید دوم', 'مراد پنجم', 'محمد ششم', 'عبدالمجید دوم'],
        correctAnswer: 3
      },
      {
        id: 'his-6',
        question: 'فردوسی شاهنامه را در چه قرنی سرود؟',
        options: ['قرن چهارم', 'قرن پنجم', 'قرن ششم', 'قرن سوم'],
        correctAnswer: 0
      },
      {
        id: 'his-7',
        question: 'کدام شهر مرکز تمدن بین‌النهرین بود؟',
        options: ['بابل', 'آتن', 'روم', 'قاهره'],
        correctAnswer: 0
      },
      {
        id: 'his-8',
        question: 'ناپلئون بناپارت در کدام نبرد شکست نهایی خود را خورد؟',
        options: ['واترلو', 'آوسترلیتز', 'جنا', 'بورودینو'],
        correctAnswer: 0
      },
      {
        id: 'his-9',
        question: 'کدام امپراتوری "امپراتوری خورشید غروب نکرده" نامیده می‌شد؟',
        options: ['روم', 'بریتانیا', 'عثمانی', 'مغول'],
        correctAnswer: 1
      },
      {
        id: 'his-10',
        question: 'رضا شاه پهلوی در چه سالی به قدرت رسید؟',
        options: ['1304', '1305', '1306', '1307'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'science',
    name: 'علوم',
    icon: FlaskConical,
    color: 'from-indigo-500 to-purple-500',
    questions: [
      {
        id: 'sci-1',
        question: 'کدام عنصر بیشترین فراوانی را در جو زمین دارد؟',
        options: ['اکسیژن', 'نیتروژن', 'کربن دی‌اکسید', 'آرگون'],
        correctAnswer: 1
      },
      {
        id: 'sci-2',
        question: 'سرعت نور در خلاء چقدر است؟',
        options: ['300,000 کیلومتر بر ثانیه', '299,792,458 متر بر ثانیه', '150,000 کیلومتر بر ثانیه', '500,000 کیلومتر بر ثانیه'],
        correctAnswer: 1
      },
      {
        id: 'sci-3',
        question: 'کدام اندام بدن انسان اکسیژن تولید می‌کند؟',
        options: ['ریه', 'قلب', 'کبد', 'هیچ‌کدام'],
        correctAnswer: 3
      },
      {
        id: 'sci-4',
        question: 'فرمول شیمیایی آب چیست؟',
        options: ['H2O2', 'H2O', 'HO2', 'H3O'],
        correctAnswer: 1
      },
      {
        id: 'sci-5',
        question: 'کدام سیاره بیشترین تعداد قمر را دارد؟',
        options: ['مشتری', 'زحل', 'اورانوس', 'نپتون'],
        correctAnswer: 1
      },
      {
        id: 'sci-6',
        question: 'واحد اندازه‌گیری نیرو چیست؟',
        options: ['ژول', 'نیوتن', 'وات', 'پاسکال'],
        correctAnswer: 1
      },
      {
        id: 'sci-7',
        question: 'کدام ویتامین از نور خورشید ساخته می‌شود؟',
        options: ['ویتامین A', 'ویتامین B', 'ویتامین C', 'ویتامین D'],
        correctAnswer: 3
      },
      {
        id: 'sci-8',
        question: 'دمای انجماد آب چند درجه سانتیگراد است؟',
        options: ['-1', '0', '1', '32'],
        correctAnswer: 1
      },
      {
        id: 'sci-9',
        question: 'کدام گاز برای فتوسنتز ضروری است؟',
        options: ['اکسیژن', 'نیتروژن', 'کربن دی‌اکسید', 'هیدروژن'],
        correctAnswer: 2
      },
      {
        id: 'sci-10',
        question: 'بزرگترین استخوان بدن انسان کدام است؟',
        options: ['استخوان ران', 'استخوان بازو', 'ستون فقرات', 'استخوان سینه'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'literature',
    name: 'ادبیات',
    icon: BookOpen,
    color: 'from-red-500 to-pink-500',
    questions: [
      {
        id: 'lit-1',
        question: 'شاهنامه اثر کیست؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 2
      },
      {
        id: 'lit-2',
        question: 'کدام شاعر به "لسان الغیب" معروف است؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 0
      },
      {
        id: 'lit-3',
        question: 'کتاب "گلستان" اثر کیست؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 1
      },
      {
        id: 'lit-4',
        question: 'کدام شاعر مثنوی معنوی را سروده است؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 3
      },
      {
        id: 'lit-5',
        question: 'شاعر "بوستان" کیست؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 1
      },
      {
        id: 'lit-6',
        question: 'کدام شاعر به "شیخ اجل" معروف است؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 1
      },
      {
        id: 'lit-7',
        question: 'اثر "لیلی و مجنون" متعلق به کدام شاعر است؟',
        options: ['نظامی', 'فردوسی', 'حافظ', 'سعدی'],
        correctAnswer: 0
      },
      {
        id: 'lit-8',
        question: 'کدام شاعر به "حکیم تُس" معروف است؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 2
      },
      {
        id: 'lit-9',
        question: 'اثر "خسرو و شیرین" از کیست؟',
        options: ['نظامی', 'فردوسی', 'حافظ', 'سعدی'],
        correctAnswer: 0
      },
      {
        id: 'lit-10',
        question: 'کدام شاعر در قونیه (ترکیه) مدفون است؟',
        options: ['حافظ', 'سعدی', 'فردوسی', 'مولوی'],
        correctAnswer: 3
      }
    ]
  }
];