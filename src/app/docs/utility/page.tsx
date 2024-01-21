'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/docs/utility/advertisers-marketers');
  });
  return;
};

export default Page;
