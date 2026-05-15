import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Mark Pre-Inked Stamps By Shah Associates" 
      className={`h-16 sm:h-20 w-auto object-contain ${className}`}
    />
  );
}
