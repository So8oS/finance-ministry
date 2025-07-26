"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send } from "lucide-react";
import ChatBot2 from "@/components/chat-bot2";

export function AIAssistantSection() {
  const [showChat, setShowChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-r from-[#054139] to-[#065a4d] text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-24 sm:w-32 h-24 sm:h-32 border-4 border-[#A7946C] rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-16 sm:w-24 h-16 sm:h-24 border-4 border-[#A7946C] rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <Badge className="bg-[#A7946C] text-white px-6 py-2 text-lg mb-4">
                الذكاء الاصطناعي
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold mb-4 font-amiri"
            >
              استشر مساعدنا المالي الذكي
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl mb-6 leading-relaxed"
            >
              احصل على إجابات فورية لاستفساراتك المالية والضريبية من مساعدنا
              الذكي المدعوم بالذكاء الاصطناعي
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-[#A7946C] text-white hover:bg-[#96845a] transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-xl"
                  onClick={() => setShowChat(true)}
                >
                  ابدأ المحادثة الآن
                  <MessageSquare className="mr-3 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-2xl text-gray-800 max-w-md mx-auto overflow-hidden">
              <div className="flex items-center border-b pb-4 mb-4 p-6 bg-gradient-to-r from-[#054139] to-[#065a4d] text-white">
                <div className="w-12 h-12 rounded-full bg-[#A7946C] flex items-center justify-center ml-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-amiri">
                    المساعد المالي
                  </h3>
                  <p className="text-sm text-white/80">متصل الآن</p>
                </div>
              </div>

              <div className="space-y-4 mb-4 px-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-[85%]"
                >
                  <p className="text-sm">
                    مرحباً! كيف يمكنني مساعدتك في الشؤون المالية اليوم؟
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  className="bg-[#054139]/10 rounded-lg p-3 max-w-[85%] mr-auto"
                >
                  <p className="text-sm">
                    أريد معرفة كيفية تقديم الإقرار الضريبي
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-[85%]"
                >
                  <p className="text-sm">
                    بالتأكيد! لتقديم الإقرار الضريبي ستحتاج إلى اتباع الخطوات
                    التالية...
                  </p>
                </motion.div>
              </div>

              <div className="flex p-6 pt-0">
                <div className="flex-1 bg-gray-100 rounded-r-lg px-4 py-3 text-gray-500 text-sm pointer-events-none">
                  اكتب سؤالك هنا...
                </div>
                <div className="bg-[#054139] text-white px-4 py-3 rounded-l-lg flex items-center justify-center pointer-events-none">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {showChat && <ChatBot2 onClose={() => setShowChat(false)} />}
    </section>
  );
}
