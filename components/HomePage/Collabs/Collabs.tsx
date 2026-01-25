'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const collabData = [
  {
    id: 1,
    img: "/apple.svg",
  },
  {
    id: 2,
    img: "/apple.svg",
  },
  {
    id: 3,
    img: "/apple.svg",
  },
  {
    id: 4,
    img: "/apple.svg",
  },
  {
    id: 5,
    img: "/apple.svg",
  },
  {
    id: 6,
    img: "/apple.svg",
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
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
      {/* Right shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

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
    <section className="w-full bg-[#1A1A1A] px-6 md:px-12 lg:px-24 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="mb-8">
          <div
            className=''
          >

            <div style={{
              background: "linear-gradient(96.81deg, #000000 25.59%, #843700 152.58%)",

            }} className="border border-[#8C3A00] inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF4D01] px-6 py-2.5 rounded-full  text-[24px] font-semibold">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L8 2L14 4V8L8 14L2 8V4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              Collabs
            </div>
          </div>
        </div>


        <div className="flex justify-between ">

          {/* Section Title */}
          <h2 className="text-[75px] font-bold mb-20 w-[40%] leading-tight">
            <span className="text-white">Endorsed by the </span>
            <span className="text-[#FF4D01]">Industry&apos;s Finest.</span>
          </h2>

          {/* Marquee on the right side - 50% width */}
          <div className="w-[50%] h-[300px] relative">
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
                    className="w-[300px] h-[300px] object-contain"
                    quality={100}
                  />
                </div>
              ))}
            </CollabsMarquee>
          </div>
        </div>

        <div className="flex justify-between gap-16 items-start">
          {/* Stats Cards */}
          <div className="flex gap-5 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`w-[35%] p-5 ${stat.highlighted
                  ? 'bg-[#FF6E1F] text-white shadow-xl shadow-[#FF6E1F]/20 rounded-bl-[37px] rounded-tr-[37px]'
                  : 'bg-white text-[#373737] border border-gray-700/30 rounded-tr-[37px] rounded-bl-[37px]'
                  }`}
              >
                <div className="text-[40px] font-semibold mb-3 leading-none">{stat.value}</div>
                <div className={`text-[20px] ${stat.highlighted ? 'text-white' : 'text-[#373737]'}`}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Collabs;
