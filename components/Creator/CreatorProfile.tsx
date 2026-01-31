"use client";
import { Flower } from "../About/AboutHero";
import "./CreatorProfile.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
                        <div className="carousel-box">
                            <div className="title">Paris</div>
                            <div className="num">01</div>
                            <img src="https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Warsaw</div>
                            <div className="num">02</div>
                            <img src="https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Madrid</div>
                            <div className="num">03</div>
                            <img
                                src="https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I="
                            />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Sydney</div>
                            <div className="num">04</div>
                            <img src="https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Istanbul</div>
                            <div className="num">05</div>
                            <img src="https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Prague</div>
                            <div className="num">06</div>
                            <img src="https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Munich</div>
                            <div className="num">07</div>
                            <img src="https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8=" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Venice</div>
                            <div className="num">08</div>
                            <img src="https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=" />
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">Oslo</div>
                            <div className="num">09</div>
                            <img src="https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-box">
                            <div className="title">London</div>
                            <div className="num">10</div>
                            <img src="https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=" />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default CreatorProfile
