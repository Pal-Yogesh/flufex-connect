'use client';

import React from 'react';

const services = [
  {
    title: 'Talent Management',
    items: [
      'Creator representation',
      'Contract negotiations',
      'Career development',
      'Portfolio management'
    ]
  },
  {
    title: 'Influencer Marketing',
    items: [
      'Campaign strategy',
      'Brand partnerships',
      'Content creation',
      'Performance analytics'
    ],
    highlighted: true
  },
  {
    title: 'Digital Intellectual properties',
    items: [
      'IP development',
      'Content licensing',
      'Brand protection',
      'Monetization strategies'
    ]
  },
  {
    title: 'End to End Content Production',
    items: [
      'Video production',
      'Photography',
      'Post-production',
      'Distribution'
    ]
  }
];

const Services = () => {
  return (
    <section className="w-full bg-[#1A1A1A] px-6 md:px-12 lg:px-24 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF6E1F] px-5 py-2.5 rounded-full text-sm font-medium border border-[#FF6E1F]/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2L10 6L14 7L10 8L8 12L6 8L2 7L6 6L8 2Z" fill="currentColor"/>
            </svg>
            Services
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20">
          <span className="text-white">What do we </span>
          <span className="text-[#FF6E1F]">offer?</span>
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all ${
                service.highlighted
                  ? 'bg-[#FF6E1F] text-white shadow-xl shadow-[#FF6E1F]/20'
                  : 'bg-[#2A2A2A] text-gray-300 border border-gray-700/30 hover:border-gray-600/50'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm md:text-base flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-1.5 text-[#FF6E1F]">•</span>
                    <span className={service.highlighted ? 'text-white/90' : 'text-gray-400'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
