"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { BANNER_MODEL_LEFT, BANNER_MODEL_RIGHT } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

interface FinalCtaProps {
  onBookClick: () => void;
}

export default function FinalCta({ onBookClick }: FinalCtaProps) {
  return (
    <section id="offers" className="py-20 md:py-28 bg-[#050505] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Banner container with luxury red/dark gradient and border */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#7A1014] via-[#4A0A0C] to-[#0A0203] border border-luxury-red/20 py-20 px-8 md:px-16 text-center shadow-[0_15px_50px_rgba(197,31,38,0.15)] flex flex-col items-center justify-center min-h-[400px]">
          
          {/* Abstract texture background glow */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,31,38,0.25)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-5 pointer-events-none" />

          {/* Left Model (Bottom Pinned) - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="hidden lg:block absolute bottom-0 left-8 w-[220px] h-[300px] z-10 pointer-events-none"
          >
            <Image
              src={BANNER_MODEL_LEFT}
              alt="Highrow Grooming Model"
              fill
              sizes="220px"
              className="object-cover object-top filter grayscale-[20%]"
              loading="lazy"
            />
            {/* Fade out top and right to blend with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#4A0A0C]/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4A0A0C]/90" />
          </motion.div>

          {/* Right Model (Bottom Pinned) - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block absolute bottom-0 right-8 w-[240px] h-[330px] z-10 pointer-events-none"
          >
            <Image
              src={BANNER_MODEL_RIGHT}
              alt="Highrow Makeup Model"
              fill
              sizes="240px"
              className="object-cover object-top filter grayscale-[20%]"
              loading="lazy"
            />
            {/* Fade out top and left to blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#4A0A0C]/90" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#4A0A0C]/90" />
          </motion.div>

          {/* Main Typography & Trigger */}
          <div className="relative z-20 max-w-xl flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4"
            >
              Ready for Your Transformation?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs md:text-sm text-white/80 leading-relaxed font-sans max-w-sm mb-10 tracking-wide"
            >
              Book your appointment now and experience the Highrow difference.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={onBookClick}
              className="group flex items-center justify-center gap-2 bg-luxury-red text-white text-xs font-sans font-bold tracking-[0.15em] uppercase py-4 px-8 rounded-full hover-lift shadow-[0_5px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(197,31,38,0.5)] transition-all duration-300"
            >
              Book Appointment Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
