"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-8 z-50"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={scrollToTop}
              className="bg-[#A7946C] hover:bg-[#96845a] text-white p-3 rounded-full shadow-2xl"
              size="icon"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
