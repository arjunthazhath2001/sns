import React from 'react';
import { HeroHighlight, Highlight } from './ui/hero-highlight';

export default function HeroSection() {
  return (
    <HeroHighlight>
      <h1 className="text-3xl font-black text-left leading-relaxed">
        First indian institution to implement
        <br />
        <Highlight>design thinking framework.</Highlight>
      </h1>
    </HeroHighlight>
  );
}
