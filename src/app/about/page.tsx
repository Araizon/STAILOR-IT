"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { AIChatWidget } from "@/components/chat/AIChatWidget";
import {
  ShieldCheck,
  Globe,
  Sparkles,
  Award,
  Users,
  Target,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground flex flex-col justify-between">
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Company Profile"
            badgeVariant="cyan"
            title="Engineering the Future of"
            gradientWord="Digital Enterprise Growth"
            description="STAILOR IT was founded to bridge the gap between heavy software engineering and aggressive B2B revenue performance."
            align="center"
            className="mb-16"
          />

          {/* Story & Philosophy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
                We don&apos;t just write code. We architect scalable{" "}
                <span className="text-gradient-accent">commercial advantages.</span>
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                Most agencies either understand marketing or software development — rarely both. STAILOR IT combines senior full-stack software architects with conversion rate optimization specialists to build digital systems that outrank competitors and generate millions in pipeline revenue.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Serving high-growth clients across New York, London, San Francisco, and global tech hubs, our sprint delivery model is strictly milestone-driven with 100% IP ownership transferred upon completion.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  variant="cyan"
                  size="lg"
                  icon={ArrowUpRight}
                  onClick={() => setBookingModalOpen(true)}
                >
                  Schedule Executive Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setAuditModalOpen(true)}
                >
                  Request Digital Audit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-[#080d1b] border border-white/10 space-y-2">
                <Globe className="w-6 h-6 text-accent-cyan" />
                <h4 className="text-2xl font-bold text-white">US & UK</h4>
                <p className="text-xs text-muted-foreground">
                  Primary client markets and timezone compliance.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#080d1b] border border-white/10 space-y-2">
                <Code2 className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-bold text-white">Next.js 15</h4>
                <p className="text-xs text-muted-foreground">
                  Modern type-safe stack with zero legacy debt.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#080d1b] border border-white/10 space-y-2">
                <Sparkles className="w-6 h-6 text-violet-400" />
                <h4 className="text-2xl font-bold text-white">AI-First</h4>
                <p className="text-xs text-muted-foreground">
                  Autonomous workflow integrations as standard.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#080d1b] border border-white/10 space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h4 className="text-2xl font-bold text-white">SOC-2</h4>
                <p className="text-xs text-muted-foreground">
                  Enterprise security & GDPR compliant standards.
                </p>
              </div>
            </div>
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
