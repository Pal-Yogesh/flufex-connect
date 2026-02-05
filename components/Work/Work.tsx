"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Flower } from "../About/AboutHero"; 
import Link from "next/link";

// Mock Data for Work Projects
const publications = [
  "Financial Express",
  "Hindustan Times",
  "The Hindu",
  "Forbes",
  "Exchange4Media",
  "YourStory",
  "Storyboard18",
  "DNA India"
];

const projects = [
  {
    id: 1,
    title: "Urban Company",
    category: "Ad Film",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
    description: "Home services campaign featuring top lifestyle creators."
  },
  {
    id: 2,
    title: "Mamaearth",
    category: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
    description: "Goodness Inside campaign spreading awareness about natural products."
  },
  {
    id: 3,
    title: "Boat Lifestyle",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
    description: "Launching the new Bassheads series with high-energy reels."
  },
  {
    id: 4,
    title: "LensKart",
    category: "Production",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop",
    description: "Styling the nation with the latest eyewear collection."
  },
  {
    id: 5,
    title: "Myntra",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop",
    description: "End of Reason Sale hype campaign."
  },
  {
    id: 6,
    title: "Swiggy",
    category: "Food & Bev",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop",
    description: "Delivering happiness with targeted localized content."
  }
];

const categories = ["All", "Ad Film", "Influencer Marketing", "Social Media", "Production", "Fashion", "Food & Bev"];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-[#1A1A1A] min-h-screen bg-[url(/blur.svg)] bg-cover bg-center pt-24 pb-20 px-4 sm:px-6 lg:px-12 text-white">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border-2 border-white/20 shadow-2xl text-base sm:text-lg font-semibold"
        >
          <Flower />
          Our Work
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Explore our <span className="text-[#FF6E1F]">Latest Projects</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
           className="text-gray-400 text-lg max-w-2xl"
        >
          Where creativity meets strategy. Check out some of the campaigns we've executed for top brands.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
              activeCategory === category
                ? "bg-[#FF6E1F] border-[#FF6E1F] text-white"
                : "bg-transparent border-gray-600 text-gray-400 hover:border-[#FF6E1F] hover:text-[#FF6E1F]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-4/3 border border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[#FF6E1F] text-sm font-medium mb-1 tracking-wider uppercase">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                    
                    <div className="mt-4 inline-flex items-center gap-2 text-white font-medium group/btn">
                      View Project <FiArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet view info (always visible on small screens or if preferred style) */}
              <div className="mt-4 md:hidden">
                 <h3 className="text-xl font-bold text-white">{project.title}</h3>
                 <p className="text-[#FF6E1F] text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Featured Publications Section */}
      <div className="mt-24 mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          As Featured in <span className="text-[#FF6E1F]">Leading Publications</span>
        </motion.h3>
        
        <div className="relative flex overflow-x-hidden group">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

            <motion.div 
              className="flex gap-16 py-4 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ 
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...publications, ...publications, ...publications].map((pub, index) => (
                <div 
                  key={index} 
                  className="text-2xl md:text-4xl font-bold text-gray-500 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {pub}
                </div>
              ))}
            </motion.div>
        </div>
      </div>

      {/* Footer / CTA Section in Work Page */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-6">Want to see more?</p>
        <Link href="/contact" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-3 cursor-pointer bg-white text-black font-bold rounded-full hover:bg-[#FF6E1F] hover:text-white transition-colors duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Work;
