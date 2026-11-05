import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'warm' | 'navy';
  id?: string;
  withAccent?: boolean;
}

export default function Section({ children, className = '', bg = 'white', id, withAccent = false }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    warm: 'bg-[#FAF9F6]',
    navy: 'bg-[#14283F] text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-32 relative ${bgColors[bg]} ${className}`}>
      {withAccent && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-vibrant-amber"></div>
      )}
      <div className="max-w-[1200px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
