import Image from 'next/image';
import React from 'react';
import background from '@/assets/illustrations/planet.png';

export const Roadmap = () => {
  return (
    <section className='h-fit w-full relative flex flex-col'>
      <div className='absolute h-full w-full top-0 left-0 z-0'>
        <Image
          src={background}
          alt=''
          unoptimized
          className='h-full w-full object-cover opacity-80 object-top'
        />
      </div>
      <div className='px-5 mx-auto max-w-screen-xl text-start py-12 lg:px-6 z-10 isolate'>
        <h1 className='text-[7vw] md:text-4xl text-center text-balance font-semibold text-foreground mb-2 lg:pr-6 font-display'>
          Adsflow&apos;s Complete Roadmap
        </h1>
        <p className='text-muted-foreground sm:text-xl text-center lg:pr-6'>
          Tailoring Solutions for Every Note
        </p>
        <div className='py-12 h-full w-full flex flex-col items-center scale-90 md:scale-100'>
          <div className='h-fit w-0.5  bg-muted-foreground/50 py-4 font-extrabold'>
            <div className='h-32 w-32 relative border border-muted-foreground -translate-x-1/2 rounded-full grid place-items-center'>
              <p className='z-10 isolate text-3xl'>2023</p>
              <div className='absolute w-44 border-t border-muted-foreground z-0 rotate-[-22.5deg]'>
                <div className='absolute w-32 md:w-48 -left-0 bottom-3 rotate-[22.5deg] text-end -translate-x-full pr-2'>
                  <p className=''> Q3-Q4</p>
                  <p className='font-light text-sm leading-none'>
                    Define tokenomics parameters (Sept-Nov)
                  </p>
                </div>
                <div className='absolute w-32 md:w-48 -right-0 translate-x-full -top-3 rotate-[22.5deg] pl-2'>
                  <p className=''> Q4</p>
                  <p className='font-light text-sm'>Token Website Design</p>
                </div>
              </div>
            </div>
            <div className='h-44 w-44 md:h-52 md:w-52 relative border border-muted-foreground -translate-x-1/2 rounded-full grid place-items-center -mt-6 -mb-6'>
              <p className='z-10 isolate text-4xl text-center leading-none w-24'>
                2023 2024
              </p>

              <div className='absolute w-52 md:w-64 border-t border-muted-foreground z-0'>
                <div className='absolute w-[7.5rem] md:w-48 -left-0 -top-6 text-end -translate-x-full pr-2'>
                  <p className=''> Q3/23 - Q1/24</p>
                  <p className='font-light text-sm leading-none'>
                  Smart contract development (Dec-June)
                  </p>
                </div>
                <div className='absolute -right-0 translate-x-full -top-6 pl-2'>
                  <p className=''> Q4</p>
                  <p className='font-light text-sm'>Token Website Design</p>
                </div>
              </div>
            </div>
            <div className='h-28 w-28 relative border border-muted-foreground -translate-x-1/2 rounded-full grid place-items-center'>
              <p className='z-10 isolate text-2xl'>2024</p>
              <div className='absolute w-48 border-t border-muted-foreground z-0'></div>
            </div>
            <div className='h-36 w-36 relative border border-muted-foreground -translate-x-1/2 rounded-full grid place-items-center -mt-2 -mb-2'>
              <p className='z-10 isolate text-3xl'>2025</p>
              <div className='absolute w-56 border-t border-muted-foreground z-0'></div>
            </div>
            <div className='h-28 w-28 relative border border-muted-foreground -translate-x-1/2 rounded-full grid place-items-center'>
              <p className='z-10 isolate text-2xl'>2024</p>
              <div className='absolute w-48 border-t border-muted-foreground z-0 rotate-[22.5deg]'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
