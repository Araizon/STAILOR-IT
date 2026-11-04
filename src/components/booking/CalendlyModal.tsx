"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Video, CheckCircle2, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const [selectedTimezone, setSelectedTimezone] = useState("Eastern Time (US & Canada - EST)");
  const [selectedDate, setSelectedDate] = useState("Tomorrow (Thursday, 10:00 AM EST)");
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#080d1a] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
          aria-label="Close Scheduling Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="flex flex-col items-center text-center space-y-6 py-12 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Strategy Session Confirmed
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A Google Meet invitation has been provisioned for{" "}
              <strong className="text-white">{selectedDate}</strong>. Our Principal Technical Architect will lead the session.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 flex items-center gap-2">
              <Video className="w-4 h-4 text-accent-cyan" />
              <span>Google Meet HD Video Link dispatched via calendar invitation</span>
            </div>

            <Button
              variant="cyan"
              size="md"
              onClick={() => {
                setIsBooked(false);
                onClose();
              }}
            >
              Close Window
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Call Details (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div>
                <div className="text-xs font-mono font-bold uppercase text-accent-cyan tracking-wider mb-2">
                  STAILOR IT Discovery
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  30-Minute Growth & Technical Architecture Call
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  Join our Senior Architects to assess your current tech stack, review your SEO/CAC benchmarks, and map out a custom AI automation strategy.
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-accent-cyan" />
                    <span>30 Minutes Duration</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-accent-cyan" />
                    <span>Google Meet Video Call</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-accent-cyan" />
                    <span>US (EST/PST), UK (GMT) & Global Slots</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 text-[11px] text-muted-foreground border-t border-white/[0.06] mt-6">
                <span>Direct Line: {SITE_CONFIG.phone}</span>
              </div>
            </div>

            {/* Right Column: Timezone & Slot Picker (7 cols) */}
            <div className="md:col-span-7 flex flex-col space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Select Your Local Timezone
                </label>
                <select
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040812] border border-white/15 text-white text-xs focus:outline-none focus:border-accent-cyan"
                >
                  <option value="Bangladesh Time (BST / UTC+6)">
                    Bangladesh Time (BST / UTC+6)
                  </option>
                  <option value="Eastern Time (US & Canada - EST)">
                    Eastern Time (US & Canada - EST)
                  </option>
                  <option value="Pacific Time (US & Canada - PST)">
                    Pacific Time (US & Canada - PST)
                  </option>
                  <option value="Central European Time (CET)">
                    Central European Time (CET)
                  </option>
                  <option value="London (GMT / BST)">London (GMT / BST)</option>
                  <option value="Singapore / Asia (SGT)">Singapore / Asia (SGT)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Available Strategy Slots
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-52 overflow-y-auto pr-1">
                  {[
                    "Tomorrow (10:00 AM EST)",
                    "Tomorrow (02:30 PM EST)",
                    "Friday (11:00 AM EST)",
                    "Friday (04:00 PM EST)",
                    "Monday (09:30 AM EST)",
                    "Monday (03:00 PM EST)",
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all select-none ${
                        selectedDate === slot
                          ? "bg-accent-cyan/20 border-accent-cyan text-white shadow-md shadow-accent-cyan/15"
                          : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{slot}</span>
                        {selectedDate === slot && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="cyan"
                  size="lg"
                  icon={ArrowRight}
                  onClick={() => setIsBooked(true)}
                  className="w-full justify-center font-bold shadow-xl shadow-accent-cyan/25"
                >
                  Confirm Strategy Booking
                </Button>
                <p className="text-[10px] text-center text-muted-foreground mt-2">
                  Zero sales pressure. Free technical & commercial scope consultation.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
