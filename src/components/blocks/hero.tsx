import React from 'react';
import Image from 'next/image';
import background from '@/assets/illustrations/pxfuel.jpg';
import launch from '@/assets/illustrations/launch.png';
import {
  AiOutlineSafetyCertificate,
  AiOutlineGlobal,
  AiOutlineSecurityScan,
  AiOutlineEnvironment,
  AiOutlineDollar,
} from 'react-icons/ai';
export const Hero = () => {
  return (
    <section className='h-full w-full relative flex flex-col'>
      <div className='absolute h-full w-full top-0 left-0 animate-title'>
        <Image
          src={background}
          alt=''
          className='h-full w-full brightness-50 object-cover opacity-75'
        />
      </div>
      <div className='flex items-center justify-center h-screen w-full max-w-screen-xl mx-auto px-5 lg:px-10 xl:px-[60px] py-4 '>
        <div className='max-w-5xl pt-52 pb-16 mx-auto relative'>
          <div className='absolute left-0 -z-0 top-32 brightness-75 animate-fade-in'>
            <Image src={launch} alt='' className='h-48 w-48 object-cover' />
          </div>
          <h1 className='text-[7vw] md:text-6xl xl:text-7xl text-center text-balance font-semibold text-foreground z-10 isolate animate-title line-clamp-2'>
            Transparent Advertising on the Blockchain.
          </h1>
          <h2 className='text-lg md:text-xl max-w-3xl mx-auto py-5 md:py-10 text-center text-balance animate-fade-in'>
            Prioritize creator earnings via fair revenue sharing, diverse ad
            formats, and secure blockchain payments.
          </h2>
          <div className='flex gap-3 justify-center flex-wrap text-center animate-fade-in'>
            <a
              className='w-full justify-center sm:w-fit flex items-center tracking-wider py-4 rounded-full uppercase text-white transition duration-500 ease-in-out transform bg-gradient  hover:-translate-y-1 px-8 text-md md:mt-0 focus:shadow-outline'
              href='/'>
              Get Notified
            </a>
            <a
              className='w-full justify-center sm:w-fit flex items-center tracking-wider bg-muted/50 py-4 rounded-full uppercase text-white border border-white transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-y-1 px-8 text-md md:mt-0 focus:shadow-outline'
              href='/'>
              Explore all features
            </a>
          </div>
        </div>
      </div>
      <div className='min-h-32 w-full flex gap-4 flex-wrap justify-center z-10 pb-12 animate-fade-in'>
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
    </section>
  );
};
