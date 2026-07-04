"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { TRANSFORMATIONS } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusable premium Before/After split image slider component
const BeforeAfterSlider = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black select-none border border-white/5 shadow-lg group"
    >
      {/* After Image (Background) */}
      <Image
        src={after}
        alt={`${title} After`}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 15vw"
        className="object-cover pointer-events-none"
        loading="lazy"
      />
      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[8px] font-sans font-bold tracking-wider text-white border border-white/5 py-1 px-2.5 rounded-md uppercase z-20">
        After
      </div>

      {/* Before Image (Foreground overlay with clip path) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0px ${100 - sliderPosition}% 0px 0px)` }}
      >
        <Image
          src={before}
          alt={`${title} Before`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 15vw"
          className="object-cover pointer-events-none"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[8px] font-sans font-bold tracking-wider text-white border border-white/5 py-1 px-2.5 rounded-md uppercase z-20">
          Before
        </div>
      </div>

      {/* Slider Bar & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-30"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
        }}
      >
        {/* Glowing handle ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg border border-black/10 select-none group-hover:scale-108 transition-transform duration-300">
          <ArrowRightLeft className="w-3.5 h-3.5 rotate-90" />
        </div>
      </div>

      {/* Title footer bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-25 text-left">
        <h4 className="font-serif text-sm font-bold text-white group-hover:text-luxury-red transition-colors duration-300">
          {title}
        </h4>
      </div>
    </div>
  );
};

// SVG swap icon since Lucide doesn't have ArrowRightLeft natively in some versions or we want a custom rotation look
const ArrowRightLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-luxury-red text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4">
            TRANSFORMATIONS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Real People. Real Results.
          </h2>
        </div>

        {/* 6-Column Transformation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-16">
          {TRANSFORMATIONS.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              before={item.beforeImage}
              after={item.afterImage}
              title={item.title}
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 border border-white/10 hover:border-white text-white text-xs font-sans font-bold tracking-[0.15em] uppercase py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/5"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
