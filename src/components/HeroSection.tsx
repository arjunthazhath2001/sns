"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { HeroHighlight, Highlight } from './ui/hero-highlight';

export default function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
        animate={{ opacity: 1 }}  // Animate to opacity 1 (fully visible)
        transition={{ duration: 1.5 }} // Control the duration of the fade-in
        className="text-3xl font-black text-center leading-relaxed"
      >
        First indian institution to patent & implement
        <br />
        <Highlight>design thinking framework in education.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
