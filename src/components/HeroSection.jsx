import React from 'react';

function HeroSection() {
  return (
    <section className="hero relative bg-cover bg-center h-[500px] text-white flex items-center justify-center text-center rounded-2xl shadow-2xl overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1592665521614-e7c2047e735d?q=80&w=1932&auto=format&fit=crop')"}}>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"></div>
      <div className="relative z-10 p-8 max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight">Unity in Diversity: An Ethiopian identity</h2>
        <p className="text-xl md:text-2xl font-light text-stone-100 drop-shadow-md">A journey through time, culture, and people.</p>
      </div>
    </section>
  );
}

export default HeroSection;