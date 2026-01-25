// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";

// const serviceData = [
//   {
//     id: 1,
//     icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031251/school1_ennsql.svg",
//     title: "Talent Management",
//     description: [
//       "Comprehensive creator representation and career development services. We handle contract negotiations, portfolio management, and strategic career planning to help creators build sustainable, long-term businesses in the digital space.",
//     ],
//     items: [
//       "Creator representation",
//       "Contract negotiations",
//       "Career development",
//       "Portfolio management"
//     ]
//   },
//   {
//     id: 2,
//     icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031252/school2_wspzan.svg",
//     title: "Influencer Marketing",
//     description: [
//       "Strategic campaign development and brand partnerships that drive results. Our data-driven approach ensures optimal content creation, performance analytics, and measurable ROI for both creators and brands.",
//     ],
//     items: [
//       "Campaign strategy",
//       "Brand partnerships",
//       "Content creation",
//       "Performance analytics"
//     ],
//     highlighted: true
//   },
//   {
//     id: 3,
//     icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031253/school3_zrefcn.svg",
//     title: "Digital Intellectual Properties",
//     description: [
//       "Protect and monetize your creative assets with our IP development and management services. We provide content licensing, brand protection, and strategic monetization frameworks tailored to the digital economy.",
//     ],
//     items: [
//       "IP development",
//       "Content licensing",
//       "Brand protection",
//       "Monetization strategies"
//     ]
//   },
//   {
//     id: 4,
//     icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031254/school4_jemeu7.svg",
//     title: "End to End Content Production",
//     description: [
//       "Professional content production services from concept to distribution. Our team handles video production, photography, post-production, and multi-platform distribution to ensure your content stands out.",
//     ],
//     items: [
//       "Video production",
//       "Photography",
//       "Post-production",
//       "Distribution"
//     ]
//   },
// ];

// const Flower = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 2C12 2 9 5 9 8C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8C15 5 12 2 12 2Z" fill="white"/>
//     <path d="M12 13C12 13 9 16 9 19C9 20.66 10.34 22 12 22C13.66 22 15 20.66 15 19C15 16 12 13 12 13Z" fill="white"/>
//     <path d="M2 12C2 12 5 9 8 9C9.66 9 11 10.34 11 12C11 13.66 9.66 15 8 15C5 15 2 12 2 12Z" fill="white"/>
//     <path d="M13 12C13 12 16 9 19 9C20.66 9 22 10.34 22 12C22 13.66 20.66 15 19 15C16 15 13 12 13 12Z" fill="white"/>
//   </svg>
// );

// export default function ServicesWheel() {
//   const totalSteps = serviceData.length;
//   const radius = 240;
//   const stepHeight = 250;
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: false, margin: "-100px" });

//   const [activeStep, setActiveStep] = useState(0);
//   const [hasStarted, setHasStarted] = useState(false);

//   useEffect(() => {
//     if (isInView && !hasStarted) {
//       setHasStarted(true);
//     }
//   }, [isInView, hasStarted]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (hasStarted && containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         const scrollTop = window.scrollY;
//         const componentTop = rect.top + scrollTop;
//         const scrollInsideComponent = scrollTop - componentTop;

//         const newStep = Math.floor(scrollInsideComponent / stepHeight);
//         setActiveStep(Math.min(Math.max(newStep, 0), totalSteps - 1));
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasStarted, totalSteps]);

//   return (
//     <>
//       {/* Desktop Version */}
//       <div className="hidden lg:block">
//         <div ref={containerRef} className="relative min-h-[270vh] bg-[#1A1A1A]">
//           <div className="sticky top-20 flex flex-col min-h-[80vh] z-10">
//             <div className="flex items-center justify-between">
//               <div className="absolute left-0 h-full w-[300px] z-20" />

//               <div className="relative flex items-center py-20">
//                 <div className="relative w-[500px] h-[500px] -ml-40 flex justify-center items-center">
//                   {/* Circular border */}
//                   <div className="absolute w-full h-full border-2 border-[#FF6E1F]/30 rounded-full backdrop-blur-xl bg-[#1A1A1A]/50" />

//                   {serviceData.map((step, index) => {
//                     const angle =
//                       ((index - activeStep) / totalSteps) * Math.PI * 2;
//                     const x = radius * Math.cos(angle);
//                     const y = radius * Math.sin(angle);

