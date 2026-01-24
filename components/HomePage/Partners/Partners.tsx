'use client';

import React from 'react';

const Partners = () => {
  const partnerCount = 9;
  const highlightedPartners = [2, 5, 8]; // Indices of highlighted partners

  return (
    <section className="w-full bg-[#1A1A1A] px-6 md:px-12 lg:px-24 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[#2A2A2A] rounded-3xl p-10 md:p-16 border border-gray-700/30">
          {/* Section Title */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF6E1F] flex items-center gap-3">
              See who we&apos;ve helped
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </h2>
          </div>

          {/* Section Label */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF6E1F] px-5 py-2.5 rounded-full text-sm font-medium border border-[#FF6E1F]/30">
              Our partners
            </div>
          </div>

          {/* Partner Grid */}
          <div className="grid grid-cols-3 gap-5 md:gap-6">
            {Array.from({ length: partnerCount }).map((_, index) => (
              <div
                key={index}
                className="relative bg-[#1A1A1A] rounded-xl aspect-square flex items-center justify-center p-6 border border-gray-700/30 hover:border-gray-600/50 transition-colors"
              >
                {highlightedPartners.includes(index) ? (
                  <div className="absolute top-3 right-3 bg-[#FF6E1F] text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    Some Brand
                  </div>
                ) : null}
                <div className="text-gray-500 text-sm text-center">Partner</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
