"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import { FiInstagram, FiYoutube } from "react-icons/fi";

// Define the Creator interface based on the structure in CreatorProfile.tsx
interface Creator {
  name: string;
  category: string;
  imageUrl: string;
  instagram?: string;
  youtube?: string;
}

// Data from CreatorProfile.tsx
const creators: Creator[] = [
  {
    name: "Sristy Dutta",
    category: "Beauty",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=60",
    instagram: "https://www.instagram.com/thesristydutta/",
    youtube: "https://www.youtube.com/@SristyDutta",
  },
  {
    name: "Jaanvi Taneja",
    category: "English",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&auto=format&fit=crop&q=60",
    instagram: "https://www.instagram.com/jaanvitanejaspeaks/",
    youtube: "https://www.youtube.com/@jaanvitanejaspeaks",
  },
  {
    name: "Busy Owaiss",
    category: "Import Export",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&auto=format&fit=crop&q=60",
    instagram: "https://www.instagram.com/busyowaiss/",
    youtube: "https://www.youtube.com/@busyowaiss",
  },
  {
    name: "Harsh Vira",
    category: "Finance",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=60",
    youtube: "https://www.youtube.com/@harshvira19",
  },
  {
    name: "Dr. Robin Sharma",
    category: "Ayurveda",
    imageUrl: "https://images.unsplash.com/photo-1492552181161-62217fc3076d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D",
    instagram: "https://www.instagram.com/dr.sharmarobin/",
    youtube: "https://www.youtube.com/@DrRobinSharma",
  },
  {
    name: "Puneet Nagpal",
    category: "Finance",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&auto=format&fit=crop&q=60",
    instagram: "https://www.instagram.com/cfppuneetnagpal/",
    youtube: "https://www.youtube.com/@cfppuneetnagpal",
  },
  {
    name: "Sahil Madaan",
    category: "Govt. Exam Preparation",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=60",
    instagram: "https://www.instagram.com/sahilmadaan_educator/",
  },
  {
    name: "Gig Neuro",
    category: "AI",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=60",
    instagram: "https://www.instagram.com/gigneuro/",
    youtube: "https://www.youtube.com/@gigneuro",
  },
  {
    name: "UPSC Study Fuel",
    category: "UPSC",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=60",
    instagram: "https://www.instagram.com/upscstudyfuel/",
  },
  {
    name: "Mandala Arts",
    category: "Mandala Arts",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
    instagram: "https://www.instagram.com/preet_tangledart/",
    youtube: "https://www.youtube.com/@preet_tangledart483",
  },
];

export function CreatorProfileMobile() {
  return (
    <div className="md:hidden w-full  h-[90vh] bg-[url(/about/about.svg)] bg-cover bg-center bg-[#1A1A1A] flex flex-col justify-center items-center py-10">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-4 py-2 rounded-full border-2 border-white/20 shadow-2xl text-lg font-semibold">
           {/* Flower icon (SVG inline to avoid dependency) */}
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 9 5 9 8C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8C15 5 12 2 12 2Z" fill="white"/>
            <path d="M12 13C12 13 9 16 9 19C9 20.66 10.34 22 12 22C13.66 22 15 20.66 15 19C15 16 12 13 12 13Z" fill="white"/>
            <path d="M2 12C2 12 5 9 8 9C9.66 9 11 10.34 11 12C11 13.66 9.66 15 8 15C5 15 2 12 2 12Z" fill="white"/>
            <path d="M13 12C13 12 16 9 19 9C20.66 9 22 10.34 22 12C22 13.66 20.66 15 19 15C16 15 13 12 13 12Z" fill="white"/>
          </svg>
          Our Creators
        </div>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[280px] h-[400px]"
      >
        {creators.map((creator, index) => (
          <SwiperSlide
            key={index}
            className="rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
          >
            <div className="relative w-full h-full">
              <Image
                src={creator.imageUrl}
                alt={creator.name}
                fill
                className="object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              {/* Category Tag */}
              <div className="absolute top-4 right-4 bg-[#FF6E1F] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {creator.category}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{creator.name}</h3>
                
                <div className="flex gap-4 mt-3">
                  {creator.instagram && (
                    <a 
                      href={creator.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF6E1F] transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                    >
                      <FiInstagram className="w-5 h-5" />
                    </a>
                  )}
                  {creator.youtube && (
                    <a 
                      href={creator.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF6E1F] transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                    >
                      <FiYoutube className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}