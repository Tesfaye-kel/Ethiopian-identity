import React from 'react';

const Ethiopia = () => {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 selection:bg-amber-200">
      
      {/* 1. Impactful Hero Section */}
      <section className="relative h-[40vh] md:h-[55vh] lg:h-[65vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1200&auto=format&fit=crop" 
          alt="Ethiopian Highlands" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf7] via-black/30 to-transparent flex items-center justify-center">
          <div className="text-center px-4">
            <span className="text-white/80 tracking-[0.4em] uppercase text-xs md:text-sm mb-2 md:mb-4 block">The Land of Origins</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white drop-shadow-2xl">Ethiopia</h1>
          </div>
        </div>
      </section>

      {/* 2. About Section: Diversity & Identity */}
      <section className="py-12 md:py-24 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          <div className="space-y-4 md:space-y-8 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 rounded-full">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">Diversity in Focus</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-stone-800">
              A Tapestry of <span className="italic text-amber-700">80+ Nations</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-stone-600 font-light leading-relaxed">
              <p>
                Ethiopia is not just a country; it is a museum of humanity. Home to over <strong>80 ethnic groups</strong>, it represents a unique coexistence of Semitic, Cushitic, Omotic, and Nilotic peoples. 
              </p>
              <p>
                From the ancient <strong>Ge'ez script</strong> to the unique 13-month calendar, Ethiopian identity is built on a foundation of independence, having never been colonized. This pride is the "glue" that holds the diverse pieces together.
              </p>
            </div>
          </div>

          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 border border-stone-200 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1580619315624-05e2f559222c?q=80&w=800" 
                alt="Lalibela Heritage" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Unity Challenge (Interactive Style Questions) */}
      <section className="bg-stone-900 text-stone-100 py-12 md:py-20 px-4 md:px-6 lg:px-12 rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-12 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-amber-400 mb-8 md:mb-12 text-center">The Challenge of Unity</h3>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="border-l border-amber-500/30 pl-6 md:pl-8">
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Why is unity a challenge?</h4>
              <p className="text-stone-400 leading-relaxed font-light text-sm md:text-base">
                The core challenge is balancing regional autonomy with federal strength. While the 1995 Constitution grants ethnic groups the right to self-determination, finding a common political ground that satisfies all 80+ identities requires constant, delicate dialogue.
              </p>
            </div>
            <div className="border-l border-amber-500/30 pl-6 md:pl-8">
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">What is the "Greatest Hope"?</h4>
              <p className="text-stone-400 leading-relaxed font-light text-sm md:text-base">
                Unity is strongest when focusing on shared values: the history of the <strong>Battle of Adwa</strong>, the pan-African spirit, and everyday cultural bonds like the coffee ceremony and religious celebrations (Meskel, Timket, and Eid) that transcend ethnic lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. List of Nationalities: Minimalist Grid */}
      <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto text-center">
        <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-8 md:mb-12">Major Ethnic Groups & Nations</h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {['Oromo', 'Amhara', 'Somali', 'Tigrayan', 'Sidama', 'Gurage', 'Wolayta', 'Afar', 'Hadiya', 'Gamo'].map((item) => (
            <span key={item} className="px-6 md:px-8 py-2 md:py-3 bg-white border border-stone-100 rounded-full shadow-sm text-stone-600 md:text-stone-700 hover:text-amber-700 hover:border-amber-200 transition-all cursor-default text-sm md:text-base">
              {item}
            </span>
          ))}
          <span className="px-6 md:px-8 py-2 md:py-3 bg-stone-100 text-stone-500 rounded-full italic font-serif text-sm md:text-base">And 70+ others</span>
        </div>
      </section>

      {/* 5. Historical Legacy Note */}
      <footer className="pb-12 md:pb-24 text-center">
        <div className="h-px w-16 md:w-24 bg-amber-500 mx-auto mb-6 md:mb-8" />
        <p className="max-w-xl mx-auto text-stone-400 font-light italic px-4 text-sm md:text-base">
          "Ethiopia shall soon stretch out her hands unto God." — A nation defined by its endurance, its faith, and its complex, beautiful unity.
        </p>
      </footer>

    </div>
  );
};

export default Ethiopia;

