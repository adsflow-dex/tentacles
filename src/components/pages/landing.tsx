import React from 'react';
import { Hero } from '@/components/blocks';
import { Navbar } from '@/components/blocks';
import Particles from '../common/particles';
import { CTA } from '@/components/blocks';
import { Footer } from '../blocks/footer';
import { Features } from '../blocks/features';
import Header from '../blocks/header';
import { Feat } from '../blocks/feat';
import {
  AiOutlineSafetyCertificate,
  AiOutlineGlobal,
  AiOutlineSecurityScan,
  AiOutlineEnvironment,
  AiOutlineDollar,
} from 'react-icons/ai';

export const Landing = () => {
  return (
    <main className='relative w-screen h-screen overflow-y-scroll scroll-smooth '>
      <Header />
      <Hero />
      <div className='bg-background border-y animate-title'>
        <div className='max-w-screen-xl mx-auto w-full flex gap-4 flex-wrap justify-center z-10 p-5 animate-fade-in'>
          <div className='flex gap-2 items-center text-white'>
            <AiOutlineSafetyCertificate />
            Data Encryption
          </div>
          <div className='flex gap-2 items-center text-white'>
            <AiOutlineGlobal />
            Global Accessibility
          </div>
          <div className='flex gap-2 items-center text-white'>
            <AiOutlineSecurityScan />
            Information Transparency
          </div>
          <div className='flex gap-2 items-center text-white'>
            <AiOutlineEnvironment />
            Geographical Customization
          </div>
          <div className='flex gap-2 items-center text-white'>
            <AiOutlineDollar />
            Fair Pricing
          </div>
        </div>
      </div>
      <CTA />
      <Features />
      {/* <Feat/> */}
      <Footer />
    </main>
  );
};
