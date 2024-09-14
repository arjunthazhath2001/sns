
import React from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Separator } from "@/components/ui/separator"

export default function RecInstitutes() {
  return (
    <div className='bg-transparent min-w-full min-h-screen flex flex-row items-start justify-evenly py-10 relative'>
      <div className='flex flex-col items-center text-center'>
        <HoverBorderGradient>
          <span>Our Institutions</span>
        </HoverBorderGradient>
      </div>

      {/* Adding visible height and a noticeable background color */}
      <Separator orientation="vertical" className="bg-slate-900 dark:bg-yellow-500 h-[400px] w-[2px]" />

      <div>
        <HoverBorderGradient>
          <span>Our Recruiters</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
