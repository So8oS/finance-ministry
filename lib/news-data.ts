import { TrendingUp, Globe, Users, Clock, Calendar } from "lucide-react";

export const news = [
  {
    id: 1,
    badge: {
      text: "إعلان هام",
      className: "bg-red-500 text-white",
      icon: TrendingUp,
    },
    title: "تشكيل تحالف شركات الطاقة الأميركية للاستثمار بسوريا",
    date: "يوليو 2025",
    readTime: "3 دقائق",
    description:
      "أعلن معالي الوزير عن زيارة الرؤساء التنفيذيين لشركات Baker Hughes، Hunt Energy، وArgent LNG إلى سورية، وتشكيلهم تحالفاً استثمارياً لتطوير قطاع الطاقة.",
    image: "/1fin.jpg",
    category: "استثمار",
  },
  {
    id: 2,
    badge: {
      text: "دعوة للاستثمار",
      className: "bg-emerald-500 text-white",
      icon: Globe,
    },
    title: "الدعوة للمستثمرين الدوليين بعد رفع العقوبات الأمريكية",
    date: "مايو 2025",
    readTime: "4 دقائق",
    description:
      "أكد الوزير في مقابلة مع Reuters أهمية رفع العقوبات الأمريكية لتمكين إعادة اندماج سورية في النظام المالي العالمي، مع دعوته المستثمرين للعمل في قطاعات متعددة.",
    image: "/2fin.jpg",
    category: "اقتصاد",
  },
  {
    id: 3,
    badge: {
      text: "تعاون دولي",
      className: "bg-blue-500 text-white",
      icon: Users,
    },
    title: "زيارة أول بعثة فنية من صندوق النقد الدولي",
    date: "يونيو 2025",
    readTime: "2 دقائق",
    description:
      "أعلن معالي الوزير أن بعثة فنية من صندوق النقد الدولي ستزور سورية لأول مرة الشهر المقبل، مشيراً إلى تعيين Rodrigo Valdés مديراً لقسم الشؤون المالية.",
    image: "/3fin.jpg",
    category: "تعاون",
  },
  {
    id: 4,
    badge: {
      text: "برنامج إنساني",
      className: "bg-purple-500 text-white",
      icon: Users,
    },
    title: "اجتماع مع المدير القطري لبرنامج الغذاء العالمي",
    date: "يونيو 2025",
    readTime: "3 دقائق",
    description:
      "اجتمع معالي الوزير مع السيدة Marianne Ward، وتم الاتفاق على تشكيل فريق عمل لإنشاء خطة خدمات وطنية مستدامة تقوم على البيانات للانتقال من المعونة الإنسانية.",
    image: "/4fin.jpg",
    category: "تنمية",
  },
  {
    id: 5,
    badge: {
      text: "منح ومساعدات",
      className: "bg-orange-500 text-white",
      icon: TrendingUp,
    },
    title: "منحة سويدية لتعزيز البنية التحتية",
    date: "مايو-يونيو 2025",
    readTime: "4 دقائق",
    description:
      "لقاء مع السفيرة السويدية jessica Svärdström، تم فيه الإعلان عن منحة قدرها 80 مليون دولار لسوريا (2025–2026)، مخصصة لتعزيز القدرات المالية العامة وبناء المدارس والمشافي.",
    image: "/5fin.jpg",
    category: "منح",
  },
];

export const icons = {
  Calendar,
  Clock,
};
