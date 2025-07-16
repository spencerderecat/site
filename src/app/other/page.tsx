'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OtherPage() {
  return (
    <>
      <div className="fixed inset-0 bg-pink-100 -z-10" />
      <Link href="/" className="fixed top-4 left-4 text-3xl text-black hover:underline cursor-pointer z-50">
        <ArrowLeft size={32} />
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <span className="text-xl text-black text-center">still trying to figure out what to do with this page.</span>
        <span className="text-xl text-black text-center">probably will put something here that will eventually change the world.</span>
      </div>
    </>
  );
} 