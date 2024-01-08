import React from 'react';
import { features } from '@/assets/data/features';
import { cn } from '@/lib/utils';

export const Features = () => {
  return (
    <section id='features' className='h-full z-20 isolate'>
      <div className='px-5 mx-auto max-w-screen-xl text-start py-24 lg:px-6'>
        <h1 className='text-[7vw] md:text-4xl text-center lg:text-right text-balance font-semibold text-foreground mb-2 lg:pr-6'>
          Unveiling AdsFlow&apos;s Diverse Orchestra
        </h1>
        <p className='text-muted-foreground sm:text-xl text-center lg:text-right lg:pr-6'>
          Tailoring Solutions for Every Note
        </p>
        <div className='py-6 w-full'>
          <div className="w-full flex justify-end lg:pr-6">
          <p className='text-muted-foreground max-w-2xl text-center lg:text-right text-pretty'>
            AdsFlow transcends a one-size-fits-all approach, recognizing the
            dynamic symphony of players within the advertising ecosystem. It
            meticulously tunes its solutions to resonate with the unique needs
            and aspirations of each participant, harmonizing their interests for
            a more transparent and impactful advertising future.
          </p></div>
          <div className='flex pt-12 flex-wrap justify-center h-fit lg:translate-x-6'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='flex-grow flex-shrink h-full w-full lg:basis-1/2 lg:pr-12 pb-6 lg:pb-12  max-w-2xl'>
                <div className='h-full space-y-6 p-6 rounded-xl bg-muted/25 hover:bg-muted/50 ease-in-out duration-200 '>
                  <h3
                    className={cn('text-2xl border-l-2 pl-3 mt-4', feature.color)}>
                    {feature.title}
                  </h3>
                  <div className='flex lg:items-center flex-col-reverse lg:flex-row gap-4'>
                    <p className='text-muted-foreground font-light tracking-wide leading-relaxed line-clamp-6 text-balance'>
                      {feature.desc}
                    </p>
                    <div className='w-24'>
                      {typeof feature.icon === 'function' ? (
                        <feature.icon
                          className={cn('h-24 w-24 fill-white')}
                        />
                      ) : (
                        feature.icon
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className='text-center'>
          <a
            href='/lightpaper'
            className='inline-flex items-center text-foreground hover:text-muted-foreground/80 ease-in-out duration-200'>
            Learn what makes AdsFlow different{' '}
            <svg
              className='ml-1 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'></path>
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
};
