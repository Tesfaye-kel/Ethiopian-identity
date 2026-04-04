import React from 'react';
import tigrayImage from '../../assets/tig.png';
import cultureImage from '../../assets/cultu.png';
import aksumImage from '../../assets/tig.png'; // Aksum obelisk
import churchImage from '../../assets/tig.png'; // Rock churches

const Tigrayan = () => {
  const tigrayanData = {
    name: 'Tigrayan',
    culture: 'Heirs of Aksum - Architects of Rock and Empire',
  };

  const sections = [
    {
      title: '1. Aksumite Legacy',
      content: `Direct descendants of Aksum Kingdom (100BC-940AD) - Africa\\'s first major empire, coin-minting superpower trading ivory, gold with Rome. Queen Gudit legends. Ge\\'ez Christianity from 4th century (earlier than Europe).`,
      imgSrc: aksumImage,
      color: 'blue'
    },
    {
      title: '2. Tigrinya Language',
      content: `Tigrinya (7M speakers) - Semitic language most closely related to Ge\\'ez. World\\'s only intact Ethio-Semitic literary tradition outside Arabic. Fidels (syllabary) preserve 1,700 years religious poetry, chronicles, hagiographies.`,
      imgSrc: cultureImage,
      color: 'teal'
    },
    {
      title: '3. Rock-Hewn Churches',
      content: `12 UNESCO-monumental 12th-century churches carved from single monolithic cliffs (Abi\\'ev Yerusalem). Abuna Yemata Guh requires 30-minute cliff climb. 36 churches total in Tigray. Priests guard ancient manuscripts.`,
      imgSrc: churchImage,
      color: 'indigo'
    },
    {
      title: '4. Adwa Heroes',
      content: `Ras Alula (Emperor Yohannes\\' general defeated Egyptians 1880s). Emperor Yohannes IV fought Mahdists. Battle of Adwa 1896 - Tigrayan warriors crucial to Menelik II victory preserving independence.`,
      imgSrc: tigrayImage,
      color: 'slate'
    },
    {
      title: '5. Debre Damo Monastery',
      content: `Africa\\'s oldest continuously inhabited monastery (477AD). Suspended 2,300m cliff - accessible only by rope. 1,000 monks preserve ancient chants, illuminated manuscripts. No women allowed since founding.`,
      imgSrc: cultureImage,
      color: 'cyan'
    },
    {
      title: '6. Ashenda Festival',
      content: `Pre-Genet (Christmas) festival unique to Tigray. Girls sing/dance carrying green branches symbolizing renewal. Ch\\'agua bread eaten. Community processions with traditional dugu (spirit possession) ceremonies.`,
      imgSrc: tigrayImage,
      color: 'sky'
    },
    {
      title: '7. Gunda Gunde Archive',
      content: `1,000+ ancient Ge\\'ez manuscripts preserved. World-class library of Ethiopian Orthodox theology. Illuminated Gospels rival European medieval art. Digitization preserving knowledge.`,
      imgSrc: aksumImage,
      color: 'gray'
    }
  ];

  const getBgClass = (color) => {
    const bgClasses = {
      blue: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200',
      teal: 'bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-200',
      indigo: 'bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 border-indigo-200',
      slate: 'bg-gradient-to-br from-slate-400/10 to-slate-500/10 border-slate-200',
      cyan: 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border-cyan-200',
      sky: 'bg-gradient-to-br from-sky-500/10 to-sky-600/10 border-sky-200',
      gray: 'bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-200'
    };
    return bgClasses[color] || bgClasses.blue;
  };

  const getTextClass = (color) => {
    const textClasses = {
      blue: 'bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent border-blue-400',
      teal: 'bg-gradient-to-r from-teal-800 to-teal-900 bg-clip-text text-transparent border-teal-400',
      indigo: 'bg-gradient-to-r from-indigo-800 to-indigo-900 bg-clip-text text-transparent border-indigo-400',
      slate: 'bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent border-slate-400',
      cyan: 'bg-gradient-to-r from-cyan-800 to-cyan-900 bg-clip-text text-transparent border-cyan-400',
      sky: 'bg-gradient-to-r from-sky-800 to-sky-900 bg-clip-text text-transparent border-sky-400',
      gray: 'bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent border-gray-400'
    };
    return textClasses[color] || textClasses.blue;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero */}
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-blue-400 to-teal-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">TIGRAYAN</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent drop-shadow-2xl">{tigrayanData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4 font-serif">"{tigrayanData.culture}"</p>
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
        <a href="/" className="inline-block px-12 py-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xl font-bold rounded-3xl hover:shadow-blue-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Tigrayan;