//                     return (
//                       <motion.div
//                         key={step.id}
//                         className="absolute flex justify-center items-center"
//                         initial={{ x: radius, y: 0, scale: 0 }}
//                         animate={{
//                           x: hasStarted ? x : radius,
//                           y: hasStarted ? y : 0,
//                           scale: hasStarted
//                             ? activeStep === index
//                               ? 1.4
//                               : 1
//                             : 0,
//                         }}
//                         transition={{
//                           duration: 0.5,
//                           ease: "easeInOut",
//                         }}
//                       >
//                         <div
//                           className={`bg-[#2A2A2A] rounded-full border-2 transition-all duration-300 ${
//                             activeStep === index
//                               ? "shadow-[0px_0px_30px_8px_#FF6E1F80] border-[#FF6E1F]"
//                               : "border-gray-700 shadow-xl"
//                           }`}
//                         >
//                           <Image
//                             src={step.icon}
//                             alt={`Step ${index + 1}`}
//                             width={1000}
//                             height={1000}
//                             className="rounded-full w-[60px] h-[60px] p-2"
//                           />
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="w-[60%] flex flex-col gap-[10%] h-[70vh] text-left z-10 pr-12">
//                 {/* Header Section */}
//                 <div className="text-start">
//                   <div className="space-y-6">
//                     {/* Services Badge */}
//                     <div className="flex justify-start">
//                       <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-6 py-2 rounded-full border-2 border-white/20 shadow-2xl text-lg font-semibold">
//                         <Flower />
//                         Services
//                       </div>
//                     </div>
                    
//                     {/* Title */}
//                     <h2 className="text-5xl font-bold leading-tight">
//                       <span className="text-white">What do we </span>
//                       <span className="text-[#FF6E1F]">offer?</span>
//                     </h2>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <motion.div
//                   key={serviceData[activeStep].id}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{
//                     opacity: hasStarted ? 1 : 0,
//                     y: hasStarted ? 0 : 50,
//                   }}
//                   transition={{ duration: 0.5 }}
//                   className="xl:w-[700px] w-[600px]"
//                 >
//                   <div
//                     className={`p-8 rounded-xl transition-all ${
//                       serviceData[activeStep].highlighted
//                         ? "bg-[#FF6E1F] text-white shadow-2xl shadow-[#FF6E1F]/30"
//                         : "bg-[#2A2A2A] text-gray-300 border border-gray-700/30"
//                     }`}
//                   >
//                     <h3 className="text-3xl font-bold mb-4 leading-tight">
//                       {serviceData[activeStep].title}
//                     </h3>
                    
//                     <div className={`text-base mb-6 leading-relaxed ${
//                       serviceData[activeStep].highlighted ? 'text-white/90' : 'text-gray-400'
//                     }`}>
//                       {serviceData[activeStep].description.map((desc, index) => (
//                         <p key={index}>{desc}</p>
//                       ))}
//                     </div>

//                     <ul className="space-y-3 mt-4">
//                       {serviceData[activeStep].items.map((item, itemIndex) => (
//                         <li key={itemIndex} className="text-base flex items-start gap-2.5 leading-relaxed">
//                           <span className={`mt-1.5 font-bold ${
//                             serviceData[activeStep].highlighted ? 'text-white' : 'text-[#FF6E1F]'
//                           }`}>•</span>
//                           <span className={serviceData[activeStep].highlighted ? 'text-white/90' : 'text-gray-400'}>
//                             {item}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Version */}
//       <div className="lg:hidden bg-[#1A1A1A] px-6 py-16">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="flex justify-center mb-6">
//             <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-6 py-2 rounded-full border-2 border-white/20 shadow-2xl text-lg font-semibold">
//               <Flower />
//               Services
//             </div>
//           </div>
          
//           <h2 className="text-4xl font-bold leading-tight">
//             <span className="text-white">What do we </span>
//             <span className="text-[#FF6E1F]">offer?</span>
//           </h2>
//         </div>

