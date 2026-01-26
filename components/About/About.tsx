'use client';
import { motion } from 'framer-motion';

const Flower = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 9 5 9 8C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8C15 5 12 2 12 2Z" fill="white" />
    <path d="M12 13C12 13 9 16 9 19C9 20.66 10.34 22 12 22C13.66 22 15 20.66 15 19C15 16 12 13 12 13Z" fill="white" />
    <path d="M2 12C2 12 5 9 8 9C9.66 9 11 10.34 11 12C11 13.66 9.66 15 8 15C5 15 2 12 2 12Z" fill="white" />
    <path d="M13 12C13 12 16 9 19 9C20.66 9 22 10.34 22 12C22 13.66 20.66 15 19 15C16 15 13 12 13 12Z" fill="white" />
  </svg>
);



const creatorFeatures = [
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" stroke="white" strokeWidth="1.5"/>
        <circle cx="12" cy="8.5" r="2" fill="#FF6E1F"/>
      </svg>
    ), 
    text: 'Understand storytelling' 
  },
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="1.5"/>
      </svg>
    ), 
    text: 'Deliver high-quality output' 
  },
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="white" stroke="white" strokeWidth="1.5"/>
        <path d="M12 6V12L16 14" stroke="#FF6E1F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ), 
    text: 'Educate while entertaining' 
  },
];

const whatWeDo = [
  'Create high-quality educational and entertaining content',
  'Blend creativity with clarity to make content that actually works',
  'Focus on value, consistency, and impact',
];

const contentCategories = [
  { name: 'Finance', icon: '💰', color: 'bg-green-500' },
  { name: 'English', icon: 'A z', color: 'bg-[#FF6E1F]' },
  { name: 'Health', icon: '✨', color: 'bg-green-500' },
  { name: 'Beauty', icon: '🧴', color: 'bg-pink-500' },
  { name: 'Education', icon: '🎓', color: 'bg-[#FF6E1F]' },
  { name: 'Youtube', icon: '▶️', color: 'bg-red-500' },
  { name: 'AI & Tech', icon: '🤖', color: 'bg-blue-500' },
  { name: 'Business', icon: '🏢', color: 'bg-blue-500' },
];

const About = () => {
  return (
    <section className="w-full bg-[#1A1A1A]  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-[#FF6E1F]/10 rounded-full blur-3xl" />
      <div className="absolute top-60 right-0 w-40 h-40 bg-[#FF6E1F]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-[#FF6E1F]/10 rounded-full blur-2xl" />
      <div className="absolute bottom-80 right-20 w-36 h-36 bg-[#FF6E1F]/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-12 md:py-20">
      

      

     

        {/* Our Creators Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Our Creators
              </h2>
              <p className="text-lg md:text-xl text-white/80">
                We work with creators who:
              </p>
            </div>

            {/* Right Side - Triangular Cards */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start justify-center md:justify-end">
              {creatorFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="relative"
                  style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    width: '140px',
                    height: '140px',
                    backgroundColor: '#FF6E1F',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingTop: '24px',
                    paddingBottom: '36px',
                    transform: `translateY(${index * 10}px)`,
                  }}
                >
                  <div className="mb-3 flex items-center justify-center">{feature.icon}</div>
                  <div className="text-white text-xs font-semibold text-center px-3 leading-tight">
                    {feature.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What we do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-6 py-2.5 rounded-full border-2 border-white/20 shadow-2xl text-lg font-semibold">
              <Flower />
              What we do
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-gradient-to-br from-[#FF6E1F] via-[#FF8533] to-[#FF6E1F] rounded-2xl p-6 md:p-8 text-white shadow-xl"
              >
                <p className="text-base md:text-lg leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16 md:mb-24"
        >
          <div className="bg-[#2A2A2A] rounded-3xl p-6 md:p-10 border-2 border-[#FF6E1F]/30">
            {/* Banner */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#FF6E1F] rounded-xl px-8 py-3 inline-block">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Content Categories We Cover
                </h3>
              </div>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {contentCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                  className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center justify-between aspect-square relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className={`absolute top-2 right-2 w-16 h-16 ${category.color} rounded-full opacity-20 blur-xl`} />
                  <div className="text-4xl mb-auto relative z-10 pt-4">{category.icon}</div>
                  <div className={`${category.color} text-white text-xs md:text-sm font-semibold text-center px-4 py-2 rounded-full relative z-10 mt-auto`}>
                    {category.name}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Collage */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  className="relative aspect-video rounded-xl overflow-hidden bg-gray-700"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image {item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Our Belief Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center max-w-4xl mx-auto pb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#FF6E1F] mb-6 leading-tight">
            Our Belief
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            We believe good content isn't just created—it's crafted with purpose. <br className="hidden md:block" />
            If you want content that informs, engages, and converts, you're in the right place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
