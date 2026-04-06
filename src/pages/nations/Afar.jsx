import React from 'react';
import afarHero from '../../assets/affar.png'; 
import cultureImage from '../../assets/cultu.png';
import scravansalt from '../../assets/saltcravan.png';

const Afar = () => {
  const afarData = {
    name: 'Afar',
    shortDesc: "Masters of the Danakil—Earth's harshest and most mesmerizing landscape—the Afar people have flourished for millennia as salt miners and nomadic warriors.",
    culture: 'Salt Miners of the Danakil - Warriors of the Harshest Earth',
  };

  const sections = [
    {
      title: 'Danakil Origins',
      content: "The Afar people inhabit the Afar Triangle, one of the hottest and lowest points on the planet. Surviving temperatures of 49°C, they have adapted to a life of resilience amidst active volcanoes and shifting tectonic plates.",
      imgSrc: afarHero,
      color: 'orange'
    },
    {
      title: 'Salt Caravans',
      content: "For centuries, Afar men have hand-chiseled salt blocks from the 200m-thick crust of the Danakil. These blocks are transported by legendary camel trains—some 500 camels long—across the desert to highland markets.",
      // Image of camel caravans in a desert/salt flat setting
      imgSrc: scravansalt, 
      color: 'yellow'
    },
    {
      title: 'Dallol & Acid Pools',
      content: "Living beside the Dallol volcano, the Afar navigate a landscape of psychedelic yellow and green acid pools and hydrothermal vents. It is a terrain that looks more like another planet than our own.",
      // Image of the colorful sulfur springs of Dallol
      imgSrc: 'https://images.unsplash.com/photo-1627440445214-e578c77227d8?q=80&w=1200&auto=format&fit=crop', 
      color: 'rose'
    },
    {
      title: 'Erta Ale: The Lava Lake',
      content: "The Afar territory is home to Erta Ale, one of the world's few continuously active lava lakes. Known as the 'Gateway to Hell,' it is a sacred and powerful site within the Afar cultural geography.",
      // Image of a glowing lava lake or volcano
      imgSrc: 'https://images.unsplash.com/photo-1614213123891-b3337e6f8099?q=80&w=1200&auto=format&fit=crop', 
      color: 'stone'
    },
    {
      title: 'Afambo Festival',
      content: "During the annual Afambo festival, the Afar celebrate their heritage through camel racing, traditional wrestling, and oral poetry. It is a time when intricate silver jewelry and colorful traditional dress fill the desert.",
      imgSrc: cultureImage,
      color: 'emerald'
    },
    {
      title: 'Nomadic Resilience',
      content: "Masters of water-finding and animal husbandry, the Afar rely on goats and camels for survival in hyper-arid conditions. Their mobility is their strength, allowing them to thrive where few others could survive.",
      // Image of desert nomadic life/livestock
      imgSrc: 'https://images.unsplash.com/photo-1509439581779-629cffb2f662?q=80&w=1200&auto=format&fit=crop', 
      color: 'gray'
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      orange: 'bg-[#7c2d12] text-orange-50', // Deep Burnt Orange
      yellow: 'bg-[#713f12] text-yellow-50', // Deep Ochre
      rose: 'bg-[#881337] text-rose-50',     // Acid Rose
      stone: 'bg-[#1c1917] text-stone-50',   // Volcanic Black
      emerald: 'bg-[#064e3b] text-emerald-50', // Deep Oasis Green
      gray: 'bg-[#27272a] text-zinc-50',     // Desert Gray
    };
    return themes[color] || themes.orange;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-orange-200">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={afarHero} 
          alt="Afar Desert Landscape" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse font-serif">
            Warriors of the Danakil
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal font-serif">
            {afarData.name}
          </h1>
          
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4 font-serif">
            {afarData.shortDesc}
          </p>
          
          <div className="absolute bottom-10 animate-bounce text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll into the Heat</span>
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
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block font-sans">History 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-orange-400 mb-8"></div>
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
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <footer className="py-24 bg-[#fffaf5] text-center px-6 border-t border-orange-100">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-24 bg-orange-600 mx-auto mb-10" />
          <p className="text-stone-800 font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">
            "{afarData.culture}"
          </p>
          <a 
            href="/" 
            className="inline-block px-12 py-4 border-2 border-orange-900 text-orange-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-orange-900 hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Afar;