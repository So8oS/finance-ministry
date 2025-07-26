"use client";

import { useEffect, useRef, useState } from "react";
import {
  X,
  Send,
  Bot,
  User,
  Calculator,
  FileText,
  Building2,
  CreditCard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useChat } from "ai/react";

const prompts = [
  {
    icon: <Calculator className="w-5 h-5" />,
    text: "كيف أحسب الضريبة المستحقة علي؟",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    text: "ما هي خطوات تقديم الإقرار الضريبي؟",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    text: "أريد معرفة الرسوم الجمركية",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    text: "كيف أدفع المستحقات الحكومية؟",
  },
];

const ChatBot2 = ({ onClose }: { onClose: () => void }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [hasStartedChat, setHasStartedChat] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      maxSteps: 4,
      onError: (error) => {
        console.error("Chat error:", error);
      },
    });

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0) {
      setHasStartedChat(true);
    }
  }, [messages]);

  const handlePromptClick = (text: string) => {
    const syntheticEvent = {
      preventDefault: () => {},
      target: { value: text },
    } as any;

    handleInputChange(syntheticEvent);

    setTimeout(() => {
      handleSubmit(syntheticEvent);
    }, 100);
  };

  const lastMessage =
    messages.length > 0 ? messages[messages.length - 1] : undefined;

  const showThinking =
    isLoading &&
    (!lastMessage ||
      lastMessage.role === "user" ||
      (lastMessage.role === "assistant" && lastMessage.content.trim() === ""));

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full h-full max-h-[95vh] sm:max-h-[90vh] max-w-sm sm:max-w-4xl flex flex-col overflow-hidden"
      >
        {/* Chat Header */}
        <div className="p-3 sm:p-6 bg-gradient-to-r from-[#054139] to-[#065a4d] text-white rounded-t-xl sm:rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#A7946C] flex items-center justify-center ml-2 sm:ml-4">
              <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl font-amiri">
                المساعد المالي الذكي
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                وزارة المالية - متصل الآن
              </p>
            </div>
          </div>
          <motion.div
            whileHover={!isMobile ? { scale: 1.1 } : {}}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full h-8 w-8 sm:h-10 sm:w-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Message Container */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {!hasStartedChat ? (
            <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 space-y-4 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r bg-[#054139] flex items-center justify-center mx-auto mb-4 sm:mb-6"
                >
                  <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-[#054139] font-amiri"
                >
                  مرحباً بك في المساعد المالي الذكي! 👋
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg text-gray-600 px-2"
                >
                  كيف يمكنني مساعدتك في الشؤون المالية والضريبية اليوم؟
                </motion.p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:gap-4 w-full max-w-3xl">
                <AnimatePresence>
                  {prompts.map((prompt, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={!isMobile ? { scale: 1.02, y: -2 } : {}}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        type: "spring",
                        bounce: 0.25,
                      }}
                      onClick={() => handlePromptClick(prompt.text)}
                      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 text-right border-2 rounded-xl hover:bg-[#054139]/5 transition-all border-[#A7946C]/30 hover:border-[#A7946C] group"
                    >
                      <div className="text-[#A7946C] group-hover:text-[#054139] transition-colors flex-shrink-0">
                        {prompt.icon}
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {prompt.text}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
              <AnimatePresence>
                {messages.map((message, index) =>
                  message.role === "assistant" &&
                  message.content.trim() === "" ? null : (
                    <motion.div
                      key={message.id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-start max-w-[85%] sm:max-w-[80%] ${
                          message.role === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user"
                              ? "bg-[#A7946C] mr-2 sm:mr-3"
                              : "bg-[#054139] ml-2 sm:ml-3"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          )}
                        </div>
                        <div
                          className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg ${
                            message.role === "user"
                              ? "bg-[#A7946C] text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}

                {/* Loading State */}
                {showThinking && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start max-w-[85%] sm:max-w-[80%]">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#054139] ml-2 sm:ml-3">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-gray-100 text-gray-800 shadow-lg">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex space-x-1 rtl:space-x-reverse">
                            <div
                              className="w-2 h-2 bg-[#A7946C] rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-[#A7946C] rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-[#A7946C] rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600">
                            جاري التفكير...
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messageEndRef} />
            </div>
          )}

          {/* Chat Input */}
          <div className="p-3 sm:p-6 border-t bg-gray-50 text-black">
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 sm:gap-3"
              dir="rtl"
            >
              <motion.div
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-[#054139] hover:bg-[#065a4d] disabled:opacity-50 h-10 sm:h-12 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="اكتب سؤالك المالي هنا..."
                className="flex-1 h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 focus:outline-none text-sm bg-white border-2 border-gray-200 focus:border-[#A7946C] rounded-lg sm:rounded-xl shadow-sm transition-colors"
                disabled={isLoading}
              />
            </form>
            <p className="text-xs text-gray-500 mt-2 sm:mt-3 text-center px-2">
              يمكنك طرح أي سؤال متعلق بالضرائب، الجمارك، والخدمات المالية
              الحكومية
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatBot2;
