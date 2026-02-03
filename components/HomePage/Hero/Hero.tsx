// 'use client';

// import Image from 'next/image'
// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'

// const Hero = () => {
//     const imageContainerRef = useRef<HTMLDivElement>(null);
//     const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

//     useEffect(() => {
//         if (!imageContainerRef.current) return;

//         const images = imageRefs.current.filter(Boolean);
//         if (images.length === 0) return;

//         // Initial shuffle animation on mount
//         const tl = gsap.timeline({ delay: 0.5 });

//         // Set initial positions (scattered)
//         images.forEach((img, index) => {
//             if (img) {
//                 gsap.set(img, {
//                     opacity: 0,
//                     y: 100 + Math.random() * 50,
//                     x: (index % 2 === 0 ? -1 : 1) * (20 + Math.random() * 30),
//                     rotation: (index % 2 === 0 ? -1 : 1) * (5 + Math.random() * 10),
//                     scale: 0.8
//                 });
//             }
//         });

//         // Animate to final positions with stagger
//         tl.to(images, {
//             opacity: 1,
//             y: 0,
//             x: 0,
//             rotation: 0,
//             scale: 1,
//             duration: 1,
//             ease: "power3.out",
//             stagger: {
//                 amount: 0.8,
//                 from: "start"
//             }
//         });

//         // Continuous subtle shuffle animation
//         const shuffleInterval = setInterval(() => {
//             const randomIndex = Math.floor(Math.random() * images.length);
//             const img = images[randomIndex];

//             if (img) {
//                 gsap.to(img, {
//                     y: (Math.random() - 0.5) * 10,
//                     x: (Math.random() - 0.5) * 10,
//                     rotation: (Math.random() - 0.5) * 3,
//                     duration: 2,
//                     ease: "power1.inOut",
//                     yoyo: true,
//                     repeat: 1
//                 });
//             }
//         }, 3000);

//         // Hover effects
//         images.forEach((img) => {
//             if (img) {
//                 img.addEventListener('mouseenter', () => {
//                     gsap.to(img, {
//                         scale: 1.05,
//                         y: -10,
//                         rotation: (Math.random() - 0.5) * 5,
//                         duration: 0.3,
//                         ease: "power2.out"
//                     });
//                 });

//                 img.addEventListener('mouseleave', () => {
//                     gsap.to(img, {
//                         scale: 1,
//                         y: 0,
//                         rotation: 0,
//                         duration: 0.3,
//                         ease: "power2.out"
//                     });
//                 });
//             }
//         });

//         return () => {
//             clearInterval(shuffleInterval);
//         };
//     }, []);

//     return (
//         <div>
//             <section className="bg-[url(/herobg.svg)] bg-cover bg-center w-full bg-[#1A1A1A]  pt-28 pb-16 md:pb-24 ">

//                 <div className='flex items-center gap-4'>

//                     <div className='w-[70%] pl-[5%]'>

//                         <div style={{ fontFamily: 'var(--font-bricolage-grotesque)' }}>
//                             <div
//                                 className='text-[75px] font-semibold leading-tight'
//                             >
//                                 <span>India&apos;s Largest</span> <span className='text-[#FF4D00]'>Creator</span> <span>Management Ecosystem</span>
//                             </div>

//                             <p>Empowering creators with structure, strategy, and scale. We build long-term creator businesses, not just campaigns. Because influence deserves enterprise-level growth.</p>
//                         </div>
//                     </div>

//                     <div className='' ref={imageContainerRef}>
//                         <div className='flex items-center gap-3'>
//                             <div className='flex flex-col gap-3'>
//                                 <div ref={(el) => { imageRefs.current[0] = el; }} className='rounded-2xl overflow-hidden cursor-pointer'>
//                                     <Image
//                                         src="/hero/Rectangle 30.svg"
//                                         alt="Creator"
//                                         width={1000}
//                                         height={1000}
//                                         className="w-[343px] h-[250px] object-cover rounded-2xl"
//                                     />
//                                 </div>
//                                 <div ref={(el) => { imageRefs.current[1] = el; }} className='rounded-2xl overflow-hidden cursor-pointer'>
//                                     <Image
//                                         src="/hero/Rectangle 27.svg"
//                                         alt="Creator"
//                                         width={1000}
//                                         height={1000}
//                                         className="w-[328px] h-[212px] object-cover rounded-2xl"
//                                     />
//                                 </div>
//                             </div>

