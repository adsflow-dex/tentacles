import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/illustrations/logo.svg';
import { ThemeToggle } from '../common/theme-toggle';
import { Button } from '..';

export const Navbar = ({ className }: { className?: string }) => {
    return (
        <header>
            <nav
                className={cn(
                    'w-full py-8 z-50 text-muted-foreground',
                    className
                )}
            >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-[60px]">
                    <Link
                        href={'/'}
                        className="font-extrabold text-3xl flex gap-3 items-center h-16 lg:w-52"
                    >
                        <Image
                            alt="adsflow"
                            src={logo}
                            height={64}
                            width={64}
                            className="h-14 w-20"
                        />
                    </Link>
                    <div className="hidden md:flex gap-4 w-fit px-8 py-2 items-center justify-center border border-border h-16 rounded-full">
                        <Link
                            href={'home'}
                            className=" hover:text-primary ease-in-out duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href={'#features'}
                            className=" hover:text-primary ease-in-out duration-200"
                        >
                            Features
                        </Link>
                        <Link
                            href={'#roadmap'}
                            className=" hover:text-primary ease-in-out duration-200"
                        >
                            Roadmap
                        </Link>
                        <Link
                            href={'lightpaper'}
                            className=" hover:text-primary ease-in-out duration-200"
                        >
                            Lightpaper
                        </Link>
                    </div>
                    <div className="w-52 hidden md:flex justify-end gap-2 items-center">
                        <ThemeToggle className="h-16 w-16 rounded-full" />
                        <Button
                            variant={'outline'}
                            size={'lg'}
                            className="h-16 rounded-full"
                        >
                            Notify me
                        </Button>
                    </div>
                    <Button
                        variant={'outline'}
                        size={'icon'}
                        className="h-16 w-16 md:hidden rounded-full"
                    >
                        |||
                    </Button>
                </div>
            </nav>
        </header>
    );
};
