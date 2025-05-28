"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Send,
  Bot,
  User,
  Home,
  Building2,
  FileText,
  Scale,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { chat } from "@/lib/chat";
import { readStreamableValue } from "ai/rsc";
import MarkdownRenderer from "@/components/markdown-renderer";

const prompts = [
  {
    icon: <Home className="w-5 h-5" />,
    text: "كيف يمكنني شراء منزل؟",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    text: "ما هي خطوات تأسيس شركة جديدة؟",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    text: "أريد معرفة قوانين الإيجار",
  },
  {
    icon: <Scale className="w-5 h-5" />,
    text: "ما هي حقوقي كمستهلك؟",
  },
];

export type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatBot = ({ onClose }: { onClose: () => void }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasStartedChat, setHasStartedChat] = useState<boolean>(false);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handlePromptClick = (text: string) => {
    setInput(text);
    if (inputRef.current) {
      inputRef.current.textContent = text;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    setInput("");
    if (inputRef.current) {
      inputRef.current.textContent = "";
    }
    setIsLoading(true);

    const updatedConversationWithUserMsg = [...conversation, userMessage];
    setConversation(updatedConversationWithUserMsg);
    setHasStartedChat(true);

    try {
      const { newMessage } = await chat(updatedConversationWithUserMsg);

      let accumulatedText = "";
      let assistantMessageIndex = -1;

      for await (const delta of readStreamableValue(newMessage)) {
        if (typeof delta === "string") {
          accumulatedText += delta;
        }

        if (assistantMessageIndex === -1) {
          if (accumulatedText.trim() !== "") {
            setConversation((prevConv) => {
              const newAssistantMsg: Message = {
                role: "assistant",
                content: accumulatedText,
              };
              const conversationAfterUser = prevConv.find(
                (msg) => msg === userMessage
              )
                ? prevConv
                : updatedConversationWithUserMsg;

              const updatedConv = [
                ...conversationAfterUser.slice(0, prevConv.length),
                newAssistantMsg,
              ];
              assistantMessageIndex = updatedConv.length - 1;
              return updatedConv;
            });
          }
        } else {
          setConversation((prevConv) => {
            const newConv = [...prevConv];
            if (
              newConv[assistantMessageIndex] &&
              newConv[assistantMessageIndex].role === "assistant"
            ) {
              newConv[assistantMessageIndex] = {
                ...newConv[assistantMessageIndex],
                content: accumulatedText,
              };
            }
            return newConv;
          });
        }
      }
    } catch (error) {
      console.error("Error: ", error);
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, there was an error. Please try again",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[700px] max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center justify-between bg-emerald-600 text-white rounded-t-lg">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
              <Bot className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="pr-4">
              <h3 className="font-bold text-lg">المساعد القانوني</h3>
              <p className="text-sm text-emerald-100">متصل الآن</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-emerald-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Message Container */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {!hasStartedChat ? (
            <div className="flex-1 flex flex-col justify-center items-center p-8 space-y-8">
              <div className="text-center space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-gray-800"
                >
                  مرحباً بك! 👋
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-600"
                >
                  كيف يمكنني مساعدتك اليوم؟
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                <AnimatePresence>
                  {prompts.map((prompt, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        type: "spring",
                        bounce: 0.25,
                      }}
                      onClick={() => handlePromptClick(prompt.text)}
                      className="flex items-center gap-3 p-4 text-right border rounded-xl hover:bg-gray-50 transition-all text-sm border-emerald-200 hover:border-emerald-300"
                    >
                      <div className="text-emerald-600">{prompt.icon}</div>
                      <span className="text-gray-700">{prompt.text}</span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {conversation.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-start w-full ${
                        message.role === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "user"
                            ? "bg-emerald-100 mr-2"
                            : "bg-gray-100 ml-2"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Bot className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.role === "user"
                            ? "bg-emerald-100 text-gray-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {message.role === "assistant" ? (
                          <MarkdownRenderer content={message.content} />
                        ) : (
                          <p className="whitespace-pre-wrap">
                            {message.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading &&
                  (conversation.length === 0 ||
                    conversation[conversation.length - 1]?.role === "user") && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start max-w-[80%]">
                        <div className="rounded-lg p-3 bg-gray-100 text-gray-800">
                          <div className="flex space-x-1 rtl:space-x-reverse">
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
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
          <div className="p-4 border-t bg-gray-50 text-black">
            <div className="flex" dir="rtl">
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="rounded-l-none bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 h-10 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </Button>
              <div
                contentEditable
                role="textbox"
                onInput={(e) => {
                  setInput(e.currentTarget.textContent || "");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                data-placeholder="اكتب سؤالك هنا..."
                className="flex-1 min-h-[40px] max-h-32 overflow-y-auto px-3 py-2 focus:outline-none text-sm bg-white border border-gray-300 rounded-l-none empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)] whitespace-pre-wrap break-words"
                ref={inputRef}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              يمكنك طرح أي سؤال متعلق بالإجراءات القانونية والحكومية
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatBot;
