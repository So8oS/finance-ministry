"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Home,
  Building2,
  FileText,
  ChevronRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChatBot from "@/components/chat-box";
import Footer from "@/components/footer";
import { Ticker } from "@/components/Ticker";

export default function LandingPage() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-6 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="outline"
                className="text-emerald-600 border-white hover:bg-white transition-all duration-300 hover:scale-105"
              >
                تواصل معنا
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img src="/logo.png" alt="logo" className="w-20" />
              {/* <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold"
                dir="rtl"
              >
                دليلي
              </motion.h1> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 mb-16 text-center"
            dir="rtl"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              دليلك الشامل للإجراءات القانونية والحكومية
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl mb-6"
            >
              نحن هنا لمساعدتك في فهم القوانين والإجراءات الحكومية بسهولة
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-pulse-glow cursor-pointer"
                onClick={() => setShowChat(true)}
              >
                ابدأ المحادثة مع المساعد <ChevronRight className="mr-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>
      <Ticker />

      {/* Archive Section */}
      <section className="py-16 bg-gray-50" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            الأرشيف
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {archiveCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full text-center  hover:shadow-xl transition-all duration-300 border-t-4 border-t-emerald-500 group">
                  <CardContent className="pt-6 flex flex-col justify-center items-center  ">
                    {/* <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300"
                    >
                      {category.icon}
                    </motion.div> */}
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            خدماتنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-emerald-500 group">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            لماذا دليلي؟
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-500"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-xl font-bold mb-3 text-emerald-600"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="text-gray-600"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section
        className="py-16 bg-gradient-to-r from-teal-500 to-emerald-600 text-white relative overflow-hidden"
        dir="rtl"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                استشر مساعدنا الذكي
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl mb-6"
              >
                احصل على إجابات فورية لاستفساراتك القانونية والإجرائية من
                مساعدنا الذكي المدعوم بالذكاء الاصطناعي
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setShowChat(true)}
                >
                  ابدأ المحادثة الآن
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-1/2"
            >
              <div className="bg-white rounded-lg shadow-lg text-gray-800 max-w-md mx-auto">
                <div className="flex items-center border-b pb-4 mb-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">المساعد القانوني</h3>
                    <p className="text-sm text-gray-500">متصل الآن</p>
                  </div>
                </div>

                <div className="space-y-4 mb-4 px-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="bg-gray-100 rounded-lg p-3 max-w-[80%] animate-slide-in-left"
                  >
                    <p>مرحباً! كيف يمكنني مساعدتك اليوم؟</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                    className="bg-emerald-100 rounded-lg p-3 max-w-[80%] mr-auto animate-slide-in-right"
                  >
                    <p>أريد معرفة الإجراءات اللازمة لتأسيس شركة</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="bg-gray-100 rounded-lg p-3 max-w-[80%] animate-slide-in-left"
                  >
                    <p>
                      بالتأكيد! لتأسيس شركة ستحتاج إلى اتباع الخطوات التالية...
                    </p>
                  </motion.div>
                </div>

                <div className="flex p-4 pt-0">
                  <div className="flex-1 bg-gray-100 rounded-r-lg px-3 py-2 text-gray-500 pointer-events-none">
                    اكتب سؤالك هنا...
                  </div>
                  <div className="bg-emerald-600 text-white px-4 py-2 rounded-l-lg flex items-center justify-center pointer-events-none">
                    <Send className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {showChat && <ChatBot onClose={() => setShowChat(false)} />}
      </section>

      {/* Footer */}
      <Footer />

      {/* Chatbot Modal */}
    </div>
  );
}

const services = [
  {
    title: "شراء العقارات",
    description: "دليل شامل لإجراءات شراء المنازل والعقارات والتمويل العقاري",
    icon: <Home className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "تأسيس الشركات",
    description: "خطوات تأسيس الشركات بمختلف أنواعها والمتطلبات القانونية",
    icon: <Building2 className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "عقود الإيجار",
    description: "معلومات عن قوانين الإيجار وحقوق المستأجرين والمؤجرين",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "الضرائب والزكاة",
    description: "دليل الالتزامات الضريبية للأفراد والشركات وكيفية احتسابها",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "التأشيرات والإقامة",
    description: "إجراءات استخراج التأشيرات وتجديد الإقامة للوافدين",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "الخدمات القانونية",
    description: "استشارات قانونية في مختلف المجالات وصياغة العقود",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
  },
];

const features = [
  {
    title: "معلومات موثوقة",
    description: "نقدم معلومات قانونية دقيقة ومحدثة من مصادر رسمية موثوقة",
  },
  {
    title: "مساعدة فورية",
    description:
      "احصل على إجابات لاستفساراتك على مدار الساعة من خلال المساعد الذكي",
  },
  {
    title: "سهولة الاستخدام",
    description:
      "واجهة سهلة الاستخدام تمكنك من الوصول للمعلومات التي تحتاجها بسرعة",
  },
];

const archiveCategories = [
  {
    title: "القانون العام",
    description: "مجموعة من القوانين التي تنظم العلاقات بين الدولة والأفراد",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "القانون الخاص",
    description: "مجموعة من القوانين التي تنظم العلاقات بين الأفراد",
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
  },
];
