'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Smooth random color background */}
      <div className="fixed inset-0 -z-10 bg-random-gradient" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* SPENCER in bubble letters - same width as tabs */}
        <div className="flex justify-center mb-16 max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black tracking-wider animate-spinY" style={{transformStyle: 'preserve-3d'}}>
            SPENCER
          </h1>
        </div>
        
        {/* Four buttons horizontally spread */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
          <Link href="/about" className="group">
            <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">ABOUT</span>
          </Link>
          
          <Link href="/music" className="group">
            <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">MUSIC</span>
          </Link>
          
          <Link href="/surf" className="group">
            <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">SURF</span>
          </Link>
          
          <Link href="/other" className="group">
            <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">OTHER</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
