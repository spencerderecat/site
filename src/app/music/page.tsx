'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MusicPage() {
  return (
    <>
      <div className="fixed inset-0 bg-pink-100 -z-10" />
      <Link href="/" className="fixed top-4 left-4 text-3xl text-black hover:underline cursor-pointer z-50">
        <ArrowLeft size={32} />
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-xl mt-8">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">on rotation</h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/0RpHATwjC1rVQnNDEV9cbK?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
            title="Spotify Playlist"
          ></iframe>
        </div>
      </div>
    </>
  );
} 