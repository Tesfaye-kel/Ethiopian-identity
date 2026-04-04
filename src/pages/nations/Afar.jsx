import React from 'react';
import afarImage from '../../assets/affar.png';
import cultureImage from '../../assets/cultu.png'; // Reuse for culture
import danakilImage from '../../assets/affar.png'; // Placeholder for Danakil
import saltImage from '../../assets/affar.png'; // Salt caravans

const Afar = () => {
  const afarData = {
    name: 'Afar',
    culture: 'Salt Miners of the Danakil - Warriors of the Harshest Earth',
  };

  const sections = [
    {
      title: '1. Danakil Origins',
      content: `Cushitic pastoralists of the Afar Triangle - one of Earth\\'s hottest, lowest points. Ancestors mined salt for 1,000+ years in Danakil Depression. Survived 49°C heat, active volcanoes, acid lakes through resilience. Traditional territory spans Ethiopia, Eritrea, Djibouti.`,
      imgSrc: afarImage,
      color: 'orange'
    },
    {
      title: '2. Afar Language',
content: `Afar ("Afaraf") - Eastern Cushitic language with 2M speakers. Unique click consonants, rich oral poetry tradition. Uses Arabic script traditionally. Strong oral storytelling preserves genealogy, camel lore, salt caravan epics.`

      imgSrc: cultureImage,
      color: 'amber'
    },
    {
      title: '3. Salt Caravans',
      content: `Legendary 40km camel trains carry 30-40kg salt blocks from Dallol/Danakil mines to market. 500+ camels per caravan led by Afar scouts. Blocks hand-chiseled from 200m thick salt crust. UNESCO-recognized cultural practice sustaining economy for centuries.`,
      imgSrc: saltImage,
      color: 'yellow'
    },
    {
      title: '4. Warrior Culture',
      content: `Fierce reputation as desert warriors. Traditional spear-throwers protecting caravan routes from bandits. Gerba (headrest pillows) double as weapons. Women warriors historically fought alongside men. Strong clan-based honor code.`,
      imgSrc: afarImage,
      color: 'stone'
    },
    {
      title: '5. Dallol Volcanoes',
      content: `Live beside Earth\\'s hottest continuously inhabited land. Dallol volcano (116m below sea level) produces psychedelic acid pools, salt pillars. Karum salt plain mined by hand. Afar guides lead tourists through extreme terrain yearly.`,
      imgSrc: danakilImage,
      color: 'rose'
    },
    {
      title: '6. Afambo Festivals',
      content: `Annual Afambo festival celebrates camel culture with races, traditional wrestling, poetry contests. Women wear intricate silver jewelry (berende). Goatskin water containers, wooden milk containers central to daily life.`,
      imgSrc: cultureImage,
      color: 'emerald'
    },
    {
      title: '7. Legendary Resilience',
      content: `Survival masters of hyper-arid environment (25mm annual rain). Ingenious water-finding, camel milk nutrition. Rassa National Park protects Afar biodiversity (cheetah, gazelle). Climate change threatens traditional migration routes.`,
      imgSrc: afarImage,
      color: 'gray'
    }
  ];

  const getBgClass = (color) => {
    const bgClasses = {
      orange: 'bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200',
      amber: 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-200',
      yellow: 'bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 border-yellow-200',
      stone: 'bg-gradient-to-br from-stone-400/10 to-stone-500/10 border-stone-200',
      rose: 'bg-gradient-to-br from-rose-500/10 to-rose-600/10 border-rose-200',
      emerald: 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-200',
      gray: 'bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-200'
    };
    return bgClasses[color] || bgClasses.orange;
  };

  const getTextClass = (color) => {
    const textClasses = {
      orange: 'bg-gradient-to-r from-orange-800 to-orange-900 bg-clip-text text-transparent border-orange-400',
      amber: 'bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent border-amber-400',
      yellow: 'bg-gradient-to-r from-yellow-800 to-yellow-900 bg-clip-text text-transparent border-yellow-400',
      stone: 'bg-gradient-to-r from-stone-700 to-stone-800 bg-clip-text text-transparent border-stone-400',
      rose: 'bg-gradient-to-r from-rose-800 to-rose-900 bg-clip-text text-transparent border-rose-400',
      emerald: 'bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent border-emerald-400',
      gray: 'bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent border-gray-400'
    };
    return textClasses[color] || textClasses.orange;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Hero */}
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">AFAR</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl">{afarData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4 font-serif">"{afarData.culture}"</p>
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

      {/* CTA */}
      <div className="text-center mt-20">
        <a href="/" className="inline-block px-12 py-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xl font-bold rounded-3xl hover:shadow-orange-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Afar;
