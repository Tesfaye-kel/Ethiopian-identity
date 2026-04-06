import React from 'react';
import somaliImage from '../../assets/som.png'; 
import cultureImage from '../../assets/cultu.png';

const Somali = () => {
  const somaliData = {
    name: 'Somali',
    shortDesc: 'The noble nomads of the Horn, masters of oral poetry and keepers of the ancient Xeer code, defined by their deep bond with the desert and the camel.',
    culture: 'Poets of the Ogaden - Camel Lords of the Horn',
  };

  const sections = [
    {
      title: 'Cushitic Clans',
      content: "Pastoralists of the Somali Region (Ogaden) governed by the Xeer—a traditional legal code. With a genealogical memory stretching back 20 generations, the clan structure provides a resilient social fabric built on honor and shared history.",
      imgSrc: somaliImage,
      color: 'emerald'
    },
    {
      title: 'Somali Poetry',
      content: "Known as the 'Nation of Poets,' the Somali people hold oral poetry (Gabay) as their highest art form. Poets compose instant epics that serve as news, history, and law, preserving the soul of the nomad across centuries.",
      imgSrc: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop', // Poetry/Literature feel
      color: 'green'
    },
    {
      title: 'Camel Economy',
      content: "Master camel herders with unmatched veterinary knowledge. The camel is the primary currency and lifeblood of the desert, providing milk, transport, and a nomadic moral code centered on endurance and survival.",
      imgSrc: 'https://images.unsplash.com/photo-1542365887-11499f13fe17?q=80&w=1200&auto=format&fit=crop', // High quality Camel image
      color: 'lime'
    },
    {
      title: 'Harar Connection',
      content: "Somali traders were the bridge between the walled city of Harar and the world. Connecting the Ethiopian highlands to the Arabian Peninsula, they turned Harar into a global hub for the coffee and incense trade.",
      imgSrc: 'https://images.unsplash.com/photo-1523805081730-614449274074?q=80&w=1200&auto=format&fit=crop', // Harar-style architecture
      color: 'teal'
    },
    {
      title: 'Traditional Dress',
      content: "The vibrant Guntiino for women and the Ma'awis wrap for men signify a culture of elegance. Often scented with frankincense and adorned with intricate henna, the Somali attire is a symbol of desert prestige.",
      imgSrc: cultureImage,
      color: 'emerald'
    },
    {
      title: 'Dhaanto Dance',
      content: "A high-energy, rhythmic dance that celebrates life, victory, and unity. Dhaanto is the heartbeat of Somali celebrations, where the rhythmic clapping and synchronized jumps bridge the gap between tradition and modern pride.",
      imgSrc: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop', // Celebration/Dance vibe
      color: 'slate'
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      emerald: 'bg-[#064e3b] text-emerald-50', // Deep Forest
      green: 'bg-[#14532d] text-green-50', // Deep Green
      lime: 'bg-[#365314] text-lime-50', // Olive/Earthy
      teal: 'bg-[#134e4a] text-teal-50', // Deep Teal
      slate: 'bg-[#0f172a] text-slate-50', // Midnight
    };
    return themes[color] || themes.emerald;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-200">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={somaliImage} 
          alt="Somali Landscape" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark Overlay with Hover Reveal */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse font-serif">
            The Nation of Poets
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal font-serif">
            {somaliData.name}
          </h1>
          
          {/* Hover Reveal Description */}
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4 font-serif">
            {somaliData.shortDesc}
          </p>
          
          <div className="absolute bottom-10 animate-bounce text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll to Explore</span>
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
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block font-sans">Heritage 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-emerald-400 mb-8"></div>
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
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                onError={(e) => { e.target.src = `https://via.placeholder.com/1000x1000?text=${section.title}`; }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER / QUOTE */}
      <footer className="py-24 bg-[#f0f9f1] text-center px-6 border-t border-emerald-100">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-24 bg-emerald-600 mx-auto mb-10" />
          <p className="text-stone-800 font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">
            "{somaliData.culture}"
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

export default Somali;