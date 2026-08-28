"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, User, ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  action?: {
    type: "booking" | "audit";
    label: string;
  };
}

interface AIChatWidgetProps {
  onOpenBooking?: () => void;
  onOpenAudit?: () => void;
}

export const AIChatWidget: React.FC<AIChatWidgetProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      sender: "ai",
      text: "Hi! I'm STAILOR AI. How can I help you identify your next growth opportunity or automate your enterprise operations?",
    },
  ]);

  const promptSuggestions = [
    "I need a custom website",
    "How can AI automate my business?",
    "I want an SEO & performance audit",
    "Book a strategy call",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // AI Contextual Response Logic
    setTimeout(() => {
      let reply = "I can certainly assist with that. Our senior engineering architects specialize in high-converting web engineering, custom AI pipelines, and enterprise growth.";
      let action: Message["action"] = undefined;

      const lower = text.toLowerCase();
      if (lower.includes("website") || lower.includes("web") || lower.includes("dev")) {
        reply = "We engineer blazing fast web platforms using Next.js 15, TypeScript, and modern headless CMS systems with a 90+ Lighthouse score guarantee. Would you like to schedule a quick 30-min scoping call?";
        action = { type: "booking", label: "Schedule Web Scoping Call" };
      } else if (lower.includes("ai") || lower.includes("automate") || lower.includes("workflow")) {
        reply = "We build custom AI agents (GPT-4o, Claude 3.5, Gemini) that connect directly to HubSpot, Salesforce, and your internal APIs to eliminate manual triage and lead qualification. Let's map your workflow!";
        action = { type: "booking", label: "Book AI Strategy Session" };
      } else if (lower.includes("seo") || lower.includes("audit") || lower.includes("traffic")) {
        reply = "We provide a complimentary 360° forensic audit of your technical SEO, Core Web Vitals, and conversion funnel with a 90-day actionable roadmap.";
        action = { type: "audit", label: "Request Free Digital Audit" };
      } else if (lower.includes("book") || lower.includes("call") || lower.includes("meet")) {
        reply = "Let's get your session scheduled with our Principal Technical Architect. Choose a slot that works best for your US or UK timezone.";
        action = { type: "booking", label: "Open Calendly Booking" };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text: reply,
          action: action,
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] bg-[#080d19]/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 animate-fade-in">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary/20 via-accent-cyan/10 to-transparent border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center text-white shadow-md shadow-primary/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>STAILOR AI Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </h4>
                <p className="text-[10px] text-muted-foreground font-mono">
                  Autonomous Growth Copilot
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "ai" && (
                  <div className="w-6 h-6 rounded-lg bg-accent-cyan/15 text-accent-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === "user"
                      ? "bg-primary text-white rounded-br-none shadow-md shadow-primary/20"
                      : "bg-white/[0.04] border border-white/10 text-slate-200 rounded-bl-none"
                  }`}
                >
                  <p>{m.text}</p>

                  {m.action && (
                    <div className="mt-2.5 pt-2 border-t border-white/10">
                      <button
                        onClick={() => {
                          if (m.action?.type === "booking") onOpenBooking?.();
                          if (m.action?.type === "audit") onOpenAudit?.();
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-cyan hover:underline"
                      >
                        <span>{m.action.label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-muted-foreground text-xs pl-8">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-ping" />
                <span>STAILOR AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          <div className="p-3 bg-white/[0.02] border-t border-white/[0.06] flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {promptSuggestions.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-muted-foreground hover:text-white hover:border-accent-cyan transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#050811] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about our services..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-accent-cyan"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-primary hover:bg-primary-hover text-white transition-colors shadow-md shadow-primary/30 shrink-0"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button with Glowing Ring */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-tr from-primary via-blue-600 to-accent-cyan text-white shadow-2xl shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center border border-white/20"
        aria-label="Open AI Growth Chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent-cyan"></span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};
