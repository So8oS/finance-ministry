"use client"

import { motion } from "framer-motion"

export function TopBar() {
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
            className="flex items-center space-x-4 space-x-reverse"
          >
            <span>الأحد، 25 يناير 2025</span>
            <span className="border-r border-[#A7946C] pr-4">دمشق، سوريا</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center space-x-2 space-x-reverse"
          >
            <span>EN</span>
            <span className="text-[#A7946C]">|</span>
            <span className="text-[#A7946C]">عربي</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
