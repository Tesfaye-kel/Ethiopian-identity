import React from "react";
import { Link } from "react-router-dom";
import heroImageUrl from "../assets/unityphoto.png";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24 group">
      {/* Background Image with Hover Scale */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-105 group-hover:scale-110"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      />

      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

      {/* Glassmorphism Content Box */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-700 transform group-hover:scale-[1.02]">
        <span className="inline-block text-gold-500 uppercase tracking-[0.4em] text-xs sm:text-sm font-bold mb-6 opacity-0 animate-fade-in-up">
          The Cradle of Mankind
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-6 leading-tight drop-shadow-2xl">
          ETHIOPIAN{" "}
          <span className="italic font-light text-stone-300 block sm:inline">
            IDENTITY
          </span>
        </h1>

        {/* Animated Divider */}
        <div className="relative w-32 h-px bg-white/20 mx-auto mb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gold-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-serif italic leading-relaxed">
          &ldquo;Unity in diversity is not a slogan; it is our ancient
          heritage.&rdquo;
        </p>

        {/* Interactive Button */}
        <button className="px-8 py-4 bg-transparent border border-white/30 text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 hover:tracking-[0.2em] backdrop-blur-sm">
          Explore the Regions
        </button>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

export default HeroSection;
