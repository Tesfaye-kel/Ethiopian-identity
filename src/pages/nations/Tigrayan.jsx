import React from 'react';
// Only import what you actually have as unique local files
import tigrayHero from '../../assets/tig.png'; 
import cultureImage from '../../assets/cultu.png';

const Tigrayan = () => {
  const tigrayanData = {
    name: 'Tigrayan',
    shortDesc: 'The bedrock of Ethiopian history, where the Aksumite Empire forged a global superpower and the mountains hold the world\'s oldest rock-hewn secrets.',
    culture: 'Heirs of Aksum - Architects of Rock and Empire',
  };

  const sections = [
    {
      title: 'Aksumite Legacy',
      content: "Direct descendants of the Aksumite Kingdom, one of the ancient world's four great powers. As a coin-minting superpower trading with Rome and India, Aksum introduced Ge'ez Christianity in the 4th century.",
      // Using an actual image of the Aksum Obelisks
      imgSrc: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1200&auto=format&fit=crop', 
      color: 'blue'
    },
    {
      title: 'Tigrinya Language',
      content: "Tigrinya is a Semitic language deeply rooted in ancient Ge'ez. It carries a literary tradition of 1,700 years, preserving religious poetry, royal chronicles, and the unique 'Fidel' script.",
      imgSrc: cultureImage,
      color: 'teal'
    },
    {
      title: 'Rock-Hewn Churches',
      content: "Tigray is home to over 120 ancient churches carved directly into monolithic cliffs. From the sky-high Abuna Yemata Guh to Gheralta, these spaces have been guarded for a millennium.",
      // Image representing the famous Gheralta mountains/cliffs
      imgSrc: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1200&auto=format&fit=crop', 
      color: 'indigo'
    },
    {
      title: 'Adwa & Resistance',
      content: "A bastion of independence. From Ras Alula Abba Nega to the warriors of the Battle of Adwa in 1896, Tigrayan military brilliance was instrumental in preserving African sovereignty.",
      imgSrc: tigrayHero, // Using your local asset here
      color: 'slate'
    },
    {
      title: 'Ashenda Festival',
      content: "A vibrant cultural festival unique to the women of Tigray. Young women adorn themselves with 'Ashenda' grass and traditional jewelry, filling the streets with song and dance.",
      // Image representing vibrant Ethiopian cultural celebration
      imgSrc: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      color: 'sky'
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      blue: 'bg-[#1a2a3a] text-blue-50',
      teal: 'bg-[#132d2d] text-teal-50',
      indigo: 'bg-[#1e1b4b] text-indigo-50',
      slate: 'bg-[#1e293b] text-slate-50',
      sky: 'bg-[#0c4a6e] text-sky-50',
    };
    return themes[color] || themes.blue;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={tigrayHero} 
          alt="Tigray Highlands" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse font-serif">
            The Cradle of Civilization
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal font-serif">
            {tigrayanData.name}
          </h1>
          
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4 font-serif">
            {tigrayanData.shortDesc}
          </p>
          
          <div className="absolute bottom-10 animate-bounce text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll to Discover</span>
          </div>
        </div>
      </section>

      {/* 2. FULL WIDTH ALTERNATING SECTIONS */}
      <div className="w-full">
        {sections.map((section, i) => (
          <div 
            key={i} 
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[600px] w-full`}
          >
            <div className={`w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center ${getColorTheme(section.color)}`}>
              <div className="max-w-md mx-auto">
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block font-sans">History 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-blue-400 mb-8"></div>
                <p className="text-lg md:text-xl leading-relaxed font-serif font-light opacity-90 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                  {section.content}
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[450px] md:h-auto relative overflow-hidden group">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                onError={(e) => { e.target.src = `https://via.placeholder.com/1000x1000?text=${section.title}`; }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <footer className="py-24 bg-[#f8fafc] text-center px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-24 bg-blue-600 mx-auto mb-10" />
          <p className="text-slate-800 font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">
            "{tigrayanData.culture}"
          </p>
          <a 
            href="/" 
            className="inline-block px-12 py-4 border-2 border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Tigrayan;