"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Globe, Users } from "lucide-react";

export function ServicesSection() {
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

  const services = [
    {
      icon: (
        <FileText className="h-16 w-16 text-[#A7946C] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "الموازنة العامة",
      description: "اطلع على الموازنة العامة والتقارير المالية",
      buttonText: "عرض التفاصيل",
    },
    {
      icon: (
        <TrendingUp className="h-16 w-16 text-[#A7946C] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "الخدمات الضريبية",
      description: "خدمات إلكترونية متكاملة للمكلفين",
      buttonText: "الدخول للنظام",
    },
    {
      icon: (
        <Globe className="h-16 w-16 text-[#A7946C] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "الخدمات الجمركية",
      description: "إجراءات التخليص والتعرفة الجمركية",
      buttonText: "المزيد",
    },
    {
      icon: (
        <Users className="h-16 w-16 text-[#A7946C] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "خدمات المواطنين",
      description: "خدمات مالية متنوعة للمواطنين",
      buttonText: "استعراض الخدمات",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-[#054139] to-[#065a4d] text-white relative overflow-hidden"
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
              خدماتنا
            </Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            transition={itemTransition}
            className="text-4xl md:text-5xl font-bold mb-6 text-white "
          >
            الخدمات الإلكترونية
          </motion.h2>
          <motion.p
            variants={itemVariants}
            transition={itemTransition}
            className="text-xl opacity-90 max-w-4xl mx-auto "
          >
            منصة متكاملة من الخدمات الرقمية لتسهيل التعامل مع الوزارة
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={itemTransition}
              whileHover={cardHoverVariants}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-lg ">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 mb-4">{service.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#A7946C] text-[#A7946C] hover:bg-[#A7946C] hover:text-white bg-transparent"
                    >
                      {service.buttonText}
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
