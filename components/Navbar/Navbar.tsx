'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Import CSS (you can use CSS Modules or Tailwind instead)
import './Navbar.css';
import Image from 'next/image';

interface NavbarProps {
  // You can add props here if needed
}

export default function Navbar({}: NavbarProps) {
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const pageContentRef = useRef<HTMLDivElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const itemsRef = useRef<NodeListOf<Element> | null>(null);
  const bgImgsRef = useRef<NodeListOf<HTMLImageElement> | null>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import SplitText to avoid SSR issues
    const initAnimations = async () => {
      const SplitText = (await import('gsap/SplitText')).SplitText;
      gsap.registerPlugin(SplitText);

      // Initialize elements
      itemsRef.current = document.querySelectorAll(".menu-overlay__main ul li");
      bgImgsRef.current = document.querySelectorAll(".menu-overlay__bg-img img");

      // Set first image as default
      if (bgImgsRef.current && bgImgsRef.current.length > 0) {
        gsap.set(bgImgsRef.current[0], { opacity: 1 });
      }

      // Menu overlay background animation
      if (itemsRef.current && bgImgsRef.current) {
        itemsRef.current.forEach((item, index) => {
          item.addEventListener("mouseenter", () => {
            // Fade out all images
            gsap.to(bgImgsRef.current, {
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut"
            });

            // Fade in corresponding image
            gsap.to(bgImgsRef.current![index + 1], {
              opacity: 1,
              scale: 1.18,
              duration: 0.5,
              ease: "power3.inOut"
            });
          });

          item.addEventListener("mouseleave", () => {
            // Reset to default (first image)
            gsap.to(bgImgsRef.current, {
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut",
              scale: 1
            });
            gsap.to(bgImgsRef.current![0], {
              opacity: 1,
              duration: 0.5,
              ease: "power3.inOut"
            });
          });
        });
      }

      // Create menu animation timeline
      if (menuOverlayRef.current && pageContentRef.current) {
        const menuTimeline = gsap.timeline({ paused: true });

        // OPEN ANIMATION
        menuTimeline
          .to(
            menuOverlayRef.current,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)",
              duration: 0.8,
              ease: "power3.inOut",
              onStart: () => {
                if (menuOverlayRef.current) {
                  menuOverlayRef.current.style.pointerEvents = "none";
                }
              },
              onComplete: () => {
                if (menuOverlayRef.current) {
                  menuOverlayRef.current.style.clipPath = "none";
                  menuOverlayRef.current.style.pointerEvents = "auto";
                }
              }
            },
            0
          )
          .to(
            pageContentRef.current,
            {
              yPercent: 20,
              rotation: 18,
              scale: 1.3,
              transformOrigin: "left top",
              duration: 0.8,
              ease: "power3.inOut"
            },
            0
          )
          .to(
            ".menu-overlay__bg-img img",
            {
              scale: 1.1,
              duration: 1,
              ease: "power3.inOut"
            },
            0
          )
          .add(() => {
            const linkTexts = document.querySelectorAll("[data-text-anim]");

            linkTexts.forEach((el) => {
              gsap.set(el, { visibility: "visible" });

              const split = new SplitText(el as HTMLElement, {
                type: "chars",
                smartWrap: true,
                mask: "chars"
              });

              menuTimeline.fromTo(
                split.chars as any,
                { yPercent: -200 },
                { yPercent: 0, ease: "power2.inOut", duration: 0.5, stagger: 0.01 },
                0.2
              );
            });
          }, 0)
          .to(
            ".toggle-line-top",
            {
              transformOrigin: "center",
              y: 4,
              scaleX: 0.8,
              rotation: 45,
              duration: 0.4,
              ease: "back.out(1.5)"
            },
            0.2
          )
          .to(
            ".toggle-line-bottom",
            {
              transformOrigin: "center",
              y: -4,
              scaleX: 0.8,
              rotation: -45,
              duration: 0.4,
              ease: "back.out(1.5)"
            },
            0.2
          );

        menuTimelineRef.current = menuTimeline;
      }
    };

    initAnimations();

    // Cleanup
    return () => {
      if (menuTimelineRef.current) {
        menuTimelineRef.current.kill();
      }
    };
  }, []);

  const handleMenuToggle = () => {
    if (!menuTimelineRef.current) return;

    if (menuTimelineRef.current.progress() === 1) {
      // Menu is open, close it
      menuTimelineRef.current.reverse();
      menuTimelineRef.current.eventCallback("onReverseComplete", () => {
        if (menuOverlayRef.current) {
          menuOverlayRef.current.style.pointerEvents = "none";
        }
      });
    } else {
      // Menu is closed, open it
      menuTimelineRef.current.play();
    }
  };

  return (
    <div className="container">
      {/* Menu Overlay */}
      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-overlay__bg-container" aria-hidden="true">
          <div className="menu-overlay__bg-img">
            <img 
              src="https://ik.imagekit.io/kg2nszxjp/travel-menu/bg-1.webp" 
              data-bg-for="default" 
              alt="Menu background" 
            />
          </div>
          <div className="menu-overlay__bg-img">
            <img 
              src="https://ik.imagekit.io/kg2nszxjp/travel-menu/bg-2.webp" 
              data-bg-for="home" 
              alt="Home background" 
            />
          </div>
          <div className="menu-overlay__bg-img">
            <img 
              src="https://ik.imagekit.io/kg2nszxjp/travel-menu/bg-3.webp" 
              data-bg-for="about" 
              alt="About background" 
            />
          </div>
          <div className="menu-overlay__bg-img">
            <img 
              src="https://ik.imagekit.io/kg2nszxjp/travel-menu/bg-4.webp" 
              data-bg-for="explore" 
              alt="Explore background" 
            />
          </div>
          <div className="menu-overlay__bg-img">
            <img 
              src="https://ik.imagekit.io/kg2nszxjp/travel-menu/bg-5.webp" 
              data-bg-for="services" 
              alt="Services background" 
            />
          </div>
          <div className="menu-overlay__bg-img">
            <img 
              src="https://ik.imagekit.io/kg2nszxjp/travel-menu/bg-6.webp" 
              data-bg-for="contact" 
              alt="Contact background" 
            />
          </div>
        </div>

        <div className="menu-overlay__content">
          <div className="menu-overlay__links">
            <div className="menu-overlay__main">
              <ul>
                <li>
                  <a href="/" data-text-anim>HOME</a>
                </li>
                <li>
                  <a href="/" data-text-anim>ABOUT US</a>
                </li>
                <li>
                  <a href="/" data-text-anim>EXPLORE TRIPS</a>
                </li>
                <li>
                  <a href="/" data-text-anim>SERVICES</a>
                </li>
                <li>
                  <a href="/" data-text-anim>CONTACT US</a>
                </li>
              </ul>
            </div>
            <div className="menu-overlay__socials">
              <ul>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">TikTok</a></li>
                <li><a href="/">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <nav className="wrapper">
          <div className="menu-bar">
            <div className="logo-wrapper">
              <Image 
                src="/logo.JPEG" 
                alt="Logo" 
                width={1000}
                height={1000}
                className='w-[80px] h-[60px] object-cover'
              />
            </div>
            <div 
              className="navbar__menu" 
              id="menu-toggle"
              ref={toggleButtonRef}
              onClick={handleMenuToggle}
            >
              <span className="toggle-line-top"></span>
              <span className="toggle-line-bottom"></span>
            </div>
            <a href="#" className="navbar__btn btn">
              <span className="btn-txt">EXPLORE TRIPS</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none">
                <path fill="#2F2411" d="m17.76 6.857-5.727-5.688a.821.821 0 0 0-1.147.01.81.81 0 0 0-.01 1.139l4.33 4.3H.819a.821.821 0 0 0-.578.238.81.81 0 0 0 .578 1.388h14.389l-4.33 4.3a.813.813 0 0 0-.19.892.813.813 0 0 0 .765.505.824.824 0 0 0 .581-.248l5.727-5.688a.81.81 0 0 0 0-1.148Z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      {/* Page Content - This would be the rest of your page */}
      <div className="page-content" ref={pageContentRef}>
        {/* Your page content goes here */}
      </div>
    </div>
  );
}