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





const whatWeDo = [
  'Create high-quality educational and entertaining content',
  'Blend creativity with clarity to make content that actually works',
  'Focus on value, consistency, and impact',
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
