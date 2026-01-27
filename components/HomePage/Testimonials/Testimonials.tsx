// 'use client';

// import React, { useState } from 'react';

// const testimonials = [
//   {
//     quote: "Working with this team completely changed how I looked at my content. What started as regular creator work was structured into a long-term IP with clear monetization, positioning and growth strategy. They didn't just bring brand deals—they built systems, protected my creative direction, and helped me scale sustainably. For the first time, I felt like I was running a real business, not just chasing campaigns.",
//     author: "E",
//     role: "Entertainment Creator & IP Owner"
//   },
//   {
//     quote: "The best decision I made for my creator career. They transformed my approach from short-term campaigns to building a sustainable business.",
//     author: "S",
//     role: "Lifestyle Creator"
//   },
//   {
//     quote: "Professional, strategic, and genuinely invested in my success. They don't just manage—they build empires.",
//     author: "M",
//     role: "Tech Content Creator"
//   }
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <section className="w-full bg-[#F0F0F0] px-6 md:px-12 lg:px-24 py-20 md:py-32">
//       <div className="max-w-[1400px] mx-auto">
//         <div className="flex flex-col lg:flex-row gap-16 items-start">
//           {/* Navigation Buttons */}
//           <div className="flex flex-col gap-4">
//             <button
//               onClick={nextTestimonial}
//               className="bg-[#FF6E1F] text-white w-16 h-16 rounded-xl flex items-center justify-center hover:bg-[#FF8533] transition-colors shadow-lg shadow-[#FF6E1F]/20"
//               aria-label="Next testimonial"
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 5V19M19 12L12 19L5 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//             <button
//               onClick={prevTestimonial}
//               className="bg-[#FF6E1F] text-white w-16 h-16 rounded-xl flex items-center justify-center hover:bg-[#FF8533] transition-colors shadow-lg shadow-[#FF6E1F]/20"
//               aria-label="Previous testimonial"
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//           </div>

//           {/* Testimonial Content */}
//           <div className="flex-1">
//             {/* Section Label */}
//             <div className="flex justify-end mb-8">
//               <div className="inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF6E1F] px-5 py-2.5 rounded-full text-sm font-medium border border-[#FF6E1F]/30">
//                 Testimonials
//               </div>
//             </div>

//             {/* Section Title */}
//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
//               <span className="text-gray-800">Voices from Our </span>
//               <span className="text-[#FF6E1F]">Network</span>
//             </h2>

//             {/* Testimonial Card */}
//             <div className="bg-[#FF6E1F] rounded-3xl p-10 md:p-14 text-white shadow-xl">
//               <blockquote className="text-xl md:text-2xl leading-relaxed mb-10 font-medium">
//                 &ldquo;{currentTestimonial.quote}&rdquo;
//               </blockquote>
//               <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
//                   {currentTestimonial.author}
//                 </div>
//                 <div>
//                   <div className="font-bold text-xl">{currentTestimonial.author}</div>
//                   <div className="text-white/80 text-base">—{currentTestimonial.role}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import "./ScrollbarHide.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "/logo.JPEG",
    image2: "/logo2.JPEG",
    rating: 5,
    text: "Working with Flufex Connect completely transformed my creator career. They didn't just bring brand deals—they built systems and helped me scale sustainably. For the first time, I feel like I'm running a real business, not just chasing campaigns.",
    name: "Sarah Chen",
    company: "Entertainment Creator & IP Owner",
  },
  {
    id: 2,
    image: "/logo.JPEG",
    image2: "/logo2.JPEG",
    rating: 5,
    text: "The best decision I made for my creator journey. Flufex Connect transformed my approach from short-term campaigns to building a sustainable, long-term business. Their strategic guidance and industry connections are unmatched.",
    name: "Raj Patel",
    company: "Lifestyle Creator",
  },
  {
    id: 3,
    image: "/logo.JPEG",
    image2: "/logo2.JPEG",
    rating: 5,
    text: "Professional, strategic, and genuinely invested in my success. They don't just manage creators—they build empires. The team's expertise in IP development and brand partnerships has been invaluable.",
    name: "Alex Martinez",
    company: "Tech Content Creator",
  },
  {
    id: 4,
    image: "/logo.JPEG",
    image2: "/logo2.JPEG",
    rating: 5,
    text: "Flufex Connect helped us scale our creator partnerships program from 10 to 3000+ creators. Their data-driven approach and comprehensive management services delivered measurable ROI for our brand.",
    name: "Priya Sharma",
    company: "Brand Marketing Director",
  },
  {
    id: 5,
    image: "/logo.JPEG",
    image2: "/logo2.JPEG",
    rating: 5,
    text: "From content production to IP protection, Flufex Connect handles everything end-to-end. Their team's creativity and strategic thinking helped us build a sustainable creator business that goes beyond just views and likes.",
    name: "Michael Thompson",
    company: "Digital Content Producer",
  },
];

