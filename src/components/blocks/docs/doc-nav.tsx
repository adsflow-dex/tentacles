import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';

type INav = {
  title: string;
  link: string;
};

export const DocNav = ({ prev, next }: { prev?: INav; next?: INav }) => {
  return (
    <div className='mt-12'>
      <div className='grid grid-cols-2 gap-4'>
        <a
          href={prev?.link}
          className={cn(
            'min-h-20 border border-muted-foreground rounded-md p-4 flex gap-2',
            !prev && 'invisible'
          )}>
          <div className='h-full hidden lg:flex items-center'>
            <ArrowLeftIcon className='h-5 w-5' />
          </div>
          <div className=''>
            <p className='text-sm font-light text-muted-foreground'>Previous</p>
            <p className='font-display font-medium line-clamp-2'>{prev?.title}</p>
          </div>
        </a>
        <a
          href={next?.link}
          className={cn(
            'min-h-20 border border-muted-foreground rounded-md p-4 flex justify-end gap-2',
            !next && 'invisible'
          )}>
          <div className='text-end'>
            <p className='text-sm font-light text-muted-foreground'>Next</p>
            <p className='font-display font-medium line-clamp-2'>{next?.title}</p>
          </div>
          <div className='h-full hidden lg:flex items-center'>
            <ArrowRightIcon className='h-5 w-5' />
          </div>
        </a>
      </div>
    </div>
  );
};
