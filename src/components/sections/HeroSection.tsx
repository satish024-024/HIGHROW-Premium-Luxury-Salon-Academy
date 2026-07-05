"use client";

import React, { useState } from "react";
import {
  Calendar,
  ArrowRight,
  Star,
  Award,
  Sparkles,
  ShieldCheck,
  Play,
  Clock,
  Phone,
  MapPin,
  Share2,
  MessageCircle,
  X
} from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
import { SALON_INFO, TRUST_INDICATORS, MOCK_CINEMATIC_VIDEO, HERO_SALON_IMAGE } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [isPlayingStory, setIsPlayingStory] = useState(false);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-24 md:pb-36 bg-black overflow-hidden"
    >
      {/* Cinematic Image Background (matching mockup precisely) */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src={HERO_SALON_IMAGE}
          alt="Highrow Luxury Salon Interior"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-100"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-[#050505] z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] z-20 opacity-40" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-luxury-red text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4"
            >
              PREMIUM UNISEX SALON & ACADEMY
            </motion.span>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-2xl"
            >
              Elevate Your Style. Elevate <span className="text-luxury-red text-red-glow">You.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm md:text-base text-soft-gray font-sans font-medium tracking-wide max-w-md leading-relaxed mb-10"
            >
              Luxury. Expertise. Transformation. <br />
              All under one roof.
            </motion.p>

            {/* CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16"
            >
              <a
                href="#contact"
                onClick={() => handleScrollToSection("contact")}
                className="group flex items-center justify-center gap-2 bg-luxury-red text-white text-xs font-sans font-bold tracking-[0.15em] uppercase py-4 px-8 rounded-full hover-lift shadow-[0_0_20px_rgba(197,31,38,0.2)] hover:shadow-[0_0_30px_rgba(197,31,38,0.5)] transition-all duration-300"
              >
                Book Appointment
                <Calendar className="w-4 h-4 group-hover:scale-115 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                onClick={() => handleScrollToSection("services")}
                className="group flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white text-xs font-sans font-bold tracking-[0.15em] uppercase py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-6 border-t border-white/5 w-full max-w-3xl"
            >
              {TRUST_INDICATORS.map((badge, idx) => {
                const renderIcon = () => {
                  const props = { className: "w-5 h-5 text-luxury-red shrink-0" };
                  switch (badge.icon) {
                    case "star": return <Star {...props} className="w-5 h-5 text-luxury-red fill-luxury-red/20 shrink-0" />;
                    case "award": return <Award {...props} />;
                    case "sparkles": return <Sparkles {...props} />;
                    default: return <ShieldCheck {...props} />;
                  }
                };

                return (
                  <div key={badge.id} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0">
                      {renderIcon()}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[12px] font-sans font-bold text-white tracking-wide">
                        {badge.title}
                      </span>
                      <span className="text-[10px] font-sans font-medium text-soft-gray/80 mt-0.5">
                        {badge.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Watch Story Play Button */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center relative h-36 lg:h-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => setIsPlayingStory(true)}
            >
              <div className="relative w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:border-luxury-red group-hover:scale-105 transition-all duration-500">
                <Play className="w-5 h-5 text-white fill-white ml-0.5 group-hover:text-luxury-red group-hover:fill-luxury-red transition-all duration-300" />
                <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30 group-hover:border-luxury-red/40" />
              </div>
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white uppercase group-hover:text-luxury-red transition-colors duration-300">
                Watch Our Story
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Glassmorphic Info Card */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full mt-12 lg:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/5"
        >
          {/* Card 1: Hours */}
          <div className="flex gap-4 items-start pt-4 md:pt-0 md:pr-4">
            <Clock className="w-5 h-5 text-luxury-red shrink-0 mt-0.5" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-sans font-bold text-luxury-red uppercase tracking-wider">
                Open Everyday
              </span>
              <span className="text-xs font-sans font-semibold text-white mt-1">
                {SALON_INFO.hours}
              </span>
            </div>
          </div>

          {/* Card 2: Contact */}
          <div className="flex gap-4 items-start pt-4 md:pt-0 md:pr-4 lg:pl-6">
            <Phone className="w-5 h-5 text-luxury-red shrink-0 mt-0.5" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-sans font-bold text-luxury-red uppercase tracking-wider">
                Call Us Now
              </span>
              <a
                href={`tel:${SALON_INFO.phone.replace(/ /g, "")}`}
                className="text-xs font-sans font-bold text-white mt-1 hover:text-luxury-red transition-colors duration-300"
              >
                {SALON_INFO.phone}
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="flex gap-4 items-start pt-4 md:pt-0 md:pr-4 lg:pl-6">
            <MapPin className="w-5 h-5 text-luxury-red shrink-0 mt-0.5" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-sans font-bold text-luxury-red uppercase tracking-wider">
                Our Location
              </span>
              <span className="text-xs font-sans font-medium text-white/95 mt-1 leading-normal">
                {SALON_INFO.addressShort}
              </span>
            </div>
          </div>

          {/* Card 4: Socials */}
          <div className="flex gap-4 items-start pt-4 md:pt-0 lg:pl-6">
            <Share2 className="w-5 h-5 text-luxury-red shrink-0 mt-0.5" />
            <div className="flex flex-col text-left w-full">
              <span className="text-[10px] font-sans font-bold text-luxury-red uppercase tracking-wider">
                Follow Us
              </span>
              <div className="flex items-center gap-3.5 mt-2">
                <a
                  href={SALON_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-luxury-red transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-luxury-red transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-luxury-red transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-luxury-red transition-colors duration-300"
                  aria-label="Google"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.68 0-8.5-3.87-8.5-8.5s3.82-8.5 8.5-8.5c2.148 0 4.094.793 5.613 2.1l3.188-3.187C18.12 1.34 15.35 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.96 0 11.57-4.89 11.57-11.79 0-.795-.085-1.57-.212-2.3H12.24z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Floating Right Social Bar */}
      <div className="hidden lg:flex flex-col items-center gap-5 fixed right-8 top-1/2 -translate-y-1/2 z-35 bg-black/35 backdrop-blur-xs border border-white/5 py-6 px-2.5 rounded-full">
        <a
          href={SALON_INFO.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-luxury-red hover:scale-110 transition-all duration-300"
          aria-label="Instagram"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a
          href={SALON_INFO.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-luxury-red hover:scale-110 transition-all duration-300"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a
          href={SALON_INFO.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-luxury-red hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <a
          href={SALON_INFO.socials.google}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-luxury-red hover:scale-110 transition-all duration-300"
          aria-label="Google Review"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.68 0-8.5-3.87-8.5-8.5s3.82-8.5 8.5-8.5c2.148 0 4.094.793 5.613 2.1l3.188-3.187C18.12 1.34 15.35 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.96 0 11.57-4.89 11.57-11.79 0-.795-.085-1.57-.212-2.3H12.24z" />
          </svg>
        </a>
        <a
          href={SALON_INFO.socials.location}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-luxury-red hover:scale-110 transition-all duration-300"
          aria-label="Location Map"
        >
          <MapPin className="w-4 h-4" />
        </a>
      </div>

      {/* Story Video Overlay Modal */}
      {isPlayingStory && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 animate-fade-in">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <button
              onClick={() => setIsPlayingStory(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:text-luxury-red hover:bg-black/90 transition-all duration-300"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <video
              src={MOCK_CINEMATIC_VIDEO}
              autoPlay
              controls
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
