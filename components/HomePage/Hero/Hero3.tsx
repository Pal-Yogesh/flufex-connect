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
          <div className="flex gap-3 justify-end items-start h-full">
            {/* Leftmost Column - 2 images stacked, starts highest */}
            <div className="flex flex-col gap-3">
              {/* Top Image - Small horizontal (143x120) */}
              <div className="relative">
                <Image 
                  src="/hero/Rectangle 30.svg" 
                  alt="Creator" 
                  width={1000} 
                  height={1000} 
                  className="w-[143px] h-[120px] object-cover rounded-2xl" 
                  priority
                  style={{ borderRadius: '16px' }}
                />
              </div>
              {/* Bottom Image - Larger horizontal (228x148) */}
              <div className="relative">
                <Image 
                  src="/hero/Rectangle 27.svg" 
                  alt="Creator" 
                  width={228} 
                  height={148} 
                  className="w-[228px] h-[248px]  rounded-2xl" 
                  // style={{ borderRadius: '16px' }}
                />
              </div>
            </div>

            {/* Middle Column - 2 images stacked, starts slightly lower, contains largest image */}
            <div className="flex flex-col gap-3 pt-10">
              {/* Top Image - Horizontal (228x152) */}
              <div className="relative">
                <Image 
                  src="/hero/Rectangle 29.svg" 
                  alt="Creator" 
                  width={228} 
                  height={152} 
                  className="w-[228px] h-[152px]  rounded-2xl" 
                  style={{ borderRadius: '16px' }}
                />
              </div>
              {/* Bottom Image - Large vertical (228x368) - THE LARGEST IMAGE */}
              <div className="relative">
                <Image 
                  src="/hero/Rectangle 26.svg" 
                  alt="Creator" 
                  width={228} 
                  height={368} 
                  className="w-[228px] h-[368px] object-cover rounded-2xl" 
                  style={{ borderRadius: '16px' }}
                />
              </div>
            </div>

            {/* Rightmost Column - 1 tall narrow vertical image, starts significantly lower */}
            <div className="flex flex-col pt-28">
              <div className="relative">
                <Image 
                  src="/hero/Rectangle 28.svg" 
                  alt="Creator" 
                  width={143} 
                  height={357} 
                  className="w-[143px] h-[357px] object-cover rounded-2xl" 
                  style={{ borderRadius: '16px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Navigation */}
        <div className="pt-20 border-t border-gray-800/50 relative">
          <div className="flex items-center gap-4 justify-center flex-wrap relative px-4">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand) => (
              <button
                key={brand}
                className="px-6 py-3 rounded-xl font-medium text-sm text-white bg-[#2A2A2A] border border-[#FF6E1F]/70 transition-all relative z-10 shadow-[0_0_6px_rgba(255,110,31,0.4)] hover:shadow-[0_0_10px_rgba(255,110,31,0.6)] hover:border-[#FF6E1F]"
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
