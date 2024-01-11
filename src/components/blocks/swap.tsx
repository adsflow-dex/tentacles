import React from 'react';
import { Button, Input } from '@/components';

export const Swap = () => {
  return (
    <div className='border bg-white text-foreground px-5 py-10 rounded-2xl flex w-full'>
      <div className='flex flex-col gap-2 w-full relative'>
        <Input
          type='text'
          defaultValue={'0.0000'}
          className='h-20 bg-input-accent text-lg rounded-2xl shadow-sm '
        />
          <Input
          type='text'
          defaultValue={'0.0000'}
          className='h-20 bg-input-accent text-lg rounded-2xl shadow-sm '
        />
      </div>
    </div>
  );
};
