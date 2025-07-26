"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Download } from "lucide-react";

export function HeroSection() {
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
    },
  };

  const itemTransition = {
    duration: 0.6,
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-l from-[#054139] via-[#065a4d] to-[#054139] text-white py-16 sm:py-24 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-[#A7946C]/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 h-24 sm:w-48 sm:h-48 bg-[#A7946C]/5 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="mb-6 sm:mb-8"
          >
            <Badge className="bg-[#A7946C] text-white px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold mb-4 sm:mb-6">
              وزارة المالية - الجمهورية العربية السورية
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            transition={itemTransition}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight  px-2"
          >
            بناء مستقبل مالي
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="block text-[#A7946C]"
            >
              مستدام ومزدهر
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            transition={itemTransition}
            className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto px-4"
          >
            نحو تحقيق التعافي الاقتصادي والتنمية المستدامة من خلال إدارة فعالة
            للموارد العامة وتطبيق أعلى معايير الشفافية والكفاءة
          </motion.p>

          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.div
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#A7946C] hover:bg-[#96845a] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl w-full sm:w-auto"
              >
                الخدمات الإلكترونية
                <ChevronRight className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#054139] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto"
              >
                الموازنة العامة 2024
                <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
