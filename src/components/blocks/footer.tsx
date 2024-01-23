import { Logo } from '@/assets/jsx/logo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Newsletter } from './newsletter';

export const Footer = () => {
    const company = [
        {
            name: 'home',
            link: '/',
        },
        {
            name: 'about',
            link: '/lightpaper',
        },
        {
            name: 'contact us',
            link: '/contact',
        },
    ];
    return (
        <footer className="mx-auto max-w-screen-xl pt-20 p-5">
            <Newsletter />

            <div className="grid  grid-cols-1  md:grid-cols-3 gap-6 px-5">
                <div>
                    <Link href="/" className="flex gap-2 items-end text-2xl">
                        <Logo className="h-12 w-12 [&>path]:fill-white/90" />
                        <p>
                            adsflow.<span className="text-xs mt-2">net</span>
                        </p>
                    </Link>
                    <span className="text-xs text-gray-400">
                        Transparent Advertising on the Blockchain.
                    </span>
                    <h4 className="mt-6 text-sm mb-2 ">Join us on </h4>
                    <ul className="flex gap-3 ">
                        <li className="p-1 bg-primary/50 rounded hover:bg-primary/100 transition-colors duration-200">
                            <a
                                href="https://discord.gg/GAstpJFdBf"
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
                <div className="md:text-center">
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
                <div className="md:text-end">
                    <h6 className="text-xl font-semibold text-white">
                        Resources
                    </h6>
                    <div className="my-5">
                        <a
                            href="https://adsflow.s3.amazonaws.com/AdsFlow_Lightpaper_V1.pdf"
                            target="_blank"
                            className="text-gray-400 hover:text-white cursor-pointer capitalize"
                        >
                            Lightpaper
                        </a>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 pt-6">
                    <h6 className="text-gray-500 text-center pt-4 tracking-wider text-sm">
                        Copyright © 2024 AdsFlow. All rights Reserved
                    </h6>
                </div>
            </div>
        </footer>
    );
};