//         {/* Service Cards */}
//         <div className="space-y-6">
//           {serviceData.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className={`p-6 rounded-xl transition-all ${
//                 service.highlighted
//                   ? "bg-[#FF6E1F] text-white shadow-2xl shadow-[#FF6E1F]/30"
//                   : "bg-[#2A2A2A] text-gray-300 border border-gray-700/30"
//               }`}
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className={`rounded-full p-2 ${
//                   service.highlighted ? 'bg-white/20' : 'bg-[#FF6E1F]/20'
//                 }`}>
//                   <Image
//                     src={service.icon}
//                     alt={service.title}
//                     width={40}
//                     height={40}
//                     className="w-10 h-10"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold leading-tight flex-1">{service.title}</h3>
//               </div>
              
//               <p className={`text-sm mb-4 leading-relaxed ${
//                 service.highlighted ? 'text-white/90' : 'text-gray-400'
//               }`}>
//                 {service.description[0]}
//               </p>

//               <ul className="space-y-2">
//                 {service.items.map((item, itemIndex) => (
//                   <li key={itemIndex} className="text-sm flex items-start gap-2 leading-relaxed">
//                     <span className={`mt-1 font-bold ${
//                       service.highlighted ? 'text-white' : 'text-[#FF6E1F]'
//                     }`}>•</span>
//                     <span className={service.highlighted ? 'text-white/90' : 'text-gray-400'}>
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const serviceData = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031251/school1_ennsql.svg",
    title: "Talent Management",
    description: [
      "Comprehensive creator representation and career development services. We handle contract negotiations, portfolio management, and strategic career planning to help creators build sustainable, long-term businesses in the digital space.",
    ],
    items: [
      "Creator representation",
      "Contract negotiations",
      "Career development",
      "Portfolio management"
    ]
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031252/school2_wspzan.svg",
    title: "Influencer Marketing",
    description: [
      "Strategic campaign development and brand partnerships that drive results. Our data-driven approach ensures optimal content creation, performance analytics, and measurable ROI for both creators and brands.",
    ],
    items: [
      "Campaign strategy",
      "Brand partnerships",
      "Content creation",
      "Performance analytics"
    ]
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031253/school3_zrefcn.svg",
    title: "Digital Intellectual Properties",
    description: [
      "Protect and monetize your creative assets with our IP development and management services. We provide content licensing, brand protection, and strategic monetization frameworks tailored to the digital economy.",
    ],
    items: [
      "IP development",
      "Content licensing",
      "Brand protection",
      "Monetization strategies"
    ]
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/deazuwm84/image/upload/v1747031254/school4_jemeu7.svg",
    title: "End to End Content Production",
    description: [
      "Professional content production services from concept to distribution. Our team handles video production, photography, post-production, and multi-platform distribution to ensure your content stands out.",
    ],
    items: [
      "Video production",
      "Photography",
      "Post-production",
      "Distribution"
    ]
  },
];

const Flower = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 9 5 9 8C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8C15 5 12 2 12 2Z" fill="white"/>
    <path d="M12 13C12 13 9 16 9 19C9 20.66 10.34 22 12 22C13.66 22 15 20.66 15 19C15 16 12 13 12 13Z" fill="white"/>
    <path d="M2 12C2 12 5 9 8 9C9.66 9 11 10.34 11 12C11 13.66 9.66 15 8 15C5 15 2 12 2 12Z" fill="white"/>
    <path d="M13 12C13 12 16 9 19 9C20.66 9 22 10.34 22 12C22 13.66 20.66 15 19 15C16 15 13 12 13 12Z" fill="white"/>
  </svg>
);

