"use client";

import React, { useState } from "react";
import {
  Scissors,
  Sparkles,
  Paintbrush,
  Hand,
  Flower2,
  Smile,
  Crown,
  GraduationCap,
  ArrowRight,
  ArrowRightLeft
} from "lucide-react";
import { SERVICE_CATEGORIES, SALON_INFO, ServiceItem } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Map string icon names to Lucide components
const IconMapper = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case "scissors":
      return <Scissors className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    case "brush":
      return <Paintbrush className={className} />;
    case "hand":
      return <Hand className={className} />;
    case "flower":
      return <Flower2 className={className} />;
    case "smile":
      return <Smile className={className} />;
    case "crown":
      return <Crown className={className} />;
    case "graduation-cap":
      return <GraduationCap className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("hair");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [showPromoModal, setShowPromoModal] = useState(false);

  const activeCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-luxury-red text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4">
            OUR SERVICES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Redefining Beauty & Confidence
          </h2>
        </div>

        {/* Categories Tab Bar */}
        <div className="mb-12 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-thin">
          <div className="flex md:justify-center items-center gap-2 md:gap-4 min-w-max">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 relative border ${
                    isActive
                      ? "border-luxury-red text-luxury-red bg-luxury-red/5"
                      : "border-white/5 text-white/70 hover:text-white hover:border-white/20 bg-white/[0.01]"
                  }`}
                >
                  <IconMapper name={category.icon} className="w-4 h-4" />
                  {category.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryUnderline"
                      className="absolute bottom-[-1px] left-6 right-6 h-[1.5px] bg-luxury-red hidden"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content: Services Grid + Promo Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {/* Service Cards (Up to 4) */}
            {activeCategory.services.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="group flex flex-col bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover-lift"
              >
                {/* Image Zoom container */}
                <div className="img-zoom-container aspect-[4/3] w-full bg-black relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Subtle pricing tag */}
                  {service.price && (
                    <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[9px] font-sans font-bold tracking-wider text-white border border-white/5 py-1.5 px-3 rounded-full">
                      {service.price}
                    </span>
                  )}
                </div>

                {/* Card details */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-luxury-red transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-xs text-soft-gray/80 leading-relaxed font-sans mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* CTA Trigger */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="group/btn flex items-center gap-1.5 text-white/90 group-hover:text-luxury-red text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 w-fit focus:outline-none"
                  >
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}

            {/* Special Offer Card */}
            <div className="group relative flex flex-col justify-between p-8 rounded-2xl overflow-hidden bg-gradient-to-b from-[#C51F26] to-[#7A1014] text-white border border-luxury-red/20 shadow-[0_10px_35px_rgba(197,31,38,0.2)] md:col-span-2 lg:col-span-1">
              {/* Background abstract texture overlays */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_right,transparent_30%,#000_100%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.15)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.15)_75%,transparent_75%,transparent)] bg-[length:24px_24px] opacity-10 pointer-events-none" />
              
              <div className="text-left relative z-10">
                <span className="text-[9px] font-sans font-bold tracking-[0.25em] uppercase text-white/70">
                  SPECIAL OFFER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mt-4 leading-tight">
                  Flat 20% Off* <br />On All Services
                </h3>
                <p className="text-[10px] font-sans font-bold tracking-wider text-white/80 uppercase mt-4">
                  Limited Time Offer
                </p>
              </div>

              <div className="relative z-10 pt-12 text-left">
                <button
                  onClick={() => setShowPromoModal(true)}
                  className="group/promo flex items-center justify-center gap-2 bg-white text-luxury-red text-[10px] font-sans font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full w-full hover:scale-103 transition-transform duration-300 shadow-md hover:bg-white/95"
                >
                  Claim Offer
                  <ArrowRight className="w-3.5 h-3.5 group-promo:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-[8px] font-sans text-white/60 tracking-wider text-center mt-3 uppercase">
                  *T&C Apply
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Service Detail / Quick Booking Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 flex items-center justify-center text-white hover:text-luxury-red transition-all duration-300"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="flex flex-col gap-4 text-left">
                <span className="text-luxury-red text-[9px] font-sans font-bold tracking-[0.25em] uppercase">
                  Service Exploration
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {selectedService.name}
                </h3>
                <p className="text-xs text-soft-gray leading-relaxed font-sans mt-2">
                  {selectedService.description}
                </p>
                {selectedService.price && (
                  <div className="flex justify-between items-center py-3 border-y border-white/5 mt-4">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-soft-gray">
                      Starting Price
                    </span>
                    <span className="text-sm font-sans font-bold text-white">
                      {selectedService.price}
                    </span>
                  </div>
                )}
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedService(null);
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex-1 text-center bg-luxury-red text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase py-3.5 px-6 rounded-full hover:bg-luxury-red/90 transition-colors duration-300"
                  >
                    Book Now
                  </a>
                  <a
                    href={SALON_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-white/10 text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase py-3.5 px-6 rounded-full hover:bg-white/5 transition-colors duration-300"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Promo Code Modal */}
        {showPromoModal && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-8"
            >
              <button
                onClick={() => setShowPromoModal(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 flex items-center justify-center text-white hover:text-luxury-red transition-all duration-300"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 rounded-full bg-luxury-red/10 border border-luxury-red flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-luxury-red" />
                </div>
                <span className="text-luxury-red text-[9px] font-sans font-bold tracking-[0.25em] uppercase">
                  Claimed Promo Offer
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Flat 20% Off!
                </h3>
                <p className="text-xs text-soft-gray leading-relaxed font-sans max-w-sm mt-1">
                  Your discount coupon code has been pre-applied. Show this screen or mention code <span className="font-mono font-bold text-white bg-white/5 px-2.5 py-1 rounded border border-white/10 tracking-wider">HIGHROW20</span> during your visit or billing.
                </p>
                <div className="mt-6 flex flex-col gap-2 w-full">
                  <a
                    href="#contact"
                    onClick={() => {
                      setShowPromoModal(false);
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full text-center bg-luxury-red text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase py-3.5 rounded-full hover:bg-luxury-red/90 transition-colors duration-300"
                  >
                    Proceed to Booking
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
