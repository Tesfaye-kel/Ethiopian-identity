import React from 'react';
import gumuzImage from '../../assets/gumuz.png';
import cultureImage from '../../assets/cultu.png';

const Gumuz = () => {
  const gumuzData = {
    name: 'Gumuz',
    shortDesc: 'The resilient guardians of the Blue Nile valley, preserving a ten-thousand-year legacy of forest-dwelling, master archery, and ancient spiritual traditions.',
    culture: 'Hunter-Gatherers of the Blue Nile - Guardians of Ancient Ways',
  };

  const sections = [
    {
      title: 'Ancient Foragers',
      content: "As one of the oldest Nilotic groups in the Benishangul-Gumuz Region, the Gumuz have maintained a forest-dwelling lifestyle for millennia. Their deep connection to the land is rooted in nomadic traditions that predate modern agriculture.",
      imgSrc: gumuzImage,
      color: 'brown'
    },
    {
      title: 'The Blue Nile Valley',
      content: "The Great Blue Nile (Abay) is the lifeblood of the Gumuz. They are the historic masters of this rugged terrain, utilizing the river's seasonal cycles for fishing and as a natural barrier that helped preserve their autonomy.",
      imgSrc: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1200&auto=format&fit=crop', // Blue Nile/River landscape
      color: 'teal'
    },
    {
      title: 'Mastery of the Bow',
      content: "World-renowned as master archers, the Gumuz utilize hand-crafted bows and poison-tipped arrows for hunting. This skill is not just for survival, but a core part of their identity and rite of passage for young men.",
      imgSrc: 'https://images.unsplash.com/photo-1511367734837-f2956f0d8020?q=80&w=1200&auto=format&fit=crop', // Archery/Primal feel
      color: 'amber'
    },
    {
      title: 'Megalithic Traditions',
      content: "The Gumuz are known for erecting 'Wondaga'—T-shaped stone pillars that serve as grave markers and territorial boundaries. These megalithic sites are spiritual anchors, linking the living to their ancestors.",
      imgSrc: 'https://images.unsplash.com/photo-1503197979108-c824168d51a8?q=80&w=1200&auto=format&fit=crop', // Ancient Stone/Megalith vibe
      color: 'stone'
    },
    {
      title: 'Sacred Ceremonies',
      content: "The 'Zar' and other spirit possession ceremonies involve rhythmic drumming and trance dancing. These rituals are performed in sacred groves, where the community seeks healing and guidance from forest spirits.",
      imgSrc: cultureImage,
      color: 'orange'
    },
    {
      title: 'Forest Legacy',
      content: "The Gumuz diet relies on wild yams, honey, and game meat. Their refusal to adopt industrial tools for centuries has left them as one of the few groups in the world with an unbroken hunter-gatherer ecological footprint.",
      imgSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop', // Deep Forest
      color: 'green'
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      brown: 'bg-[#3e2723] text-amber-50', // Deep Chocolate
      teal: 'bg-[#004d40] text-teal-50', // Deep River Teal
      amber: 'bg-[#5d4037] text-amber-50', // Earthy Brown
      stone: 'bg-[#263238] text-slate-50', // Slate Gray
      orange: 'bg-[#4e342e] text-orange-50', // Rust
      green: 'bg-[#1b5e20] text-green-50', // Deep Forest Green
    };
    return themes[color] || themes.brown;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-amber-200">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={gumuzImage} 
          alt="Gumuz Heritage" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse font-serif">
            The Ancient Foragers
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal font-serif">
            {gumuzData.name}
          </h1>
          
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4 font-serif">
            {gumuzData.shortDesc}
          </p>
          
          <div className="absolute bottom-10 animate-bounce text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase">Enter the Forest</span>
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
            {/* Text Panel */}
            <div className={`w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center ${getColorTheme(section.color)}`}>
              <div className="max-w-md mx-auto">
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block font-sans">Legacy 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-amber-400 mb-8"></div>
                <p className="text-lg md:text-xl leading-relaxed font-serif font-light opacity-90 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                  {section.content}
                </p>
              </div>
            </div>

            {/* Image Panel */}
            <div className="w-full md:w-1/2 h-[450px] md:h-auto relative overflow-hidden group">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                onError={(e) => { e.target.src = `https://via.placeholder.com/1000x1000?text=${section.title}`; }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <footer className="py-24 bg-[#faf7f2] text-center px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-24 bg-amber-800 mx-auto mb-10" />
          <p className="text-stone-800 font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">
            "{gumuzData.culture}"
          </p>
          <a 
            href="/" 
            className="inline-block px-12 py-4 border-2 border-amber-900 text-amber-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-amber-900 hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Gumuz;