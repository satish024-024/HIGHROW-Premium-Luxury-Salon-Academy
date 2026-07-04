"use client";

import React, { useState } from "react";
import { Check, ArrowRight, GraduationCap } from "lucide-react";
import { ACADEMY_COURSES, SALON_INFO, CourseItem } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AcademySection() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setEnrolledSuccess(true);
    setTimeout(() => {
      setSelectedCourse(null);
      setEnrolledSuccess(false);
      setFormData({ name: "", phone: "", email: "" });
    }, 3000);
  };

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
    <section id="academy" className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* Left Column: Academy Info */}
          <div className="lg:col-span-3 text-left flex flex-col items-start lg:sticky lg:top-28">
            <span className="text-luxury-red text-[11px] font-sans font-bold tracking-[0.25em] uppercase mb-4">
              BUILD YOUR FUTURE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Highrow Academy
            </h2>
            <p className="text-xs md:text-sm text-soft-gray/80 leading-relaxed font-sans mb-8">
              Empowering the next generation of beauty professionals with industry-leading training & hands-on experience.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-4 mb-10 w-full">
              {[
                "Professional Trainers",
                "International Techniques",
                "100% Practical Training",
                "Certification Provided"
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-luxury-red/10 border border-luxury-red/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-luxury-red" />
                  </div>
                  <span className="text-xs font-sans font-semibold text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Academy Explore Courses Button */}
            <button
              onClick={() => handleScrollToSection("academy")}
              className="group flex items-center justify-center gap-2 bg-luxury-red text-white text-xs font-sans font-bold tracking-[0.15em] uppercase py-4 px-8 rounded-full hover-lift shadow-[0_0_20px_rgba(197,31,38,0.2)] hover:shadow-[0_0_30px_rgba(197,31,38,0.5)] transition-all duration-300"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Column: Course Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {ACADEMY_COURSES.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover-lift"
              >
                {/* Image zoom container */}
                <div className="img-zoom-container aspect-[3/4] w-full bg-black relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Duration pill badge */}
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[8.5px] font-sans font-bold tracking-wider text-white border border-white/5 py-1 px-2.5 rounded-full flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-luxury-red" />
                    {course.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-serif text-[15px] xl:text-base font-bold text-white mb-2 leading-snug group-hover:text-luxury-red transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-[11px] text-soft-gray/80 leading-relaxed font-sans mb-6">
                      {course.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="group/btn flex items-center gap-1.5 text-white/90 group-hover:text-luxury-red text-[9px] font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 w-fit focus:outline-none"
                  >
                    Enroll Now
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Academy Course Enrollment Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-8"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 flex items-center justify-center text-white hover:text-luxury-red transition-all duration-300"
                aria-label="Close"
              >
                ✕
              </button>

              <AnimatePresence mode="wait">
                {!enrolledSuccess ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col text-left"
                  >
                    <span className="text-luxury-red text-[9px] font-sans font-bold tracking-[0.25em] uppercase">
                      Academy Enrollment
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      {selectedCourse.title}
                    </h3>
                    <p className="text-xs text-soft-gray leading-normal mt-2">
                      Course Duration: <span className="text-white font-bold">{selectedCourse.duration}</span>. Submit your details below, and our educational coordinator will reach out within 24 hours.
                    </p>

                    <form onSubmit={handleEnrollSubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="block text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-4 text-xs font-sans text-white focus:outline-none focus:border-luxury-red transition-colors duration-300"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-4 text-xs font-sans text-white focus:outline-none focus:border-luxury-red transition-colors duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-bold tracking-wider text-soft-gray uppercase mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-black/60 border border-white/10 rounded-lg py-2.5 px-4 text-xs font-sans text-white focus:outline-none focus:border-luxury-red transition-colors duration-300"
                          placeholder="yourname@email.com"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full text-center bg-luxury-red text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase py-3.5 rounded-full hover:bg-luxury-red/90 transition-colors duration-300 mt-6 shadow-[0_0_15px_rgba(197,31,38,0.2)]"
                      >
                        Submit Enrollment Inquiry
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-luxury-red/10 border border-luxury-red flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-luxury-red" />
                    </div>
                    <span className="text-luxury-red text-[9px] font-sans font-bold tracking-[0.25em] uppercase">
                      Inquiry Received
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      Registration Success!
                    </h3>
                    <p className="text-xs text-soft-gray leading-relaxed max-w-sm mt-3">
                      Thank you, <span className="text-white font-bold">{formData.name}</span>. We have recorded your interest in the <span className="text-white font-bold">{selectedCourse.title}</span>. Our team will contact you shortly on <span className="text-white font-bold">{formData.phone}</span>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
