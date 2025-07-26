"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Building2 } from "lucide-react";

export function AboutSection() {
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

  const responsibilities = [
    "إعداد الموازنة العامة للدولة والإشراف على تنفيذها",
    "تحصيل الإيرادات العامة وتنظيم الإنفاق العام",
    "إدارة الدين العام بالتنسيق مع مصرف سوريا المركزي",
    "تحقيق الاستقرار الاقتصادي وتمويل الخدمات العامة",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="bg-[#054139] text-white px-6 py-2 text-lg mb-6">
              نظرة عامة
            </Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#054139] mb-6 "
          >
            دور وزارة المالية
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-semibold "
          >
            الجهة الحكومية المسؤولة عن إدارة المال العام ووضع السياسات المالية
            في الجمهورية العربية السورية
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border-r-4 border-[#A7946C]">
              <h3 className="text-2xl font-bold text-[#054139] mb-4 ">
                المسؤوليات الأساسية
              </h3>
              <ul className="space-y-4 text-gray-700">
                {responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-[#A7946C] mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 bg-gradient-to-br from-[#054139] to-[#065a4d] text-white shadow-2xl">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Target className="h-20 w-20 text-[#A7946C] mx-auto mb-6" />
                  </motion.div>
                  <CardTitle className="text-3xl text-[#A7946C] mb-4 ">
                    الرؤية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-center">
                    بناء قاعدة مالية متينة تُمكِّن سوريا من تحقيق التعافي
                    الاقتصادي والتنمية المستدامة، لتكون دولة مزدهرة ومستقرة
                    اقتصادياً بحلول عام 2035
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 bg-gradient-to-br from-[#A7946C] to-[#96845a] text-white shadow-2xl">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Building2 className="h-20 w-20 text-white mx-auto mb-6" />
                  </motion.div>
                  <CardTitle className="text-3xl text-white mb-4 ">
                    الرسالة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-center">
                    إعداد وتنفيذ السياسات المالية الكفيلة بتحقيق الاستقرار
                    الاقتصادي، دعم النمو الشامل، وضمان الاستدامة المالية من خلال
                    إدارة فعالة للموارد العامة
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
