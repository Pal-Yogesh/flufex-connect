"use client";
import { Flower } from "../About/AboutHero";
import "./CreatorProfile.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiYoutube } from "react-icons/fi";
const CreatorProfile = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const cursorsRef = useRef<HTMLDivElement[]>([]);
    const [progress, setProgress] = useState(50);

    useEffect(() => {
        let currentProgress = 50;
        let startX = 0;
        let isDown = false;

        const speedWheel = 0.02;
        const speedDrag = -0.1;

        const getZindex = (array: any[], index: number, active: number) =>
            array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i));

        const $items = carouselRef.current?.querySelectorAll('.carousel-item') || [];
        const $cursors = cursorsRef.current;

        const displayItems = (item: Element, index: number, active: number) => {
            const zIndex = getZindex([...$items], index, active)[index];
            (item as HTMLElement).style.setProperty('--zIndex', zIndex.toString());
            (item as HTMLElement).style.setProperty('--active', ((index - active) / $items.length).toString());
        };

        const animate = () => {
            currentProgress = Math.max(0, Math.min(currentProgress, 100));
            const active = Math.floor(currentProgress / 100 * ($items.length - 1));

            $items.forEach((item, index) => displayItems(item, index, active));
            setProgress(currentProgress);
        };

        animate();

        // Click on items
        $items.forEach((item, i) => {
            item.addEventListener('click', () => {
                currentProgress = (i / $items.length) * 100 + 10;
                animate();
            });
        });

        // Wheel handler
        const handleWheel = (e: WheelEvent) => {
            const wheelProgress = e.deltaY * speedWheel;
            currentProgress = currentProgress + wheelProgress;
            animate();
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            if (e instanceof MouseEvent) {
                $cursors.forEach(($cursor) => {
                    $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                });
            }

            if (!isDown) return;

            const x = (e instanceof MouseEvent) ? e.clientX : (e instanceof TouchEvent && e.touches[0]) ? e.touches[0].clientX : 0;
            const mouseProgress = (x - startX) * speedDrag;
            currentProgress = currentProgress + mouseProgress;
            startX = x;
            animate();
        };

        // Mouse down handler
        const handleMouseDown = (e: MouseEvent | TouchEvent) => {
            isDown = true;
            startX = (e instanceof MouseEvent) ? e.clientX : (e instanceof TouchEvent && e.touches[0]) ? e.touches[0].clientX : 0;
        };

        // Mouse up handler
        const handleMouseUp = () => {
            isDown = false;
        };

        // Add event listeners
        document.addEventListener('wheel', handleWheel);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchstart', handleMouseDown);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchstart', handleMouseDown);
            document.removeEventListener('touchmove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <div className="">



            <div className="main-container">

                <div className="carousel" ref={carouselRef}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center pt-[8%]"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#FF6E1F] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border-2 border-white shadow-2xl text-base sm:text-lg font-semibold">
                            <Flower />
                            Our Creators
                        </div>
                    </motion.div>
                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Sristy Dutta</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                Beauty
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=60" alt="Beauty" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/thesristydutta/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                                <a href="https://www.youtube.com/@SristyDutta" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>




                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Jaanvi Taneja</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                English
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&auto=format&fit=crop&q=60" alt="English" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/jaanvitanejaspeaks/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                                <a href="https://www.youtube.com/@jaanvitanejaspeaks" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Busy Owaiss</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                Import Export
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&auto=format&fit=crop&q=60" alt="Import Export" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/busyowaiss/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                                <a href="https://www.youtube.com/@busyowaiss" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Harsh Vira</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                Finance
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=60" alt="Finance" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.youtube.com/@harshvira19" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <div className="carousel-box relative">

                            <div className="title">Dr. Robin Sharma</div>
                            {/* <div className="num">01</div> */}

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                Ayurveda
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/dr.sharmarobin/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>

                                <a href="https://www.youtube.com/@DrRobinSharma" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Puneet Nagpal</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                Finance
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&auto=format&fit=crop&q=60" alt="Finance" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/cfppuneetnagpal/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                                <a href="https://www.youtube.com/@cfppuneetnagpal" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>



                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Sahil Madaan</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                Govt. Exam Preparation
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=60" alt="Education" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/sahilmadaan_educator/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>




                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Gig Neuro</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                AI
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=60" alt="AI" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/gigneuro/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                                <a href="https://www.youtube.com/@gigneuro" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">UPSC Study Fuel</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                UPSC
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=60" alt="UPSC" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/upscstudyfuel/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-box relative">
                            <div className="title">Mandala Arts</div>

                            {/* Category Tag */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                                Mandala Arts
                            </div>

                            {/* Image related to category */}
                            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop" alt="mandala arts" />

                            {/* Social Icons */}
                            <div className="absolute top-4 left-4 flex gap-3 p-2 rounded-lg z-10">
                                <a href="https://www.instagram.com/preet_tangledart/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="w-6 h-6 cursor-pointer" />
                                </a>
                                <a href="https://www.youtube.com/@preet_tangledart483" target="_blank" rel="noopener noreferrer">
                                    <FiYoutube className="w-6 h-6 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>




        </div>
    )
}

export default CreatorProfile
