"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useNews } from "@/hooks/use-news";
import { icons, news } from "@/lib/news-data";

type NewsItem = (typeof news)[0];

interface NewsCardProps {
  news: NewsItem;
  isMobile: boolean;
  handleDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
}

interface CarouselNavigationProps {
  prev: () => void;
  next: () => void;
}

interface CarouselPaginationProps {
  items: typeof news;
  current: number;
  goTo: (index: number) => void;
}

const NewsCard = ({ news, isMobile, handleDragEnd }: NewsCardProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={news.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      drag={isMobile ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <Card className="overflow-hidden shadow-xl border-0 bg-white mx-auto max-w-3xl">
        <div className="relative h-48 sm:h-64 lg:h-[30rem]">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge
              className={`${news.badge.className} flex items-center gap-1 text-xs`}
            >
              <news.badge.icon className="w-3 h-3" />
              {news.badge.text}
            </Badge>
          </div>
          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-white/90 text-gray-800 text-xs"
            >
              {news.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6 sm:p-8">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#054139] leading-tight font-amiri">
              {news.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <icons.Calendar className="h-4 w-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <icons.Clock className="h-4 w-4" />
                <span>{news.readTime}</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {news.description}
            </p>
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
);

const CarouselNavigation = ({ prev, next }: CarouselNavigationProps) => (
  <>
    <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
      <Button
        onClick={prev}
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg h-6 lg:h-10 w-6 lg:w-10"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
    <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
      <Button
        onClick={next}
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg h-6 lg:h-10 w-6 lg:w-10"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  </>
);

const CarouselPagination = ({
  items,
  current,
  goTo,
}: CarouselPaginationProps) => (
  <div className="flex justify-center mt-6 gap-2">
    {items.map((_, index) => (
      <button
        key={index}
        onClick={() => goTo(index)}
        className={`h-2 rounded-full transition-all duration-300 ${
          index === current
            ? "w-8 bg-[#054139]"
            : "w-2 bg-gray-300 hover:bg-gray-400"
        }`}
      />
    ))}
  </div>
);

const NewsCarousel = () => {
  const {
    currentSlide,
    isMobile,
    nextSlide,
    prevSlide,
    goToSlide,
    handleDragEnd,
    currentNews,
  } = useNews();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-8 sm:mb-16"
    >
      <div className="relative">
        <NewsCard
          news={currentNews}
          isMobile={isMobile}
          handleDragEnd={handleDragEnd}
        />
        {!isMobile && <CarouselNavigation prev={prevSlide} next={nextSlide} />}
        <CarouselPagination
          items={news}
          current={currentSlide}
          goTo={goToSlide}
        />
      </div>
    </motion.div>
  );
};

export function NewsSection() {
  return (
    <section
      id="news"
      className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
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
        <NewsCarousel />
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
