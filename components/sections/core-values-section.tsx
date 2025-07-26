"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, TrendingUp, Users, Globe } from "lucide-react";

export function CoreValuesSection() {
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

  const coreValues = [
    {
      title: "الشفافية",
      description:
        "الالتزام بالإفصاح المالي الواضح والمساءلة، ونشر المعلومات المالية الدورية",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "المساءلة",
      description:
        "ضمان استخدام الأموال العامة بكفاءة ووفق القوانين، وتعزيز نظام التدقيق",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "الكفاءة والتميز",
      description:
        "تحسين آليات العمل المالي والضريبي، وتقديم الخدمات بكفاءة عالية",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "الشراكة",
      description: "التعاون مع الجهات الحكومية والقطاع الخاص والمنظمات الدولية",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "الابتكار",
      description:
        "التحول الرقمي الكامل في الخدمات المالية، وتبني أفضل الممارسات التقنية",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
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
              مبادئنا
            </Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#054139] mb-6 font-amiri"
          >
            القيم والمبادئ الأساسية
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-amiri"
          >
            المبادئ التي نعتمدها كأساس لعملنا في خدمة الوطن والمواطن
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-[#054139] to-[#065a4d] p-6 text-white">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center w-16 h-16 bg-[#A7946C] rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-center text-[#A7946C] font-amiri">
                    {value.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
