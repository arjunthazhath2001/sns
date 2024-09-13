"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
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
        <Image
          src={"/images/dtf.png"}
          alt="hero"
          height={360} // Adjusted height for scaling
          width={700}  // Adjusted width for scaling
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
