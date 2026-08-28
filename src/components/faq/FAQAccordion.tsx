"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Frequently Asked Questions"
          badgeVariant="cyan"
          title="Clear Answers to"
          gradientWord="Common Inquiries"
          description="Everything you need to know about our engineering methodology, AI workflow integrations, US/UK billing, and project timelines."
          align="center"
          className="mb-14 sm:mb-16"
        />

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-[#080d1a] border-primary/40 shadow-lg shadow-primary/5"
                    : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04]"
                )}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">
                      0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground transition-transform duration-300 shrink-0",
                      isOpen && "rotate-180 text-accent-cyan bg-accent-cyan/10"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-7 text-sm text-muted-foreground leading-relaxed border-t border-white/[0.04] pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
