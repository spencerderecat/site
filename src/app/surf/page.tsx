'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const SurfMap = dynamic(() => import('./SurfMap'), { ssr: false });

export default function SurfPage() {
  const [pinCount, setPinCount] = useState(0);

  return (
    <>
      <div className="fixed inset-0 bg-pink-100 -z-10" />
      <Link href="/" className="fixed top-4 left-4 text-3xl text-black hover:underline cursor-pointer z-50">
        <ArrowLeft size={32} />
      </Link>
      <div className="w-full h-[80vh] flex justify-center items-center pt-20 px-2 sm:px-4">
        <div className="w-full h-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
          <SurfMap key="surf-map-instance" onPinCountChange={setPinCount} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-6 px-4">
        <span className="text-lg font-bold text-black">spot counter: {pinCount}</span>
      </div>
    </>
  );
} 