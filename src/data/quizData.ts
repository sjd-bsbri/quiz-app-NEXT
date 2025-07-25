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
      },
      {
        id: 'int-11',
        question: 'چه عددی در دنباله 3, 5, 8, 13, 21, ? قرار می‌گیرد؟',
        options: ['34', '30', '32', '28'],
        correctAnswer: 0
        },
        {
        id: 'int-12',
        question: 'کدام یک از موارد زیر با بقیه فرق دارد: سیب، موز، گل رز، پرتقال؟',
        options: ['سیب', 'موز', 'گل رز', 'پرتقال'],
        correctAnswer: 2
        },
        {
        id: 'int-13',
        question: 'اگر حروف "CIFAIPC" را دوباره مرتب کنید، نام کدام یک را خواهید داشت:',
        options: ['شهر', 'اقیانوس', 'حیوان', 'کشور'],
        correctAnswer: 1
        },
        {
        id: 'int-14',
        question: 'پزشک به شما 3 قرص می دهد و به شما می گوید که هر نیم ساعت یک قرص بخورید. مصرف تمام قرص ها چقدر طول می کشد؟',
        options: ['1.5 ساعت', '1 ساعت', '2 ساعت', '30 دقیقه'],
        correctAnswer: 1
        },
        {
        id: 'int-15',
        question: 'یک کشاورز 17 گوسفند داشت و همه جز 9 تا مردند. چندتا باقی مانده است؟',
        options: ['8', '9', '17', '26'],
        correctAnswer: 1
        },
        {
        id: 'int-16',
        question: 'کدام کلمه وقتی برعکس خوانده می شود یکسان است؟',
        options: ['سطح', 'خورشید', 'ماه', 'ستاره'],
        correctAnswer: 0
        },
        {
        id: 'int-17',
        question: 'اگر دو ساعت پیش بعد از ساعت یک بود، ساعت چند است؟',
        options: ['2', '3', '4', '1'],
        correctAnswer: 1
        },
        {
        id: 'int-18',
        question: 'چه چیزی پر از سوراخ است اما هنوز آب را نگه می دارد؟',
        options: ['یک بطری', 'یک اسفنج', 'یک فنجان', 'یک کاسه'],
        correctAnswer: 1
        },
        {
        id: 'int-19',
        question: 'چه چیزی همیشه در حال آمدن است اما هرگز نمی رسد؟',
        options: ['دیروز', 'امروز', 'فردا', 'هیچکدام'],
        correctAnswer: 2
        },
        {
        id: 'int-20',
        question: 'چه چیزی را می توان شکست، حتی اگر هرگز آن را بر ندارید یا لمس نکنید؟',
        options: ['یک پنجره', 'یک قول', 'یک بشقاب', 'یک تخم مرغ'],
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
      },
      {
        id: 'gen-11',
        question: 'چه کسی نمایشنامه «رومئو و ژولیت» را نوشته است؟',
        options: ['چارلز دیکنز', 'ویلیام شکسپیر', 'مارک تواین', 'جین آستن'],
        correctAnswer: 1
        },
        {
        id: 'gen-12',
        question: 'نماد شیمیایی آب چیست؟',
        options: ['O2', 'CO2', 'H2O', 'NaCl'],
        correctAnswer: 2
        },
        {
        id: 'gen-13',
        question: 'کدام کشور به عنوان سرزمین طلوع خورشید شناخته می شود؟',
        options: ['چین', 'ژاپن', 'تایلند', 'هند'],
        correctAnswer: 1
        },
        {
        id: 'gen-14',
        question: 'پایتخت استرالیا کدام شهر است؟',
        options: ['سیدنی', 'ملبورن', 'کانبرا', 'پرت'],
        correctAnswer: 2
        },
        {
        id: 'gen-15',
        question: 'بزرگترین صحرای جهان کدام است؟',
        options: ['صحرای گبی', 'صحرای عربستان', 'صحرای کالاهاری', 'صحرای قطب جنوب'],
        correctAnswer: 3
        },
        {
        id: 'gen-16',
        question: 'چه کسی نظریه نسبیت را توسعه داد؟',
        options: ['اسحاق نیوتن', 'آلبرت انیشتین', 'گالیلئو گالیله', 'نیکولا تسلا'],
        correctAnswer: 1
        },
        {
        id: 'gen-17',
        question: 'کدام قاره بیشترین تعداد کشور را دارد؟',
        options: ['آسیا', 'آفریقا', 'اروپا', 'آمریکای جنوبی'],
        correctAnswer: 1
        },
        {
        id: 'gen-18',
        question: 'چه کسی «مونالیزا» را نقاشی کرد؟',
        options: ['وینسنت ون گوگ', 'پابلو پیکاسو', 'لئوناردو داوینچی', 'کلود مونه'],
        correctAnswer: 2
        },
        {
        id: 'gen-19',
        question: 'کدام یک طولانی ترین رود جهان است؟',
        options: ['رود آمازون', 'رود نیل', 'رود یانگ تسه', 'رود می سی سی پی'],
        correctAnswer: 1
        },
        {
        id: 'gen-20',
        question: 'کدام کشور به شکل چکمه است؟',
        options: ['اسپانیا', 'یونان', 'ایتالیا', 'فرانسه'],
        correctAnswer: 2
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
        question: 'What is the meaning of "Happy"?',
        options: ['غمگین', 'خوشحال', 'عصبانی', 'خسته'],
        correctAnswer: 1
      },
      {
        id: 'eng-2',
        question: 'What is the plural of "Child"?',
        options: ['Childs', 'Children', 'Childes', 'Child'],
        correctAnswer: 1
      },
      {
        id: 'eng-3',
        question: 'Which sentence is grammatically correct?',
        options: ['I am go to school', 'I go to school', 'I goes to school', 'I going to school'],
        correctAnswer: 1
      },
      {
        id: 'eng-4',
        question: 'What is the meaning of "Beautiful"?',
        options: ['زشت', 'زیبا', 'بزرگ', 'کوچک'],
        correctAnswer: 1
      },
      {
        id: 'eng-5',
        question: 'Which word rhymes with "Cat"?',
        options: ['Dog', 'Hat', 'Bird', 'Fish'],
        correctAnswer: 1
      },
      {
        id: 'eng-6',
        question: 'What is the past simple of the verb "Go"?',
        options: ['Goed', 'Gone', 'Went', 'Going'],
        correctAnswer: 2
      },
      {
        id: 'eng-7',
        question: 'Which word is an adjective?',
        options: ['Run', 'Quick', 'Book', 'Water'],
        correctAnswer: 1
      },
      {
        id: 'eng-8',
        question: 'What does "Good morning" mean?',
        options: ['شب بخیر', 'صبح بخیر', 'ظهر بخیر', 'عصر بخیر'],
        correctAnswer: 1
      },
      {
        id: 'eng-9',
        question: 'Which preposition is used in the sentence "I live ___ Tehran"?',
        options: ['at', 'in', 'on', 'by'],
        correctAnswer: 1
      },
      {
        id: 'eng-10',
        question: 'What is the plural of "Mouse"?',
        options: ['Mouses', 'Mice', 'Mouse', 'Mousees'],
        correctAnswer: 1
      },
      {
        id: 'eng-11',
        question: 'What is the opposite of "Hot"?',
        options: ['Cold', 'Warm', 'Cool', 'Icy'],
        correctAnswer: 0
        },
        {
        id: 'eng-12',
        question: 'What is the plural of "Wolf"?',
        options: ['Wolfs', 'Wolfes', 'Wolves', 'Wolf'],
        correctAnswer: 2
        },
        {
        id: 'eng-13',
        question: 'Which of these is a synonym for "Start"?',
        options: ['End', 'Stop', 'Begin', 'Conclude'],
        correctAnswer: 2
        },
        {
        id: 'eng-14',
        question: 'What is the third form of the verb "eat"?',
        options: ['eat', 'ate', 'eaten', 'eating'],
        correctAnswer: 2
        },
        {
        id: 'eng-15',
        question: 'Which sentence is correct?',
        options: ["She don't like coffee", "She doesn't like coffee", "She no like coffee", "She not like coffee"],
        correctAnswer: 1
        },
        {
        id: 'eng-16',
        question: 'What is the meaning of "Fast"?',
        options: ['Slow', 'Quick', 'Quiet', 'Loud'],
        correctAnswer: 1
        },
        {
        id: 'eng-17',
        question: 'What is the past tense of "drink"?',
        options: ['drank', 'drunk', 'drinked', 'drinking'],
        correctAnswer: 0
        },
        {
        id: 'eng-18',
        question: 'What is the opposite of "cheap"?',
        options: ['inexpensive', 'expensive', 'free', 'costly'],
        correctAnswer: 1
        },
        {
        id: 'eng-19',
        question: 'Which of the following is a pronoun?',
        options: ['run', 'happy', 'she', 'beautiful'],
        correctAnswer: 2
        },
        {
        id: 'eng-20',
        question: 'What is the meaning of "under"?',
        options: ['over', 'in', 'below', 'next to'],
        correctAnswer: 2
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
      },
      {
        id: 'his-11',
        question: 'اولین رئیس جمهور ایالات متحده چه کسی بود؟',
        options: ['آبراهام لینکلن', 'توماس جفرسون', 'جورج واشنگتن', 'جان آدامز'],
        correctAnswer: 2
        },
        {
        id: 'his-12',
        question: 'کشتی تایتانیک در چه سالی غرق شد؟',
        options: ['1905', '1912', '1918', '1923'],
        correctAnswer: 1
        },
        {
        id: 'his-13',
        question: 'کدام تمدن باستانی اهرام را ساخته است؟',
        options: ['یونانی', 'رومی', 'مصری', 'بین النهرین'],
        correctAnswer: 2
        },
        {
        id: 'his-14',
        question: 'رنسانس در کدام دوره تاریخی آغاز شد؟',
        options: ['قرون وسطی', 'دوران باستان', 'دوران مدرن', 'دوران معاصر'],
        correctAnswer: 0
        },
        {
        id: 'his-15',
        question: 'چه کسی اولین بار به دور دنیا قایقرانی کرد؟',
        options: ['کریستف کلمب', 'فردیناند ماژلان', 'جیمز کوک', 'واسکو دا گاما'],
        correctAnswer: 1
        },
        {
        id: 'his-16',
        question: 'امپراتوری روم در کدام سال سقوط کرد؟',
        options: ['476 میلادی', '1453 میلادی', '330 میلادی', '1066 میلادی'],
        correctAnswer: 0
        },
        {
        id: 'his-17',
        question: 'انقلاب فرانسه در کدام سال آغاز شد؟',
        options: ['1789', '1776', '1804', '1815'],
        correctAnswer: 0
        },
        {
        id: 'his-18',
        question: 'چه کسی دیوار بزرگ چین را ساخت؟',
        options: ['چنگیز خان', 'کنفوسیوس', 'چین شی هوانگ', 'کوبلای خان'],
        correctAnswer: 2
        },
        {
        id: 'his-19',
        question: 'کدام جنگ بین شمال و جنوب ایالات متحده بود؟',
        options: ['جنگ انقلابی', 'جنگ داخلی', 'جنگ جهانی اول', 'جنگ ویتنام'],
        correctAnswer: 1
        },
        {
        id: 'his-20',
        question: 'مارتین لوتر کینگ جونیور برای چه چیزی شهرت داشت؟',
        options: ['اختراع لامپ', 'نوشتن «رویایی دارم»', 'رهبری جنبش حقوق مدنی', 'کشف پنی سیلین'],
        correctAnswer: 2
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
      },
      {
        id: 'sci-11',
        question: 'نیروگاه سلول چیست؟',
        options: ['هسته', 'میتوکندری', 'ریبوزوم', 'سیتوپلاسم'],
        correctAnswer: 1
        },
        {
        id: 'sci-12',
        question: 'بزرگترین سیاره منظومه شمسی ما کدام است؟',
        options: ['زمین', 'مریخ', 'مشتری', 'زحل'],
        correctAnswer: 2
        },
        {
        id: 'sci-13',
        question: 'چه نیرویی اجسام را به سمت مرکز زمین می کشد؟',
        options: ['اصطکاک', 'مغناطیس', 'گرانش', 'کشش'],
        correctAnswer: 2
        },
        {
        id: 'sci-14',
        question: 'دمای جوش آب در سطح دریا چقدر است؟',
        options: ['90 درجه سانتیگراد', '100 درجه سانتیگراد', '110 درجه سانتیگراد', '120 درجه سانتیگراد'],
        correctAnswer: 1
        },
        {
        id: 'sci-15',
        question: 'جدول تناوبی عناصر را چه کسی ساخته است؟',
        options: ['ماری کوری', 'دمیتری مندلیف', 'آلبرت انیشتین', 'اسحاق نیوتن'],
        correctAnswer: 1
        },
        {
        id: 'sci-16',
        question: 'چه چیزی باعث می شود گیاهان سبز شوند؟',
        options: ['کلروفیل', 'کلروپلاست', 'سیتوپلاسم', 'فوتون'],
        correctAnswer: 0
        },
        {
        id: 'sci-17',
        question: 'چند استخوان در بدن انسان بالغ وجود دارد؟',
        options: ['206', '212', '220', '300'],
        correctAnswer: 0
        },
        {
        id: 'sci-18',
        question: 'کدام یک از اینها یک منبع انرژی تجدیدپذیر نیست؟',
        options: ['خورشیدی', 'باد', 'زغال سنگ', 'آب'],
        correctAnswer: 2
        },
        {
        id: 'sci-19',
        question: 'واحد اصلی حیات چیست؟',
        options: ['اتم', 'مولکول', 'سلول', 'ارگان'],
        correctAnswer: 2
        },
        {
        id: 'sci-20',
        question: 'کدام سیاره به دلیل حلقه هایش شناخته شده است؟',
        options: ['مریخ', 'مشتری', 'زحل', 'اورانوس'],
        correctAnswer: 2
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
      },
      {
        id: 'lit-11',
        question: 'نویسنده «1984» کیست؟',
        options: ['جورج اورول', 'آلدوس هاکسلی', 'ری بردبری', 'اف. اسکات فیتزجرالد'],
        correctAnswer: 0
        },
        {
        id: 'lit-12',
        question: 'کدام یک از اینها اثر معروفی از مولانا است؟',
        options: ['دیوان شمس', 'گلستان', 'شاهنامه', 'رباعیات'],
        correctAnswer: 0
        },
        {
        id: 'lit-13',
        question: 'موضوع اصلی «گتسبی بزرگ» چیست؟',
        options: ['رویای آمریکایی', 'جنگ و صلح', 'عشق و از دست دادن', 'طبیعت و بشریت'],
        correctAnswer: 0
        },
        {
        id: 'lit-14',
        question: 'چه کسی رمان «غرور و تعصب» را نوشته است؟',
        options: ['خواهران برونته', 'جین آستن', 'جورج الیوت', 'ویرجینیا وولف'],
        correctAnswer: 1
        },
        {
        id: 'lit-15',
        question: 'شخصیت اصلی کتاب «کشتن مرغ مقلد» کیست؟',
        options: ['آتیکوس فینچ', 'اسکات فینچ', 'بو رادلی', 'تام رابینسون'],
        correctAnswer: 1
        },
        {
        id: 'lit-16',
        question: 'در «هملت»، هملت شاهزاده کدام کشور است؟',
        options: ['سوئد', 'دانمارک', 'نروژ', 'انگلیس'],
        correctAnswer: 1
        },
        {
        id: 'lit-17',
        question: 'چه کسی «جنگ و صلح» را نوشت؟',
        options: ['فئودور داستایوفسکی', 'لئو تولستوی', 'آنتوان چخوف', 'ایوان تورگنیف'],
        correctAnswer: 1
        },
        {
        id: 'lit-18',
        question: 'کدام یک از موارد زیر یک ژانر ادبی نیست؟',
        options: ['عاشقانه', 'علمی تخیلی', 'نقاشی', 'رازآلود'],
        correctAnswer: 2
        },
        {
        id: 'lit-19',
        question: 'چه کسی «پیرمرد و دریا» را نوشت؟',
        options: ['ارنست همینگوی', 'ویلیام فاکنر', 'جان اشتاین بک', 'اف. اسکات فیتزجرالد'],
        correctAnswer: 0
        },
        {
        id: 'lit-20',
        question: 'کدام کتاب با این جمله آغاز می شود: «خوشبختی خانواده ها همه مثل هم است، اما هر خانواده بدبختی به روش خاص خود بدبخت است»؟',
        options: ['جنایت و مکافات', 'موبی دیک', 'آنا کارنینا', 'برادران کارامازوف'],
        correctAnswer: 2
        }
    ]
  }
];