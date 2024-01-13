import React from 'react';
import { Button, Input } from '@/components';
import { ArrowDownIcon } from 'lucide-react';
import { PublicKey } from '@solana/web3.js';
import { Coin } from '@/assets';

export const Swap = ({ publicKey }: { publicKey?: PublicKey | null }) => {
  return (
    <div className='border bg-white text-background p-5 rounded-2xl flex w-full'>
      <div className='flex flex-col w-full relative'>
        <h2 className='text-2xl font-display font-semibold mb-3'> Swap</h2>
        <div className='bg-input-accent text-lg rounded-2xl shadow-sm group focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-1'>
          <div className='flex flex-col h-24'>
            <p className='p-3 pb-2 text-sm font-medium text-muted'>You Pay</p>
            <Input
              type='text'
              defaultValue={'0.0000'}
              className=' bg-transparent text-xl focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
        </div>
        <div className='h-2.5 flex justify-center items-center'>
          <div className='h-14 w-14 ring-8 ring-white z-20 bg-input-accent rounded-full grid place-items-center'>
            <ArrowDownIcon />
          </div>
        </div>
        <div className='bg-input-accent text-lg rounded-2xl shadow-sm group focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-1'>
          <div className='flex flex-col h-24'>
            <p className='p-3 pb-2 text-sm font-medium text-muted'>
              You Recieve
            </p>
            <div className='flex items-center'>
              <Input
                type='text'
                defaultValue={'0.0000'}
                className=' bg-transparent text-xl focus-visible:ring-0 focus-visible:ring-offset-0'
              />
              <div className='bg-white p-1 h-8 rounded-full mr-6 pr-3 text-sm font-semibold flex gap-2 items-center'>
                <Coin className='h-6 w-6'/>
                <span>AFL</span>
              </div>
            </div>
          </div>
        </div>
        <Button className='h-16 rounded-2xl mt-4 text-xl font-display'>
          {!publicKey ? 'Connect Wallet' : 'Swap'}
        </Button>
      </div>
    </div>
  );
};
