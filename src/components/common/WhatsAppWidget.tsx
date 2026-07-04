"use client";

import React from "react";
import { SALON_INFO } from "@/constants/data";
import { motion } from "framer-motion";

export default function WhatsAppWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={SALON_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_5px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-108 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.488 2.01 14.041 1.01 11.999 1.01c-5.442 0-9.866 4.372-9.87 9.802 0 1.63.45 3.22 1.302 4.634L2.4 21.07l5.77-1.488-1.523.572zM17.65 15.01c-.3-.15-1.785-.88-2.067-.98-.28-.1-.49-.15-.69.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.293-.478-2.462-1.52-1.088-.97-1.821-2.17-2.03-2.53-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.68-.95-2.29-.26-.62-.51-.54-.69-.54-.18 0-.38-.01-.58-.01s-.53.07-.8.38c-.28.3-1.06 1.04-1.06 2.53s1.09 2.93 1.24 3.13c.15.2 2.15 3.29 5.21 4.6 1.25.54 2.22.86 2.97 1.1.75.24 1.43.2 1.97.12.6-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>

        {/* Pulsing indicator ring */}
        <span className="absolute -inset-1.5 rounded-full border-2 border-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
      </a>
    </motion.div>
  );
}
