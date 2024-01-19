import bg from '@/assets/illustrations/bg.png';
import { CTA, Features, Footer, Header, Hero, Roadmap, Tokenomics } from '@/components';
import Image from 'next/image';
import {
    AiOutlineDollar,
    AiOutlineEnvironment,
    AiOutlineGlobal,
    AiOutlineSafetyCertificate,
    AiOutlineSecurityScan,
} from 'react-icons/ai';

export const Landing = () => {
    return (
      <main className='relative overflow-hidden'>
        <Header />
        <Hero />
        <div className='bg-background border-y'>
          <div className='max-w-screen-xl mx-auto w-full flex gap-4 flex-wrap justify-center z-10 p-5'>
            <div className='flex gap-2 items-center text-white'>
              <AiOutlineSafetyCertificate />
              Data Encryption
            </div>
            <div className='flex gap-2 items-center text-white'>
              <AiOutlineGlobal />
              Global Accessibility
            </div>
            <div className='flex gap-2 items-center text-white'>
              <AiOutlineSecurityScan />
              Information Transparency
            </div>
            <div className='flex gap-2 items-center text-white'>
              <AiOutlineEnvironment />
              Geographical Customization
            </div>
            <div className='flex gap-2 items-center text-white'>
              <AiOutlineDollar />
              Fair Pricing
            </div>
          </div>
        </div>
        <div className='relative w-full '>
          <div className='absolute w-full top-0 left-0 select-none'>
            <Image
              src={bg}
              alt=''
              unoptimized
              className='h-full w-full object-cover object-left -z-0'
            />
          </div>
          <CTA />
          <Features />
        </div>
        <Roadmap />
        {/* <Tokenomics /> */}
        <Footer />
      </main>
    );
};
