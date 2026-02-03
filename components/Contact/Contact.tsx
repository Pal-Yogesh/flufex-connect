'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiCheck } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    userType: '',
    services: [] as string[],
    message: ''
  });

  const [countryCode, setCountryCode] = useState('+91');

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div className="space-y-3">
        <label className="text-white/60 text-sm font-bold uppercase tracking-[0.15em]">
          Name
        </label>
        <div className="relative">
          <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6E1F] transition-all"
            required
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="space-y-3">
        <label className="text-white/60 text-sm font-bold uppercase tracking-[0.15em]">
          Phone Number
        </label>
        <div className="flex gap-4">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-[#FF6E1F] transition-all appearance-none cursor-pointer font-bold"
          >
            <option value="+91">India +91</option>
            <option value="+1">USA +1</option>
            <option value="+44">UK +44</option>
            <option value="+971">UAE +971</option>
          </select>
          <div className="relative flex-1">
            <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6E1F] transition-all"
              required
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="space-y-3">
        <label className="text-white/60 text-sm font-bold uppercase tracking-[0.15em]">
          Email
        </label>
        <div className="relative">
          <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6E1F] transition-all"
            required
          />
        </div>
      </div>

      {/* User Type Selection */}
      <div className="space-y-3">
        <label className="text-white/60 text-sm font-bold uppercase tracking-[0.15em]">
          Are you a Creator or a Brand?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Creator', 'Brand'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, userType: type.toLowerCase() })}
              className={`relative py-4 px-6 rounded-2xl border text-center transition-all duration-300 ${
                formData.userType === type.toLowerCase()
                  ? 'bg-[#FF6E1F]/10 border-[#FF6E1F] text-white'
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-semibold">{type}</span>
                {formData.userType === type.toLowerCase() && (
                  <FiCheck className="text-[#FF6E1F]" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Services Multi-Select */}
      <div className="space-y-3">
        <label className="text-white/60 text-sm font-bold uppercase tracking-[0.15em]">
          What services are you looking for?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Influencer Marketing',
            'Talent Management',
            'Video Production',
            'End to end talent management',
            'Others'
          ].map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => handleServiceToggle(service)}
              className={`relative py-4 px-6 rounded-2xl border text-left transition-all duration-300 ${
                formData.services.includes(service)
                  ? 'bg-[#FF6E1F]/10 border-[#FF6E1F] text-white'
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{service}</span>
                {formData.services.includes(service) && (
                  <FiCheck className="text-[#FF6E1F]" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#FF6E1F] hover:bg-[#ff5500] text-white font-black uppercase tracking-[0.15em] py-6 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-sm shadow-xl shadow-[#FF6E1F]/20"
      >
        Send Message
        <FiSend />
      </motion.button>
    </form>
  );
};

const ContactInfoCard = () => {
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: 'prabhat@flufexconnect.com',
      link: 'mailto:prabhat@flufexconnect.com'
    },
    {
      icon: <FiPhone size={24} />,
      label: 'Phone',
      value: '+91 8987672664',
      link: 'tel:+918987672664'
    },
    {
      icon: <FiMapPin size={24} />,
      label: 'Address',
      value: '606,6TH Floor Estate Plaza HB Road, Kantatoli, Ranchi, Ranchi- 834001, Jharkhand',
      link: 'https://maps.app.goo.gl/Xtq4ru9crPqYCTtU6'
    }
  ];

  return (
    <div className="bg-linear-to-br from-white/8 to-white/2 backdrop-blur-sm border border-white/10 rounded-[3rem] p-10 space-y-8">
      <div className="space-y-4">
        <h3 className="text-3xl font-black text-white uppercase tracking-tight">
          Get In Touch
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">
          Let's discuss how we can help amplify your brand or grow your creator business.
        </p>
      </div>

      <div className="h-px bg-linear-to-r from-white/20 via-white/5 to-transparent" />

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.a
            key={index}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-5 group cursor-pointer"
          >
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#FF6E1F]/10 border border-[#FF6E1F]/20 flex items-center justify-center text-[#FF6E1F] group-hover:bg-[#FF6E1F] group-hover:text-white transition-all duration-300">
              {info.icon}
            </div>
            <div className="flex-1 pt-1">
              <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                {info.label}
              </div>
              <div className="text-white text-lg font-semibold group-hover:text-[#FF6E1F] transition-colors">
                {info.value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <div className="pt-8 border-t border-white/10">
        <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Follow Us
        </p>
        <div className="flex gap-3">
          {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((social) => (
            <motion.button
              key={social}
              whileHover={{ y: -4 }}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF6E1F] hover:text-white hover:border-[#FF6E1F] transition-all duration-300"
            >
              {social[0]}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedGlobe = () => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Orbiting Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 rounded-full border border-[#FF6E1F]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FF6E1F] shadow-lg shadow-[#FF6E1F]/50" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4"
      >
        <div className="absolute inset-0 rounded-full border border-purple-600/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50" />
      </motion.div>

      {/* Central Globe */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-12 rounded-full bg-linear-to-br from-[#FF6E1F]/20 to-purple-600/20 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🌍</div>
          <div className="text-white font-black text-lg uppercase tracking-tight">
            Global
          </div>
          <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
            Reach
          </div>
        </div>
      </motion.div>

      {/* Floating Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 rounded-full bg-white/40"
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + (i % 4) * 25}%`
          }}
        />
      ))}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="relative bg-[#1A1A1A] bg-[url(/blur.svg)] bg-cover bg-center min-h-screen">
    

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-[#FF6E1F]" />
            <span className="text-[#FF6E1F] text-xs font-black uppercase tracking-[0.3em]">Contact Us</span>
            <div className="h-px w-16 bg-[#FF6E1F]" />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white">
            Let's <span className="text-[#FF6E1F]">Connect</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto">
            Ready to take your brand or creator business to the next level? We're here to help.
          </p>
        </motion.div>

        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left - Animated Globe */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:sticky lg:top-32 order-2 lg:order-1"
          >
            <AnimatedGlobe />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-center space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                  Available 24/7
                </span>
              </div>
            </motion.div>
          </motion.div> */}

          {/* Center - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/2 backdrop-blur-sm border border-white/10 rounded-[3rem] p-8 md:p-12 order-1 lg:order-2"
          >
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">
              Send us a Message
            </h2>
            <ContactForm />
          </motion.div>

          {/* Right - Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-32 order-3"
          >
            <ContactInfoCard />
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-full border border-white/10 bg-white/2">
            <span className="text-white/40 text-sm font-bold uppercase tracking-[0.2em]">
              India's Fastest Growing Creator Network
            </span>
          </div>
        </motion.div>

      </div>

      {/* Add custom scrollbar hide for dropdowns */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Contact;
