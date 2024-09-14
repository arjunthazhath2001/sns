
import React from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Separator } from "@/components/ui/separator"
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { Highlight } from './ui/hero-highlight';

export default function RecInstitutes() {
  const items1 = [
    { image: "/images/logo1.png" },
    { image: "/images/logo2.png" },
    { image: "/images/logo3.png" },
    { image: "/images/logo4.png" },
    { image: "/images/logo5.png" },
    { image: "/images/logo6.png" },
    { image: "/images/logo7.png" },
    { image: "/images/logo8.png" },
    { image: "/images/logo9.png" },
    { image: "/images/logo10.png" },
  ];
  const items2 = [
    { image: "/images/clogo1.png" },
    { image: "/images/clogo2.png" },
    { image: "/images/clogo3.png" },
    { image: "/images/clogo4.png" },
    { image: "/images/clogo5.png" },
    { image: "/images/clogo6.png" },
    { image: "/images/clogo7.png" },
    { image: "/images/clogo8.png" },
    { image: "/images/clogo9.png" },
    { image: "/images/clogo10.png" },
  ];

  return (
    <div className='bg-transparent min-w-full min-h-screen flex flex-col items-center justify-evenly pt-0 pb-10 relative space-y-5'>
      <div className='flex flex-col items-center space-y-2 text-center'>
        <Highlight>
          <span className='text-3xl py-4 font-black text-black dark:text-white'>Our Institutions</span>
          </Highlight>
        <InfiniteMovingCards items={items1} direction="left" />
      </div>

      {/* Adding visible height and a noticeable background color */}
      
      <div className='flex flex-col items-center space-y-2 text-center'>
        <Highlight>
          <span className='text-3xl py-4 font-black text-black dark:text-white'>Our Recruiters</span>
        </Highlight>
        <InfiniteMovingCards items={items2} direction="right" />
      </div>
    </div>
  );
}
