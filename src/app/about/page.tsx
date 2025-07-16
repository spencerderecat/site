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
      <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen p-4 md:p-8 gap-8">
        {/* Left side - About text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-black mb-8 text-center lg:text-left">about</h1>
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
      </div>
    </>
  );
} 