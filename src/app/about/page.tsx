'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <div className="fixed inset-0 bg-pink-100 -z-10" />
      <Link href="/" className="fixed top-4 left-4 text-3xl text-black hover:underline cursor-pointer z-50">
        <ArrowLeft size={32} />
      </Link>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 gap-8">
        {/* Left image pinned effect */}
        <div className="relative flex flex-col items-center w-full md:w-auto mb-8 md:mb-0">
          {/* Pin */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full border-2 border-white shadow-md z-10" />
          <img
            src="/crab-sunglasses.png"
            alt="Crab with Sunglasses"
            className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm max-h-[400px] md:max-h-[600px] object-contain border-2 border-gray-300 p-2 bg-white"
          />
        </div>
        {/* Center about text */}
        <div className="max-w-md w-full flex flex-col items-center md:items-start mt-4 md:mt-[-140px]">
          <h1 className="text-3xl font-bold text-black mb-8 text-center md:text-left mt-4 md:mt-0">about</h1>
          <ul className="space-y-4 text-lg text-black">
            <li>• I attended UC Berkeley (Cal) and am a massive cal football fan</li>
            <li>• I work as a software engineer at Intuit</li>
            <li>• I am from <a href="https://www.travelandleisure.com/thmb/1GwEYerMeuaPbDUjQTOdkGhf88g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Santa Rosa, CA</a></li>
            <li>• I have a twin brother</li>
            <li>• I love San Francisco</li>
            <li>• I enjoy building things from scratch (like this website)</li>
            <li>• I am currently building a <a href="https://www.lego.com/en-us/product/tuxedo-cat-21349?cmp=KAC-INI-GOOGUS-GO-US_GL-EN-RE-PS-BUY-ESCAPE-LEGO_IDEAS-SHOP-BP-MM-ALL-CIDNA00000-NOVELTIES-LEGO_IDEAS&ef_id=CjwKCAjwyb3DBhBlEiwAqZLe5LMX7B-eyZTrDOKG-b12E0g_1DeLXp-n0gREmY84Ih0JbJ7Y7Y15nhoCOU0QAvD_BwE%3AG%3As&gad_campaignid=20573417166&gad_source=1&gbraid=0AAAAADESMXIxf4XAdl-1bNH4ZlQ3McQ7E&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5LMX7B-eyZTrDOKG-b12E0g_1DeLXp-n0gREmY84Ih0JbJ7Y7Y15nhoCOU0QAvD_BwE&s_kwcid=AL%21790%213%21701035365821%21e%21%21g%21%21tuxedo+cat+lego%2120573417166%21161687392726&consent-modal=show" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tuxedo cat lego</a></li>
          </ul>
        </div>
        {/* Right image pinned effect */}
        <div className="relative flex flex-col items-center w-full md:w-auto mt-8 md:mt-0">
          {/* Pin */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full border-2 border-white shadow-md z-10" />
          <img
            src="/picnic-group.png"
            alt="Picnic Group"
            className="rounded-2xl shadow-lg w-full max-w-[320px] md:max-w-[320px] border-2 border-gray-300 p-2 bg-white"
          />
        </div>
      </div>
    </>
  );
} 