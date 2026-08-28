"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { SERVICES_DATA, ServiceItem } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { AIChatWidget } from "@/components/chat/AIChatWidget";
import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Layers,
} from "lucide-react";
import Link from "next/link";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The requested capability does not exist in our catalog.
        </p>
        <Link href="/services">
          <Button variant="cyan">Back to All Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground flex flex-col justify-between">
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <Badge variant="cyan" dot>
              Enterprise Service 0{service.number}
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-xl text-accent-cyan font-medium">{service.tagline}</p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="cyan"
                size="lg"
                icon={ArrowUpRight}
                onClick={() => setBookingModalOpen(true)}
                className="font-bold shadow-xl shadow-accent-cyan/25"
              >
                Schedule {service.title} Scoping Call
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setAuditModalOpen(true)}
              >
                Request Free Audit
              </Button>
            </div>
          </div>

          {/* Service Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16">
            {/* Left: Detailed Features Breakdown (8 cols) */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#080d1a] border border-white/10 shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Scope of Technical Capabilities
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every deployment is delivered with production-grade engineering standards, zero legacy debt, and automated regression testing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        {feat}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Included in Standard & Enterprise Retainers
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Keywords / Target Scope */}
              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Target Search & Industry Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-muted-foreground bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Guarantee & Stats Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#080d1a] border border-accent-cyan/30 shadow-2xl space-y-6">
                <div className="text-xs font-mono font-bold uppercase text-accent-cyan tracking-wider">
                  Verified Outcome Standard
                </div>

                <div className="text-3xl font-black text-white font-mono">
                  {service.statsHighlight}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our sprint guarantees strict milestone escrow billing, weekly staging deployments, and direct Senior Architect communication.
                </p>

                <div className="space-y-3 text-xs text-slate-300 pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% IP & Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-cyan" />
                    <span>48-Hour Technical Kickoff</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-violet-400" />
                    <span>Dedicated Slack / Jira Channel</span>
                  </div>
                </div>

                <Button
                  variant="cyan"
                  size="md"
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full justify-center font-bold"
                >
                  Book 30-Min Discovery Call
                </Button>
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
