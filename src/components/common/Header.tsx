"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { NAVIGATION_LINKS, SALON_INFO } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section highlighing
      const sections = NAVIGATION_LINKS.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-panel bg-black/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#home" className="flex flex-col group select-none">
            <div className="flex items-center gap-0.5">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white">
                HIGH
              </span>
              <span className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 mx-0.5">
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
                <span className="font-serif text-base md:text-lg font-bold text-white relative z-10 -top-[0.5px]">
                  R
                </span>
              </span>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-white">
                OW
              </span>
            </div>
            <span className="text-[7.5px] md:text-[8.5px] font-sans tracking-[0.3em] font-semibold text-soft-gray uppercase text-center mt-0.5">
              {SALON_INFO.subtitle}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[11px] font-sans font-medium tracking-[0.2em] transition-all duration-300 relative py-1 ${
                    isActive ? "text-luxury-red" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Subtle underline for active section */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-luxury-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Book Appointment CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group flex items-center gap-2 bg-luxury-red text-white text-[11px] font-sans font-bold tracking-[0.15em] uppercase py-3 px-5 rounded-full hover-lift shadow-[0_0_15px_rgba(197,31,38,0.2)] hover:shadow-[0_0_25px_rgba(197,31,38,0.5)] transition-all duration-300"
            >
              Book Appointment
              <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-luxury-red transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 animate-fade-in" />
            ) : (
              <Menu className="w-6 h-6 animate-fade-in" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-sans font-semibold tracking-[0.25em] transition-all duration-300 py-2 ${
                      isActive ? "text-luxury-red text-red-glow font-bold" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-6 flex items-center gap-2 bg-luxury-red text-white text-[11px] font-sans font-bold tracking-[0.15em] uppercase py-4 px-8 rounded-full shadow-[0_0_20px_rgba(197,31,38,0.3)]"
              >
                Book Appointment
                <Calendar className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
