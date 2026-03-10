import React from 'react';
import HeroSection from '../components/HeroSection';
import EthnicGroups from './EthnicGroups';

function Home() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 selection:bg-amber-200">
      <HeroSection />

      {/* About Section - Asymmetric & Sophisticated */}
      <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
        {/* Subtle Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl opacity-60" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Side with Layered Effect */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 border border-stone-200 rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop" 
                alt="Ethiopian Heritage" 
                className="w-full h-full object-cover transition-scale duration-700 group-hover:scale-105" 
              />
            </div>
            {/* Floating Stats/Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
              <p className="text-amber-700 font-bold text-3xl">80+</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Ethnic Groups</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-amber-50 rounded-full">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">The Cradle of Humankind</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-serif font-light leading-tight text-stone-800">
              A Land of <span className="italic text-amber-700">Origins</span> & Ancient Echoes
            </h2>

            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
              <p>
                Ethiopia is a tapestry woven from ancient threads of history, diverse cultures, and 
                breathtaking landscapes. From the towering Simien Mountains to the Danakil Depression, 
                its geography is as varied as the <span className="font-medium text-stone-800">120 million people</span> who call it home.
              </p>
              <p>
                This digital journey explores the soul of a nation that remained uncolonized, 
                preserving a heritage that dates back to the dawn of man. Experience the vibrant 
                colors of the Omo Valley and the spiritual silence of Lalibela.
              </p>
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-amber-800 transition-colors duration-300 shadow-lg shadow-stone-200">
                Explore Our Heritage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ethnic Groups Section with Soft Depth */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="bg-white border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[3rem] py-20 px-8 lg:px-16 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
          <EthnicGroups />
        </div>
      </section>
    </div>
  );
}

export default Home;