import { docsmenu } from '@/assets/data/menu';
import Link from 'next/link';
import React from 'react';

export const Sidebar = () => {
  return (
    <aside className='w-60 h-full text-zinc-500 text-lg border-r'>
      {docsmenu.map((item) => (
        <Link key={item.title} href={`docs/${item.link}`}>
          {item.title}
        </Link>
      ))}
    </aside>
  );
};
