import React from 'react';
import { Faq, Hero, Roadmap } from '@/components/blocks';
import { CTA } from '@/components/blocks';
import { Footer } from '../blocks/footer';
import { Features } from '../blocks/features';
import {
    AiOutlineSafetyCertificate,
    AiOutlineGlobal,
    AiOutlineSecurityScan,
    AiOutlineEnvironment,
    AiOutlineDollar,
} from 'react-icons/ai';
import Image from 'next/image';
import bg from '@/assets/illustrations/bg.png';
import Header from '../blocks/header';

export const Landing = () => {
    return (
      <main className='relative'>
        <Header />
        <Hero />
        <div className='bg-background border-y'>
          <div className='max-w-screen-xl mx-auto w-full flex gap-4 flex-wrap justify-center z-10 p-5'>
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
        <div className='relative w-full '>
          <div className='absolute w-full top-0 left-0'>
            <Image
              src={bg}
              alt=''
              unoptimized
              className='h-full w-full object-cover object-left -z-0'
            />
          </div>
          <CTA />
          <Features />
        </div>
        <Roadmap />
        <Footer />
      </main>
    );
};
