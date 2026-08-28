"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { AuditCTA } from "@/components/audit/AuditCTA";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { AIChatWidget } from "@/components/chat/AIChatWidget";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function CaseStudiesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground flex flex-col justify-between">
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <main className="flex-1 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Case Studies & ROI Portfolio"
            badgeVariant="emerald"
            title="Real Systems."
            gradientWord="Measurable Impact."
            description="Explore our proven track record scaling B2B SaaS, HealthTech, and enterprise brands across the US and UK."
            align="center"
            className="mb-16"
          />

          <CaseStudies />
          <AuditCTA onOpenAudit={() => setAuditModalOpen(true)} />
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
