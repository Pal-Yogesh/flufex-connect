'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import './ScrollbarHide.css';

const testimonials = [
  {
    quote: "Working with this team completely changed how I looked at my content. What started as regular creator work was structured into a long-term IP with clear monetization, positioning and growth strategy.",
    author: "Emma Richardson",
    initial: "E",
    role: "Entertainment Creator & IP Owner",
    rating: 5,
    color: "#FF6E1F"
  },
  {
    quote: "The best decision I made for my creator career. They transformed my approach from short-term campaigns to building a sustainable business.",
    author: "Sarah Mitchell",
    initial: "S",
    role: "Lifestyle Creator",
    rating: 5,
    color: "#9333EA"
  },
  {
    quote: "Professional, strategic, and genuinely invested in my success. They don't just manage—they build empires.",
    author: "Marcus Chen",
    initial: "M",
    role: "Tech Content Creator",
    rating: 5,
    color: "#FF6E1F"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="relative w-full bg-[#1A1A1A] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -right-20 md:right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FF6E1F]/20 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 -left-20 md:left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* Floating Quote Marks */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden lg:block absolute top-20 right-20 text-[20rem] font-black text-white/5 select-none pointer-events-none"
      >
        "
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 w-full lg:w-auto"
          >
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="h-px w-8 md:w-12 bg-[#FF6E1F]" />
              <span className="text-[#FF4D01] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Testimonials</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] text-white font-bold text-center lg:text-left">
              Voices from<br />Our <span className="text-[#FF4D01]">Network</span>
            </h2>
          </motion.div>

          {/* Navigation - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:flex gap-4 self-end"
          >
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF6E1F] hover:border-[#FF6E1F] transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-2xl bg-[#FF6E1F] border border-[#FF6E1F] flex items-center justify-center text-white hover:bg-[#ff5500] transition-all duration-300 shadow-lg shadow-[#FF6E1F]/20 group"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} className="group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Testimonial Content with AnimatePresence */}
        <div className="relative min-h-[430px] md:min-h-[400px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center lg:items-start xl:items-center">
                
                {/* Left Side - Author Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-4 space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  {/* Large Initial */}
                  <div className="relative">
                    <div 
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl font-black text-white shadow-2xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${currentTestimonial.color}, ${currentTestimonial.color}dd)`
                      }}
                    >
                      {currentTestimonial.initial}
                    </div>
                  </div>

                  {/* Author Details */}
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1.5 md:mb-2">
                        {currentTestimonial.author}
                      </h3>
                      <p className="text-white/50 text-sm md:text-base font-medium">
                        {currentTestimonial.role}
                      </p>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 justify-center lg:justify-start">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <FiStar className="w-4 h-4 md:w-5 md:h-5 fill-[#FF6E1F] text-[#FF6E1F]" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="lg:col-span-8"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-4xl lg:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-14 xl:p-16">
                    {/* Quote Icon */}
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-10 h-10 sm:w-16 sm:h-16  rounded-xl md:rounded-2xl bg-[#FF6E1F] flex items-center justify-center text-3xl sm:text-4xl md:text-5xl text-white shadow-xl shadow-[#FF6E1F]/30">
                      "
                    </div>

                    <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-normal font-light text-white/90 relative z-10">
                      {currentTestimonial.quote}
                    </blockquote>

                    {/* Decorative Gradient */}
                    <div 
                      className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 rounded-full blur-[80px] md:blur-[100px] opacity-20 md:opacity-30"
                      style={{ background: currentTestimonial.color }}
                    />
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation - Mobile Only (Below Testimonial) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex lg:hidden justify-center gap-4 mt-8"
        >
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:bg-[#FF6E1F] active:border-[#FF6E1F] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-xl bg-[#FF6E1F] border border-[#FF6E1F] flex items-center justify-center text-white active:bg-[#ff5500] transition-all duration-300 shadow-lg shadow-[#FF6E1F]/20"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </motion.button>
        </motion.div>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 md:gap-3  mt-6 lg:mt-0"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="group relative"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div className={`w-12 md:w-14 lg:w-16 h-1 md:h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-[#FF6E1F]' 
                  : 'bg-white/20 group-hover:bg-white/40'
              }`} />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 w-12 md:w-14 lg:w-16 h-1 md:h-1.5 rounded-full bg-[#FF6E1F] shadow-lg shadow-[#FF6E1F]/50"
                />
              )}
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
