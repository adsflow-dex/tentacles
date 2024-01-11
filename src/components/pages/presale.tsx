import Image from 'next/image';
import React from 'react';
import background from '@/assets/illustrations/presale.png';
import { Logo } from '@/assets';
import { Button, Swap } from '@/components';
import { Wallet } from 'lucide-react';

export const Presale = () => {
  return (
    <section className='h-full w-full relative flex flex-col'>
      <header className='fixed top-0 w-full text-muted-foreground z-50 backdrop-blur-sm'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center p-5'>
          <Logo className='h-12 w-12 [&>path]:fill-muted-foreground' />
          <div className='flex gap-4 items-center'>
            <Button
              size={'lg'}
              className='h-12 gap-2 text-lg rounded-full hover:text-foreground ease-in-out duration-300'>
              Connect Wallet
              <Wallet />
            </Button>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </header>
      <div className='absolute h-full w-full top-0 left-0'>
        <Image
          src={background}
          alt=''
          unoptimized
          priority
          className='h-full w-full brightness-75 object-cover opacity-75'
        />
      </div>
      <div className='flex items-center justify-center w-full max-w-screen-xl mx-auto px-5 lg:px-10 xl:px-[60px] py-4 '>
        <div className='w-full max-w-lg pt-52 pb-40 mx-auto relative'>
          <Swap />
        </div>
      </div>
    </section>
  );
};
