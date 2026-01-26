"use client"

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image';

export const Flower = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 9 5 9 8C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8C15 5 12 2 12 2Z" fill="white" />
        <path d="M12 13C12 13 9 16 9 19C9 20.66 10.34 22 12 22C13.66 22 15 20.66 15 19C15 16 12 13 12 13Z" fill="white" />
        <path d="M2 12C2 12 5 9 8 9C9.66 9 11 10.34 11 12C11 13.66 9.66 15 8 15C5 15 2 12 2 12Z" fill="white" />
        <path d="M13 12C13 12 16 9 19 9C20.66 9 22 10.34 22 12C22 13.66 20.66 15 19 15C16 15 13 12 13 12Z" fill="white" />
    </svg>
);


const stats = [
    { value: '3+', label: 'Years of Experience in the Market' },
    { value: '3,000+', label: 'Educational Content Pieces Delivered' },
    { value: '100+', label: 'Creators Integrated' },
    { value: '15+', label: 'Team Members' },
    { value: '50+', label: 'IRL Creators Collaborated With' },
];


const useCountUp = (end: number, start: boolean, duration = 1500) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!start) return

        let startTime: number | null = null

        const animate = (time: number) => {
            if (!startTime) startTime = time
            const progress = Math.min((time - startTime) / duration, 1)
            setCount(Math.floor(progress * end))

            if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
    }, [start, end, duration])

    return count
}
const CountStat = ({ value, start }: { value: string; start: boolean }) => {
    const number = parseInt(value.replace(/\D/g, ""))
    const suffix = value.replace(/[0-9]/g, "")
    const animated = useCountUp(number, start)

    return (
        <div className="text-[60px] font-bold text-[#ED8224] mb-2">
            {animated}
            {suffix}
        </div>
    )
}

const AboutHero = () => {
    const imagesRef = useRef<(HTMLDivElement | null)[]>([])
    const statsRef = useRef<HTMLDivElement | null>(null)
    const [startCount, setStartCount] = useState(false)

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        if (statsRef.current) observer.observe(statsRef.current)
        return () => observer.disconnect()
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


    return (
        <div>
            <section className="bg-[#1A1A1A] bg-[url(/about/about.svg)] bg-cover bg-center">

                <div className='p-32'>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-start mb-10"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-6 py-2.5 rounded-full border-2 border-white shadow-2xl text-lg font-semibold">
                            <Flower />
                            About Us
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="flex  ">
                            {/* LEFT CONTENT */}
                            <motion.div
                                variants={textVariants}
                                className=" w-[570px] rounded-[16px] h-[445px] p-6"
                                style={{
                                    background:
                                        "linear-gradient(89.3deg, #F16225 0.6%, rgba(125, 45, 11, 0.38) 99.43%)",
                                }}
                            >
                                <div
                                    className="rounded-[14px] p-6"
                                    style={{
                                        borderWidth: "1px",
                                        borderStyle: "solid",
                                        borderImageSlice: 1,
                                        borderImageSource:
                                            "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.1) 100%)",
                                    }}
                                >
                                    <h1 className="text-[72px] font-bold text-white ">
                                        About Us
                                    </h1>

                                    <p className="mt-6 text-[22px]  text-[#ECE7E5]">
                                        We are a scroll-stopping, performance-driven content studio built for the
                                        modern digital world.
                                    </p>

                                    <p className="mt-4 text-[22px]  text-[#ECE7E5]">
                                        Our work is designed to grab attention, engage audiences, and deliver
                                        results—without the fluff.
                                    </p>
                                </div>
                            </motion.div>

                            {/* RIGHT IMAGE GRID */}
                            <div className="grid grid-cols-2 ">
                                {/* Top Left */}
                                <div
                                    ref={(el) => { imagesRef.current[0] = el }}
                                    className="w-[310px] h-[230px] rounded-[18px] overflow-hidden relative"
                                >
                                    <Image
                                        src="/about/1.svg"
                                        alt="About 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Top Right */}
                                <div
                                    ref={(el) => { imagesRef.current[1] = el }}
                                    className="w-[310px] h-[230px] rounded-[18px] overflow-hidden relative"
                                >
                                    <Image
                                        src="/about/2.svg"
                                        alt="About 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Bottom Wide */}
                                <div
                                    ref={(el) => { imagesRef.current[2] = el }}
                                    className="col-span-2 w-[625px] h-[200px] rounded-[18px] overflow-hidden relative"
                                >
                                    <Image
                                        src="/about/3.svg"
                                        alt="About 3"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>




            <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-12 "
            >
                <div className="bg-[url(/herobg.svg)] bg-cover bg-center backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#BD3900] mx-16">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div
                                    className="w-28 h-2 bg-[#ED8224] mb-3"
                                    style={{ boxShadow: "0px 5px 10px #FFD40040" }}
                                />
                                <CountStat value={stat.value} start={startCount} />
                                <div className="text-[18px] text-white">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>



            <style jsx>{`
               

                .image-wrapper {
                    transition: transform 0.2s ease;
                    transform-style: preserve-3d;
                     box-shadow: 0 25px 60px rgba(0,0,0,0.35);
                }

                .image-wrapper:hover {
                    transform: scale(1.05) translateZ(20px);
                }
            `}</style>
        </div>
    )
}

export default AboutHero