const Testimonial = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (id: number) => {
    setActiveTestimonial(id);

    const cardElement = document.getElementById(`testimonial-${id}`);
    if (cardElement && scrollContainerRef.current) {
      const containerLeft =
        scrollContainerRef.current.getBoundingClientRect().left;
      const cardLeft = cardElement.getBoundingClientRect().left;
      const scrollOffset = cardLeft - containerLeft - 100; 

      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-24 bg-[url(/herobg.svg)] bg-cover bg-center  pt-12 pb-24">
      <div className="">
        {/* Section Label */}

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold mb-5 leading-tight">
          <span className="text-[#FF6A2A]">Voices </span>
          <span className="text-[#000000]">from Our Network</span>
        </h2>
        <div className="mb-8">
          <div style={{
            background: "linear-gradient(96.81deg, #000000 25.59%, #843700 152.58%)",
          }} className="border border-[#8C3A00] inline-flex items-center gap-2 bg-[#FF6E1F]/20 text-[#FF4D01] px-6 py-2.5 rounded-full text-[24px] font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4L8 2L14 4V8L8 14L2 8V4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            Testimonials
          </div>
        </div>

        <div className="bg-[#1A1A1A] py-20 p-[3%] relative rounded-4xl shadow-2xl">
          {/* Navigation Arrows */}
           {/* <div className="absolute top-1/2 left-4 right-4 flex justify-between z-10">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-[#FF6E1F] text-white flex items-center justify-center hover:bg-[#FF8533] transition-all shadow-lg shadow-[#FF6E1F]/20 transform -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-[#FF6E1F] text-white flex items-center justify-center hover:bg-[#FF8533] transition-all shadow-lg shadow-[#FF6E1F]/20 transform -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>  */}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar  gap-4 md:gap-5 lg:gap-6 pb-8 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                id={`testimonial-${testimonial.id}`}
                className={`flex-shrink-0 transition-all duration-800 snap-both md:snap-center
                  ${
                    activeTestimonial === testimonial.id
                      ? "w-[75%] md:w-[70%] lg:w-[55%]"
                      : "w-[196px] cursor-pointer"
                  }`}
                onClick={() =>
                  activeTestimonial !== testimonial.id &&
                  handleCardClick(testimonial.id)
                }
              >
                <div
                  className={`flex bg-[#2A2A2A] rounded-tl-[40px] rounded-br-[40px] lg:rounded-tl-[70px] lg:rounded-br-[70px] overflow-hidden h-[190px] md:h-[300px] lg:h-[434px] border border-gray-700/30
                  ${
                    activeTestimonial !== testimonial.id
                      ? "hover:shadow-lg hover:scale-105 transition-transform hover:border-[#FF6E1F]/50"
                      : "border-[#FF6E1F]/50 shadow-xl shadow-[#FF6E1F]/20"
                  }`}
                >
                  <div
                    className={`relative flex-shrink-0 
                    ${
                      activeTestimonial === testimonial.id
                        ? "w-[80px] md:w-[196px] h-[190px] md:h-[300px] lg:h-[434px]"
                        : "w-[80px] md:w-[196px] h-[190px] md:h-[300px] lg:h-[434px]"
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      width={1000}
                      height={1000}
                      alt="testimonial"
                      className=  "w-[80px] md:w-full h-[190px] md:h-[300px] lg:h-[434px] rounded-tl-[40px] rounded-br-[40px] lg:rounded-tl-[70px] lg:rounded-br-[70px] object-cover"
                    />
                  </div>

                  {activeTestimonial === testimonial.id && (
                    <div className="text-white p-4 md:p-6 lg:p-10 flex flex-col animate-fadeIn">
                      <div className="flex mb-2 ">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#FF6E1F]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <p className="text-[10px] md:text-[16px] lg:text-[24px] leading-tight flex-grow text-gray-200 leading-relaxed">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="pt-2 md:pt-4 flex gap-4 items-center">
                        <div className="md:w-[64px] md:h-[64px] w-[26px] h-[26px] rounded-full overflow-hidden relative border-2 border-[#FF6E1F]/30">
                          <Image
                            src={testimonial.image2}
                            width={1000}
                            height={1000}
                            alt="testimonial"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[8.18px] md:text-[18px] lg:text-[20px] text-white font-semibold">
                            {testimonial.name}
                          </p>
                          <p className="text-[6.54px] md:text-[14px] lg:text-[16px] text-[#FF6E1F]">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

     
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => handleCardClick(testimonial.id)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer
                  ${
                    activeTestimonial === testimonial.id
                      ? "bg-[#FF6E1F]"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`View testimonial ${testimonial.id}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}} />
    </section>
  );
};

export default Testimonial;