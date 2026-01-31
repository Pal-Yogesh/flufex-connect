'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronDown, FiMapPin, FiInstagram, FiYoutube } from 'react-icons/fi';

// Filter categories
const categories = [
  'All',
  'Automotive',
  'Luxury',
  'Environment',
  'Parenting',
  'Home & Living',
  'Art & Design',
  'Sports',
  'Gaming',
  'Beauty',
  'Fashion',
  'Technology',
  'Finance',
  'Business',
  'Education',
  'Music',
  'Health & Fitness',
  'Food',
  'Dance',
  'Entertainment',
  'Travel',
  'Podcast',
  'Lifestyle',
];

// Mock Creator data with more details
const creatorsData = [
  { 
    id: 1, 
    name: 'Sutej Pannu', 
    category: 'Lifestyle', 
    location: 'Mumbai', 
    tagline: 'Artistic Virtuoso',
    views: '12.5M+', 
    followers: '1.2M',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Sarah Chen', 
    category: 'Business', 
    location: 'Delhi', 
    tagline: 'Entrepreneur & Visionary',
    views: '8.2M+', 
    followers: '850K',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Marcus Thorne', 
    category: 'Gaming', 
    location: 'Bangalore', 
    tagline: 'The Pro Gamer',
    views: '25.8M+', 
    followers: '4.5M',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    name: 'Elena Gilbert', 
    category: 'Health & Fitness', 
    location: 'Mumbai', 
    tagline: 'Fitness Enthusiast',
    views: '15.1M+', 
    followers: '2.1M',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    name: 'Jordan Sparks', 
    category: 'Music', 
    location: 'Punjab', 
    tagline: 'Melody King',
    views: '30.4M+', 
    followers: '3.8M',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    name: 'David Wu', 
    category: 'Technology', 
    location: 'Noida', 
    tagline: 'Tech Guru',
    views: '10.9M+', 
    followers: '1.1M',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 7, 
    name: 'Maya Angel', 
    category: 'Podcast', 
    location: 'Mumbai', 
    tagline: 'Voice of Reason',
    views: '5.2M+', 
    followers: '450K',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 8, 
    name: 'Ranveer Allahbadia', 
    category: 'Entertainment', 
    location: 'Mumbai', 
    tagline: 'Podcast Host & Entrepreneur',
    views: '85.2M+', 
    followers: '12M',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 9, 
    name: 'Sophie Turner', 
    category: 'Travel', 
    location: 'London', 
    tagline: 'Globe Trotter',
    views: '18.7M+', 
    followers: '2.5M',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop' 
  },
];

const CreatorCardItem = ({ creator }: { creator: typeof creatorsData[0] }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="group relative aspect-[3/4.5] overflow-hidden rounded-[2.5rem]  cursor-pointer shadow-2xl"
    >
      {/* Background Image */}
      <img
        src={creator.image}
        alt={creator.name}
        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

    
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col gap-2"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20">
              {creator.category}
            </span>
            <div className="flex items-center gap-1.5 text-white/60 text-[10px] font-bold uppercase tracking-widest pl-1">
              <FiMapPin className="text-[#FF6E1F]" /> {creator.location}
            </div>
          </motion.div>

          <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
            <FiInstagram size={18} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-[#FF6E1F] text-[10px] font-black uppercase tracking-[0.3em] mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              {creator.tagline}
            </div>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-[0.85] transition-all duration-500 group-hover:text-[#FF6E1F]">
              {creator.name.split(' ')[0]}<br />
              <span className="text-white group-hover:pl-4 transition-all duration-500">{creator.name.split(' ')[1]}</span>
            </h3>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">{creator.views}</span>
                <span className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em]">Views</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">{creator.followers}</span>
                <span className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em]">Fans</span>
              </div>
            </div>

            <motion.div
              className="h-14 w-14 rounded-full bg-[#FF6E1F] flex items-center justify-center text-white shadow-lg shadow-[#FF6E1F]/20 translate-x-[60px] group-hover:translate-x-0 transition-transform duration-500"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CreatorCard() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Featured');

  const filteredCreators = useMemo(() => {
    let result = creatorsData.filter(creator => {
      const matchesCategory = activeFilter === 'All' || creator.category === activeFilter;
      const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'Name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'Views') {
      result.sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
    }

    return result;
  }, [activeFilter, searchQuery, sortBy]);

  return (
    <div className=" py-20">
      <div className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-end justify-between"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                Breakout<br /><span className="text-[#FF6E1F]">Stories</span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="SEARCH FOR TALENT..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold tracking-widest focus:outline-none focus:border-[#FF6E1F] transition-all text-white placeholder:text-white/20"
                />
              </div>

              <div className="relative group min-w-[180px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-12 text-xs font-bold tracking-widest focus:outline-none focus:border-[#FF6E1F] transition-all text-white cursor-pointer uppercase"
                >
                  <option value="Featured">Featured</option>
                  <option value="Name">Name (A-Z)</option>
                  <option value="Views">Total Reach</option>
                </select>
                <FiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scrollable Categories */}
      <div className="mb-16 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar py-6 px-6 md:px-12 lg:px-24 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeFilter === category
                    ? 'bg-[#FF6E1F] text-white border-[#FF6E1F] shadow-lg shadow-[#FF6E1F]/20'
                    : 'bg-transparent text-white/40 border-white/10 hover:border-white/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            <AnimatePresence mode='popLayout'>
              {filteredCreators.map((creator) => (
                <CreatorCardItem key={creator.id} creator={creator} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCreators.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-40 border-2 border-dashed border-white/5 rounded-[3rem]"
            >
              <h3 className="text-3xl font-black text-white/20 uppercase tracking-tighter">No creators found in this genre</h3>
              <p className="text-white/10 font-bold uppercase tracking-widest mt-2 text-xs">Try searching for a different name or category</p>
              <button 
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-8 px-8 py-4 bg-white/5 hover:bg-white/10 text-[#FF6E1F] font-black uppercase tracking-widest text-xs rounded-full transition-all"
              >
                RESET ALL FILTERS
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
