import { DownloadCloudIcon, Maximize } from 'lucide-react';
import React from 'react';
// import { MockupPhone } from '../common/mockup-phone';
import Image from 'next/image';

import dua_lipa from '@/assets/illustrations/dua_lipa.svg';

export const CTA = () => {
  
  return (
    <div id='call-to-action' className='h-fit w-full px-4 lg:px-6 py-20'>
      <div className='w-full max-w-screen-xl mx-auto flex justify-center items-center gap-12 flex-wrap'>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-balance max-w-3xl text-center relative text-xl md:text-2xl font-light text-zinc-400'>
            Welcome to
            <strong className='text-4xl text-violet-400 font-bold text-edge-outline '>
              {' '}
              audilane.
            </strong>{' '}
            where sound paints a thousand sonic landscapes. Escape the ordinary
            and dive into curated audio experiences that whisper secrets to your
            soul and ignite your deepest emotions. Audilane is your personal
            oasis, an ever-evolving universe of stories, sounds, and sensations
            waiting to be discovered. Unmute your emotions, unleash the
            frequency of your spirit, and get lost in the sound – your ears will
            thank you. Ready to explore? Step into Audilane and paint your own
            sonic masterpiece.
          </p>
          <div className='w-full max-w-2xl flex justify-center gap-2 flex-wrap'>
            <button className='h-12 w-full sm:w-fit border border-violet-500 whitespace-nowrap overflow-hidden text-violet-300 px-6 py-2 text-xl justify-center items-center flex gap-4 leading-none rounded-lg '>
              <Maximize />
              <p className='leading-none mt-1'> Explore all features</p>
            </button>
            <button className='h-12 w-full sm:w-fit bg-violet-500 whitespace-nowrap overflow-hidden text-violet-200 px-6 py-2 text-xl justify-center items-center flex gap-2 leading-none rounded-lg'>
              <DownloadCloudIcon />
              <p className=' '>
                Download{' '}
                <strong className='text-3xl text-violet-100 font-bold leading-none mt-1'>
                  audilane.
                </strong>
              </p>
            </button>
          </div>
        </div>
        <div className='w-fit relative'>
          {/* <Image
            alt=''
            height={50}
            width={50}
            src={dua_lipa}
            className='absolute bottom-12 left-14 z-20 h-48 w-48'
          /> */}
          {/* <MockupPhone /> */}
        </div>
      </div>
    </div>
  );
};
