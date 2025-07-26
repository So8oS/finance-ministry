"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
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

  return (
    <footer className="bg-[#054139] text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-full h-full mosaic-pattern"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                src="/logo.png"
                alt="وزارة المالية"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-[#A7946C] font-amiri">
                  وزارة المالية
                </h3>
                <p className="text-sm text-white/80">
                  الجمهورية العربية السورية
                </p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              إدارة المال العام ووضع السياسات المالية لتحقيق التنمية المستدامة
              والاستقرار الاقتصادي
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#A7946C] font-amiri">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", text: "عن الوزارة" },
                { href: "#services", text: "الخدمات" },
                { href: "#initiatives", text: "المبادرات" },
                { href: "#news", text: "الأخبار" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#A7946C" }}
                    className="text-white/80 hover:text-[#A7946C] transition-colors"
                  >
                    {link.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#A7946C] font-amiri">
              الخدمات الإلكترونية
            </h4>
            <ul className="space-y-3">
              {[
                "النظام الضريبي",
                "الخدمات الجمركية",
                "المدفوعات الحكومية",
                "الاستعلامات",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: "#A7946C" }}
                    className="text-white/80 hover:text-[#A7946C] transition-colors"
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#A7946C] font-amiri">
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <Phone className="h-5 w-5 text-[#A7946C]" />
                <span className="text-white/80">+963 11 123 4567</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <Mail className="h-5 w-5 text-[#A7946C]" />
                <span className="text-white/80">info@mof.gov.sy</span>
              </motion.div>
              <div className="flex gap-4 mt-6">
                {[Facebook, Twitter, Linkedin].map((Icon, index) => (
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
                      <Icon className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/70">
            © 2024 وزارة المالية - الجمهورية العربية السورية. جميع الحقوق
            محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
