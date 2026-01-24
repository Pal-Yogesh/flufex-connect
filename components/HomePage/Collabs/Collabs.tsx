'use client';

import React from 'react';
import Image from 'next/image';

const stats = [
  {
    value: '3000+',
    label: 'creators endorsed',
    highlighted: false
  },
  {
    value: '120+',
    label: 'successful campaigns',
    highlighted: true
  }
];

const Collabs = () => {
  return (
    <section className="w-full bg-[#1A1A1A] px-6 md:px-12 lg:px-24 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF6E1F] px-5 py-2.5 rounded-full text-sm font-medium border border-[#FF6E1F]/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4L8 2L14 4V8L8 14L2 8V4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Collabs
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-20">
          <span className="text-white">Endorsed by the </span>
          <span className="text-[#FF6E1F]">Industry&apos;s Finest.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-10 rounded-xl ${
                  stat.highlighted
                    ? 'bg-[#FF6E1F] text-white shadow-xl shadow-[#FF6E1F]/20'
                    : 'bg-[#2A2A2A] text-white border border-gray-700/30'
                }`}
              >
                <div className="text-6xl md:text-7xl font-bold mb-3 leading-none">{stat.value}</div>
                <div className="text-lg md:text-xl text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Brand Logos */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#FF6E1F] p-10 rounded-xl flex flex-col items-center justify-center min-h-[220px] shadow-xl shadow-[#FF6E1F]/20">
              <div className="text-5xl mb-4">🍎</div>
              <div className="text-white font-semibold text-xl">Apple inc.</div>
            </div>
            <div className="bg-white p-10 rounded-xl flex flex-col items-center justify-center min-h-[220px] shadow-lg">
              <div className="text-4xl font-bold text-red-500 mb-2">zomato</div>
              <div className="text-gray-600 text-sm">Food Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collabs;
