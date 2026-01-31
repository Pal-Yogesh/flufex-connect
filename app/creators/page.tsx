"use client";

import React, { useRef, useState } from 'react';
import CreatorAll from '@/components/Creator/CreatorAll';
import CreatorCard from '@/components/Creator/CreatorCard';
import CreatorProfile from '@/components/Creator/CreatorProfile';

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  



  return (
    <div style={{ fontFamily: 'var(--font-bricolage-grotesque)' }} className="bg-[#1A1A1A]">
      {/* Scroll-driven Profile Section */}
      <div ref={containerRef} className="h-[690vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[url(/about/about.svg)] bg-cover bg-center">
          
          <CreatorProfile />
        </div>
      </div>

      {/* Hero & Stats Section */}
      <div className=''>

      <div className="relative z-10 ">
        <CreatorAll />
      </div>

      {/* Filterable Creators Grid */}
      <div className="relative z-10 bg-[url(/blur.svg)] bg-cover bg-center">
        <CreatorCard />
      </div>
      </div>
    </div>
  );
};

export default Page;
