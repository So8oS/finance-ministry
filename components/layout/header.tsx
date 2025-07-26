"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { href: "#home", text: "الرئيسية", active: true },
    { href: "#about", text: "عن الوزارة" },
    { href: "#services", text: "الخدمات" },
    { href: "#initiatives", text: "المبادرات" },
    { href: "#news", text: "الأخبار" },
    { href: "#contact", text: "اتصل بنا" },
  ];

  return (
    <motion.header
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${headerOpacity.get()})`,
      }}
      className="sticky top-0 z-50 border-b-4 border-[#A7946C] shadow-2xl overflow-hidden"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center space-x-3 sm:space-x-6 space-x-reverse min-w-0"
          >
            <motion.img
              whileHover={!isMobile ? { scale: 1.1, rotate: 5 } : {}}
              transition={{ duration: 0.3 }}
              src="/logo.png"
              alt="وزارة المالية"
              className="h-12 sm:h-16 w-auto drop-shadow-lg flex-shrink-0"
            />
            <div className="border-r border-gray-300 pr-3 sm:pr-6 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-2xl font-bold text-[#054139] font-amiri truncate"
              >
                وزارة المالية
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-[#A7946C] font-medium text-xs sm:text-base truncate"
              >
                الجمهورية العربية السورية
              </motion.p>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 space-x-reverse"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={!isMobile ? { scale: 1.05, color: "#A7946C" } : {}}
                className={`font-semibold transition-colors text-sm xl:text-base ${
                  item.active
                    ? "text-[#054139] border-b-2 border-[#A7946C]"
                    : "text-gray-700 hover:text-[#A7946C]"
                }`}
              >
                {item.text}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center space-x-2 sm:space-x-4 space-x-reverse "
          >
            <div className="relative hidden md:block">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                placeholder="البحث في الموقع..."
                className="pr-10 sm:pr-12 w-48 sm:w-72 text-sm border-[#A7946C] focus:border-[#054139] bg-white/80 backdrop-blur-sm"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 font-semibold border-b border-gray-100 ${
                    item.active
                      ? "text-[#054139]"
                      : "text-gray-700 hover:text-[#A7946C]"
                  }`}
                >
                  {item.text}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
