import React from 'react';
import gumuzImage from '../../assets/gumuz.png';
import cultureImage from '../../assets/cultu.png';
import hunterImage from '../../assets/gumuz.png';

const Gumuz = () => {
  const gumuzData = {
    name: 'Gumuz',
    culture: 'Hunter-Gatherers of the Blue Nile - Guardians of Ancient Ways',
  };

  const sections = [
    {
      title: '1. Ancient Foragers',
      content: 'Omotic hunter-gatherers of Benishangul-Gumuz Region. Lived same way 10,000+ years. Reject agriculture, metal tools. Forest-dwelling, nomadic bands.',
      imgSrc: gumuzImage,
      color: 'brown'
    },
    {
      title: '2. Gumuz Language',
      content: 'Gumuz language (Koman family) - tonal, click consonants. Endangered, few speakers literate. Oral traditions only.',
      imgSrc: cultureImage,
      color: 'orange'
    },
    {
      title: '3. Bow Masters',
      content: 'World-class archers hunting duiker, colobus monkeys with poison arrows. Traps for birds, honey collection with smoke.',
      imgSrc: hunterImage,
      color: 'yellow'
    },
    {
      title: '4. Sacred Forests',
      content: 'Zar spirit possession ceremonies with dancing, trance states. Sacred groves protected from logging.',
      imgSrc: gumuzImage,
      color: 'green'
    },
    {
      title: '5. Megalith Tradition',
      content: 'Erect T-shaped stone pillars (wondaga) for burials, territorial markers. Some 2m tall, 500+ years old.',
      imgSrc: cultureImage,
      color: 'gray'
    },
    {
      title: '6. Forest Cuisine',
      content: 'Wild yams, honey, game meat, wild fruits. No grain cultivation. Fermented beverages.',
      imgSrc: hunterImage,
      color: 'amber'
    },
    {
      title: '7. Resistance Legacy',
      content: 'Fought Italian occupation with bows. Maintain autonomy against assimilation pressures.',
      imgSrc: gumuzImage,
      color: 'stone'
    }
  ];

  const getBgClass = (color) => {
    const bgClasses = {
      brown: 'bg-gradient-to-br from-amber-800/10 to-stone-600/10 border-amber-300',
      orange: 'bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200',
      yellow: 'bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border-yellow-200',
      green: 'bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-200',
      gray: 'bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-200',
      amber: 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-200',
      stone: 'bg-gradient-to-br from-stone-400/10 to-stone-500/10 border-stone-200'
    };
    return bgClasses[color] || bgClasses.brown;
  };

  const getTextClass = (color) => {
    const textClasses = {
      brown: 'bg-gradient-to-r from-amber-900 to-stone-800 bg-clip-text text-transparent border-amber-400',
      orange: 'bg-gradient-to-r from-orange-800 to-orange-900 bg-clip-text text-transparent border-orange-400',
      yellow: 'bg-gradient-to-r from-yellow-800 to-yellow-900 bg-clip-text text-transparent border-yellow-400',
      green: 'bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent border-green-400',
      gray: 'bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent border-gray-400',
      amber: 'bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent border-amber-400',
      stone: 'bg-gradient-to-r from-stone-700 to-stone-800 bg-clip-text text-transparent border-stone-400'
    };
    return textClasses[color] || textClasses.brown;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-amber-100 to-stone-100">
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-amber-800 to-stone-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">GUMEZ</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-amber-800 to-stone-600 bg-clip-text text-transparent drop-shadow-2xl">{gumuzData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4 font-serif">"{gumuzData.culture}"</p>
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
        <a href="/" className="inline-block px-12 py-6 bg-gradient-to-r from-amber-800 to-stone-600 text-white text-xl font-bold rounded-3xl hover:shadow-amber-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Gumuz;
