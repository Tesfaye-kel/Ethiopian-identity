import React from 'react';

const Ethiopia = () => {
  const ethiopiaData = {
    name: 'Ethiopia',
    shortDesc: 'The Cradle of Mankind and the only African nation to never be colonized, defined by ancient scripts, a 13-month calendar, and 80+ diverse nations.',
    motto: '"Ethiopia shall soon stretch out her hands unto God."'
  };

  const sections = [
    { 
      title: 'A Tapestry of 80+ Nations', 
      content: 'Ethiopia is not just a country; it is a museum of humanity. Home to over 80 ethnic groups, it represents a unique coexistence of Semitic, Cushitic, Omotic, and Nilotic peoples. From the highlands to the rift valley, every region carries a distinct flavor of language, dress, and tradition.', 
      imgSrc: 'https://images.unsplash.com/photo-1580619315624-05e2f559222c?q=80&w=1200', 
      color: 'emerald' 
    },
    { 
      title: 'The Challenge of Unity', 
      content: 'The core challenge lies in balancing regional autonomy with federal strength. While the 1995 Constitution grants ethnic groups the right to self-determination, finding common political ground that satisfies all identities requires constant, delicate dialogue and a focus on shared prosperity.', 
      imgSrc: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1200', 
      color: 'stone' 
    },
    { 
      title: 'Ancient Heritage', 
      content: 'From the rock-hewn churches of Lalibela to the Obelisks of Axum, Ethiopia’s history stretches back millennia. It remains the only African nation with its own indigenous script (Ge’ez) and a calendar that remains seven years behind the Gregorian standard.', 
      imgSrc: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1200', 
      color: 'amber' 
    },
    { 
      title: 'The Greatest Hope', 
      content: 'Unity is strongest when focusing on shared values: the history of the Battle of Adwa, the pan-African spirit, and everyday cultural bonds like the coffee ceremony and religious celebrations (Meskel, Timket, and Eid) that transcend ethnic lines.', 
      imgSrc: 'https://images.unsplash.com/photo-1489493173507-6feae290d39a?q=80&w=1200', 
      color: 'blue' 
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      emerald: 'bg-emerald-900 text-emerald-50',
      stone: 'bg-stone-900 text-stone-50',
      amber: 'bg-[#5c4033] text-amber-50', // Earthy Brown
      blue: 'bg-blue-900 text-blue-50',
    };
    return themes[color] || themes.stone;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-amber-200">
      
      {/* 1. CINEMATIC HERO SECTION (Full Width) */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1523805081730-614449274074?q=80&w=2000" 
          alt="Ethiopian Landscape" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark Overlay with Hover Reveal */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse">The Land of Origins</span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal">
            {ethiopiaData.name}
          </h1>
          
          {/* Hover Reveal Sentence */}
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4">
            {ethiopiaData.shortDesc}
          </p>
          
          <div className="absolute bottom-10 animate-bounce text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll Down</span>
          </div>
        </div>
      </section>

      {/* 2. FULL WIDTH BOOK SECTIONS (Alternating) */}
      <div className="w-full">
        {sections.map((section, i) => (
          <div 
            key={i} 
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[650px] w-full`}
          >
            {/* Text Panel */}
            <div className={`w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center ${getColorTheme(section.color)}`}>
              <div className="max-w-md mx-auto">
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block">Legacy 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-amber-500 mb-8"></div>
                <p className="text-lg md:text-xl leading-relaxed font-light opacity-90 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                  {section.content}
                </p>
              </div>
            </div>

            {/* Image Panel */}
            <div className="w-full md:w-1/2 h-[450px] md:h-auto relative overflow-hidden group">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. NATIONALITIES GRID (Minimalist) */}
      <section className="py-24 bg-[#fcfaf7] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-12">The Mosaic of Identity</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Oromo', 'Amhara', 'Somali', 'Tigrayan', 'Sidama', 'Gurage', 'Wolayta', 'Afar', 'Hadiya', 'Gamo'].map((item) => (
              <span key={item} className="px-6 py-2 border border-stone-200 rounded-full text-stone-600 hover:border-amber-500 hover:text-amber-800 transition-all duration-300">
                {item}
              </span>
            ))}
            <span className="px-6 py-2 bg-stone-200 text-stone-500 rounded-full italic font-serif">And 70+ others</span>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="py-20 bg-stone-900 text-center px-6">
        <div className="h-px w-24 bg-amber-600 mx-auto mb-10" />
        <p className="max-w-2xl mx-auto text-stone-400 font-serif italic text-xl md:text-2xl leading-relaxed mb-12">
          {ethiopiaData.motto}
        </p>
        <a 
          href="/home" 
          className="inline-block px-12 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
        >
          Return to Hub
        </a>
      </footer>

    </div>
  );
};

export default Ethiopia;