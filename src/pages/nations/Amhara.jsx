import React from 'react';
import amharaImage from '../../assets/amar.png';
import cultureImage from '../../assets/cultu.png';
import ethioImage from '../../assets/ethio.png';

const Amhara = () => {
  const amharaData = {
    name: 'Amhara',
    shortDesc: 'The spiritual and imperial heart of Ethiopia, home to the ancient Ge\'ez script, rock-hewn marvels, and the legendary Solomonic dynasty.',
    culture: 'Guardians of the Highlands - Cradle of Ethiopian Civilization',
  };

  const sections = [
    {
      title: 'Ancient Origins',
      content: "Semitic peoples from northern highlands with roots tracing to the Kingdom of Aksum. As descendants of the Solomonic Dynasty, the Amhara have preserved the Ge'ez script and ancient Christian traditions for over a millennium.",
      imgSrc: amharaImage,
      color: 'amber'
    },
    {
      title: 'Amharic Language',
      content: "Amharic is the federal working language of Ethiopia and the world's second most spoken Semitic language. Its unique 'Fidel' syllabary and rich poetic tradition, known as 'Wax and Gold', define the nation's intellectual soul.",
      imgSrc: cultureImage,
      color: 'stone'
    },
    {
      title: 'Imperial Glory',
      content: "From the castles of Gondar to the modernizing vision of Emperor Tewodros II and the victory of Menelik II at Adwa, the Amhara region has been the seat of power that shaped modern Ethiopia's independence.",
      imgSrc: ethioImage,
      color: 'rose'
    },
    {
      title: 'Sacred Festivals',
      content: "The highlands come alive during Timkat (Epiphany) and Meskel. These UNESCO-recognized celebrations involve vibrant processions, ancient chants, and the parading of the Tabot, reflecting a deep, unbroken faith.",
      imgSrc: cultureImage,
      color: 'emerald'
    },
    {
      title: 'UNESCO Highlands',
      content: "Home to Lalibela's eleven rock-hewn churches, the Simien Mountains' dramatic peaks, and the island monasteries of Lake Tana. These sites represent the pinnacle of African architectural and natural heritage.",
      imgSrc: ethioImage,
      color: 'violet'
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      amber: 'bg-[#453227] text-amber-50', // Deep Earthy Brown
      stone: 'bg-stone-900 text-stone-50',
      rose: 'bg-[#541e1e] text-rose-50', // Deep Maroon
      emerald: 'bg-[#1a2e1a] text-emerald-50', // Deep Forest
      violet: 'bg-[#2e1a3d] text-violet-50', // Deep Plum
    };
    return themes[color] || themes.stone;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-amber-200">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={amharaImage} 
          alt="Amhara Highlands" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark Overlay with Hover Reveal */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse font-serif">
            The Imperial Heart
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal font-serif">
            {amharaData.name}
          </h1>
          
          {/* Hover Reveal Description */}
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4 font-serif">
            {amharaData.shortDesc}
          </p>
          
          <div className="absolute bottom-10 animate-bounce text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase">Explore the Highlands</span>
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
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block font-sans">Chapter 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-amber-500 mb-8"></div>
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
              {/* Subtle Film Grain/Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER / QUOTE */}
      <footer className="py-24 bg-[#fcfaf7] text-center px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-24 bg-amber-600 mx-auto mb-10" />
          <p className="text-stone-800 font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">
            "{amharaData.culture}"
          </p>
          <a 
            href="/" 
            className="inline-block px-12 py-4 border-2 border-stone-900 text-stone-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Amhara;