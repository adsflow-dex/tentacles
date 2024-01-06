import React from 'react';
import { Hero } from '@/components/blocks';
import { Navbar } from '@/components/blocks';
import Particles from '../common/particles';
import { CTA } from '@/components/blocks';
import { Footer } from '../blocks/footer';
import { Features } from '../blocks/features';
import Header from '../blocks/header';
import { Feat } from '../blocks/feat';

export const Landing = () => {
  return (
    <main className='relative w-screen h-screen overflow-y-scroll scroll-smooth'>
      <Header/>
      <Hero/>
      {/* <Features/> */}
      <Feat/>
    </main>
  );
};
