import React from 'react';
import heroImageUrl from '../assets/unityphoto.png';

function HeroSection() {
  return (
    <section
        className="hero relative bg-cover bg-center h-[550px] text-stone-800 flex items-center rounded-2xl shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
       
      </section>
  );
}

export default HeroSection;