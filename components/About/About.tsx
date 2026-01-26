'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './HeroSection.module.css';
import Image from 'next/image';

export default function AboutSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const imageContainer = imagesRef.current;
        const content = contentRef.current;
        
        if (!hero || !imageContainer || !content) return;
        
        const images = imageContainer.querySelectorAll('img');
        const options = {
            initRadius: 50,
            radiusDesktop: 170,
            radiusMobile: 90,
            flipCard: true,
        };

        let isImageLoad = false;
        let isAnimated = false;

        const imageStackEntrance = () => {
            const breakPoint = '768px';
            const media = gsap.matchMedia();

            media.add(
                {
                    isDesktop: `(min-width: ${breakPoint})`,
                    isMobile: `(max-width: ${breakPoint})`,
                },
                (context) => {
                    if (!context.conditions) return;
                    const { isDesktop } = context.conditions;
                    const imageHeight = images[0]?.offsetHeight || 130;
                    const count = images.length;
                    const radius1 = options.initRadius + imageHeight / 2;
                    const radius2 = isDesktop ? options.radiusDesktop : options.radiusMobile;
                    const cardFlip = options.flipCard;

                    hero.classList.add(styles.init);

                    gsap
                        .timeline()
                        .from(images, {
                            y: imageContainer.offsetHeight / 2 + imageHeight * 1.5,
                            rotateX: -180,
                            stagger: 0.1,
                            duration: 0.5,
                            opacity: 0.8,
                            scale: 3,
                        })
                        .set(images, {
                            transformOrigin: `center ${radius1 + imageHeight / 2}px`,
                        })
                        .set(imageContainer, {
                            transformStyle: 'preserve-3d',
                        })
                        .to(images, {
                            y: -radius1,
                            duration: 0.5,
                            ease: 'power1.out',
                        })
                        .to(
                            images,
                            {
                                rotation: (index) => (index * 360) / count,
                                rotateY: 15,
                                duration: 1,
                                ease: 'power1.out',
                            },
                            '<'
                        )
                        .to(images, {
                            rotation: (index) => (index + 1) * (360 / count),
                            x: (index) =>
                                (radius2 - options.initRadius) *
                                Math.sin(((180 - ((index + 1) * 360) / count) * Math.PI) / 180),
                            y: (index) =>
                                (radius2 - options.initRadius) *
                                Math.cos(((180 - ((index + 1) * 360) / count) * Math.PI) / 180) -
                                radius1,
                            duration: 1,
                            ease: 'power1.out',
                        })
                        .to(
                            images,
                            {
                                rotateY: 180,
                                duration: 1,
                            },
                            '<'
                        )
                        .from(
                            content,
                            {
                                opacity: 0,
                                filter: 'blur(60px)',
                                duration: 1,
                            },
                            '<'
                        )
                        .to(
                            images,
                            {
                                repeat: -1,
                                duration: 2,
                                onRepeat: () => {
                                    if (cardFlip) {
                                        const randomImg = images[Math.floor(Math.random() * count)];
                                        gsap.to(randomImg, { rotateY: '+=180', duration: 0.5 });
                                    }
                                },
                            },
                            '<'
                        )
                        .to(
                            imageContainer,
                            {
                                rotation: 360,
                                duration: 20,
                                repeat: -1,
                                ease: 'none',
                            },
                            '<-=2'
                        );
                }
            );
        };

        const triggerAnimation = () => {
            if (!isImageLoad || isAnimated || !hero) return;
            const offset = hero.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (offset.top < windowHeight && offset.bottom > 0) {
                isAnimated = true;
                imageStackEntrance();
            }
        };

        const init = () => {
            let imageCount = 0;
            if (images.length === 0) {
                isImageLoad = true;
                triggerAnimation();
                return;
            }

            images.forEach((img: HTMLImageElement) => {
                if (img.complete) {
                    imageCount++;
                    if (imageCount === images.length) {
                        isImageLoad = true;
                        triggerAnimation();
                    }
                } else {
                    img.addEventListener('load', () => {
                        imageCount++;
                        if (imageCount === images.length) {
                            isImageLoad = true;
                            triggerAnimation();
                        }
                    });
                    img.addEventListener('error', () => {
                        imageCount++;
                        if (imageCount === images.length) {
                            isImageLoad = true;
                            triggerAnimation();
                        }
                    });
                }
            });
        };

        init();
        window.addEventListener('resize', triggerAnimation);
        window.addEventListener('scroll', triggerAnimation);

        return () => {
            window.removeEventListener('resize', triggerAnimation);
            window.removeEventListener('scroll', triggerAnimation);
        };
    }, []);

    return (
        <div className={styles.mdwRotatingImageEffect} ref={heroRef}>
            <div className={styles.mdwRotatingImages} ref={imagesRef}>
                <img
                    src="https://plus.unsplash.com/premium_photo-1757392183559-87d4181406bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Flower 1"
                />
                <img
                    src="https://images.unsplash.com/photo-1756786605218-28f7dd95a493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
                    alt="Flower 2"
                />
                <img
                    src="https://images.unsplash.com/photo-1757495152561-1f632725b271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
                    alt="Flower 3"
                />
                <img
                    src="https://images.unsplash.com/photo-1757345609584-c6995bfda088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Flower 4"
                />
                <img
                    src="https://images.unsplash.com/photo-1756134904044-1cf7868cb9de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
                    alt="Flower 5"
                />
                <img
                    src="https://plus.unsplash.com/premium_photo-1667423711653-1ffb899172bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Flower 6"
                />
            </div>
            <div className={styles.mdwRotatingImageContent} ref={contentRef}>
                <div>
                   <div className='pl-36'>
                        
                         <Image src="/logo.JPEG" alt="logo" width={100} height={100} />
                        </div>
                </div>
                {/* <p>Dynamic hero section with GSAP animations</p> */}
            </div>
        </div>
    );
}