import React from 'react';
import nnpImage from '../../assets/nnp.png';
import cultureImage from '../../assets/cultu.png';

const Nnp = () => {
  const nnpData = {
    name: 'SNNPR',
    culture: 'Cradle of Diversity - 50+ Nations in Harmony',
  };

  const sections = [
    {
      title: '1. Ethnic Mosaic',
      content: `Ethiopia\\'s most diverse region (56 ethnic groups). Wolayta, Gamo, Dawro, Sidama, Hadiya, Kaffa, Gurage major populations. Each maintains distinct language, dress, cuisine.`,
      imgSrc: nnpImage,
      color: 'violet'
    },
    {
      title: '2. Linguistic Rainbow',
      content: `40+ languages: Omotic (Wolayta, Gamo), Semitic (Gurage), Cushitic (Sidama), Nilo-Saharan. Kaffa - origin of coffee name (buna). UNESCO endangered languages preserved.`,
      imgSrc: cultureImage,
      color: 'purple'
    },
    {
      title: '3. Konso Terraces',
      content: `UNESCO agricultural terraces rival Andes. 7,000+ years continuous farming. Stone-walled villages. Clan genealogies recited 30+ generations.`,
      imgSrc: nnpImage,
      color: 'indigo'
    },
    {
      title: '4. Coffee Birthplace',
      content: `Kaffa Zone - wild arabica origin. Legend of Kaldi goat herder. Shadda (forest coffee) ceremonies. 15M smallholder farmers nationwide from SNNPR roots.`,
      imgSrc: cultureImage,
      color: 'amber'
    },
    {
      title: '5. Dorze Beehives',
content: `Dorze people build elephant grass "beehive" houses (15m tall). Bamboo framework woven tight as palm trees. Vertical houses unique architecture.`
      imgSrc: nnpImage,
      color: 'emerald'
    },
    {
      title: '6. Arbaminch Lakes',
      content: `Chamo, Abaya, Chemo lakes biodiversity hotspot. Crocodile market, hippo pods. Nech Sar National Park plains tribes.`,
      imgSrc: cultureImage,
      color: 'blue'
    },
    {
      title: '7. Traditional Kingdoms',
      content: `Busheftu, Kaffa kingdoms had written constitutions before Europe. Gold trade with Arabia. Queen Bazenna legends.`,
      imgSrc: nnpImage,
      color: 'gray'
    }
  ];

  const getBgClass = (color) => {
    const bgClasses = {
      violet: 'bg-gradient-to-br from-violet-500/10 to-violet-600/10 border-violet-200',
      purple: 'bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-200',
      indigo: 'bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 border-indigo-200',
      amber: 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-200',
      emerald: 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-200',
      blue: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200',
      gray: 'bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-200'
    };
    return bgClasses[color] || bgClasses.violet;
  };

  const getTextClass = (color) => {
    const textClasses = {
      violet: 'bg-gradient-to-r from-violet-800 to-violet-900 bg-clip-text text-transparent border-violet-400',
      purple: 'bg-gradient-to-r from-purple-800 to-purple-900 bg-clip-text text-transparent border-purple-400',
      indigo: 'bg-gradient-to-r from-indigo-800 to-indigo-900 bg-clip-text text-transparent border-indigo-400',
      amber: 'bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent border-amber-400',
      emerald: 'bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent border-emerald-400',
      blue: 'bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent border-blue-400',
      gray: 'bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent border-gray-400'
    };
    return textClasses[color] || textClasses.violet;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-violet-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">SNNPR</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">{nnpData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4 font-serif">"{nnpData.culture}"</p>
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
        <a href="/" className="inline-block px-12 py-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xl font-bold rounded-3xl hover:shadow-violet-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Nnp;
