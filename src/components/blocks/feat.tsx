import React from 'react';
import { ArrowRight } from 'lucide-react';
import meeting from '@/assets/illustrations/meeting.svg'
import Image from 'next/image';

export const Feat = () => {
  return (
    <section>
      <div className='py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6'>
        <div className='text-center'>
          <h1 className='text-[7vw] md:text-6xl xl:text-7xl text-balance font-bold text-foreground mb-6 '>
            Features
          </h1>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Unlock a World of Advertising Possibilities with Adsflow.
          </p>
        </div>
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
          <Image
            className='w-full'
            src={meeting}
            alt='dashboard image'
          />
         
          <div className='mt-4 md:mt-0'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
              Let&apos;s create more tools and ideas that brings us together.
            </h2>
            <p className='mb-6 font-light text-muted-foreground md:text-lg'>
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href='#'
              className='inline-flex items-center text-foreground font-medium rounded-lg text-sm py-2.5 text-center group'>
              Get started
              <ArrowRight className='ml-2 h-5 group-hover:translate-x-2 ease-in-out duration-200'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
