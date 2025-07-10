'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <div className="fixed inset-0 bg-pink-100 -z-10" />
      <Link href="/" className="fixed top-4 left-4 text-3xl text-black hover:underline cursor-pointer z-50">←</Link>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-black mb-8 text-center">about</h1>
          <ul className="space-y-4 text-lg text-black">
            <li>• I attended UC Berkeley (Cal) and am a massive cal football fan</li>
            <li>• I work as a software engineer at Intuit</li>
            <li>• I have a twin brother</li>
            <li>• I love San Francisco</li>
            <li>• I have a good friend named Chris</li>
            <li>• I am currently building a <a href="https://www.lego.com/en-us/product/tuxedo-cat-21349?cmp=KAC-INI-GOOGUS-GO-US_GL-EN-RE-PS-BUY-ESCAPE-LEGO_IDEAS-SHOP-BP-MM-ALL-CIDNA00000-NOVELTIES-LEGO_IDEAS&ef_id=CjwKCAjwyb3DBhBlEiwAqZLe5LMX7B-eyZTrDOKG-b12E0g_1DeLXp-n0gREmY84Ih0JbJ7Y7Y15nhoCOU0QAvD_BwE%3AG%3As&gad_campaignid=20573417166&gad_source=1&gbraid=0AAAAADESMXIxf4XAdl-1bNH4ZlQ3McQ7E&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5LMX7B-eyZTrDOKG-b12E0g_1DeLXp-n0gREmY84Ih0JbJ7Y7Y15nhoCOU0QAvD_BwE&s_kwcid=AL%21790%213%21701035365821%21e%21%21g%21%21tuxedo+cat+lego%2120573417166%21161687392726&consent-modal=show" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tuxedo cat lego</a></li>
          </ul>
        </div>
      </div>
    </>
  );
} 