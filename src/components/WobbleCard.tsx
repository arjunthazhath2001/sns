"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { FloatingDockDemo } from "./FloatingBar";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 max-w-6xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 bg-yellow-600 min-h-[400px]">
        <div className="max-w-full">
          <h2 className="max-w-full text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black dark:text-white">
          SRI SNS Charitable Trust, 536, Thudiyalur - Saravanampatti Road, Vellakinar (PO), Coimbatore - 641 029, Tamil Nadu, India.
        </h2>
          <p className="mt-1 max-w-[26rem] text-left  text-base/6 text-neutral-200 dark:text-neutral-700">
            Address
          </p>
          <div className="flex items-center space-x-[19rem]">
        <div>
          <h2 className="max-w-full text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black mt-8 dark:text-white">
          95664 23456
        </h2>
          <p className="mt-0 max-w-[26rem] text-left  text-base/6 text-neutral-200 dark:text-neutral-700">
            Phone Number
          </p>
          </div>
          <div>
          <h2 className="max-w-full text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black mt-8 dark:text-white">
          90036 55855
        </h2>
          <p className="mt-0 max-w-[26rem] text-left  text-base/6 text-neutral-200 dark:text-neutral-700">
            Admission Helpline
          </p>
          </div>
          </div>
        </div>
          <div className="flex items-center space-x-20">
        <div>
          <h2 className="max-w-full text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black mt-8 dark:text-white">
          director.iipc.sns@gmail.com
        </h2>
          <p className="mt-0 max-w-[26rem] text-left  text-base/6 text-neutral-200 dark:text-neutral-700">
          Email
          </p>
          </div>
          <div>
          <h2 className="max-w-full text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black mt-8 dark:text-white">
          job@snsgroups.com
        </h2>
          <p className="mt-0 max-w-[26rem] text-left  text-base/6 text-neutral-200 dark:text-neutral-700">
            Career Opportunity
          </p>
          </div>
          </div>
          <FloatingDockDemo/>
      </WobbleCard>
    </div>
  );
}
