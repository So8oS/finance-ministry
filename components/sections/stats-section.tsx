"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, BarChart3, PieChart, Briefcase } from "lucide-react";

export function StatsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    hover: !isMobile
      ? {
          scale: 1.05,
          y: -10,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }
      : {},
  };

  const stats = [
    {
      icon: (
        <DollarSign className="h-12 sm:h-16 w-12 sm:w-16 text-[#054139] mx-auto mb-4" />
      ),
      value: "2.5 تريليون",
      label: "الموازنة العامة 2024",
      sublabel: "ليرة سورية",
      color: "border-[#054139]",
    },
    {
      icon: (
        <BarChart3 className="h-12 sm:h-16 w-12 sm:w-16 text-[#A7946C] mx-auto mb-4" />
      ),
      value: "85%",
      label: "نسبة التحول الرقمي",
      sublabel: "في الخدمات المالية",
      color: "border-[#A7946C]",
    },
    {
      icon: (
        <PieChart className="h-12 sm:h-16 w-12 sm:w-16 text-emerald-600 mx-auto mb-4" />
      ),
      value: "12",
      label: "مبادرة إصلاحية",
      sublabel: "قيد التنفيذ",
      color: "border-emerald-500",
    },
    {
      icon: (
        <Briefcase className="h-12 sm:h-16 w-12 sm:w-16 text-blue-600 mx-auto mb-4" />
      ),
      value: "50+",
      label: "خدمة إلكترونية",
      sublabel: "متاحة للمواطنين",
      color: "border-blue-500",
    },
  ];

  return (
    <section
      id="stats"
      className="py-12 sm:py-16 bg-white relative -mt-8 sm:-mt-12 z-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <Card
                className={`text-center p-4 sm:p-8 shadow-xl border-t-4 ${
                  stat.color
                } hover:shadow-2xl transition-all duration-300 ${
                  isMobile ? "hover-disabled" : ""
                }`}
              >
                <CardContent className="pt-4 sm:pt-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      type: "spring",
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    className="text-2xl sm:text-3xl font-bold text-[#054139] mb-2 font-cairo"
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    className="text-gray-600 font-medium text-sm sm:text-base"
                  >
                    {stat.label}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                    className="text-xs sm:text-sm text-gray-500 mt-2"
                  >
                    {stat.sublabel}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
