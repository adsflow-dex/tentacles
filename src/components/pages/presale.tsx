'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import background from '@/assets/illustrations/presale.png';
import {
  Button,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Swap,
} from '@/components';
import { CheckSquareIcon, Wallet } from 'lucide-react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletAvatar } from '@/lib/avatar';
import {
  CheckCircledIcon,
  CheckIcon,
  CheckboxIcon,
} from '@radix-ui/react-icons';

export const Presale = () => {
  const { select, wallets, publicKey, disconnect, connected } = useWallet();
  const [openWallet, setOpenWallet] = useState<boolean>(false);
  const [openDisconnect, setOpenDisconnect] = useState<boolean>(false);
  return (
    <section className='h-screen w-full relative flex flex-col'>
      <div className='absolute h-full w-full top-0 left-0 z-0'>
        <Image
          src={background}
          alt=''
          unoptimized
          priority
          className='h-full w-full brightness-75 object-cover opacity-75'
        />
      </div>
      <div className='w-full  max-w-screen-xl mx-auto px-5 lg:px-10 xl:px-[60px] py-4  flex justify-end items-center gap-2 z-10 '>
        {publicKey && (
          <div className='h-14 w-14 rounded-xl border overflow-hidden'>
            <WalletAvatar options={{ seed: publicKey?.toString(), size: 14 }} />
          </div>
        )}
        {!publicKey && (
          <Popover
            open={openWallet}
            onOpenChange={() => setOpenWallet((prev) => !prev)}>
            <PopoverTrigger asChild>
              <Button
                size={'lg'}
                className='h-14 gap-2 text-lg rounded-xl hover:text-foreground ease-in-out duration-300 w-56'>
                Connect Wallet
                <Wallet />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align='end'
              className='bg-white text-background rounded-3xl border-none py-5'>
              <h3 className='text-xl font-display mt-2 font-semibold'>
                Connect Wallet
              </h3>
              <div className='flex flex-col gap-2 mt-4'>
                {wallets.length > 0 ? (
                  wallets.map((wallet) => (
                    <Button
                      key={wallet.adapter.name}
                      onClick={() => {
                        select(wallet.adapter.name);
                        setOpenWallet(false);
                      }}
                      disabled={wallet.readyState !== 'Installed'}
                      className='w-full h-14 gap-2 rounded-xl ease-in-out duration-300 justify-start text-muted bg-input-accent hover:bg-violet-200'>
                      <Image
                        src={wallet.adapter.icon}
                        alt={wallet.adapter.name}
                        height={24}
                        width={24}
                      />
                      {wallet.adapter.name}
                      <span className='text-xs ml-auto'>
                        {wallet.readyState !== 'Installed' ? (
                          <span className='text-red-500'>Not Found</span>
                        ) : (
                          <CheckCircledIcon className='text-emerald-500' />
                        )}
                      </span>
                    </Button>
                  ))
                ) : (
                  <p>
                    No wallet found. Please download a supported Solana wallet
                  </p>
                )}
              </div>
              <div className='pt-32 pb-4'>
                <p className='text-xs text-center text-pretty'>
                  By connecting a wallet, you agree to AdsFlow Terms of Service
                  and consent to its Privacy Policy.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        )}{' '}
        {publicKey && (
          <Popover
            open={openDisconnect}
            onOpenChange={() => setOpenDisconnect((prev) => !prev)}>
            <PopoverTrigger>
              <Button className='h-14 px-2 rounded-xl flex-col w-56 items-start'>
                <p className='text-start px-2 text-xs text-muted-foreground'>Connected Wallet</p>
                <p className='w-full px-2 truncate text-sm'>
                  {publicKey.toBase58()}
                </p>{' '}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align='end'
              className='bg-white text-background rounded-2xl border-none py-5 mt-2'>
              <button
                onClick={() => {
                  disconnect();
                  setOpenDisconnect(false);
                }}>
                Disconnect Wallet
              </button>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <div className='flex items-center h-full w-full max-w-screen-xl mx-auto px-5 lg:px-10 xl:px-[60px] py-4 z-10'>
        <div className='w-full max-w-lg h-full flex items-center'>
          <Swap publicKey={publicKey} />
        </div>
      </div>
    </section>
  );
};
