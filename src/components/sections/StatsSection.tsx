"use client";

import React, { useState } from "react";
import {
  Award,
  Users,
  Smile,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { STATS_ITEMS, TESTIMONIALS, STATS_MODEL_PORTRAIT } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function StatsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentTestimonial];

  // Helper to map stat icons (using luxury gold outlined color)
  const renderStatIcon = (id: string) => {
    const props = { className: "w-5 h-5 text-[#D4AF37]" };
    switch (id) {
      case "years":
        return <Award {...props} />;
      case "staff":
        return <Users {...props} />;
      case "clients":
        return <Smile {...props} />;
      case "reviews":
        return <Star {...props} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]/10" />;
      default:
        return <Award {...props} />;
    }
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Counters & Testimonial Slider */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-16 text-left h-full">
            
            {/* Stats Counter Grid - Flat, borderless and transparent */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-white/5 pb-12">
              {STATS_ITEMS.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col text-left group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-5 shrink-0 bg-white/[0.01] group-hover:border-[#D4AF37]/50 transition-colors duration-300">
                    {renderStatIcon(stat.id)}
                  </div>
                  <span className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight leading-none mb-3">
                    {stat.value}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-sans font-bold text-soft-gray uppercase tracking-[0.18em] leading-normal">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial Quote Area - Transparent & borderless */}
            <div className="flex-grow flex flex-col justify-center relative overflow-hidden pt-4">
              
              {/* Quote Mark Icon */}
              <Quote className="w-12 h-12 text-luxury-red/25 mb-6 shrink-0" />

              {/* Slider Content */}
              <div className="min-h-[120px] mb-8 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="font-serif italic text-xl md:text-3xl leading-relaxed text-white/95 font-medium tracking-wide">
                      {activeTestimonial.quote}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Footer: Client Info & Controls */}
              <div className="flex items-center justify-between gap-6 pt-8 border-t border-white/5">
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-zinc-900">
                    <Image
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-sans font-bold text-white tracking-wider">
                      {activeTestimonial.author}
                    </span>
                    {/* Stars */}
                    <div className="flex gap-0.5 mt-1.5">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-luxury-red fill-luxury-red" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nav Slider Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-white/10 bg-black/45 hover:border-luxury-red hover:text-luxury-red flex items-center justify-center text-white transition-all duration-300 focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-white/10 bg-black/45 hover:border-luxury-red hover:text-luxury-red flex items-center justify-center text-white transition-all duration-300 focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Premium Styled Model Portrait */}
          <div className="lg:col-span-4 min-h-[480px] lg:min-h-[520px] relative rounded-3xl overflow-hidden border border-white/5 group shadow-2xl">
            <Image
              src={STATS_MODEL_PORTRAIT}
              alt="Highrow Luxury Hair Artistry"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover filter grayscale-[10%] group-hover:scale-103 transition-transform duration-[1.2s] ease-out"
              loading="lazy"
            />
            {/* Warm dark shadow overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/10 via-transparent to-[#050505]/10 z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}
