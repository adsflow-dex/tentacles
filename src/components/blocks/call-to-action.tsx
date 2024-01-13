import { DownloadCloudIcon, Maximize } from 'lucide-react';
import React from 'react';
// import { MockupPhone } from '../common/mockup-phone';
import Image from 'next/image';

import bg from '@/assets/illustrations/bg.png';

export const CTA = () => {
    return (
        <section id="call-to-action" className="h-fit w-full py-24 relative">
            <div className="w-full max-w-screen-xl px-5 mx-auto flex justify-center items-center gap-12 flex-wrap z-20 isolate">
                <div className="flex flex-col items-center gap-6">
                    <p className="text-pretty md:text-balance max-w-3xl text-center relative text-2xl md:text-3xl text-foreground">
                        AdsFlow isn&apos;t just another technology solution;
                        it&apos;s a complete advertising paradigm shift.
                    </p>
                    <p className="text-muted-foreground max-w-2xl text-balance text-center">
                        We revolutionize advertising strategies by leveraging
                        cutting-edge technology, particularly the transformative
                        power of blockchain, and prioritizing user needs at
                        every step.
                    </p>
                    <div className="w-full max-w-2xl flex justify-center gap-2 flex-wrap">
                        <a
                            href="https://adsflow.s3.amazonaws.com/AdsFlow_Lightpaper_V1.pdf"
                            target="_blank"
                            className=" w-full sm:w-fit bg-gradient whitespace-nowrap overflow-hidden hover:-translate-y-1 ease-in-out duration-300 text-violet-200 px-8 py-4 text-xl justify-center items-center flex gap-2 leading-none rounded-full"
                        >
                            <DownloadCloudIcon />
                            <p className=" ">
                                Download{' '}
                                <strong className="text-2xl text-violet-100 font-bold leading-none mt-1">
                                    Lightpaper.
                                </strong>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
