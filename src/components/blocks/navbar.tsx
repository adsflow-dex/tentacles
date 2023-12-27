import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/illustrations/logo.svg';
import { ThemeToggle } from '../common/theme-toggle';

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <header>
      <nav
        className={cn(
          'px-4 w-full lg:px-6 py-4 z-50 text-zinc-400',
          className
        )}>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1440px]'>
          <Link
            href={'/'}
            className='font-extrabold text-3xl flex gap-3 text-primary items-end'>
            <Image alt='adsflow' src={logo} height={56} width={56} className='h-10 w-14' />
            <p className=''>adsflow</p>
          </Link>

          <div className='flex gap-4 items-center'>
            <Link
              href={'docs'}
              className=' hover:text-blue-500 ease-in-out duration-200'>
              Documentation
            </Link>
            <Link
              href={'#_'}
              className=' hover:text-blue-500 ease-in-out duration-200'>
              About
            </Link>
            <Link
              href={'#_'}
              className=' hover:text-blue-500 ease-in-out duration-200'>
              AdEngine
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
