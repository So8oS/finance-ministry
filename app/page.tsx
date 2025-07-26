"use client";

import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutSection } from "@/components/sections/about-section";
import { CoreValuesSection } from "@/components/sections/core-values-section";
import { StrategicObjectivesSection } from "@/components/sections/strategic-objectives-section";
import { InitiativesSection } from "@/components/sections/initiatives-section";
import { ServicesSection } from "@/components/sections/services-section";
import { NewsSection } from "@/components/sections/news-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useState } from "react";
import ChatBot2 from "@/components/chat-box2";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send } from "lucide-react";

export default function HomePage() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-cairo overflow-x-hidden"
      dir="rtl"
    >
      {/* Mosaic Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="mosaic-pattern w-full h-full"></div>
      </div>

      <TopBar />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoreValuesSection />
      <StrategicObjectivesSection />
      <InitiativesSection />
      <ServicesSection />
      <NewsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
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
        {showChat && <ChatBot2 onClose={() => setShowChat(false)} />}
      </section>
    </div>
  );
}
