"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import React from "react";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
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

        {pathname === "/" && (
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
              {/* <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-pulse-glow cursor-pointer"
                onClick={() => setShowChat(true)}
              >
                ابدأ المحادثة مع المساعد <ChevronRight className="mr-2" />
              </Button> */}
            </motion.div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
