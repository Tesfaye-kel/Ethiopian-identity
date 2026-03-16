import React from 'react';
import oromoimage from '../../assets/oro.png'; 
import cultureimage from '../../assets/irrecha.png'; 
import actvistimage from '../../assets/hachalu.png';
import bilileimage from '../../assets/bilile.png';

const Oromo = () => {
  const oromoData = {
    name: 'Oromo',
    culture: 'Land of Gadaa Democracy - Heartbeat of Ethiopia',
  };

  const sections = [
    { title: '1. Origin', content: 'The Oromo people are the largest ethnic group in Ethiopia (40+ million), originating from the Bale Mountains in the 16th century. Through the Great Oromo Migration, they expanded across southern, central, western, and eastern Ethiopia, establishing powerful kingdoms like Jimma Abba Jifar and Leqa Naqamte.', imgSrc: oromoimage, color: 'emerald' },
    { title: '2. Gadaa System', content: 'Gadaa is the most sophisticated indigenous democratic system in the world (UNESCO Heritage). Age-grade leadership rotates every 8 years peacefully through community consensus. No kings - power through elected Abba Gadaa (president) and council.', imgSrc: 'GADAA_IMAGE_URL', color: 'emerald' },
    { title: '3. Culture', content: 'Rich Afaan Oromoo language (Cushitic). Oromo culture is anchored by the Gadaa system, an ancient indigenous democratic governance structure that orchestrates social, political, and economic life through eight-year leadership cycles and promotes the philosophy of Nagaa Oromoo (communal peace).', imgSrc: cultureimage, color: 'amber' },
    { title: '4. Activists & Politicians', content: 'The Oromo people have a long history of heroes who fought bravely for their land, rights, and freedom. Leaders like General Waqo Gutu resisted colonial oppression, while Mamo Meqdasi was among the first to represent Oromo voices in parliament. Hachalu Hundessa music symbol.', imgSrc: actvistimage, color: 'blue' },
    { title: '5. Olympic Glory', content: 'Legendary runners: Abebe Bikila (barefoot 1960 Rome gold, 1964 Tokyo), Miruts Yifter ("Baby Face" 1980 double gold), Derartu Tulu (first African woman 10k gold 1992). From Oromia highlands.', imgSrc: 'OLYMPIC_IMAGE_URL', color: 'orange' },
    { title: '6. Famous Oromo Legends', content: 'Famous Oromo: Haile Gebreselassie (4x Olympic gold), Tilahun Gessese (legendary singer), Mohammed Hussein (poet), Queen of Sheba legends connect to Daamuu clans.', imgSrc: 'LEGENDS_IMAGE_URL', color: 'rose' },
    { title: '7. Bilile - Freedom Fighter', content: 'Bilile was a brave Oromo freedom fighter who fought against oppression. Born early 20th century, legendary for courage leading resistance against colonial forces. Inspires Oromo women warriors.', imgSrc: bilileimage, color: 'violet' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-amber-50 to-emerald-50">
      {/* Hero */}
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-emerald-400 to-amber-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">OROMO</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl">{oromoData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4">"{oromoData.culture}"</p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {sections.map((section, i) => (
          <section key={i} className="grid md:grid-cols-2 gap-8 items-center mb-[-3.5rem] md:mb-[-4.5rem] relative">
            <div className={`p-8 md:p-12 rounded-3xl shadow-2xl min-h-[300px] flex items-center border-4
              ${section.color === 'violet' ? 'bg-gradient-to-br from-violet-500/10 to-purple-600/10 border-violet-200' : 
                section.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-200' : 
                section.color === 'amber' ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-200' : 
                section.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200' : 
                section.color === 'orange' ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200' : 
                'bg-gradient-to-br from-rose-500/10 to-rose-600/10 border-rose-200'}`}>

              <div>
                <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-widest mb-6 pb-2 border-b-2
                  ${section.color === 'violet' ? 'bg-gradient-to-r from-violet-800 to-purple-900 bg-clip-text text-transparent border-violet-400' : 
                    section.color === 'emerald' ? 'bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent border-emerald-400' : 
                    section.color === 'amber' ? 'bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent border-amber-400' : 
                    section.color === 'blue' ? 'bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent border-blue-400' : 
                    section.color === 'orange' ? 'bg-gradient-to-r from-orange-800 to-orange-900 bg-clip-text text-transparent border-orange-400' : 
                    'bg-gradient-to-r from-rose-800 to-rose-900 bg-clip-text text-transparent border-rose-400'}`}>{section.title}</h2>
                <p className="text-lg md:text-xl leading-relaxed text-stone-800 line-clamp-6">{section.content}</p>
              </div>
            </div>
            <div className="h-[300px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl relative -mr-12 md:-mr-16 lg:-mr-20 z-10 border-4 border-white">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:rotate-1"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/700x450?text=' + section.title.replace(/[^\w]/g, ''); }}
              />
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a href="/ethnic-groups" className="inline-block px-12 py-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xl font-bold rounded-3xl hover:shadow-emerald-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
          ← Explore Other Nations
        </a>
      </div>
    </div>
  ); 
};

export default Oromo;

