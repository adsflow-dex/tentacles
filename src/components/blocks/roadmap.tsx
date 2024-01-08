import Image from 'next/image';
import React from 'react';
import background from '@/assets/illustrations/planet.png';

export const Roadmap = () => {
  return (
    <section className='h-fit w-full relative flex flex-col overflow-x-hidden'>
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
        <div className='py-12 h-full w-full flex flex-col items-start md:items-center translate-x-14 sm:translate-x-48 md:translate-x-0 ease-in-out duration-200'>
          <div className='h-fit w-0.5  bg-muted-foreground/50 py-4 font-extrabold text-sm md:text-base'>
            <div className='h-32 w-32 relative border border-muted-foreground/50 -translate-x-1/2 rounded-full grid place-items-center'>
              <p className='z-10 isolate text-3xl'>2023</p>
              <div className='absolute w-24 translate-x-12 md:-translate-x-12 border-t border-muted-foreground/50 z-0 origin-left md:origin-right rotate-[-22.5deg] md:rotate-[22.5deg]'>
                <div className='absolute w-52 lg:w-fit lg:whitespace-nowrap -right-0 md:-left-0 translate-x-full md:-translate-x-full -top-6 md:top-12 origin-left text-start md:text-end rotate-[22.5deg] md:rotate-[-22.5deg] px-2'>
                  <p className=''> Q4</p>
                  <p className='font-light'>Inception and Project Kickoff</p>
                </div>
              </div>
            </div>
            <div className='h-28 w-28 relative border border-muted-foreground/50 -translate-x-1/2 rounded-full grid place-items-center -my-3'>
              <p className='z-10 isolate text-2xl'>2024</p>
              <div className='absolute w-16 md:-translate-x-12 translate-x-12 border-t border-muted-foreground/50 z-0'>
                <div className='absolute w-56 lg:w-fit lg:whitespace-nowrap text-pretty md:-left-0 -right-0 -top-6 md:text-end text-start md:-translate-x-full translate-x-full px-2'>
                  <p className=''> Q1</p>
                  <p className='font-light leading-tight'>Private Token Sale</p>
                </div>
              </div>
            </div>
            <div className='h-44 w-44 md:h-52 md:w-52 relative border border-muted-foreground/50 -translate-x-1/2 rounded-full grid place-items-center -mt-3 -mb-3 md:-mt-6 md:-mb-6'>
              <p className='z-10 isolate text-4xl text-center leading-tight w-24'>
                2024
              </p>
              <div className='hidden md:block absolute w-52 md:w-64 border-t border-muted-foreground/50 z-0'>
                <div className='absolute w-48 lg:w-fit lg:whitespace-nowrap -left-0 -top-6 text-end -translate-x-full pr-2'>
                  <p className=''> Q1 - Q2</p>
                  <p className='font-light leading-tight'>
                    Foundational Setup and Preliminary Actions
                  </p>
                </div>
                <div className='absolute -right-0 translate-x-full -top-6 pl-2'>
                  <p className=''>Q2 - Q3</p>
                  <p className='font-light'>Beta Launch and Market Entry</p>
                </div>
              </div>
              <div className='md:hidden absolute w-32 translate-x-16 md:-translate-x-12 border-t border-muted-foreground/50 z-0 origin-left md:origin-right rotate-[-22.5deg] md:rotate-[22.5deg]'>
                <div className='absolute w-56 lg:w-fit lg:whitespace-nowrap -right-0 md:-left-0 translate-x-full md:-translate-x-full -top-6 md:top-12 origin-left text-start md:text-end rotate-[22.5deg] md:rotate-[-22.5deg] pl-2'>
                  <p className=''> Q1 - Q2</p>
                  <p className='font-light leading-tight'>
                    Foundational Setup and Preliminary Actions
                  </p>
                </div>
              </div>
              <div className='md:hidden absolute w-32 translate-x-16 border-t border-muted-foreground/50 z-0 origin-left rotate-[22.5deg]'>
                <div className='absolute w-48 -right-0 translate-x-full -bottom-6 origin-left rotate-[-22.5deg] pl-2'>
                  <p className=''>Q2 - Q3</p>
                  <p className='font-light'>Beta Launch and Market Entry</p>
                </div>
              </div>
            </div>
            <div className='h-36 w-36 relative border border-muted-foreground/50 -translate-x-1/2 rounded-full grid place-items-center'>
              <p className='z-10 isolate text-2xl'>2024</p>
              <div className='absolute w-16 translate-x-12 border-t border-muted-foreground/50 z-0'>
                <div className='absolute w-56 lg:w-fit lg:whitespace-nowrap text-pretty -right-0 -top-6 text-start translate-x-full pl-2'>
                  <p className=''> Q3 - Q4</p>
                  <p className='font-light leading-tight'>
                    Developer Empowerment and Community Engagement
                  </p>
                </div>
              </div>
            </div>
            <div className='h-44 w-44 relative border border-muted-foreground/50 -translate-x-1/2 rounded-full grid place-items-center -mt-2 -mb-2'>
              <p className='z-10 isolate text-3xl'>2025</p>
              <div className='hidden md:block absolute w-56 border-t border-muted-foreground/50 z-0'>
                <div className='absolute w-48 lg:w-fit lg:whitespace-nowrap text-balance -left-0 -top-6 text-end -translate-x-full pr-2'>
                  <p className=''> Q1 - Q2</p>
                  <p className='font-light leading-tight'>
                    Developer Tools Rollout and Community Synergy
                  </p>
                </div>
                <div className='absolute -right-0 translate-x-full -top-6 pl-2'>
                  <p className=''>Q2 - Q3</p>
                  <p className='font-light lg:whitespace-nowrap'>
                    Mainnet Deployment and Audilane Revelation
                  </p>
                </div>
              </div>
              <div className='md:hidden absolute w-32 translate-x-16 md:-translate-x-12 border-t border-muted-foreground/50 z-0 origin-left md:origin-right rotate-[-22.5deg] md:rotate-[22.5deg]'>
                <div className='absolute w-56 lg:w-fit lg:whitespace-nowrap -right-0 md:-left-0 translate-x-full md:-translate-x-full -top-6 md:top-12 origin-left text-start md:text-end rotate-[22.5deg] md:rotate-[-22.5deg] pl-2'>
                  <p className=''> Q1 - Q2</p>
                  <p className='font-light leading-tight'>
                    Developer Tools Rollout and Community Synergy
                  </p>
                </div>
              </div>
              <div className='md:hidden absolute w-32 translate-x-16 border-t border-muted-foreground/50 z-0 origin-left rotate-[22.5deg]'>
                <div className='absolute w-48 -right-0 translate-x-full -bottom-6 origin-left rotate-[-22.5deg] pl-2'>
                  <p className=''>Q2 - Q3</p>
                  <p className='font-light lg:whitespace-nowrap'>
                    Mainnet Deployment and Audilane Revelation
                  </p>
                </div>
              </div>
            </div>
            <div className='h-28 w-28 relative border border-muted-foreground/50 -translate-x-1/2 rounded-full grid place-items-center'>
              <p className='z-10 isolate text-2xl'>2025</p>
              <div className='absolute w-24 translate-x-12 border-t border-muted-foreground/50 z-0 origin-left rotate-[22.5deg]'>
                <div className='absolute w-48 -right-0 translate-x-full -bottom-6 origin-left rotate-[-22.5deg] pl-2'>
                  <p className=''> Q4</p>
                  <p className='font-light lg:whitespace-nowrap'>
                    Operational Expansion and Innovative Ventures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
