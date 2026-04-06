import React from 'react';
import gabHero from '../../assets/gab.png'; 
import cultureImage from '../../assets/cultu.png';

const Gambela = () => {
  const gambelaData = {
    name: 'Gambela',
    shortDesc: 'A land of vast wetlands and mighty rivers, where the Nuer and Anuak peoples preserve a unique Nilo-Saharan heritage through cattle prestige and riverine mastery.',
    culture: 'Nilo-Saharan River People - Wetlands Guardians',
  };

  const sections = [
    {
      title: 'Nuer & Anuak',
      content: "The Gambela region is defined by the Nuer, traditionally cattle pastoralists, and the Anuak, renowned fisherfolk and farmers. Together, they form a vibrant Nilo-Saharan cultural landscape along the borderlands of the Nile basin.",
      imgSrc: gabHero,
      color: 'emerald'
    },
    {
      title: 'Cattle Culture',
      content: "For the Nuer, cattle (diel) are not just wealth—they are the spiritual center of life. Every major life event, from marriage to naming ceremonies, revolves around the deep bond between the pastoralist and his herd.",
      // Image of African longhorn cattle which are central to Nuer identity
      imgSrc: 'https://images.unsplash.com/photo-1545468202-0994969bc749?q=80&w=1200&auto=format&fit=crop', 
      color: 'green'
    },
    {
      title: 'The Baro River',
      content: "The mighty Baro River is the region's lifeblood. It supports an intricate ecosystem of hippos, crocodiles, and diverse birdlife, while providing the Anuak people with a highway for their expertly crafted dugout canoes.",
      // Image of a vast African river landscape
      imgSrc: 'https://images.unsplash.com/photo-1509023467864-1ecbb3f6342e?q=80&w=1200&auto=format&fit=crop', 
      color: 'blue'
    },
    {
      title: 'Anuak Canoes',
      content: "The Anuak are master river-men. They hand-carve massive dugout canoes, some reaching 20 meters in length, from single tree trunks. These vessels are the primary mode of transport through the dense Gambela wetlands.",
      // Image representing traditional dugout canoes on water
      imgSrc: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop', 
      color: 'teal'
    },
    {
      title: 'National Park',
      content: "Gambela National Park hosts one of the world's most spectacular wildlife events: the migration of the white-eared kob. This massive movement rivals the Serengeti and represents Ethiopia's richest biodiversity.",
      // Image of a vast savanna migration
      imgSrc: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop', 
      color: 'lime'
    },
    {
      title: 'Spiritual Heritage',
      content: "Traditional leadership, such as the Nuer 'Leopard Skin Chiefs,' plays a crucial role in mediating disputes and maintaining social harmony. Their spiritual authority bridges the gap between the divine and the community.",
      imgSrc: cultureImage,
      color: 'slate'
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      emerald: 'bg-[#064e3b] text-emerald-50',
      green: 'bg-[#14532d] text-green-50',
      blue: 'bg-[#1e3a8a] text-blue-50',
      teal: 'bg-[#134e4a] text-teal-50',
      lime: 'bg-[#365314] text-lime-50',
      slate: 'bg-[#1e293b] text-slate-50',
    };
    return themes[color] || themes.emerald;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-200">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={gabHero} 
          alt="Gambela Wetlands" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse font-serif">
            Guardians of the Wetlands
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal font-serif">
            {gambelaData.name}
          </h1>
          
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4 font-serif">
            {gambelaData.shortDesc}
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
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block font-sans">Chapter 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-emerald-400 mb-8"></div>
                <p className="text-lg md:text-xl leading-relaxed font-serif font-light opacity-90 first-letter:text-5xl first-letter:font-bold first-letter:mr-2">
                  {section.content}
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[450px] md:h-auto relative overflow-hidden group border-y md:border-none border-white/10">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                onError={(e) => { e.target.src = `https://via.placeholder.com/1000x1000?text=${section.title}`; }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <footer className="py-24 bg-[#f0fdf4] text-center px-6 border-t border-emerald-100">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-24 bg-emerald-600 mx-auto mb-10" />
          <p className="text-stone-800 font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">
            "{gambelaData.culture}"
          </p>
          <a 
            href="/" 
            className="inline-block px-12 py-4 border-2 border-emerald-900 text-emerald-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-emerald-900 hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Gambela;