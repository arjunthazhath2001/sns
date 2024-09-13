"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export default function HeroSection() {
  return (
    <HeroHighlight>
      <div className='flex flex-col justify-center items-center'>

      <motion.span
        initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
        animate={{ opacity: 1 }}  // Animate to opacity 1 (fully visible)
        transition={{ duration: 1.5 }} // Control the duration of the fade-in
        className="text-3xl font-black text-center leading-relaxed pb-20"
      >
        First indian institution to patent & implement
        <br />
        <Highlight>design thinking framework in education.</Highlight>
      </motion.span>
      <HoverBorderGradient>
        <span>Admission Form</span>
      </HoverBorderGradient>
      </div>
    </HeroHighlight>
  );
}
