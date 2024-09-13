"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 overflow-hidden">
      <span className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know our <span className="text-yellow-500">Milestones.</span>
      </span>
      <Carousel items={cards} />
    </div>
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
    title: "37,000+ alumnis",
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
