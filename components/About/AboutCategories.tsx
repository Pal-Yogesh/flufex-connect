"use client"
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { div } from 'framer-motion/client';

const contentCategories = [
    { name: 'Finance', icon: '/about/finance.svg', color: 'bg-green-500' },
    { name: 'English', icon: '/about/english.svg', color: 'bg-[#FF6E1F]' },
    { name: 'Health', icon: '/about/health.svg', color: 'bg-green-500' },
    { name: 'Beauty', icon: '/about/beauty.svg', color: 'bg-pink-500' },
    { name: 'Education', icon: '/about/edu.svg', color: 'bg-[#FF6E1F]' },
    { name: 'Youtube', icon: '/about/yt.svg', color: 'bg-red-500' },
    { name: 'AI & Tech', icon: '/about/aitech.svg', color: 'bg-blue-500' },
    { name: 'Business', icon: '/about/business.svg', color: 'bg-blue-500' },
];

const images = [
    { src: '/about/Rectangle 47.svg', alt: 'Image 1' },
    { src: '/about/Rectangle 48.svg', alt: 'Image 2' },
    { src: '/about/Rectangle 49.svg', alt: 'Image 3' },
    { src: '/about/Rectangle 50.svg', alt: 'Image 4' },
]
const AboutCategories = () => {
    return (

        <div>


            <div className=''>



<div className='px-32 '>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className=" bg-[url(/about/beliefbg.svg)] bg-cover bg-center rounded-[24px]"
                >
                    <div className=" rounded-[24px] p-10 border border-[#FF4D00]">
                        <div className="flex justify-center mb-8">
                            <div className="bg-[#FF7E47] rounded-[64px] px-8 py-3 inline-block"
                                style={{
                                    boxShadow: '0px 4px 16.1px 0px #000000C4',

                                }}>
                                <h3 className="text-[24px] font-bold text-white">
                                    Content Categories We Cover
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                            {contentCategories.map((category, index) => (
                                <motion.div
                                    style={{
                                        background: 'linear-gradient(180deg, #484848 0%, #232323 100%)',

                                    }}
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                                    className=" rounded-[10px] w-[200px] h-[150px] p-6 flex flex-col items-center justify-between aspect-square relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer"
                                >
                                    <Image src={category.icon} alt={category.name} width={50} height={50} />
                                    <div className={`${category.color} text-white text-xs md:text-sm font-semibold text-center px-4 py-2 rounded-full relative z-10 mt-auto`}>
                                        {category.name}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Image Collage */}
                        <div className="flex">
                            {images.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                                    className=""
                                    style={{
                                        marginLeft: index === 0 ? "0px" : "-150px", // horizontal overlap

                                    }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={420}
                                        height={230}
                                        className="w-[420px] h-[220px] object-cover rounded-[14px] "
                                    />
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </motion.div>
</div>
                <div className=' text-center py-20  px-[25%] bg-[url(/herobg.svg)] bg-cover bg-center w-full '>
                    <div>
                        <h2 className='text-[74px] font-bold text-[#FF4D00]'>Our Belief</h2>
                        <p className='text-[24px] text-[#EBEBEB]'>We believe good content isn&apos;t just created—it&apos;s crafted with purpose.
                            If you want content that informs, engages, and converts, you&apos;re in the right place.</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default AboutCategories