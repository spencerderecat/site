'use client';

import Link from 'next/link';

export default function MusicPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic tie-dye background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-green-200 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-200 via-orange-200 via-red-200 to-pink-200 opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-black text-white drop-shadow-2xl mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">🎵</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> MUSIC</span>
          </h1>
          
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 max-w-2xl mx-auto border-2 border-white/30">
            <h2 className="text-4xl font-bold text-white mb-6">Work in Progress</h2>
            <p className="text-xl text-white/90 mb-8">Something groovy is coming soon! 🎶</p>
            <div className="animate-bounce text-6xl">🎸</div>
          </div>
          
          <Link href="/" className="mt-8 inline-block">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white font-bold text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
              ← Back to SPENCER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 