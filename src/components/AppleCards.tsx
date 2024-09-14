"use client";
import React, { useEffect, useState, useRef } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";

export function AppleCardsCarouselDemo() {
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

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and move up when the section is visible
      transition={{ duration: 0.75 }} // Duration of the fade-in
      className="w-full h-full py-10 overflow-hidden"
    >
      <span className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know our <span className="text-yellow-500">Milestones.</span>
      </span>
      <Carousel items={cards} />
    </motion.div>
  );
}

const data = [
  {
    category: "Young Minds",
    title: "14,000+ students",
    src: "/images/apple1.png",
  },
  {
    category: "Powerhouses",
    title: "10 institutions",
    src: "/images/apple2.png",
  },
  {
    category: "Family",
    title: "37,000+ alumni",
    src: "/images/apple3.png",
  },
  {
    category: "Victories",
    title: "2200+ placements",
    src: "/images/apple4.png",
  },
  {
    category: "Partners",
    title: "300+ recruiters",
    src: "/images/apple5.png",
  },
  {
    category: "Prosperity",
    title: "19LPA max salary",
    src: "/images/apple6.png",
  },
];
