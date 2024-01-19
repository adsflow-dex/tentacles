import background from '@/assets/illustrations/planet.png';
import { ContactForm, Footer } from '@/components';
import { Header } from '@/components/blocks/header';
import Image from 'next/image';

function Contact() {
  return (
    <section className='h-full w-full'>
      <Header />
      <div className='absolute h-full w-full top-0 left-0 z-0'>
        <Image
          src={background}
          alt=''
          unoptimized
          className='h-full w-full object-cover opacity-80 object-top'
        />
      </div>
      <div className='max-w-screen-xl p-5 mx-auto w-full gap-4 mt-32 min-h-[70vh] z-50 isolate space-y-12'>
        <div className='max-w-screen-md mx-auto'>
          <h1 className='text-5xl font-semibold font-display'>Contact us</h1>
          <p className='font-gray-500 mt-4 font-light text-pretty tracking-wide leading-relaxed'>
            Have questions? We&apos;re here to help! For the speediest
            resolution, we encourage you to check out our website first.
            It&apos;s a treasure trove of information that might just have what
            you&apos;re looking for. If you still need assistance, our support
            team is just an email away at{' '}
            <a href='mailto:adsflownet@gmail'>
              <span className=' underline hover:text-primary underline-offset-2 cursor-pointer'>
                adsflownet@gmail.com
              </span>
            </a>
          </p>
        </div>
        <div className='backdrop-blur-sm sm:bg-black/30 rounded-xl sm:p-5 grid gap-1 max-w-screen-md mx-auto'>
          <h3 className='font-display text-xl font-semibold mb-4'>
            Your Contact Information
          </h3>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
