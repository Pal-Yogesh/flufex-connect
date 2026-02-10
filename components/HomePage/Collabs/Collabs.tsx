'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const collabData = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dopgj4ipn/image/upload/v1760595418/Seekho-logo_w7egp3.png",
  },
  {
    id: 2,
    img: "/creators/arivu.jpeg",
  },
  {
    id: 3,
    img: "/creators/superlearn2.webp",
  },
  {
    id: 4,
    img: "/creators/seekhojunior.png",
  },


];

const stats = [
  {
    value: '3000+',
    label: 'content delivered to entertainment',
    highlighted: false
  },
  {
    value: '120+',
    label: 'creators managed and scaled',
    highlighted: true
  }
];

// Marquee Component
const CollabsMarquee = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const content = marquee.querySelector('.marquee-content') as HTMLElement;
    if (!content) return;

    // Get the width of just the first set (not the duplicate)
    const firstSet = content.querySelector('.marquee-set-1') as HTMLElement;
    if (!firstSet) return;
    
    const contentWidth = firstSet.offsetWidth;

    // Enable hardware acceleration and crisp rendering
    gsap.set(content, {
      force3D: true,
      willChange: 'transform',
      x: 0
    });

    // Create GSAP animation with hardware acceleration
    const tl = gsap.to(content, {
      x: -contentWidth,
      duration: 8,
      ease: 'none',
      repeat: -1,
      force3D: true
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={marqueeRef} className={`relative overflow-hidden ${className}`}>
      {/* Left shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
      {/* Right shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

      <div
        className="flex marquee-content whitespace-nowrap"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        {/* First set of collabs */}
        <div className="flex items-center gap-6 marquee-set-1">
          {children}
        </div>
      
      </div>
    </div>
  );
};

const Collabs = () => {
  return (
    <section className="w-full bg-[#1A1A1A] px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="mb-6 sm:mb-8">
          <div
            className=''
          >

            <div style={{
              background: "linear-gradient(96.81deg, #000000 25.59%, #843700 152.58%)",

            }} className="border border-[#8C3A00] inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF4D01] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-base sm:text-lg md:text-xl lg:text-[24px] font-semibold">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                <path d="M2 4L8 2L14 4V8L8 14L2 8V4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              Collabs
            </div>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold mb-8 sm:mb-12 lg:mb-20 w-full lg:w-[40%] leading-tight">
            <span className="text-white">Endorsed by the </span>
            <span className="text-[#FF4D01]">Industry&apos;s Finest.</span>
          </h2>

          {/* Marquee on the right side - 50% width */}
          <div className="w-full lg:w-[50%] h-[200px] sm:h-[250px] lg:h-[300px] relative">
            <CollabsMarquee className="h-full">
              {collabData.map((collab, index) => (
                <div
                  key={collab.id}
                  className="shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={collab.img}
                    alt={`Collab ${collab.id.toString()}`}
                    width={300}
                    height={300}
                    className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] object-contain"
                    quality={100}
                  />
                </div>
              ))}
            </CollabsMarquee>
          </div>
        </div>

        <div className="flex justify-start lg:justify-between gap-4 sm:gap-5 lg:gap-16 items-start">
          {/* Stats Cards */}
          <div className="flex  gap-4 sm:gap-5 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`w-full sm:w-[48%] md:w-[45%] lg:w-[35%] p-4 sm:p-5 ${stat.highlighted
                  ? 'bg-[#FF6E1F] text-white shadow-xl shadow-[#FF6E1F]/20 rounded-bl-[37px] rounded-tr-[37px]'
                  : 'bg-white text-[#373737] border border-gray-700/30 rounded-tr-[37px] rounded-bl-[37px]'
                  }`}
              >
                <div className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-2 sm:mb-3 leading-none">{stat.value}</div>
                <div className={`text-sm sm:text-base lg:text-[20px] ${stat.highlighted ? 'text-white' : 'text-[#373737]'}`}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collabs;
