"use client";
import React, { useEffect, useState, useRef } from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { Highlight } from './ui/hero-highlight';
import { motion } from 'framer-motion';

export default function RecInstitutes() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to track when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set the state to true when the section is in the viewport
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const items1 = [
    { image: "/images/logo1.png" },
    { image: "/images/logo2.png" },
    { image: "/images/logo3.png" },
    { image: "/images/logo4.png" },
    { image: "/images/logo5.png" },
    { image: "/images/logo6.png" },
    { image: "/images/logo7.png" },
    { image: "/images/logo8.png" },
    { image: "/images/logo9.png" },
    { image: "/images/logo10.png" },
  ];

  const items2 = [
    { image: "/images/clogo1.png" },
    { image: "/images/clogo2.png" },
    { image: "/images/clogo3.png" },
    { image: "/images/clogo4.png" },
    { image: "/images/clogo5.png" },
    { image: "/images/clogo6.png" },
    { image: "/images/clogo7.png" },
    { image: "/images/clogo8.png" },
    { image: "/images/clogo9.png" },
    { image: "/images/clogo10.png" },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and move up when the section is visible
      transition={{ duration: 0.75 }} // Duration of the fade-in
      className='bg-transparent min-w-full min-h-screen flex flex-col items-center justify-evenly pt-0 pb-10 relative space-y-5'
    >
      <div className='flex flex-col items-center space-y-2 text-center'>
        <Highlight>
          <span className='text-3xl py-4 font-black text-black dark:text-white'>
            Our Institutions
          </span>
        </Highlight>
        <InfiniteMovingCards items={items1} direction="left" />
      </div>

      <div className='flex flex-col items-center space-y-2 text-center'>
        <Highlight>
          <span className='text-3xl py-4 font-black text-black dark:text-white'>
            Our Recruiters
          </span>
        </Highlight>
        <InfiniteMovingCards items={items2} direction="right" />
      </div>
    </motion.div>
  );
}
