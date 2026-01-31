"use client";
import CreatorCard from '@/components/Creator/CreatorCard'
import CreatorProfile from '@/components/Creator/CreatorProfile'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  
  // Create a scroll-driven progress value
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map the scroll progress to animation progress
  const animationProgress = useTransform(scrollYProgress, [0, 0.9], [0, 100])

  useMotionValueEvent(animationProgress, "change", (latest) => {
    setProgress(latest)
  })

  return (
    <div style={{ fontFamily: 'var(--font-bricolage-grotesque)' }} className="bg-[#1A1A1A]">
        {/* Sticky Container for CreatorProfile */}
        <div ref={containerRef} className="h-[690vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <CreatorProfile />
            </div>
        </div>

        {/* Other components shown after animation */}
        <div className="relative z-10">
            <CreatorCard />
        </div>
    </div>
  )
}

export default Page