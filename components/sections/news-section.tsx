"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";

export function NewsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const news = [
    {
      badge: { text: "إعلان هام", className: "bg-[#A7946C] text-white" },
      title: "إطلاق النظام الإلكتروني الجديد للضرائب",
      date: "15 يناير 2024",
      description:
        "تعلن وزارة المالية عن إطلاق النظام الإلكتروني المحدث لتقديم الإقرارات الضريبية وتسهيل الإجراءات على المكلفين...",
      gradient: "from-[#054139] to-[#065a4d]",
    },
    {
      badge: { text: "تحديث", className: "bg-white text-[#A7946C]" },
      title: "نشر الموازنة العامة للعام 2024",
      date: "10 يناير 2024",
      description:
        "تم نشر تفاصيل الموازنة العامة للدولة للعام 2024 مع التركيز على مشاريع التنمية والاستثمار في البنية التحتية...",
      gradient: "from-[#A7946C] to-[#96845a]",
    },
    {
      badge: { text: "خبر", className: "bg-white text-emerald-600" },
      title: "توقيع اتفاقية تعاون مع البنك الدولي",
      date: "5 يناير 2024",
      description:
        "وقعت وزارة المالية اتفاقية تعاون مع البنك الدولي لدعم مشاريع إعادة الإعمار وتطوير النظام المالي...",
      gradient: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#054139] text-white px-6 py-2 text-lg mb-6">
              أخبارنا
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#054139] mb-4 font-amiri">
              الأخبار والتحديثات
            </h2>
            <p className="text-xl text-gray-600 font-amiri">
              آخر المستجدات والإعلانات المهمة من الوزارة
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="border-[#A7946C] text-[#A7946C] hover:bg-[#A7946C] hover:text-white hidden md:flex bg-transparent"
            >
              عرض جميع الأخبار
              <ChevronRight className="mr-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {news.map((newsItem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div
                  className={`bg-gradient-to-r ${newsItem.gradient} p-6 text-white`}
                >
                  <Badge className={`${newsItem.badge.className} mb-4`}>
                    {newsItem.badge.text}
                  </Badge>
                  <CardTitle className="text-xl mb-2 group-hover:text-opacity-80 transition-colors font-amiri">
                    {newsItem.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2 space-x-reverse text-white/80">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{newsItem.date}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {newsItem.description}
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="link"
                      className="p-0 text-[#A7946C] hover:text-[#054139]"
                    >
                      اقرأ المزيد
                      <ChevronRight className="mr-1 h-4 w-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
