"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Scissors,
  Sparkles,
  Award,
  Loader
} from "lucide-react";
import { SERVICE_CATEGORIES, SALON_INFO, ServiceItem } from "@/constants/data";

interface StylistItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
}
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const STYLISTS = [
  { id: "any", name: "Any Available Stylist", role: "Optimized slot selection", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
  { id: "priya", name: "Priya K.", role: "Master Hair Stylist & Makeup Artist", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
  { id: "vikram", name: "Vikram R.", role: "Senior Grooming & Beard Expert", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { id: "anjali", name: "Anjali S.", role: "Creative Colour Specialist", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" }
];

const TIME_SLOTS = [
  "09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM", "07:30 PM", "09:00 PM"
];

// Helper to generate the next 7 days starting from today
const getNextSevenDays = () => {
  const days = [];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({
      dateStr: d.toISOString().split("T")[0],
      dayName: daysOfWeek[d.getDay()],
      dayNum: d.getDate(),
      monthName: months[d.getMonth()]
    });
  }
  return days;
};

export default function BookingWizard({ isOpen, onClose }: BookingWizardProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<StylistItem | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [clientInfo, setClientInfo] = useState({ name: "", phone: "", email: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const days = getNextSevenDays();

  const handleServiceSelect = (service: ServiceItem) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleStylistSelect = (stylist: StylistItem) => {
    setSelectedStylist(stylist);
    setStep(3);
  };

  const handleDateTimeConfirm = () => {
    if (selectedDate && selectedTime) {
      setStep(4);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.phone) return;

    setIsSubmitting(true);

    try {
      // Mock API call to /api/bookings
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedService,
          stylist: selectedStylist,
          date: selectedDate,
          time: selectedTime,
          client: clientInfo
        })
      });

      if (response.ok) {
        setBookingConfirmed(true);
      }
    } catch (err) {
      console.error("Booking error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedStylist(null);
    setSelectedDate("");
    setSelectedTime("");
    setClientInfo({ name: "", phone: "", email: "", notes: "" });
    setBookingConfirmed(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6 backdrop-blur-md animate-fade-in">
      
      {/* Main Container */}
      <div className="relative w-full max-w-2xl bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex flex-col text-left">
            <span className="text-luxury-red text-[9px] font-sans font-bold tracking-[0.25em] uppercase">
              HIGHROW RESERVATIONS
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-1">
              {bookingConfirmed ? "Booking Confirmed" : `Step ${step} of 4: ${
                step === 1 ? "Select Service" :
                step === 2 ? "Choose Stylist" :
                step === 3 ? "Select Date & Time" : "Your Details"
              }`}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 flex items-center justify-center text-white hover:text-luxury-red transition-all duration-300 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Step Indicators */}
        {!bookingConfirmed && (
          <div className="px-6 md:px-8 pt-4 flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-[3px] flex-1 rounded-full transition-all duration-500 ${
                  s <= step ? "bg-luxury-red" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        )}

        {/* Content (Scrollable) */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!bookingConfirmed ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {/* STEP 1: SELECT SERVICE */}
                {step === 1 && (
                  <div className="space-y-6">
                    <p className="text-xs text-soft-gray text-left">
                      Select the service you wish to schedule from our categories:
                    </p>
                    <div className="space-y-6 max-h-[45vh] overflow-y-auto pr-2 scrollbar-thin">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="text-left">
                          <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] text-soft-gray uppercase mb-3 border-b border-white/5 pb-1 flex items-center gap-1.5">
                            <Scissors className="w-3.5 h-3.5 text-luxury-red" />
                            {cat.name}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {cat.services.map((service) => (
                              <button
                                key={service.id}
                                onClick={() => handleServiceSelect(service)}
                                className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
                                  selectedService?.id === service.id
                                    ? "border-luxury-red bg-luxury-red/5"
                                    : "border-white/5 hover:border-white/20 bg-black/40 hover:bg-black/60"
                                }`}
                              >
                                <div className="flex flex-col pr-4">
                                  <span className="text-xs font-sans font-bold text-white">
                                    {service.name}
                                  </span>
                                  <span className="text-[10px] text-soft-gray mt-1 line-clamp-1">
                                    {service.description}
                                  </span>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="text-xs font-sans font-bold text-luxury-red">
                                    {service.price?.replace("Starts from ", "")}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: CHOOSE STYLIST */}
                {step === 2 && (
                  <div className="space-y-6">
                    <p className="text-xs text-soft-gray text-left">
                      Select your preferred artist or select any available stylist:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {STYLISTS.map((stylist) => (
                        <button
                          key={stylist.id}
                          onClick={() => handleStylistSelect(stylist)}
                          className={`p-4 rounded-2xl border text-left flex gap-4 items-center transition-all duration-300 ${
                            selectedStylist?.id === stylist.id
                              ? "border-luxury-red bg-luxury-red/5"
                              : "border-white/5 hover:border-white/20 bg-black/40 hover:bg-black/60"
                          }`}
                        >
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                            <Image
                              src={stylist.avatar}
                              alt={stylist.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-sans font-bold text-white">
                              {stylist.name}
                            </span>
                            <span className="text-[10px] text-soft-gray mt-1">
                              {stylist.role}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: DATE & TIME */}
                {step === 3 && (
                  <div className="space-y-6 text-left">
                    {/* Date Picker */}
                    <div>
                      <h4 className="text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-3">
                        Select Date
                      </h4>
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                        {days.map((d) => (
                          <button
                            key={d.dateStr}
                            onClick={() => {
                              setSelectedDate(d.dateStr);
                              setSelectedTime(""); // clear time on date change
                            }}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                              selectedDate === d.dateStr
                                ? "border-luxury-red bg-luxury-red text-white"
                                : "border-white/5 bg-black/40 hover:border-white/20 text-white/80"
                            }`}
                          >
                            <span className="text-[9px] font-sans font-medium uppercase tracking-wider">
                              {d.dayName}
                            </span>
                            <span className="text-sm font-sans font-bold mt-1">
                              {d.dayNum}
                            </span>
                            <span className="text-[9px] font-sans font-medium uppercase tracking-wider mt-0.5">
                              {d.monthName}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Picker */}
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-4 border-t border-white/5"
                      >
                        <h4 className="text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-3">
                          Select Time Slot
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {TIME_SLOTS.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-xl border text-center text-xs font-sans font-bold transition-all duration-300 ${
                                selectedTime === time
                                  ? "border-luxury-red bg-luxury-red/10 text-luxury-red"
                                  : "border-white/5 bg-black/40 hover:border-white/20 text-white/80"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* STEP 4: CLIENT INFO */}
                {step === 4 && (
                  <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                    {/* Booking Summary Card */}
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3.5">
                      <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] text-luxury-red uppercase border-b border-white/5 pb-1.5">
                        Selected Summary
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                        <div className="flex gap-2.5 items-center">
                          <Scissors className="w-4 h-4 text-soft-gray shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-soft-gray">Service</span>
                            <span className="font-bold text-white">{selectedService?.name}</span>
                          </div>
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <User className="w-4 h-4 text-soft-gray shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-soft-gray">Artist</span>
                            <span className="font-bold text-white">{selectedStylist?.name}</span>
                          </div>
                        </div>
                        <div className="flex gap-2.5 items-center">
                          <Calendar className="w-4 h-4 text-soft-gray shrink-0" />
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-soft-gray">Schedule</span>
                            <span className="font-bold text-white">
                              {new Date(selectedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })} at {selectedTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={clientInfo.name}
                          onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 rounded-xl py-2.5 px-4 text-xs font-sans text-white focus:outline-none focus:border-luxury-red transition-colors duration-300"
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={clientInfo.phone}
                          onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 rounded-xl py-2.5 px-4 text-xs font-sans text-white focus:outline-none focus:border-luxury-red transition-colors duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={clientInfo.email}
                        onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 rounded-xl py-2.5 px-4 text-xs font-sans text-white focus:outline-none focus:border-luxury-red transition-colors duration-300"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-1.5">
                        Special Instructions
                      </label>
                      <textarea
                        rows={3}
                        value={clientInfo.notes}
                        onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 rounded-xl py-2.5 px-4 text-xs font-sans text-white focus:outline-none focus:border-luxury-red transition-colors duration-300 resize-none"
                        placeholder="Any hair length details, allergies, or specific requests..."
                      />
                    </div>

                  </form>
                )}
              </motion.div>
            ) : (
              // BOOKING CONFIRMED SUCCESS SCREEN
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-red/10 border-2 border-luxury-red flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-luxury-red" />
                </div>
                <span className="text-luxury-red text-[9px] font-sans font-bold tracking-[0.25em] uppercase">
                  Reservation Success
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mt-1">
                  Appointment Confirmed!
                </h3>
                <p className="text-xs text-soft-gray leading-relaxed max-w-sm mt-3 font-medium">
                  Thank you, <span className="text-white font-bold">{clientInfo.name}</span>. Your booking for <span className="text-white font-bold">{selectedService?.name}</span> with <span className="text-white font-bold">{selectedStylist?.name}</span> has been confirmed.
                </p>

                {/* Summary details card */}
                <div className="mt-8 p-6 rounded-2xl bg-black/40 border border-white/5 text-left w-full max-w-md font-sans text-xs space-y-3.5">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-soft-gray">Date & Time</span>
                    <span className="text-white font-bold">
                      {new Date(selectedDate).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} at {selectedTime}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-soft-gray">Salon Address</span>
                    <span className="text-white text-right leading-tight max-w-[220px]">
                      {SALON_INFO.addressShort}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-soft-gray">Contact Number</span>
                    <span className="text-white font-bold">{SALON_INFO.phone}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-10 bg-luxury-red text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase py-3.5 px-10 rounded-full hover:bg-luxury-red/90 transition-colors duration-300 shadow-[0_0_15px_rgba(197,31,38,0.2)]"
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Buttons */}
        {!bookingConfirmed && (
          <div className="p-6 md:p-8 border-t border-white/5 flex justify-between items-center bg-black/40">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedStylist) ||
                  (step === 3 && (!selectedDate || !selectedTime))
                }
                onClick={handleDateTimeConfirm}
                className="flex items-center gap-1.5 text-luxury-red hover:text-luxury-red/80 disabled:text-white/20 text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 focus:outline-none"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFormSubmit}
                disabled={isSubmitting || !clientInfo.name || !clientInfo.phone}
                className="flex items-center gap-2 bg-luxury-red hover:bg-luxury-red/90 text-white disabled:bg-white/10 disabled:text-white/30 text-[10px] font-sans font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-3.5 h-3.5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <CheckCircle className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
