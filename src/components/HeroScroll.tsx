"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  const images = [
    "/images/dtf.png",
    "/images/dtf2.png",
    "/images/dtf3.png",
    "/images/dtf4.png",
    "/images/dtf5.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Cycle through images
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Intersection Observer to track when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when the section is visible
      transition={{ duration: 0.75 }} // Duration of the fade-in
      className="flex flex-col overflow-hidden"
    >
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-5xl font-semibold text-black dark:text-white text-center leading-tight">
              WE ARE <br />
              <span className="text-5xl md:text-[4rem] text-yellow-500 font-bold mt-1 leading-tight">
                DESIGN THINKERS
              </span>
            </h1>
          </>
        }
      >
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} // Duration of fade in/out
              className="absolute inset-0"
            >
              <Image
                src={images[currentImage]}
                alt={`Design Thinkers Image ${currentImage + 1}`}
                height={360} // Adjusted height for scaling
                width={700}  // Adjusted width for scaling
                className="mx-auto rounded-2xl object-cover h-full object-center"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </ContainerScroll>
    </motion.div>
  );
}
