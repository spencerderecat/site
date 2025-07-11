'use client';

import Link from 'next/link';

export default function MomentsPage() {
  return (
    <>
      <div className="fixed inset-0 bg-pink-100 -z-10" />
      <Link href="/" className="fixed top-4 left-4 text-3xl text-black hover:underline cursor-pointer z-50">←</Link>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="text-xl text-black text-center">still trying to figure out what to do with this page :)</span>
      </div>
    </>
  );
} 