import React from 'react';
import amharaImage from '../../assets/amar.png';
import cultureImage from '../../assets/cultu.png';
import ethioImage from '../../assets/ethio.png';

const Amhara = () => {
  const amharaData = {
    name: 'Amhara',
    culture: 'Guardians of the Highlands - Cradle of Ethiopian Civilization',
  };

  const sections = [
    {
      title: '1. Ancient Origins',
      content: `Semitic peoples from northern highlands with roots tracing to the Kingdom of Aksum (1st-10th century AD). 
      Descendants of the Christian Solomonic Dynasty claiming lineage from King Solomon and Queen of Sheba. 
      Ge'ez script birthplace.`,
      imgSrc: amharaImage,
      color: 'amber'
    },
    {
      title: '2. Amharic Language',
      content: `Amharic - Ethiopia's federal working language spoken by 30+ million. World's 2nd most spoken Semitic language after Arabic. 
      Rich Ge'ez literature tradition (religious texts, poetry, chronicles). Fidels (syllabary) from 9th century.`,
      imgSrc: cultureImage,
      color: 'stone'
    },
    {
      title: '3. Highland Culture',
      content: `Famous for Shemma (handwoven white cotton garments). Fuga blacksmith/jewelry craftsmen caste. 
      Traditional music with masenqo 1-string fiddle, krar lyre, washint flute. Azmari minstrels preserve oral history through poetry/song. 
      Teff injera + kitfo cuisine.`,
      imgSrc: cultureImage,
      color: 'gray'
    },
    {
      title: '4. Imperial Glory',
      content: `Birthplace of Emperors: Tewodros II (modernizer, defeated British at Magdala), Yohannes IV (Dervish fighter), 
      Menelik II (Adwa 1896 victory creating modern Ethiopia). Gondar "Ethiopian Camelot" 17-19th century imperial capital.`,
      imgSrc: ethioImage,
      color: 'rose'
    },
    {
      title: '5. Sacred Festivals',
      content: `Timkat (Epiphany) - dramatic replicas of Ark of Covenant paraded through streets with priestly blessings. 
      Meskel (Finding True Cross) massive bonfires. Genna Christmas hockey on horseback. Fasts 180+ days/year (vegan cuisine perfected).`,
      imgSrc: cultureImage,
      color: 'emerald'
    },
    {
      title: '6. Legendary Figures',
      content: `Athletes: Kebede Tessema (football "father"), Hirut Dikebo, marathon greats from high-altitude training. 
      Scholars: Taddese Beyene linguist. Musicians: Tilahun Gessesse (Golden Voice). Empress Zewditu (1st female ruler).`,
      imgSrc: amharaImage,
      color: 'blue'
    },
    {
      title: '7. UNESCO Highlands',
      content: `Lalibela 11 rock-hewn churches ("New Jerusalem"). Simien Mountains National Park (gelada baboons, ibex). 
      Lake Tana monasteries (Beta Maryam). Gondar castle complex. Blue Nile Falls (Tis Issat). Gojjam tej honey wine.`,
      imgSrc: ethioImage,
      color: 'violet'
    }
  ];

  const getBgClass = (color) => {
    const bgClasses = {
      amber: 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-200',
      stone: 'bg-gradient-to-br from-stone-400/10 to-stone-500/10 border-stone-200',
      gray: 'bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-200',
      rose: 'bg-gradient-to-br from-rose-500/10 to-rose-600/10 border-rose-200',
      emerald: 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-200',
      blue: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200',
      violet: 'bg-gradient-to-br from-violet-500/10 to-purple-600/10 border-violet-200'
    };
    return bgClasses[color] || bgClasses.amber;
  };

  const getTextClass = (color) => {
    const textClasses = {
      amber: 'bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent border-amber-400',
      stone: 'bg-gradient-to-r from-stone-700 to-stone-800 bg-clip-text text-transparent border-stone-400',
      gray: 'bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent border-gray-400',
      rose: 'bg-gradient-to-r from-rose-800 to-rose-900 bg-clip-text text-transparent border-rose-400',
      emerald: 'bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent border-emerald-400',
      blue: 'bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent border-blue-400',
      violet: 'bg-gradient-to-r from-violet-800 to-purple-900 bg-clip-text text-transparent border-violet-400'
    };
    return textClasses[color] || textClasses.amber;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-amber-50 to-stone-100">
      {/* Hero */}
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-amber-400 via-stone-500 to-amber-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">AMHARA</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-amber-600 to-stone-600 bg-clip-text text-transparent drop-shadow-2xl">{amharaData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4 font-serif">"{amharaData.culture}"</p>
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
                  e.target.src = `https://via.placeholder.com/700x450?text=${section.title.replace(/[^\w]/g, '')}`; 
                }}
              />
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a href="/" className="inline-block px-12 py-6 bg-gradient-to-r from-amber-600 to-stone-600 text-white text-xl font-bold rounded-3xl hover:shadow-amber-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Amhara;
