import React from 'react';
import Gallery from './Gallery';

const HeroSection = () => {
  return (
    <div className="relative w-[80%] h-60 bg-cover bg-center">
      <div className="absolute rounded-l-3xl inset-0 bg-gradient-to-r shadow-xl shadow-slate-900 from-slate-950 to-slate-700 opacity-"/> {/* Overlay for readability */}
      <div className='flex flex-row space-x-12 justify-center h-full'>
        <Gallery/>
        <div className="relative font-CourierPrimeRegular flex flex-col items-start space-y-8 justify-center h-full text-white">
          <div className='flex flex-col items-start'>
            <h1 className="text-6xl font-Oswald tracking-normal uppercase">
              Jack 'Dusty' Marlowe
            </h1>
            <p className="mt-4 text-xl">
              The dust may settle, but he never will.
            </p>
          </div>
          <div className='flex flex-col items-start'>
            <h2 className="text-4xl leading-tight">
              Breaking News: A New Case Unfolds
            </h2>
            <p className="mt-2 text-lg">
              Explore the dark alleys of Bleakmoor, where every shadow holds a secret.
            </p>
            <button className="active:scale-95 mt-6 px-6 py-3 bg-slate-500 text-white rounded-lg shadow-lg hover:bg-slate-600 transition duration-300">
              Join the Investigation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
