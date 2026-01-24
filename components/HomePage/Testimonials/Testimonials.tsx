'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Working with this team completely changed how I looked at my content. What started as regular creator work was structured into a long-term IP with clear monetization, positioning and growth strategy. They didn't just bring brand deals—they built systems, protected my creative direction, and helped me scale sustainably. For the first time, I felt like I was running a real business, not just chasing campaigns.",
    author: "E",
    role: "Entertainment Creator & IP Owner"
  },
  {
    quote: "The best decision I made for my creator career. They transformed my approach from short-term campaigns to building a sustainable business.",
    author: "S",
    role: "Lifestyle Creator"
  },
  {
    quote: "Professional, strategic, and genuinely invested in my success. They don't just manage—they build empires.",
    author: "M",
    role: "Tech Content Creator"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#F0F0F0] px-6 md:px-12 lg:px-24 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={nextTestimonial}
              className="bg-[#FF6E1F] text-white w-16 h-16 rounded-xl flex items-center justify-center hover:bg-[#FF8533] transition-colors shadow-lg shadow-[#FF6E1F]/20"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M19 12L12 19L5 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={prevTestimonial}
              className="bg-[#FF6E1F] text-white w-16 h-16 rounded-xl flex items-center justify-center hover:bg-[#FF8533] transition-colors shadow-lg shadow-[#FF6E1F]/20"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="flex-1">
            {/* Section Label */}
            <div className="flex justify-end mb-8">
              <div className="inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF6E1F] px-5 py-2.5 rounded-full text-sm font-medium border border-[#FF6E1F]/30">
                Testimonials
              </div>
            </div>

            {/* Section Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
              <span className="text-gray-800">Voices from Our </span>
              <span className="text-[#FF6E1F]">Network</span>
            </h2>

            {/* Testimonial Card */}
            <div className="bg-[#FF6E1F] rounded-3xl p-10 md:p-14 text-white shadow-xl">
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-10 font-medium">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  {currentTestimonial.author}
                </div>
                <div>
                  <div className="font-bold text-xl">{currentTestimonial.author}</div>
                  <div className="text-white/80 text-base">—{currentTestimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
