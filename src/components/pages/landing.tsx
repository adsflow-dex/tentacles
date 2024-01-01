import React from 'react';
import { Hero } from '@/components/blocks';
import { Navbar } from '@/components/blocks';
import Particles from '../common/particles';
import { CTA } from '@/components/blocks';
import { Footer } from '../blocks/footer';
import { Features } from '../blocks/features';
import Header from '../blocks/header';

export const Landing = () => {
  return (
    <main className='relative w-screen h-screen overflow-y-scroll'>
      <Header/>
      <Hero/>
      {/* <Particles quantity={1000} className='absolute inset-0 -z-0 h-full w-full top-0'/> */}
    </main>
  );
};
