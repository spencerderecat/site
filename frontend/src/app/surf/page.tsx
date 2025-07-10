'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const SurfMap = dynamic(() => import('./SurfMap'), { ssr: false });

export default function SurfPage() {
  return (
    <>
      <div className="fixed inset-0 bg-pink-100 -z-10" />
      <Link href="/" className="fixed top-4 left-4 text-3xl text-black hover:underline cursor-pointer z-50">←</Link>
      <div className="w-full h-[80vh] flex justify-center items-center pt-20">
        <div className="w-full h-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
          <SurfMap />
        </div>
      </div>
    </>
  );
} 