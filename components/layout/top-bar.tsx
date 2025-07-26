"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TopBar() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const arabicDate = new Intl.DateTimeFormat("ar", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        calendar: "gregory",
      }).format(now);
      setCurrentDate(arabicDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#054139] text-white py-2 relative z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span>{currentDate}</span>
            <span className="border-r border-[#A7946C] pr-4">دمشق، سوريا</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
