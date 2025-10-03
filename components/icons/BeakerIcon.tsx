import React from 'react';

export const BeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}>
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M3.75 12.75l-1.5-9h19.5l-1.5 9A7.5 7.5 0 0112 21a7.5 7.5 0 01-8.25-8.25zM8.25 9.75h7.5" 
    />
  </svg>
);