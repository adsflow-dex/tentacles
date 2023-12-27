import React from 'react';
import Particles from '../common/particles';
import Image from 'next/image';
import online_ad from '@/assets/illustrations/updates.svg';
export const Hero = () => {
  return (
    <section className='flex items-center justify-between h-screen w-full relative max-w-[1440px] mx-auto px-4 lg:px-6 py-4'>
      <div className='text-start max-w-lg transition duration-200'>
        <h1 className='z-10 text-transparent font-bold bg-primary cursor-default text-edge-outline animate-title font-display text-6xl  whitespace-nowrap bg-clip-text '>
          adsflow
        </h1>
        <p className='text-lg font-extralight text-zinc-400 animate-fade-in'>
          Empowering Creators with Localized & Customized Ad Solutions.
        </p>
        <p className='mt-2 font-extralight text-zinc-400 animate-fade-in'>
          Adsflow: the seamless, plug-and-play ad engine for instant content
          monetization without coding. Effortless integration, scalable
          infrastructure for millions of ad impressions, and global reach with
          hyper-targeting. Prioritize creator earnings via fair revenue sharing,
          diverse ad formats, and secure blockchain payments.
        </p>
      </div>
      <div className='max-w-lg'>
        <Image alt='' src={online_ad} />
      </div>
    </section>
  );
};
