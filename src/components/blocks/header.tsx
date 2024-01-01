'use client';
import { Logo } from '@/assets/jsx/logo';
import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '../common/theme-toggle';

export default function Header() {
  return (
    <header className='fixed top-0 w-full text-foreground z-50'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-5'>
        <Logo className='h-12 w-12 [&>path]:fill-foreground'/>
        <div className='flex gap-4'>
          <Link
            href={'home'}
            className=' hover:text-primary ease-in-out duration-200'>
            Home
          </Link>
          <Link
            href={'#features'}
            className=' hover:text-primary ease-in-out duration-200'>
            Features
          </Link>
          <Link
            href={'#roadmap'}
            className=' hover:text-primary ease-in-out duration-200'>
            Roadmap
          </Link>
          <Link
            href={'lightpaper'}
            className=' hover:text-primary ease-in-out duration-200'>
            Lightpaper
          </Link>
          <ThemeToggle/>
        </div>
      </div>
    </header>
  );
}
