"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { AIChatWidget } from "@/components/chat/AIChatWidget";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

export default function InsightsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const articles = [
    {
      title: "How to Build Autonomous AI Workflows into HubSpot & Salesforce",
      category: "AI & Automation",
      readTime: "6 min read",
      date: "August 2026",
      desc: "Learn how we eliminated 25+ hours of manual lead qualification and invoicing using OpenAI function calling and serverless webhooks.",
    },
    {
      title: "Enterprise SEO in 2026: Why Semantic Clustering Outranks Keyword Spamming",
      category: "Search Engine Optimization",
      readTime: "8 min read",
      date: "August 2026",
      desc: "A breakdown of Google's latest search ranking architecture and how US & UK B2B companies are securing #1 rankings with zero spam.",
    },
    {
      title: "Next.js 15 vs Traditional Monoliths: A CTO's Performance & Security Guide",
      category: "Web Engineering",
      readTime: "5 min read",
      date: "July 2026",
      desc: "Why modern venture-backed startups and mid-market enterprises are migrating to Next.js App Router for sub-second Core Web Vitals.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground flex flex-col justify-between">
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="B2B Thought Leadership"
            badgeVariant="cyan"
            title="Strategic Insights on"
            gradientWord="AI & Digital Growth"
            description="Deep-dive architectural essays, performance benchmarks, and growth playbooks written by STAILOR IT senior engineers."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#080d1b] border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="text-accent-cyan font-semibold bg-accent-cyan/10 px-2.5 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-white group-hover:text-accent-cyan">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <AIChatWidget
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />
      <CalendlyModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <ConsultationForm isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </div>
  );
}
