'use client';

import Link from 'next/link';
import React from 'react';
import { docsmenu } from '@/assets';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const DocsMenu = () => {
  const pathname = usePathname();
  return (
    <div className='text-white/70 h-[calc(100%-7rem)] top-28 w-80 lg:w-96  px-5 lg:px-0'>
      <ul className='flex flex-col list-decimal list-inside font-display'>
        {docsmenu.map((menu) => {
          return (
            <li
              key={menu.title}
              className={cn(
                'px-3 py-2 font-light',
                !menu.subItems && 'hover:bg-muted/50',
                !menu.subItems &&
                  pathname === menu.link &&
                  'text-white font-bold'
              )}>
              <Link
                href={menu.link}
                className='text-lg hover:text-white ease-in-out duration-300 '>
                {menu.title}
              </Link>
              {menu.subItems && (
                <ul className='flex flex-col py-2 pl-4 list-disc list-inside'>
                  {menu.subItems?.map((sub) => {
                    return (
                      <li
                        key={sub.title}
                        className={cn(
                          'hover:bg-muted/50 px-2 py-1.5',
                          pathname === menu.link && 'text-white font-bold'
                        )}>
                        <Link
                          href={sub.link}
                          className='hover:text-white ease-in-out duration-300 font-light '>
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
    </div>
  );
};
