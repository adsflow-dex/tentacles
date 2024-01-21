'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Logo, docsmenu } from '@/assets';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components';

export const DocsMenuMobile = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <SheetTrigger className='ml-2 mt-3'>Menu</SheetTrigger>
      <SheetContent
        side={'left'}
        className='rounded-xl bg-black/10 backdrop-blur-sm overflow-y-scroll w-screen p-2 py-4'>
        <div className='flex items-end gap-4 pl-4'>
          <Link href={'/'}>
            <Logo className='h-12 w-12 text-muted-foreground hover:text-white transition-colors duration-300' />
          </Link>
          <h2 className='text-2xl font-semibold pb-1'>Documentation</h2>
        </div>
        <ul className='flex flex-col font-display py-10'>
          {docsmenu.map((menu) => {
            return (
              <li
                onClick={() => setOpen(false)}
                key={menu.title}
                className={cn(
                  ' px-2 py-1.5',
                  !menu.subItems && 'hover:bg-muted/50'
                )}>
                <Link
                  href={menu.link}
                  className='text-base hover:text-white ease-in-out duration-300 font-light px-3 py-2'>
                  {menu.title}
                </Link>
                {menu.subItems && (
                  <ul className='flex flex-col gap-1 py-2 pl-4 '>
                    {menu.subItems?.map((sub) => {
                      return (
                        <li key={sub.title} onClick={() => setOpen(false)} className='hover:bg-muted/50 px-2 py-1.5'>
                          <Link
                            href={sub.link}
                            className='hover:text-white ease-in-out duration-300 font-light text-sm '>
                            {sub.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
