import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function AdmissionForm() {
  const items1 = [
    { image: "/images/image1.png" },
    { image: "/images/image2.png" },
    { image: "/images/image3.png" },
    { image: "/images/image4.png" },
    { image: "/images/image5.png" },
    { image: "/images/image6.png" },
    { image: "/images/image7.png" },
  ];

  const items2 = [
    { image: "/images/image8.png" },
    { image: "/images/image9.png" },
    { image: "/images/image10.png" },
    { image: "/images/image11.png" },
    { image: "/images/image12.png" },
    { image: "/images/image13.png" },
    { image: "/images/image14.png" },
  ];
  const items3 = [
    { image: "/images/image15.png" },
    { image: "/images/image16.png" },
    { image: "/images/image17.png" },
    { image: "/images/image18.png" },
    { image: "/images/image19.png" },
    { image: "/images/image20.png" },
    { image: "/images/image21.png" },
  ];

  return (
    <div className='bg-transparent min-h-screen rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <InfiniteMovingCards items={items1} direction="left" />
      <InfiniteMovingCards items={items2} direction="right" />
      <InfiniteMovingCards items={items3} direction="left" />
    </div>
  );
}
