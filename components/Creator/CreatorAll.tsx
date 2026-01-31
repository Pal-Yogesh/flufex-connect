'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

const StatCard = ({ value, label, subLabel, index }: { value: string, label: string, subLabel: string, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group p-6 rounded-3xl bg-white/3 border border-white/10 hover:border-[#FF6E1F]/50 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6E1F] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
      <div className="relative z-10">
        <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2 italic">{subLabel}</div>
        <div className="text-5xl md:text-7xl font-black text-[#FF6E1F] mb-4 tracking-tighter">
          {value}
        </div>
        <div className="text-xl md:text-2xl font-bold text-white uppercase leading-tight tracking-tight">
          {label}
        </div>
      </div>
      {/* Decorative background number */}
      <div className="absolute -bottom-8 -right-4 text-9xl font-black text-white/2 pointer-events-none group-hover:text-[#FF6E1F]/5 transition-colors duration-500">
        0{index + 1}
      </div>
    </motion.div>
  );
};

const CreatorAll = () => {
  const { scrollYProgress } = useScroll();
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const stats = [
    {
      value: "200+",
      label: "creators",
      subLabel: "Empowering annually"
    },
    {
      value: "1000+",
      label: "brands that",
      subLabel: "absolutely love us!"
    },
    {
      value: "Top 10",
      label: "Amongst the",
      subLabel: "systems"
    }
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Moving Text Background */}
      <motion.div 
        style={{ x: xTranslate }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[20vw] font-black text-white/2 pointer-events-none uppercase tracking-tighter"
      >
        unlimited potential • creators without limits • flufex connect •
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#FF6E1F]" />
                <span className="text-[#FF6E1F] text-sm font-bold uppercase tracking-[0.3em]">Our Vision</span>
              </div>
              
              <h1 className="text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.8] relative">
                <span className="text-white/10 absolute -top-12 -left-8 select-none">&gt;</span>
                creato<span className="text-[#FF6E1F]">rs</span>
              </h1>
              
              <p className="text-2xl md:text-4xl text-white font-medium leading-[1.2] tracking-tight">
                For over <span className="text-[#FF6E1F]">7 years</span>, we&apos;ve spotted talent before the internet catches on and shaped the future of media by backing creators who lead it.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-10 py-5 bg-white text-black font-black uppercase tracking-tighter text-lg rounded-full hover:bg-[#FF6E1F] hover:text-white transition-colors duration-300"
              >
                Join the Network
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Stats */}
          <div className="lg:col-span-5 w-full">
            <div className="flex flex-col gap-6">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  subLabel={stat.subLabel}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorAll;
