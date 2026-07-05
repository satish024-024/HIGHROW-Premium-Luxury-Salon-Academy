"use client";

import React, { useState } from "react";
import { SALON_INFO, NAVIGATION_LINKS } from "@/constants/data";
import { MessageCircle, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCreatorInfo, setShowCreatorInfo] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 text-soft-gray relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex flex-col select-none group w-fit">
              <div className="flex items-center gap-0.5">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  HIGH
                </span>
                <span className="relative flex items-center justify-center w-7 h-7 mx-0.5">
                  {/* Custom Calligraphic Brush Swirl SVG */}
                  <svg className="absolute inset-0 w-full h-full text-luxury-red" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M50 12 C 70 12, 88 26, 88 48 C 88 70, 70 88, 48 88 C 26 88, 12 70, 12 48 C 12 28, 28 12, 50 15 C 66 17, 80 30, 80 48 C 80 62, 68 76, 50 76 C 36 76, 26 64, 28 48 C 29 36, 40 26, 50 26"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-serif text-xs font-bold text-white relative z-10 -top-[0.5px]">
                    R
                  </span>
                </span>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  OW
                </span>
              </div>
              <span className="text-[7px] font-sans tracking-[0.3em] font-semibold text-soft-gray uppercase mt-0.5">
                {SALON_INFO.subtitle}
              </span>
            </a>
            <p className="text-xs leading-relaxed text-soft-gray/80 max-w-[280px]">
              Luxury salon services with a professional academy. We bring out the best in you with style, care & perfection.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={SALON_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-luxury-red hover:border-luxury-red transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-luxury-red hover:border-luxury-red transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-luxury-red hover:border-luxury-red transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.socials.google}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-luxury-red hover:border-luxury-red transition-all duration-300"
                aria-label="Google Search"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.68 0-8.5-3.87-8.5-8.5s3.82-8.5 8.5-8.5c2.148 0 4.094.793 5.613 2.1l3.188-3.187C18.12 1.34 15.35 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.96 0 11.57-4.89 11.57-11.79 0-.795-.085-1.57-.212-2.3H12.24z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase relative w-fit after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[1px] after:bg-luxury-red">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-xs">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-luxury-red hover:pl-1 transition-all duration-300 text-soft-gray/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase relative w-fit after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[1px] after:bg-luxury-red">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-soft-gray/80">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-luxury-red transition-all duration-300">
                  Hair Services
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-luxury-red transition-all duration-300">
                  Skin Care
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-luxury-red transition-all duration-300">
                  Makeup Artistry
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-luxury-red transition-all duration-300">
                  Nail Art
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-luxury-red transition-all duration-300">
                  Waxing & Skincare
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-luxury-red transition-all duration-300">
                  Men's Grooming
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-luxury-red transition-all duration-300">
                  Bridal Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Academy Courses */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase relative w-fit after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[1px] after:bg-luxury-red">
              Academy
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-soft-gray/80">
              <li>
                <a href="#academy" onClick={(e) => handleNavClick(e, "#academy")} className="hover:text-luxury-red transition-all duration-300">
                  Hair Designing Courses
                </a>
              </li>
              <li>
                <a href="#academy" onClick={(e) => handleNavClick(e, "#academy")} className="hover:text-luxury-red transition-all duration-300">
                  Makeup Artistry Courses
                </a>
              </li>
              <li>
                <a href="#academy" onClick={(e) => handleNavClick(e, "#academy")} className="hover:text-luxury-red transition-all duration-300">
                  Beautician Training
                </a>
              </li>
              <li>
                <a href="#academy" onClick={(e) => handleNavClick(e, "#academy")} className="hover:text-luxury-red transition-all duration-300">
                  Nail Technician Course
                </a>
              </li>
              <li>
                <a href="#academy" onClick={(e) => handleNavClick(e, "#academy")} className="hover:text-luxury-red transition-all duration-300">
                  Salon Management
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase relative w-fit after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[1px] after:bg-luxury-red">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 text-xs">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-luxury-red shrink-0 mt-0.5" />
                <span className="leading-relaxed text-soft-gray/80">
                  {SALON_INFO.address}
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-luxury-red shrink-0" />
                <a href={`tel:${SALON_INFO.phone.replace(/ /g, "")}`} className="hover:text-white transition-colors duration-300 text-soft-gray/80">
                  {SALON_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-luxury-red shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-white transition-colors duration-300 text-soft-gray/80">
                  {SALON_INFO.email}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock className="w-4 h-4 text-luxury-red shrink-0" />
                <span className="text-soft-gray/80">Open Daily: {SALON_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-wider uppercase font-medium">
          <p className="text-soft-gray/60">
            &copy; {currentYear} Highrow Salon & Academy. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-soft-gray/60">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
          </div>
          <div className="relative flex items-center gap-1 text-soft-gray/60">
            <button
              onClick={() => setShowCreatorInfo(!showCreatorInfo)}
              className="flex items-center gap-1 hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer"
              aria-label="View website designer details"
            >
              Designed with <Heart className="w-3 h-3 text-luxury-red fill-current" /> by Gen Z Creations
            </button>

            {showCreatorInfo && (
              <div className="absolute bottom-10 right-0 z-30 p-6 rounded-2xl bg-[#121212] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.9)] flex flex-col text-left min-w-[260px] animate-fade-in glass-panel">
                <button
                  onClick={() => setShowCreatorInfo(false)}
                  className="absolute top-3 right-3 text-soft-gray/60 hover:text-white text-xs font-bold cursor-pointer"
                  aria-label="Close details"
                >
                  ✕
                </button>
                <span className="text-luxury-red text-[8px] font-sans font-bold tracking-[0.25em] uppercase mb-1">
                  Creator & Developer
                </span>
                <h4 className="font-serif text-sm font-bold text-white mb-3">Satish Kumar</h4>
                
                <a
                  href="https://wa.me/919505683584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-soft-gray/80 hover:text-white transition-colors duration-300 flex items-center gap-2 mb-2 bg-white/[0.02] border border-white/5 p-2 rounded-lg"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>+91 9505683584</span>
                </a>
                
                <a
                  href="mailto:prakashkadali3723@gmail.com"
                  className="text-xs text-soft-gray/80 hover:text-white transition-colors duration-300 flex items-center gap-2 bg-white/[0.02] border border-white/5 p-2 rounded-lg"
                >
                  <Mail className="w-3.5 h-3.5 text-luxury-red" />
                  <span className="truncate">prakashkadali3723@gmail.com</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
