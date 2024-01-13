import { Logo } from '@/assets/jsx/logo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    const company = [
        {
            name: 'home',
            link: '/',
        },
        {
            name: 'about',
            link: '/about',
        },
        {
            name: 'contact us',
            link: '/newsletter',
        },
    ];
    return (
        <footer className="mx-auto max-w-screen-xl min-h-[400px] pt-20 pb-4 ">
            <div className="grid  grid-cols-1  md:grid-cols-3 gap-12 md:gap-4 px-4 md:px-0">
                <div>
                    <Link href="#" className="flex gap-2 items-end text-2xl">
                        <Logo className="h-12 w-12 [&>path]:fill-muted-foreground" />
                        <p className="">
                            adsflow.<span className="text-xs mt-2">net</span>
                        </p>
                    </Link>
                    <span className="text-xs text-gray-400">
                        Transparent Advertising on the Blockchain.
                    </span>
                    <h4 className="mt-6 text-sm mb-2 ">Join our </h4>
                    <ul className="flex gap-3 ">
                        <li className="p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200">
                            <a
                                href="https://discord.com/invite/PJcWyCB8"
                                target="_blank"
                            >
                                <Image
                                    src="/discord.png"
                                    alt=""
                                    className="invert"
                                    height={20}
                                    width={20}
                                />
                            </a>
                        </li>
                        <li className="p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200">
                            <a
                                href="https://twitter.com/adsflow_net"
                                target="_blank"
                            >
                                <Image
                                    src="/x.png"
                                    alt=""
                                    className="invert "
                                    height={20}
                                    width={20}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h6 className="text-xl font-semibold text-white">
                        Company
                    </h6>
                    <ul className="mt-5 grid gap-3 ">
                        {company.map((i) => (
                            <li
                                key={i.link}
                                className="text-gray-400 hover:text-white cursor-pointer capitalize"
                            >
                                <Link href={i.link}>{i.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <h6 className="text-xl font-semibold text-white">
                        Resources
                    </h6>

                    <a
                        href="https://adsflow.s3.amazonaws.com/AdsFlow_Lightpaper_V1.pdf"
                        target="_blank"
                        className="mt-4 w-full sm:w-fit bg-gradient whitespace-nowrap overflow-hidden hover:-translate-y-1 ease-in-out duration-300 text-violet-200 px-8 py-4 text-xl justify-center items-center flex gap-2 leading-none rounded-full"
                    >
                        Lightpaper
                    </a>
                </div>
                <div className="col-span-1 md:col-span-3 mt-40">
                    <h6 className="text-gray-500 text-center border-t pt-4 tracking-wider">
                        Copyright © 2024 AdsFlow
                    </h6>
                </div>
            </div>
        </footer>
    );
};
