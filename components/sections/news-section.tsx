"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Globe,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import Image from "next/image";

export function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const news = [
    {
      id: 1,
      badge: {
        text: "إعلان هام",
        className: "bg-red-500 text-white",
        icon: <TrendingUp className="w-3 h-3" />,
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
        icon: <Globe className="w-3 h-3" />,
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
        icon: <Users className="w-3 h-3" />,
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
        icon: <Users className="w-3 h-3" />,
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
        icon: <TrendingUp className="w-3 h-3" />,
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentNews = news[currentSlide];

  return (
    <section
      id="news"
      className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <Badge className="bg-[#054139] text-white px-4 py-2 text-sm mb-4">
            أخبار الوزارة
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#054139] mb-4 font-amiri">
            أبرز الأخبار والأنشطة
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            آخر المستجدات والإعلانات المهمة من وزارة المالية والتعاون الدولي
          </p>
        </motion.div>

        {/* Main News Carousel - Mobile First Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-16"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden shadow-xl border-0 bg-white mx-auto max-w-3xl">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-64 lg:h-[20rem]">
                    <Image
                      src={currentNews.image || "/placeholder.svg"}
                      alt={currentNews.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Badge on Image */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${currentNews.badge.className} flex items-center gap-1 text-xs`}
                      >
                        {currentNews.badge.icon}
                        {currentNews.badge.text}
                      </Badge>
                    </div>

                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-gray-800 text-xs"
                      >
                        {currentNews.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 sm:p-8">
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#054139] leading-tight font-amiri">
                        {currentNews.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{currentNews.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{currentNews.readTime}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {currentNews.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                          className="bg-[#054139] hover:bg-[#065a4d] text-white flex-1 sm:flex-none py-2"
                          size="lg"
                        >
                          اقرأ المزيد
                          <ChevronRight className="mr-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-[#A7946C] text-[#A7946C] hover:bg-[#A7946C] hover:text-white bg-transparent"
                        >
                          <ExternalLink className="ml-2 h-4 w-4" />
                          مشاركة
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg h-6 lg:h-10 w-6 lg:w-10"
              >
                <ChevronLeft className="h-2 w-2" />
              </Button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg h-6 lg:h-10 w-6 lg:w-10"
              >
                <ChevronRight className="h-2 w-2" />
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-[#054139]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* News Grid - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {news.slice(1, 4).map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={!isMobile ? { y: -5 } : {}}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
              onClick={() => goToSlide(index + 1)}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full mx-auto max-w-sm">
                <div className="relative h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge
                    className={`absolute top-3 right-3 ${item.badge.className} text-xs`}
                  >
                    {item.badge.text}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm mb-2 line-clamp-2 text-[#054139] leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-[#054139] text-[#054139] hover:bg-[#054139] hover:text-white bg-transparent"
          >
            عرض جميع الأخبار
            <ChevronRight className="mr-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
