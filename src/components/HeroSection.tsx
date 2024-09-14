"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export default function HeroSection() {
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

  return (
    <HeroHighlight>
      <div className='flex flex-col justify-center items-center' ref={sectionRef}>
        <motion.span
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower on the Y-axis
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and move up when the section is visible
          transition={{ duration: 0.75 }} // Control the duration of the fade-in
          className="text-3xl font-black text-center leading-relaxed pb-20"
        >
          The first Indian institution to patent & implement
          <br />
          <Highlight>design thinking framework in education.</Highlight>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }} // Add delay to make buttons appear after the text
          className='flex flex-row items-center space-x-20'
        >
          <HoverBorderGradient>
            <span>Admission Form</span>
          </HoverBorderGradient>
          <HoverBorderGradient>
            <span>Our Specialities</span>
          </HoverBorderGradient>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
