"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { AIChatWidget } from "@/components/chat/AIChatWidget";
import { Mail, Phone, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
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
            badge="Executive Contact"
            badgeVariant="cyan"
            title="Let&apos;s Discuss Your"
            gradientWord="Digital Roadmap"
            description="Whether you require an immediate sprint kickoff or an architectural consultation, our US & UK leadership team is ready to connect."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Channels (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#080d1b] border border-white/10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Direct Inquiries</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We maintain strict 24-hour response SLAs for all enterprise inquiries.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <Mail className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email Scoping Team</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-cyan hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <Phone className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">US / UK Direct Line</span>
                    <span>{SITE_CONFIG.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <MapPin className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operational Hubs</span>
                    <span>New York (EST), London (GMT) & Global Remote</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Mutual NDA executed prior to confidential technical disclosure.</span>
              </div>
            </div>

            {/* Right: Quick Action Scheduler Box (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#090f20] border border-accent-cyan/30 shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-semibold uppercase tracking-wider">
                  <span>Fast Track Engagement</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Schedule a 30-Minute Video Strategy Session
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Skip the back-and-forth emails. Select a time on our calendar that fits your timezone to meet with our Principal Technical Architect.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="cyan"
                  size="lg"
                  icon={ArrowUpRight}
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full justify-center font-bold"
                >
                  Book on Calendar
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setAuditModalOpen(true)}
                  className="w-full justify-center"
                >
                  Request Audit Form
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
