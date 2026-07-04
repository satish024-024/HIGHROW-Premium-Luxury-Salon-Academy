"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import AcademySection from "@/components/sections/AcademySection";
import GallerySection from "@/components/sections/GallerySection";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/WhatsAppWidget";
import BookingWizard from "@/components/sections/BookingWizard";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Banner Area */}
        <HeroSection />

        {/* Tabbed Services Grid */}
        <ServicesSection />

        {/* Statistics & Client Reviews Slider */}
        <StatsSection />

        {/* Training Academy Section */}
        <AcademySection />

        {/* Transformation Before/After Gallery */}
        <GallerySection />

        {/* Final Call to Action */}
        <FinalCta onBookClick={openBooking} />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* WhatsApp Sticky Customer Contact Float */}
      <WhatsAppWidget />

      {/* Global Booking Wizard Dialog */}
      <BookingWizard isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
}
