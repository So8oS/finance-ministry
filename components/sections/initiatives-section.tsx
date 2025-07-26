"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function InitiativesSection() {
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

  const keyInitiatives = [
    {
      title: "إصلاح إدارة المالية العامة",
      description:
        "تحديث أنظمة الموازنة والرقابة المالية، وبناء كادر مالي كفوء",
      progress: 75,
      status: "قيد التنفيذ",
    },
    {
      title: "إصلاح النظام الضريبي",
      description: "إعداد قانون ضريبي حديث، مبني على العدالة والشفافية",
      progress: 60,
      status: "قيد التطوير",
    },
    {
      title: "التحول الرقمي المالي",
      description: "إطلاق خدمات إلكترونية متكاملة للمواطنين والشركات",
      progress: 85,
      status: "مرحلة متقدمة",
    },
    {
      title: "إصلاح القطاع المصرفي العام",
      description: "تطوير أداء المصارف العامة لتصبح أكثر كفاءة",
      progress: 45,
      status: "مرحلة أولى",
    },
  ];

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="bg-[#A7946C] text-white px-6 py-2 text-lg mb-6">
              مبادراتنا
            </Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#054139] mb-6 font-amiri"
          >
            المبادرات والإصلاحات الرئيسية
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto font-amiri"
          >
            مشاريع تطويرية شاملة لتحديث النظام المالي وتحسين الخدمات
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {keyInitiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <Card className="p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#054139]">
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-bold text-[#054139] flex-1 font-amiri">
                      {initiative.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={`${
                        initiative.progress >= 80
                          ? "bg-green-100 text-green-800"
                          : initiative.progress >= 60
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {initiative.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {initiative.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        نسبة الإنجاز
                      </span>
                      <span className="text-sm font-bold text-[#054139]">
                        {initiative.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${initiative.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-[#054139] to-[#A7946C] h-3 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
