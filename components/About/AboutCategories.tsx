"use client"
import { motion } from 'framer-motion'
import Image from 'next/image';

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



<div className='px-4 sm:px-8 md:px-16 lg:px-32'>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]"
                >
                    <div className="bg-[url(/herobg.svg)] bg-cover bg-center rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 md:p-8 lg:p-10 border border-[#FF4D00]">
                        <motion.div 
                            className="flex justify-center mb-6 sm:mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "backOut" }}
                        >
                            <div className="bg-[#FF7E47] rounded-[32px] sm:rounded-[48px] lg:rounded-[64px] px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 inline-block"
                                style={{
                                    boxShadow: '0px 4px 16.1px 0px #000000C4',

                                }}>
                                <h3 className="text-base sm:text-lg md:text-xl lg:text-[24px] font-bold text-white">
                                    Content Categories We Cover
                                </h3>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 justify-items-center">
                            {contentCategories.map((category, index) => (
                                <motion.div
                                    style={{
                                        background: 'linear-gradient(180deg, #484848 0%, #232323 100%)',

                                    }}
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: index * 0.1,
                                        ease: "backOut"
                                    }}
                                    whileHover={{ 
                                        scale: 1.08, 
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="rounded-[10px] w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:w-[200px] h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px] p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-between relative overflow-hidden cursor-pointer"
                                >
                                    <Image src={category.icon} alt={category.name} width={50} height={50} className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]" />
                                    <div className={`${category.color} text-white text-xs md:text-sm font-semibold text-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full relative z-10 mt-auto`}>
                                        {category.name}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Image Collage */}
                        <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-0 justify-center">
                            {images.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, rotate: -5 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: index * 0.15,
                                        ease: "backOut"
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        zIndex: 50,
                                        transition: { duration: 0.3 }
                                    }}
                                    className={`${index !== 0 ? 'md:-ml-[80px] lg:-ml-[150px]' : ''}`}
                                    style={{
                                        zIndex: index
                                    }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={420}
                                        height={230}
                                        className="w-[150px] h-[100px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[160px] lg:w-[420px] lg:h-[220px] object-cover rounded-[10px] sm:rounded-[12px] lg:rounded-[14px]"
                                    />
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </motion.div>
</div>
                <motion.div 
                    className='text-center py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-[15%] lg:px-[25%] bg-[url(/herobg.svg)] bg-cover bg-center w-full'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h2 
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-[74px] font-bold text-[#FF4D00]'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "backOut" }}
                        >
                            Our Belief
                        </motion.h2>
                        <motion.p 
                            className='text-sm sm:text-base md:text-lg lg:text-[24px] text-[#EBEBEB] mt-3 sm:mt-4'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            We believe good content isn&apos;t just created—it&apos;s crafted with purpose.
                            If you want content that informs, engages, and converts, you&apos;re in the right place.
                        </motion.p>
                    </motion.div>
                </motion.div>



            </div>
        </div>
    )
}

export default AboutCategories