import React from 'react';
import oromoimage from '../../assets/oro.png'; 
import cultureimage from '../../assets/irrecha.png'; 
import actvistimage from '../../assets/hachalu.png';
import bilileimage from '../../assets/bilile.png';
import gadaimage from '../../assets/gada.png';
import olympicimage from '../../assets/Abebe.png';
const Oromo = () => {
  const oromoData = {
    name: 'Oromo',
    shortDesc: 'The Oromo are the keepers of the Gadaa system, a cradle of indigenous democracy and a resilient pillar of East African history.',
    culture: 'Land of Gadaa Democracy - Heartbeat of Ethiopia',
  };

  const sections = [
    { title: 'Origin', content: 'The Oromo people are the largest ethnic group in Ethiopia (40+ million), originating from the Bale Mountains in the 16th century. Through the Great Oromo Migration, they expanded across southern, central, western, and eastern Ethiopia, establishing powerful kingdoms like Jimma Abba Jifar and Leqa Naqamte.', imgSrc: oromoimage, color: 'emerald' },
    { title: 'Gadaa System', content: 'Gadaa is the most sophisticated indigenous democratic system in the world (UNESCO Heritage). Age-grade leadership rotates every 8 years peacefully through community consensus. No kings - power through elected Abba Gadaa (president) and council.', imgSrc: gadaimage, color: 'stone' },
    { title: 'Culture', content: 'Rich Afaan Oromoo language (Cushitic). Oromo culture is anchored by the Gadaa system, an ancient indigenous democratic governance structure that orchestrates social, political, and economic life through eight-year leadership cycles.', imgSrc: cultureimage, color: 'amber' },
    { title: 'Activists & Heroes', content: 'The Oromo people have a long history of heroes like General Waqo Gutu and Mamo Meqdasi. Hachalu Hundessa remains a modern symbol of the struggle for Oromo identity and rights through the power of music.', imgSrc: actvistimage, color: 'blue' },
    { title: 'Olympic Glory', content: 'Legendary runners: Abebe Bikila (barefoot 1960 Rome gold), Miruts Yifter, and Derartu Tulu. These athletes from the Oromia highlands changed the face of long-distance running forever.', imgSrc: olympicimage, color: 'orange' },
    { title: 'Bilile', content: 'Bilile was a brave Oromo freedom fighter who fought against oppression. Born in the early 20th century, she is legendary for her courage leading resistance and inspiring generations of Oromo women.', imgSrc: bilileimage, color: 'violet' }
  ];

  const getColorTheme = (color) => {
    const themes = {
      emerald: 'bg-emerald-900 text-emerald-50',
      stone: 'bg-stone-900 text-stone-50',
      amber: 'bg-amber-900 text-amber-50',
      blue: 'bg-blue-900 text-blue-50',
      orange: 'bg-orange-900 text-orange-50',
      violet: 'bg-violet-900 text-violet-50',
    };
    return themes[color] || themes.stone;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FULL WIDTH HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={oromoimage} 
          alt="Oromo Hero" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-8xl md:text-[12rem] font-black text-white tracking-tighter transition-all duration-700 group-hover:tracking-widest">
            {oromoData.name}
          </h1>
          
          {/* Sentence that appears/brightens on hover */}
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 italic font-light">
            {oromoData.shortDesc}
          </p>
          
          <div className="mt-8 animate-bounce text-white/50">
            <span className="text-sm tracking-widest uppercase">Scroll to Explore</span>
          </div>
        </div>
      </section>

      {/* FULL WIDTH BOOK SECTIONS */}
      <div className="w-full">
        {sections.map((section, i) => (
          <div 
            key={i} 
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[600px] w-full`}
          >
            {/* Text Panel */}
            <div className={`w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center ${getColorTheme(section.color)}`}>
              <div className="max-w-md mx-auto">
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block">Part 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-12 bg-current mb-8 opacity-30"></div>
                <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
                  {section.content}
                </p>
              </div>
            </div>

            {/* Image Panel */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/1000x1000?text=' + section.title; }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-stone-100 py-24 text-center">
        <h3 className="text-2xl font-serif italic text-stone-800 mb-10">"{oromoData.culture}"</h3>
        <a 
          href="/ethnic-groups" 
          className="inline-block px-10 py-4 bg-stone-900 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-emerald-700 transition-colors"
        >
          Explore Other Nations
        </a>
      </footer>
    </div>
  ); 
};

export default Oromo;