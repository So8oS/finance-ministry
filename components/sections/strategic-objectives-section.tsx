"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Shield, Globe, ChevronRight } from "lucide-react";

export function StrategicObjectivesSection() {
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

  const cardHoverVariants = {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
    },
  };

  const strategicObjectives = [
    {
      title: "تحقيق الاستقرار والاستدامة المالية",
      description:
        "عبر السيطرة على العجز والدين العام، وتحسين كفاءة إدارة الموارد العامة",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "رفع كفاءة تخصيص الموارد",
      description:
        "من خلال الموازنة القائمة على الأولويات، وربط الإنفاق بمشروعات التنمية الحيوية",
      icon: <Target className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "تعزيز الشفافية والمساءلة المالية",
      description:
        "عبر تطوير التقارير المالية، ونشر الموازنة بشكل دوري، وتفعيل الرقابة المالية المستقلة",
      icon: <Shield className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "تحديث الأنظمة والخدمات المالية",
      description:
        "عبر رقمنة عمليات الضرائب، الجمارك، والمدفوعات الحكومية، وبناء نظام مالي حديث ومتكامل",
      icon: <Globe className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#054139] to-[#065a4d] text-white relative overflow-hidden"
      id="strategic-objectives"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23A7946C' fillOpacity='0.3'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <Badge className="bg-[#A7946C] text-white px-6 py-2 text-lg mb-6">
              استراتيجيتنا
            </Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            transition={itemTransition}
            className="text-4xl md:text-5xl font-bold text-white mb-6 "
          >
            الأهداف الاستراتيجية
          </motion.h2>
          <motion.p
            variants={itemVariants}
            transition={itemTransition}
            className="text-xl text-white/90 max-w-4xl mx-auto font-semibold "
          >
            خارطة طريق نحو التميز المالي والاقتصادي وتحقيق التنمية المستدامة
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {strategicObjectives.map((objective, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHoverVariants}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${objective.color} p-8 text-white`}
                >
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/20 p-4 rounded-full group-hover:scale-110 transition-transform duration-300 mx-2"
                    >
                      {objective.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold flex-1 ">
                      {objective.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {objective.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-[#A7946C] text-[#A7946C] hover:bg-[#A7946C] hover:text-white bg-transparent"
                    >
                      تفاصيل أكثر
                      <ChevronRight className="mr-2 h-4 w-4" />
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
