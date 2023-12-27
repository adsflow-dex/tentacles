import React from 'react';
import { Hero } from '@/components/blocks';
import { Navbar } from '@/components/blocks';
import Particles from '../common/particles';
import { CTA } from '@/components/blocks';
import { Footer } from '../blocks/footer';
import { Features } from '../blocks/features';

export const Landing = () => {
  return (
    <main className='relative w-screen h-screen overflow-y-scroll'>

      <Navbar className='fixed backdrop-blur-sm top-0 animate-fade-in'/>
      <Hero/>
    </main>
  );
};