//                             <div className='flex flex-col gap-3'>
//                                 <div ref={(el) => { imageRefs.current[2] = el; }} className='rounded-2xl overflow-hidden cursor-pointer'>
//                                     <Image
//                                         src="/hero/Rectangle 29.svg"
//                                         alt="Creator"
//                                         width={1000}
//                                         height={1000}
//                                         className="w-[328px] h-[248px] object-cover rounded-2xl"
//                                         priority
//                                     />
//                                 </div>
//                                 <div ref={(el) => { imageRefs.current[3] = el; }} className='rounded-2xl overflow-hidden cursor-pointer'>
//                                     <Image
//                                         src="/hero/Rectangle 26.svg"
//                                         alt="Creator"
//                                         width={1000}
//                                         height={1000}
//                                         className="w-[348px] h-[400px] object-cover rounded-2xl"
//                                         priority
//                                     />
//                                 </div>
//                             </div>
//                             <div ref={(el) => { imageRefs.current[4] = el; }} className='rounded-2xl overflow-hidden cursor-pointer'>
//                                 <Image
//                                     src="/hero/Rectangle 28.svg"
//                                     alt="Creator"
//                                     width={1000}
//                                     height={1000}
//                                     className="w-[228px] h-[357px] object-cover rounded-2xl"
//                                     priority
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='pl-[5%]'>

//                     <div className="flex items-center gap-4 pt-6">
//                         <button className="bg-[#FF6E1F] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#FF8533] transition-colors shadow-lg shadow-[#FF6E1F]/20 flex items-center gap-3">
//                             SEE FOR YOURSELF
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Hero



'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

