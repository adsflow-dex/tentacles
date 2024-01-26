'use client';

import Link from 'next/link';
import React from 'react';
import { docsmenu } from '@/assets';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const DocsMenu = () => {
  const pathname = usePathname();
  return (
    <div className='text-white/90 h-[calc(100%-7rem)] top-28 w-96'>
      <ul className='flex flex-col list-decimal list-inside font-display pr-2 space-y-0.5'>
        {docsmenu.map((menu) => {
          return (
            <li
              key={menu.title}
              className={cn(
                'px-3 py-2 font-light rounded-md',
                !menu.subItems && 'hover:bg-muted/50',
                !menu.subItems &&
                pathname === menu.link && 'bg-muted/50'
              )}>
              <Link
                href={menu.link}
                className={cn(
                  'text-lg hover:text-white ease-in-out duration-300 w-full',
                  !menu.subItems &&
                    pathname === menu.link &&
                    'text-white font-bold'
                )}>
                {menu.title}
              </Link>
              {menu.subItems && (
                <ul className='flex flex-col py-2 pl-4 list-disc list-inside'>
                  {menu.subItems?.map((sub) => {
                    return (
                      <li
                        key={sub.title}
                        className={cn('hover:bg-muted/50 rounded-md px-2 py-1.5', pathname === sub.link && 'bg-muted/50')}>
                        <Link
                          href={sub.link}
                          className={cn(
                            'hover:text-white ease-in-out duration-300 font-light ',
                              pathname === sub.link &&
                              'text-white font-bold'
                          )}>
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
