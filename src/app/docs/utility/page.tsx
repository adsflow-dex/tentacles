'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();
  return router.push('/docs/utility/advertisers-marketers');
};

export default Page;