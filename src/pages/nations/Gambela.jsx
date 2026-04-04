import React from 'react';
import gabImage from '../../assets/gab.png';
import cultureImage from '../../assets/cultu.png';

const Gambela = () => {
  const gambelaData = {
    name: 'Gambela',
    culture: 'Nilo-Saharan River People - Wetlands Guardians',
  };

  const sections = [
    {
      title: '1. Nuer & Anuak',
      content: 'Nilo-Saharan peoples dominant in Gambela. Nuer cattle pastoralists, Anuak fisherfolk. Jikany Nuer, Lou Nuer sub-clans.',
      imgSrc: gabImage,
      color: 'emerald'
    },
    {
      title: '2. Cattle Culture',
      content: 'Nuer cattle (diel) central to identity, marriage, rituals. Man-to-cattle relationship spiritual. Raids between clans.',
      imgSrc: cultureImage,
      color: 'green'
    },
    {
      title: '3. Baro River',
      content: 'Baro River wetlands support fishing, hippos, birds. Dugout canoes, fish traps, drying racks.',
      imgSrc: gabImage,
      color: 'blue'
    },
    {
      title: '4. Nuer Prophets',
      content: 'Prophets (guar) mediate spiritual, political affairs. Leopard skin chief resolves blood feuds.',
      imgSrc: cultureImage,
      color: 'slate'
    },
    {
      title: '5. Anuak Canoes',
      content: 'Anuak master craftsmen build 20m long canoes from single tree trunks. Riverine trading networks.',
      imgSrc: gabImage,
      color: 'teal'
    },
    {
      title: '6. National Park',
      content: 'Gambela National Park - Nile lechwe antelope, white-eared kob migration rival Serengeti.',
      imgSrc: cultureImage,
      color: 'lime'
    },
    {
      title: '7. Wedding Traditions',
      content: 'Bride service system - groom works father-in-law 3-5 years. Cattle bridewealth payments.',
      imgSrc: gabImage,
      color: 'gray'
    }
  ];

  const getBgClass = (color) => {
    const bgClasses = {
      emerald: 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-200',
      green: 'bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-200',
      blue: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200',
      slate: 'bg-gradient-to-br from-slate-400/10 to-slate-500/10 border-slate-200',
      teal: 'bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-200',
      lime: 'bg-gradient-to-br from-lime-500/10 to-lime-600/10 border-lime-200',
      gray: 'bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-200'
    };
    return bgClasses[color] || bgClasses.emerald;
  };

  const getTextClass = (color) => {
    const textClasses = {
      emerald: 'bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent border-emerald-400',
      green: 'bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent border-green-400',
      blue: 'bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent border-blue-400',
      slate: 'bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent border-slate-400',
      teal: 'bg-gradient-to-r from-teal-800 to-teal-900 bg-clip-text text-transparent border-teal-400',
      lime: 'bg-gradient-to-r from-lime-800 to-lime-900 bg-clip-text text-transparent border-lime-400',
      gray: 'bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent border-gray-400'
    };
    return textClasses[color] || textClasses.emerald;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">GAMBELA</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent drop-shadow-2xl">{gambelaData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4 font-serif">"{gambelaData.culture}"</p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {sections.map((section, i) => (
          <section key={i} className="grid md:grid-cols-2 gap-8 items-center mb-[-3.5rem] md:mb-[-4.5rem] relative">
            <div className={`p-8 md:p-12 rounded-3xl shadow-2xl min-h-[300px] flex items-center border-4 ${getBgClass(section.color)}`}>
              <div>
                <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-widest mb-6 pb-2 border-b-2 ${getTextClass(section.color)}`}>{section.title}</h2>
                <p className="text-lg md:text-xl leading-relaxed text-stone-800 line-clamp-6">{section.content}</p>
              </div>
            </div>
            <div className="h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl relative -mr-12 md:-mr-16 lg:-mr-20 z-10 border-4 border-white">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:rotate-1"
                onError={(e) => { 
                  e.target.src = `https://via.placeholder.com/700x450?text=${section.title.replace(/[^\\w]/g, '')}`; 
                }}
              />
            </div>
          </section>
        ))}
      </div>

      <div className="text-center mt-20">
        <a href="/" className="inline-block px-12 py-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xl font-bold rounded-3xl hover:shadow-emerald-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Gambela;