// Marquee Component
const Marquee = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!marqueeRef.current) return;

        const marquee = marqueeRef.current;
        const content = marquee.querySelector('.marquee-content') as HTMLElement;
        if (!content) return;

        // Get the width of the content
        const contentWidth = content.scrollWidth / 2; // Divide by 2 because we duplicate the content

        // Create GSAP animation
        const tl = gsap.to(content, {
            x: -contentWidth,
            duration: 30,
            ease: 'none',
            repeat: -1
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={marqueeRef} className={`relative overflow-hidden ${className}`}>
            <div className="flex marquee-content whitespace-nowrap">
                {/* First set of brands */}
                <div className="flex items-center gap-4 p-5">
                    {children}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-4 p-5" aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    )
}

const Hero = () => {
    const imagesRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        // GSAP Timeline for complex shuffle animation
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Create a shuffling effect with rotation and position changes
        imagesRef.current.forEach((img, index) => {
            if (img) {
                // Initial state
                gsap.set(img, {
                    opacity: 0,
                    scale: 0.8,
                    rotationY: -90,
                    x: index % 2 === 0 ? -100 : 100,
                    y: 50
                })

                // Animate in with stagger
                tl.to(img, {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    x: 0,
                    y: 0,
                    duration: 1.2,
                    delay: index * 0.15
                }, 0)
            }
        })

        // Floating animation loop
        imagesRef.current.forEach((img, index) => {
            if (img) {
                gsap.to(img, {
                    y: index % 2 === 0 ? -15 : -10,
                    duration: 2 + (index * 0.2),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.1
                })
            }
        })
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        }
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.68, -0.55, 0.265, 1.55] as const
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(255, 110, 31, 0.4)',
            transition: {
                duration: 0.3
            }
        },
        tap: {
            scale: 0.95
        }
    }

    return (
        <div>
            <section className="bg-[url(/herobg.svg)] bg-cover bg-center w-full bg-[#1A1A1A] pt-24 sm:pt-28 md:pt-32 lg:pt-20 pb-8 sm:pb-10 overflow-hidden">

                <motion.div
                    className='flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-4'
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >

                    <motion.div className='w-full lg:w-[70%] px-4 sm:px-6 md:px-8 lg:pl-[5%]' variants={textVariants}>

                        <div>
                            <motion.div
                                className='text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-semibold leading-tight text-center lg:text-left'
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    India&apos;s Largest
                                </motion.span>{' '}
                                <motion.span
                                    className='text-[#FF4D00]'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
                                >
                                    Creator
                                </motion.span>{' '}
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    Management Ecosystem
                                </motion.span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className='pt-4 sm:pt-6 lg:pt-8 text-sm sm:text-base md:text-lg lg:text-[25px] text-[#D7C9C3] text-center lg:text-left'
                            >
                                Empowering creators with <span className='text-white'>structure, strategy, and scale</span>. We build long-term creator businesses, not just campaigns. Because influence deserves enterprise-level growth.
                            </motion.p>
                        </div>
                    </motion.div>

                    <div className='perspective-container hidden lg:block'>

                        <div className='flex items-center'>

                            <div>

                                <div ref={(el) => { imagesRef.current[0] = el; }} className='image-wrapper'>
                                    <Image
                                        src="/hero/Rectangle 30.svg"
                                        alt="Creator"
                                        width={1000}
                                        height={1000}
                                        className="w-[343px] h-[250px] object-cover rounded-lg"

                                    />
                                </div>
                                <div ref={(el) => { imagesRef.current[1] = el; }} className='image-wrapper'>
                                    <Image
                                        src="/hero/Rectangle 27.svg"
                                        alt="Creator"
                                        width={1000}
                                        height={1000}
                                        className="w-[328px] h-[212px] object-cover rounded-lg"

                                    />
                                </div>
                            </div>

                            <div>

                                <div ref={(el) => { imagesRef.current[2] = el; }} className='image-wrapper'>
                                    <Image
                                        src="/hero/Rectangle 29.svg"
                                        alt="Creator"
                                        width={1000}
                                        height={1000}
                                        className="w-[328px] h-[248px] object-cover rounded-lg"
                                        priority
                                    />
                                </div>
                                <div ref={(el) => { imagesRef.current[3] = el; }} className='image-wrapper'>
                                    <Image
                                        src="/hero/Rectangle 26.svg"
                                        alt="Creator"
                                        width={1000}
                                        height={1000}
                                        className="w-[348px] h-[400px] rounded-lg"
                                        priority
                                    />
                                </div>
                            </div>
                            <div ref={(el) => { imagesRef.current[4] = el; }} className='image-wrapper'>
                                <Image
                                    src="/hero/Rectangle 28.svg"
                                    alt="Creator"
                                    width={1000}
                                    height={1000}
                                    className="w-[228px] h-[357px] rounded-lg"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile/Tablet Simplified Image Grid */}
                    <div className='lg:hidden grid grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 w-full max-w-2xl mx-auto'>
                        <div className='rounded-lg overflow-hidden'>
                            <Image
                                src="/hero/Rectangle 30.svg"
                                alt="Creator"
                                width={1000}
                                height={1000}
                                className="w-full h-[150px] sm:h-[180px] md:h-[220px] object-cover"
                                priority
                            />
                        </div>
                        <div className='rounded-lg overflow-hidden'>
                            <Image
                                src="/hero/Rectangle 29.svg"
                                alt="Creator"
                                width={1000}
                                height={1000}
                                className="w-full h-[150px] sm:h-[180px] md:h-[220px] object-cover"
                                priority
                            />
                        </div>
                        <div className='rounded-lg overflow-hidden'>
                            <Image
                                src="/hero/Rectangle 26.svg"
                                alt="Creator"
                                width={1000}
                                height={1000}
                                className="w-full h-[150px] sm:h-[180px] md:h-[220px] object-cover"
                                priority
                            />
                        </div>
                        <div className='rounded-lg overflow-hidden'>
                            <Image
                                src="/hero/Rectangle 28.svg"
                                alt="Creator"
                                width={1000}
                                height={1000}
                                className="w-full h-[150px] sm:h-[180px] md:h-[220px] object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                <div className='px-4 sm:px-6 md:px-8 lg:pl-[5%] flex justify-center lg:justify-start'>

                    <motion.div
                        className="flex items-center gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.button
                            className="bg-[#FF4D00] text-white px-6 sm:px-8 lg:px-10 py-3 mt-10 sm:mt-0 sm:py-3.5 lg:py-4 border border-[#FFFFFF] rounded-[63px] font-semibold text-sm sm:text-base lg:text-[20px] transition-colors shadow-lg shadow-[#FF6E1F]/20 flex items-center gap-2 sm:gap-3"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            SEE FOR YOURSELF
                            <motion.svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sm:w-6 sm:h-6"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            >
                                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                        </motion.button>
                    </motion.div>
                </div>

                  {/* brand section */}



            {/* <div className='px-4 sm:px-6 md:px-8 lg:px-[5%] py-6 sm:py-8'>
                <div className='border border-[#BD3900] rounded-full w-full h-[80px] sm:h-[100px] lg:h-[125px] overflow-hidden relative'>
                    <Marquee className='h-full'>
                        <div className='w-[180px] sm:w-[220px] lg:w-[269px] h-[55px] sm:h-[70px] lg:h-[83px] rounded-[51px] bg-[#0000005E] flex items-center justify-center shrink-0'>
                            <p className='text-sm sm:text-base lg:text-[20px] text-[#FF4D01]'>Brand 1</p>
                        </div>
                        <div className='w-[180px] sm:w-[220px] lg:w-[269px] h-[55px] sm:h-[70px] lg:h-[83px] rounded-[51px] bg-[#0000005E] flex items-center justify-center shrink-0'>
                            <p className='text-sm sm:text-base lg:text-[20px] text-[#FF4D01]'>Brand 2</p>
                        </div>
                        <div className='w-[180px] sm:w-[220px] lg:w-[269px] h-[55px] sm:h-[70px] lg:h-[83px] rounded-[51px] bg-[#0000005E] flex items-center justify-center shrink-0'>
                            <p className='text-sm sm:text-base lg:text-[20px] text-[#FF4D01]'>Brand 3</p>
                        </div>
                        <div className='w-[180px] sm:w-[220px] lg:w-[269px] h-[55px] sm:h-[70px] lg:h-[83px] rounded-[51px] bg-[#0000005E] flex items-center justify-center shrink-0'>
                            <p className='text-sm sm:text-base lg:text-[20px] text-[#FF4D01]'>Brand 4</p>
                        </div>
                        <div className='w-[180px] sm:w-[220px] lg:w-[269px] h-[55px] sm:h-[70px] lg:h-[83px] rounded-[51px] bg-[#0000005E] flex items-center justify-center shrink-0'>
                            <p className='text-sm sm:text-base lg:text-[20px] text-[#FF4D01]'>Brand 5</p>
                        </div>
                        <div className='w-[180px] sm:w-[220px] lg:w-[269px] h-[55px] sm:h-[70px] lg:h-[83px] rounded-[51px] bg-[#0000005E] flex items-center justify-center shrink-0'>
                            <p className='text-sm sm:text-base lg:text-[20px] text-[#FF4D01]'>Brand 6</p>
                        </div>
                        <div className='w-[180px] sm:w-[220px] lg:w-[269px] h-[55px] sm:h-[70px] lg:h-[83px] rounded-[51px] bg-[#0000005E] flex items-center justify-center shrink-0'>
                            <p className='text-sm sm:text-base lg:text-[20px] text-[#FF4D01]'>Brand 7</p>
                        </div>
                    </Marquee>
                </div>
            </div> */}
            </section>



          

            <style jsx>{`
                .perspective-container {
                    perspective: 1000px;
                }

                .image-wrapper {
                    transition: transform 0.2s ease;
                    transform-style: preserve-3d;
                }

                .image-wrapper:hover {
                    transform: scale(1.05) translateZ(20px);
                }

                .marquee-content {
                    will-change: transform;
                }
            `}</style>
        </div>
    )
}

export default Hero