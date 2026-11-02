"use client";

import React, { useState, useMemo } from "react";
import { FAQ_DATA, FAQItem } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ChevronDown,
  Sparkles,
  Search,
  Layers,
  Code2,
  TrendingUp,
  Database,
  Mail,
  Bot,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICE_CATEGORIES = [
  { id: "all", label: "All 7 Services", icon: Sparkles },
  { id: "UI/UX & Digital Product Design", label: "UI/UX Design", icon: Layers },
  { id: "Custom Web Design & Development", label: "Web Development", icon: Code2 },
  { id: "SEO & Local Search Optimization (GMB)", label: "SEO & GMB", icon: TrendingUp },
  { id: "B2B Lead Generation & Data Scraping", label: "Lead Gen & Data", icon: Database },
  { id: "Cold Email Outreach & Sales Pipeline Automation", label: "Cold Outreach", icon: Mail },
  { id: "AI Automation & Workflow Integration", label: "AI Automation", icon: Bot },
  { id: "Graphics Design & Corporate Branding", label: "Brand Identity", icon: Palette },
];

export const FAQAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1-1": true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group filtered items by category
  const groupedFAQs = useMemo(() => {
    const groups: { [cat: string]: FAQItem[] } = {};
    filteredFAQs.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredFAQs]);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Stailor IT • Service-Specific B2B FAQs"
          badgeVariant="cyan"
          title="Service-Specific B2B FAQs &"
          gradientWord="Buyer Intent Answers"
          description="Comprehensive objection-handling and technical clarity guide across all 7 core service offerings."
          align="center"
          className="mb-12"
        />

        {/* Filter Pills & Instant Search */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border select-none shrink-0",
                    isSelected
                      ? "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/40 shadow-md shadow-accent-cyan/10"
                      : "bg-white/[0.03] text-muted-foreground border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search objection, keyword, or technical topic..."
              className="w-full bg-[#080d1a] border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder:text-muted-foreground focus:outline-none focus:border-accent-cyan transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grouped Accordions */}
        {Object.keys(groupedFAQs).length === 0 ? (
          <div className="p-8 text-center bg-white/[0.02] border border-white/10 rounded-3xl">
            <p className="text-sm text-muted-foreground">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another keyword or select &ldquo;All 7 Services&rdquo;.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedFAQs).map(([categoryName, items]) => {
              const serviceNum = items[0]?.serviceNumber || 1;

              return (
                <div key={categoryName} className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 px-1 pt-2">
                    <span className="w-6 h-6 rounded-lg bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-bold flex items-center justify-center border border-accent-cyan/20">
                      0{serviceNum}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {categoryName}
                    </h3>
                  </div>

                  {/* Questions under this category */}
                  <div className="space-y-3">
                    {items.map((faq) => {
                      const isOpen = !!openIds[faq.id];

                      return (
                        <div
                          key={faq.id}
                          className={cn(
                            "rounded-2xl border transition-all duration-300 overflow-hidden",
                            isOpen
                              ? "bg-[#080d1a] border-accent-cyan/35 shadow-lg shadow-accent-cyan/5"
                              : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04]"
                          )}
                        >
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                            aria-expanded={isOpen}
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-xs font-mono font-bold text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded shrink-0 mt-0.5">
                                Q
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                                {faq.question}
                              </h4>
                            </div>

                            <div
                              className={cn(
                                "w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground transition-transform duration-300 shrink-0 mt-0.5",
                                isOpen && "rotate-180 text-accent-cyan bg-accent-cyan/10"
                              )}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/[0.05] pt-4 pl-12">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
