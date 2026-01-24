'use client';

import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[url(/herobg.svg)] bg-cover bg-center w-full bg-[#1A1A1A] px-6 md:px-12 lg:px-24 pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start mb-24">
          {/* Left Content */}
          <div className="space-y-10 pt-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
              <span className="text-white font-bold">India&apos;s Largest </span>
              <br />
              <span className="text-[#FF6E1F] font-bold">Creator</span>
              <span className="text-white font-bold"> Management Ecosystem</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-medium">
              Empowering creators with <span className="font-bold text-white">structure, strategy, and scale.</span> We build long-term creator businesses, not just campaigns. Because influence deserves enterprise-level growth.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4 pt-6">
              <button className="bg-[#FF6E1F] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#FF8533] transition-colors shadow-lg shadow-[#FF6E1F]/20 flex items-center gap-3">
                SEE FOR YOURSELF
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image Gallery - Staggered Layout matching the design exactly */}
          <div className="flex gap-4 justify-end items-start">
            {/* Left Column - 3 stacked images with staggered effect */}
            <div className="flex flex-col gap-4">
              {/* Top Image - Horizontal rectangular (143x120) */}
              <div className="relative w-[143px]">
                <Image 
                  src="/hero/Rectangle 30.svg" 
                  alt="Creator" 
                  width={143} 
                  height={120} 
                  className="w-full h-[120px] object-cover rounded-2xl" 
                  priority
                />
              </div>
              {/* Middle Image - Horizontal (228x152), offset to right creating staggered effect */}
              <div className="relative w-[228px] ml-6">
                <Image 
                  src="/hero/Rectangle 29.svg" 
                  alt="Creator" 
                  width={228} 
                  height={152} 
                  className="w-full h-[152px] object-cover rounded-2xl" 
                />
              </div>
              {/* Bottom Image - Horizontal (228x148), aligned with top image */}
              <div className="relative w-[228px]">
                <Image 
                  src="/hero/Rectangle 27.svg" 
                  alt="Creator" 
                  width={228} 
                  height={148} 
                  className="w-full h-[148px] object-cover rounded-2xl" 
                />
              </div>
            </div>

            {/* Middle Column - Single large vertical image (228x368), top aligned with vertical center of left top image */}
            <div className="flex flex-col pt-10">
              <div className="relative w-[228px]">
                <Image 
                  src="/hero/Rectangle 26.svg" 
                  alt="Creator" 
                  width={228} 
                  height={368} 
                  className="w-full h-[368px] object-cover rounded-2xl" 
                />
              </div>
            </div>

            {/* Right Column - 2 narrow tall images (143x357) stacked vertically, top aligned with left top image */}
            <div className="flex flex-col gap-4">
              {/* Top narrow tall image - aligned with top of left column */}
              <div className="relative w-[143px]">
                <Image 
                  src="/hero/Rectangle 28.svg" 
                  alt="Creator" 
                  width={143} 
                  height={357} 
                  className="w-full h-[357px] object-cover rounded-2xl" 
                />
              </div>
              {/* Bottom narrow tall image - stacked directly below with gap */}
              <div className="relative w-[143px]">
                <Image 
                  src="/hero/Rectangle 28.svg" 
                  alt="Creator" 
                  width={143} 
                  height={357} 
                  className="w-full h-[357px] object-cover rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Navigation */}
        <div className="pt-12 border-t border-gray-800/50 relative">
          <div className="flex items-center gap-6 justify-center flex-wrap relative px-4">
            {/* Orange connecting line */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#FF6E1F]/40 to-transparent -translate-y-1/2 z-0"></div>
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand, index) => (
              <button
                key={brand}
                className={`px-8 py-4 rounded-xl font-medium transition-all relative z-10 ${
                  index === 0
                    ? 'bg-[#FF6E1F] text-white shadow-lg shadow-[#FF6E1F]/30'
                    : 'bg-[#2A2A2A] text-gray-400 hover:text-white hover:bg-[#333] border border-gray-700/50'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
