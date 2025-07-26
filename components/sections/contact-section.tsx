"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  Building2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
} from "lucide-react";

export function ContactSection() {
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      bgColor: "bg-[#054139]",
      title: "الهاتف",
      value: "+963 11 123 4567",
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      bgColor: "bg-[#A7946C]",
      title: "البريد الإلكتروني",
      value: "info@mof.gov.sy",
    },
    {
      icon: <Building2 className="h-6 w-6 text-white" />,
      bgColor: "bg-emerald-600",
      title: "العنوان",
      value: "دمشق، الجمهورية العربية السورية",
    },
  ];

  return (
    <section
      id="contact"
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
            <Badge className="bg-[#A7946C] text-white px-6 py-2 text-lg mb-6">
              تواصل معنا
            </Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#054139] mb-6 "
          >
            نحن في خدمتكم
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold "
          >
            للاستفسارات والمساعدة، نحن هنا لخدمتكم على مدار الساعة
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="p-8 shadow-xl border-r-4 border-[#054139]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#054139] mb-6 ">
                  معلومات الاتصال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 space-x-reverse  "
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`${contact.bgColor} p-3 rounded-full`}
                    >
                      {contact.icon}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-[#054139]">
                        {contact.title}
                      </p>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 bg-gradient-to-br from-[#054139] to-[#065a4d] text-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#A7946C] mb-6 ">
                    تابعونا على
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map(
                      (Icon, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="border-[#A7946C] text-[#A7946C] hover:bg-[#A7946C] hover:text-white bg-transparent"
                          >
                            <Icon className="h-5 w-5" />
                          </Button>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#054139] mb-6 ">
                  أرسل رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل
                      </label>
                      <Input className="border-gray-300 focus:border-[#054139]" />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني
                      </label>
                      <Input
                        type="email"
                        className="border-gray-300 focus:border-[#054139]"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الموضوع
                    </label>
                    <Input className="border-gray-300 focus:border-[#054139]" />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#054139]"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-[#054139] hover:bg-[#065a4d] text-white py-3 text-lg">
                      إرسال الرسالة
                      <ChevronRight className="mr-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
