import React from 'react';
import Image from 'next/image';
import chart from '@/assets/illustrations/chart.png';
import hands from '@/assets/illustrations/hands.png';
import vault from '@/assets/illustrations/vault.png';
import business from '@/assets/illustrations/business.png';
import stats from '@/assets/illustrations/stats.png';

export const Hero = () => {
  return (
    <section className='flex items-center justify-center h-screen w-full relative max-w-screen-xl mx-auto px-5 lg:px-10 xl:px-[60px] py-4'>
      {/* <div className='max-w-full md:max-w-2xl transition space-y-8 duration-200 text-center'>
        <h1 className='z-10 font-black  bg-clip-text text-transparent text-edge-outline animate-title font-display text-[7vw] leading-none md:text-5xl text-balance'>
          Reimagine Advertising with Decentralized Power.
        </h1>
        <p className='md:w-[80%] font-light mx-auto text-zinc-400 animate-fade-in text-balance'>
          Adsflow: the seamless, plug-and-play ad engine for effortless content
          monetization. Prioritize creator earnings via fair revenue sharing,
          diverse ad formats, and secure blockchain payments.
        </p>
        <div className='border border-border relative h-16 rounded-full flex items-center md:max-w-md p-5 pr-36 lg:pl-8 mx-auto'>
          <input
            type='text'
            placeholder='name@email.com'
            className='w-full bg-transparent focus:ring-0 focus:outline-0 placeholder:text-foreground'
          />
          <Button className='absolute right-2 text-base rounded-full h-12 w-32'>
            Get Notified
          </Button>
        </div>
      </div> */}
      <div className='max-w-5xl z-10 pt-52 pb-24 mx-auto'>
        <h1 className='text-[7vw] md:text-6xl xl:text-7xl text-center text-balance font-bold text-foreground mb-6 '>
          Transparent Advertising on the Blockchain.
        </h1>
        <h2 className='text-xl md:text-2xl pb-11 text-muted-foreground text-center text-balance '>
          Prioritize creator earnings via fair revenue sharing, diverse ad
          formats, and secure blockchain payments.
        </h2>
        <div className='flex gap-3 justify-center flex-wrap text-center'>
          <a
            className='w-full justify-center sm:w-fit flex items-center bg-muted/50 py-3 rounded-lg font-semibold text-primary border border-primary transition duration-500 ease-in-out transform px-7 text-md md:mt-0 focus:shadow-outline'
            href='/'>
            Explore all features
          </a>
          <a
            className='w-full justify-center sm:w-fit flex items-center py-3 rounded-lg font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-gradient-to-r from-primary to-primary/90 px-7 text-md md:mt-0 focus:shadow-outline'
            href='/'>
            Get Notified
          </a>
        </div>
      </div>
      <div className='absolute duration-300 left-5 md:left-16 top-36 md:top-48 opacity-70 z-0 w-44 pt-10 pb-6 rounded-lg ease-in-out '>
        <Image src={stats} alt='' className='animate-float delay-300' />
      </div>
      <div className='absolute duration-300 right-5 md:right-16 top-56 opacity-70 z-0 w-36 md:w-48 pt-10 pb-6 rounded-lg ease-in-out '>
        <Image src={business} alt='' className='animate-float delay-150' />
      </div>
      <div className='absolute duration-300 right-20 md:right-56 bottom-8 md:bottom-24 opacity-70 z-0 w-32 md:w-36 pt-10 pb-6 rounded-lg ease-in-out '>
        <Image src={chart} alt='' className='animate-float delay-100' />
      </div>
      <div className='absolute duration-300 left-8 md:left-32 bottom-20 md:bottom-36 opacity-70 z-0 w-36 md:w-48 pt-10 pb-6 rounded-lg ease-in-out '>
        <Image src={vault} alt='' className='animate-float delay-200' />
      </div>
    </section>
  );
};
