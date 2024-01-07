'use client';
import { Logo } from '@/assets/jsx/logo';
import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '../common/theme-toggle';

export default function Header() {
  return (
    <header className='fixed top-0 w-full text-muted-foreground z-50 animate-fade-in backdrop-blur-sm'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-5'>
        <Logo className='h-12 w-12 [&>path]:fill-muted-foreground' />
        <div className='flex gap-4 items-center'>
          <Link
            href={'home'}
            className=' hover:text-foreground ease-in-out duration-300'>
            Home
          </Link>
          <Link
            href={'#features'}
            className=' hover:text-foreground ease-in-out duration-300'>
            Features
          </Link>
          <Link
            href={'#roadmap'}
            className=' hover:text-foreground ease-in-out duration-300'>
            Roadmap
          </Link>
          <Link
            href={'lightpaper'}
            className=' hover:text-foreground ease-in-out duration-300'>
            Lightpaper
          </Link>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
