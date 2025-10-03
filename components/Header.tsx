
import React from 'react';

const NasaLogo: React.FC = () => (
  <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20">
    <circle cx="100" cy="100" r="95" fill="#0B3D91"/>
    <path d="M50 100 C 70 70, 130 70, 150 100" stroke="white" strokeWidth="10" fill="none"/>
    <path d="M45 105 C 50 130, 150 130, 155 105" stroke="#D40000" strokeWidth="12" fill="none" transform="rotate(-10 100 100)"/>
    <g fill="white">
      <circle cx="80" cy="60" r="3"/>
      <circle cx="120" cy="55" r="2"/>
      <circle cx="140" cy="80" r="3"/>
      <circle cx="60" cy="85" r="2"/>
    </g>
  </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12">
      <div className="flex justify-center items-center gap-4 mb-4">
        <NasaLogo />
        <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                NASA Bioscience <span className="text-blue-400">Explorer</span>
            </h1>
            <p className="mt-2 text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
              An AI-powered dashboard for exploring space biology research publications.
            </p>
        </div>
      </div>
    </header>
  );
};
