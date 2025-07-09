'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic tie-dye background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-green-200 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-200 via-orange-200 via-red-200 to-pink-200 opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* SPENCER in bubble letters */}
        <h1 className="text-8xl md:text-9xl font-black text-white drop-shadow-2xl mb-16 tracking-wider animate-bounce">
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">S</span>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">P</span>
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">E</span>
          <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">N</span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">C</span>
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">E</span>
          <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">R</span>
        </h1>
        
        {/* Four buttons horizontally spread */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
          <Link href="/music" className="group">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white font-bold text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
              🎵 MUSIC
            </button>
          </Link>
          
          <Link href="/surf" className="group">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-300 to-cyan-300 hover:from-blue-400 hover:to-cyan-400 text-white font-bold text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
              🌊 SURF
            </button>
          </Link>
          
          <Link href="/sport" className="group">
            <button className="px-8 py-4 bg-gradient-to-r from-green-300 to-emerald-300 hover:from-green-400 hover:to-emerald-400 text-white font-bold text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
              ⚽ SPORT
            </button>
          </Link>
          
          <Link href="/life" className="group">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-300 to-yellow-300 hover:from-orange-400 hover:to-yellow-400 text-white font-bold text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
              ✨ LIFE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
