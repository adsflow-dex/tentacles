import { Logo } from '@/assets/jsx/logo';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='flex justify-center px-4 text-muted-foreground'>
      <div className='container px-6 py-6'>
        <h1 className='text-lg font-bold text-center lg:text-2xl'>
          Join 31,000+ other and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div className='flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row'>
          <input
            id='email'
            type='text'
            className='px-8 py-4 text-muted bg-white border rounded-full'
            placeholder='Email Address'
          />

          <button className='w-full px-8 py-4 uppercase font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gradient rounded-full'>
            Get Notified
          </button>
        </div>

        <hr className='h-px bg-gray-200 border-none my-7 ' />

        <div className='flex flex-col items-center justify-between md:flex-row'>
          <a href='#' className='flex gap-2 items-end text-2xl'>
          <Logo className='h-12 w-12 [&>path]:fill-muted-foreground' />
         <p className=""> adsflow.<span className='text-xs mt-2'>net</span></p> 
          </a>

          <div className='flex mt-4 md:m-0'>
            <div className='-mx-4'>
              <a
                href='#'
                className='px-4 text-sm hover:underline'>
                About
              </a>
              <a
                href='#'
                className='px-4 text-sm hover:underline'>
                Blog
              </a>
              <a
                href='#'
                className='px-4 text-sm hover:underline'>
                News
              </a>
              <a
                href='#'
                className='px-4 text-sm hover:underline'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
