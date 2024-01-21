import {
  Footer,
  Header,
} from '@/components';
import { DocsMenuMobile } from '@/components/blocks/docs/docs-menu-mobile';
import { DocsMenu } from '@/components/blocks/docs/menu';

import React from 'react';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen w-screen scroll-smooth'>
      <Header />
      <div className='h-[5.5rem] flex lg:hidden items-center fixed left-20 z-50 text-muted-foreground hover:text-white '>
        <DocsMenuMobile/>
      </div>
      <div className='flex pt-24 w-full max-w-screen-xl mx-auto p-5 relative'>
        <div className='h-[calc(100%-7rem)] hidden lg:block w-96 sticky top-24'>
          <DocsMenu />
        </div>
        <div className='h-full lg:pl-12 w-full lg:w-[calc(100%-24rem)] lg:border-l'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsLayout;
