import React from 'react';
import Image from 'next/image';
import background from '@/assets/illustrations/pxfuel.jpg';
import launch from '@/assets/illustrations/launch.png';
import Link from 'next/link';
import { GetNotified } from '.';

export const Hero = () => {
    return (
        <section className="h-fit w-full relative flex flex-col">
            <div className="absolute h-full w-full top-0 left-0">
                <Image
                    src={background}
                    alt=""
                    unoptimized
                    className="h-full w-full brightness-50 object-cover opacity-75"
                />
            </div>
            <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto px-5 lg:px-10 xl:px-[60px] py-4 ">
                <div className="max-w-5xl pt-52 pb-40 mx-auto relative">
                    <div className="absolute left-0 -z-0 top-32 brightness-75">
                        <Image
                            src={launch}
                            alt="rocket"
                            className="h-48 w-48 object-cover"
                        />
                    </div>
                    <div className="">
                        <h1 className="text-[7vw] md:text-6xl xl:text-7xl text-center text-balance font-semibold text-foreground z-10 isolate overflow-hidden">
                            Transparent Advertising on the Blockchain.
                        </h1>
                    </div>
                    <h2 className="text-lg md:text-xl max-w-3xl mx-auto py-5 md:py-10 text-center text-balance z-10 isolate">
                        Prioritize creator earnings via fair revenue sharing,
                        diverse ad formats, and secure blockchain payments.
                    </h2>
                    <div className="flex gap-3 justify-center flex-wrap text-center">
                        <GetNotified />

                        <a
                            className="w-full justify-center sm:w-fit flex items-center tracking-wider bg-muted/50 py-4 rounded-full uppercase text-white border border-white transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:-translate-y-1 px-8 text-md md:mt-0 focus:shadow-outline"
                            href="/"
                        >
                            Explore all features
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
