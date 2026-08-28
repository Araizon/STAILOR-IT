"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { AuditCTA } from "@/components/audit/AuditCTA";
import { CalendlyModal } from "@/components/booking/CalendlyModal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { AIChatWidget } from "@/components/chat/AIChatWidget";

export default function ProcessPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground flex flex-col justify-between">
      <Navbar
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      <main className="flex-1 pt-36 pb-20">
        <ProcessTimeline />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
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
