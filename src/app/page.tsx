'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Music } from 'lucide-react';

const SurfMap = dynamic(() => import('./surf/SurfMap'), { ssr: false });

export default function Home() {
  const [pinCount, setPinCount] = useState(0);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showSurfMap, setShowSurfMap] = useState(false);
  const [spotifyPosition, setSpotifyPosition] = useState({ x: 24, y: 24 }); // bottom-6 = 24px
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const spotifyRef = useRef<HTMLDivElement>(null);

  // Check if surf section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSurfMap(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const surfSection = document.getElementById('surf');
    if (surfSection) {
      observer.observe(surfSection);
    }

    return () => {
      if (surfSection) {
        observer.unobserve(surfSection);
      }
    };
  }, []);

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (spotifyRef.current) {
      const rect = spotifyRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  // Handle mouse move for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Keep within viewport bounds
        const maxX = window.innerWidth - 320; // 320px = w-80
        const maxY = window.innerHeight - 280; // approximate height
        
        setSpotifyPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Smooth random color background */}
      <div className="fixed inset-0 -z-10 bg-random-gradient" />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center justify-center min-h-screen">
            {/* SPENCER in bubble letters - same width as tabs */}
            <div className="flex justify-center mb-16 max-w-4xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-black tracking-wider animate-spinY" style={{transformStyle: 'preserve-3d'}}>
                SPENCER
              </h1>
            </div>
            
            {/* Four buttons horizontally spread */}
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mb-16">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">ABOUT</span>
              </button>
              
              <button 
                onClick={() => document.getElementById('surf')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">SURF</span>
              </button>
              
              <button 
                onClick={() => {
                  setSpotifyPosition({ x: 24, y: window.innerHeight - 320 }); // bottom left corner
                  setShowSpotify(!showSpotify);
                }}
                className="group"
              >
                <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">MUSIC</span>
              </button>
              
              <Link href="/other" className="group">
                <span className="text-black text-xl font-bold cursor-pointer hover:underline transition-all duration-200">OTHER</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col lg:flex-row items-start justify-center p-4 md:p-8 gap-8 bg-white/10 backdrop-blur-sm">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center min-h-screen">
            <h2 className="text-3xl font-bold text-black mb-8 text-center lg:text-left">about</h2>
            <ul className="space-y-4 text-lg text-black max-w-md">
              <li>• I attended UC Berkeley (Cal) and am a massive cal football fan</li>
              <li>• I work as a software engineer at Intuit</li>
              <li>• I am from <a href="https://www.travelandleisure.com/thmb/1GwEYerMeuaPbDUjQTOdkGhf88g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Santa Rosa, CA</a></li>
              <li>• I have a twin brother</li>
              <li>• I love San Francisco</li>
              <li>• I enjoy building things from scratch (like this website)</li>
              <li>• I am currently building a <a href="https://www.lego.com/en-us/product/tuxedo-cat-21349?cmp=KAC-INI-GOOGUS-GO-US_GL-EN-RE-PS-BUY-ESCAPE-LEGO_IDEAS-SHOP-BP-MM-ALL-CIDNA00000-NOVELTIES-LEGO_IDEAS&ef_id=CjwKCAjwyb3DBhBlEiwAqZLe5LMX7B-eyZTrDOKG-b12E0g_1DeLXp-n0gREmY84Ih0JbJ7Y7Y15nhoCOU0QAvD_BwE%3AG%3As&gad_campaignid=20573417166&gad_source=1&gbraid=0AAAAADESMXIxf4XAdl-1bNH4ZlQ3McQ7E&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5LMX7B-eyZTrDOKG-b12E0g_1DeLXp-n0gREmY84Ih0JbJ7Y7Y15nhoCOU0QAvD_BwE&s_kwcid=AL%21790%213%21701035365821%21e%21%21g%21%21tuxedo+cat+lego%2120573417166%21161687392726&consent-modal=show" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tuxedo cat lego</a></li>
              <li>• Checkout my github <a href="https://github.com/spencerderecat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a></li>
            </ul>
          </div>
          
          {/* Right side - Images */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center min-h-screen gap-8">
            {/* Top image */}
            <div className="flex flex-col items-center">
              <img
                src="/crab-sunglasses.png"
                alt="Crab with Sunglasses"
                className="rounded-3xl shadow-2xl w-full max-w-xs md:max-w-sm max-h-[300px] md:max-h-[400px] object-contain bg-white/80 backdrop-blur-sm"
              />
            </div>
            
            {/* Bottom image */}
            <div className="flex flex-col items-center">
              <img
                src="/picnic-group.png"
                alt="Picnic Group"
                className="rounded-3xl shadow-2xl w-full max-w-[280px] md:max-w-[320px] bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Surf Map Section */}
        <section id="surf" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-white/5 backdrop-blur-sm">
          <div className="w-full max-w-6xl">
            <h2 className="text-3xl font-bold text-black mb-8 text-center lg:text-left">surf spots</h2>
            <div className="w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl">
              {showSurfMap ? (
                <div className="w-full h-full">
                  <SurfMap key={`surf-map-${Date.now()}`} onPinCountChange={setPinCount} />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-gray-500">Loading map...</div>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-center mt-6">
              <span className="text-lg font-bold text-black">spot counter: {pinCount}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Spotify Integration - Draggable */}
      {showSpotify && (
        <div 
          ref={spotifyRef}
          className="fixed z-50 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden cursor-move select-none"
          style={{
            left: `${spotifyPosition.x}px`,
            top: `${spotifyPosition.y}px`
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-green-600">
            <div className="flex items-center gap-2">
              <Music size={20} className="text-white" />
              <h3 className="text-white font-semibold text-sm">What I'm Listening To</h3>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowSpotify(false);
              }}
              className="text-white/80 hover:text-white transition-colors duration-200 text-xl font-light"
            >
              ×
            </button>
          </div>
          <iframe
            src="https://open.spotify.com/embed/playlist/0RpHATwjC1rVQnNDEV9cbK?utm_source=generator"
            width="100%"
            height="155"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            title="Spotify Playlist"
          />
        </div>
      )}

      {/* Music Button - Fixed Bottom Left */}
      {!showSpotify && (
        <button
          onClick={() => {
            setSpotifyPosition({ x: 24, y: window.innerHeight - 320 }); // bottom left corner
            setShowSpotify(true);
          }}
          className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-gradient-to-r from-green-300 to-green-400 hover:from-green-400 hover:to-green-500 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/20"
        >
          <Music size={24} className="text-white" />
        </button>
      )}
    </div>
  );
}
