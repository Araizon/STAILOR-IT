"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { AIChatWidget } from "@/components/chat/AIChatWidget";
import {
  ShieldAlert,
  Search,
  Gauge,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Code2,
} from "lucide-react";

export default function AuditPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground flex flex-col justify-between">
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setFormOpen(true)}
      />

      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Forensic Enterprise Diagnostic"
            badgeVariant="cyan"
            title="Complimentary 360°"
            gradientWord="Digital & Technical Audit"
            description="Uncover hidden revenue leaks, technical debt, Core Web Vitals bottlenecks, and untapped search ranking opportunities."
            align="center"
            className="mb-16"
          />

          <div className="p-8 sm:p-14 rounded-3xl bg-[#080d1b] border border-white/10 shadow-2xl max-w-4xl mx-auto space-y-8 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <Search className="w-6 h-6 text-accent-cyan" />
                <h4 className="text-base font-bold text-white">Technical SEO & Schema</h4>
                <p className="text-xs text-muted-foreground">
                  Indexation errors, semantic topic gaps, and competitor authority benchmarks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <Gauge className="w-6 h-6 text-emerald-400" />
                <h4 className="text-base font-bold text-white">Core Web Vitals & Speed</h4>
                <p className="text-xs text-muted-foreground">
                  LCP, CLS, INP bottlenecks and server payload optimization.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <TrendingUp className="w-6 h-6 text-violet-400" />
                <h4 className="text-base font-bold text-white">CRO & Funnel Leaks</h4>
                <p className="text-xs text-muted-foreground">
                  Checkout drop-offs, mobile UI friction, and ad spend efficiency.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="cyan"
                size="xl"
                icon={ArrowUpRight}
                onClick={() => setFormOpen(true)}
                className="w-full sm:w-auto font-bold shadow-xl shadow-accent-cyan/20"
              >
                Start 4-Step Audit Request
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setFormOpen(true)}
      />

      <AIChatWidget
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setFormOpen(true)}
      />
      <CalendlyModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <ConsultationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