export default function ServicesWheel() {
  const totalSteps = serviceData.length;
  const radius = 240;
  const stepHeight = 250;
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const [activeStep, setActiveStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    const handleScroll = () => {
      if (hasStarted && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const componentTop = rect.top + scrollTop;
        const scrollInsideComponent = scrollTop - componentTop;

        const newStep = Math.floor(scrollInsideComponent / stepHeight);
        setActiveStep(Math.min(Math.max(newStep, 0), totalSteps - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasStarted, totalSteps]);

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block ">
    

        <div ref={containerRef} className="relative min-h-[270vh] bg-[#1A1A1A]  ">
          <div className="sticky top-20 flex flex-col min-h-[80vh] z-10">
            <div className="flex items-center justify-between">
              <div className="absolute left-0 h-full w-[300px] z-20" />

              <div className="relative flex items-center py-20">
                <div className="relative w-[500px] h-[500px] -ml-40 flex justify-center items-center">
                  {/* Circular border */}
                  <div className="absolute w-full h-full border-2 border-[#FF6E1F]/30 rounded-full backdrop-blur-xl bg-[#1A1A1A]/50" />

                  {serviceData.map((step, index) => {
                    const angle =
                      ((index - activeStep) / totalSteps) * Math.PI * 2;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                      <motion.div
                        key={step.id}
                        className="absolute flex justify-center items-center"
                        initial={{ x: radius, y: 0, scale: 0 }}
                        animate={{
                          x: hasStarted ? x : radius,
                          y: hasStarted ? y : 0,
                          scale: hasStarted
                            ? activeStep === index
                              ? 1.4
                              : 1
                            : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <div
                          className={`bg-[#2A2A2A] rounded-full border-2 transition-all duration-300 ${
                            activeStep === index
                              ? "shadow-[0px_0px_30px_8px_#FF6E1F80] border-[#FF6E1F]"
                              : "border-gray-700 shadow-xl"
                          }`}
                        >
                          <Image
                            src={step.icon}
                            alt={`Step ${index + 1}`}
                            width={1000}
                            height={1000}
                            className="rounded-full w-[60px] h-[60px] p-2"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="w-[60%] flex flex-col gap-[5%] h-[70vh] text-left z-10 pr-12">
                {/* Header Section */}
                <div className="text-start">
                  <div className="space-y-6">
                    {/* Services Badge */}
                    <div className="flex justify-start">
                      <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-6 py-2 rounded-full border-2 border-white/20 shadow-2xl text-lg font-semibold">
                        <Flower />
                        Services
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-5xl font-bold leading-tight">
                      <span className="text-white">What do we </span>
                      <span className="text-[#FF6E1F]">offer?</span>
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <motion.div
                  key={serviceData[activeStep].id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{
                    opacity: hasStarted ? 1 : 0,
                    y: hasStarted ? 0 : 50,
                    scale: hasStarted ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  className="xl:w-[700px] w-[600px]"
                >
                  <div
                    className="relative p-10 rounded-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] text-gray-300 border-2 border-[#FF6E1F]/50 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#FF6E1F]/0 via-[#FF6E1F]/10 to-[#FF6E1F]/0" />

                    <div className="relative z-10">
                      {/* Header with icon */}
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
                          className="p-3 rounded-xl bg-[#FF6E1F]/20"
                        >
                          <Image
                            src={serviceData[activeStep].icon}
                            alt={serviceData[activeStep].title}
                            width={40}
                            height={40}
                            className="w-10 h-10"
                          />
                        </motion.div>

                        <div className="flex-1">
                          <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-4xl font-bold mb-2 leading-tight"
                          >
                            {serviceData[activeStep].title}
                          </motion.h3>
                          
                          {/* Decorative line */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 rounded-full bg-[#FF6E1F]/50"
                          />
                        </div>
                      </div>
                      
                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-lg mb-8 leading-relaxed text-gray-300"
                      >
                        {serviceData[activeStep].description.map((desc, index) => (
                          <p key={index}>{desc}</p>
                        ))}
                      </motion.div>

                      {/* Items grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {serviceData[activeStep].items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + (itemIndex * 0.1) }}
                            className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 bg-[#FF6E1F]/10 hover:bg-[#FF6E1F]/20"
                          >
                            <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-[#FF6E1F]" />
                            <span className="text-base font-medium leading-relaxed text-gray-200">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Bottom accent */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-8 h-px origin-left bg-gradient-to-r from-[#FF6E1F] via-[#FF6E1F]/50 to-transparent"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Version */}
      <div className="lg:hidden bg-[#1A1A1A] px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-6 py-2 rounded-full border-2 border-white/20 shadow-2xl text-lg font-semibold">
              <Flower />
              Services
            </div>
          </div>
          
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-white">What do we </span>
            <span className="text-[#FF6E1F]">offer?</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl transition-all bg-[#2A2A2A] text-gray-300 border border-gray-700/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full p-2 bg-[#FF6E1F]/20">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-2xl font-bold leading-tight flex-1">{service.title}</h3>
              </div>
              
              <p className="text-sm mb-4 leading-relaxed text-gray-400">
                {service.description[0]}
              </p>

              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm flex items-start gap-2 leading-relaxed">
                    <span className="mt-1 font-bold text-[#FF6E1F]">•</span>
                    <span className="text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}