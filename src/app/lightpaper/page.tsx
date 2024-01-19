import Link from 'next/link';
import React from 'react';

const LightPaper = () => {
  return (
    <div className='h-screen w-screen'>
      <iframe
        src='https://adsflow.s3.amazonaws.com/AdsFlow_Lightpaper_V1.pdf'
        className='h-full max-w-screen-xl w-full mx-auto md:p-5'
        title='AdsFlow Lightpaper'
      />
    </div>
  );
};

export default LightPaper;
