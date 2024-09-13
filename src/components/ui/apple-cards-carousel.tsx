"use client";
import React, { useEffect, useRef, useState, createContext } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";


interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex w-full overflow-x-scroll py-5 md:py-10 scroll-smooth hide-scrollbar"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index } }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};



export const Card = ({
  card,
  index,
}: {
  card: { src: string; title: string; category: string };
  index: number;
}) => {
  return (
    <div className="rounded-3xl bg-gray-100 dark:bg-neutral-900 md:h-[22rem] md:w-[16rem] overflow-hidden flex flex-col items-start justify-start relative z-10">
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/90 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-4">
        <p className="text-yellow-500 text-sm md:text-base font-medium font-sans text-left">
          {card.category}
        </p>
        <p className="text-white text-lg md:text-2xl font-semibold max-w-xs text-left font-sans mt-2">
          {card.title}
        </p>
      </div>
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0"
      />
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

