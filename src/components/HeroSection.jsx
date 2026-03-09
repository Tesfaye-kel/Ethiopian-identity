import React from 'react';
import heroImageUrl from '../assets/ethiopia.png';

function HeroSection() {
  return (
    <section
        className="hero relative bg-cover bg-center h-[550px] text-stone-800 flex items-center rounded-2xl shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>

        <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-stone-900 tracking-wide">
            Unity in Diversity
          </h2>
          <p className="text-2xl md:text-3xl font-light text-stone-700 mb-6 font-serif italic">
            An Ethiopian Identity
          </p>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            A journey through time, culture, and the vibrant tapestry of its
            people.
          </p>
        </div>
      </section>
  );
}

export default HeroSection;