"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AuditCTA } from "@/components/audit/AuditCTA";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { AIChatWidget } from "@/components/chat/AIChatWidget";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ServicesPage() {
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
            badge="Full-Spectrum IT Capabilities"
            badgeVariant="cyan"
            title="Enterprise Services Tailored for"
            gradientWord="Predictable Growth"
            description="From search visibility and paid acquisition to custom AI agents and full-stack Next.js applications, discover our engineering offerings."
            align="center"
            className="mb-16"
          />

          <ServicesSection />
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
