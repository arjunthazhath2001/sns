"use client";
import React, { useEffect, useState, useRef } from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { motion } from 'framer-motion';

export default function Gallery() {
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
      { threshold: 0.2 } // Adjust the threshold to control when the animation triggers
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
    { image: "/images/image1.png" },
    { image: "/images/image2.png" },
    { image: "/images/image3.png" },
    { image: "/images/image4.png" },
    { image: "/images/image5.png" },
    { image: "/images/image6.png" },
    { image: "/images/image7.png" },
  ];

  const items2 = [
    { image: "/images/image8.png" },
    { image: "/images/image9.png" },
    { image: "/images/image10.png" },
    { image: "/images/image11.png" },
    { image: "/images/image12.png" },
    { image: "/images/image13.png" },
    { image: "/images/image14.png" },
  ];

  const items3 = [
    { image: "/images/image15.png" },
    { image: "/images/image16.png" },
    { image: "/images/image17.png" },
    { image: "/images/image18.png" },
    { image: "/images/image19.png" },
    { image: "/images/image20.png" },
    { image: "/images/image21.png" },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and move up when the section is visible
      transition={{ duration: 0.75 }} // Duration of the fade-in
      className='bg-transparent min-h-screen rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >
      <InfiniteMovingCards items={items1} direction="left" />
      <InfiniteMovingCards items={items2} direction="right" />
      <InfiniteMovingCards items={items3} direction="left" />
    </motion.div>
  );
}
