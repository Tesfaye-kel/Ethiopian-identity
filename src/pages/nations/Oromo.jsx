import React from 'react';
import oromoimage from '../../assets/oro.png'; 
import cultureimage from '../../assets/irrecha.png'; 


const Oromo = () => {
  const oromoData = {
    name: 'Oromo',
    culture: 'Land of Gadaa Democracy - Heartbeat of Ethiopia',
    origin: `The Oromo people are the largest ethnic group in Ethiopia (40+ million), originating from the Bale Mountains in the 16th century. Through the Great Oromo Migration, they expanded across southern, central, western, and eastern Ethiopia, establishing powerful kingdoms like Jimma Abba Jifar and Leqa Naqamte.`,
    gadaa: `Gadaa is the most sophisticated indigenous democratic system in the world (UNESCO Heritage). Age-grade leadership rotates every 8 years peacefully through community consensus. No kings - power through elected Abba Gadaa (president) and council.`,
    cultureDetail: `Rich Afaan Oromoo language (Cushitic). Oromo culture is anchored by the Gadaa system, an ancient indigenous democratic governance structure that orchestrates social, political, and economic life through eight-year leadership cycles and promotes the philosophy of Nagaa Oromoo (communal peace). This social fabric is strengthened by deep-seated institutions like the Odaa (sycamore tree), which serves as a sacred space for judicial and legislative assemblies, and the Siqqee, a women-led institution that safeguards gender rights and mediates conflict. The heritage is further expressed through diverse culinary traditions, such as Buna Qala (coffee beans sautéed in butter) and Anchoote (a nutritious root crop), alongside a rich oral tradition where history and laws are preserved through Argaa Dhageettii. Together with the vibrant Irreecha festival and the rhythmic sounds of the kebero drum, these elements form a resilient identity centered on harmony, justice, and a profound connection to the land..`,
    activists: `The Oromo people have a long history of heroes who fought bravely for their land, rights, and freedom. Leaders like General Waqo Gutu resisted colonial oppression, while Mamo Meqdasi was among the first to represent Oromo voices in parliament. Many others, including local fighters, community leaders, and activists, gave their lives defending their people and culture. In recent times, Hachalu Hundessa became a symbol of Oromo struggle, using his music and voice to inspire millions and standing for justice until his tragic death.`,
    olympic: `Legendary runners: Abebe Bikila (barefoot 1960 Rome gold, 1964 Tokyo), Miruts Yifter ("Baby Face" 1980 double gold), Derartu Tulu (first African woman 10k gold 1992). From Oromia highlands.`,
    famous: `Famous Oromo: Haile Gebreselassie (4x Olympic gold), Tilahun Gessese (legendary singer), Mohammed Hussein (poet), Queen of Sheba legends connect to Daamuu clans.`,
    bilile: `Bilile was a brave Oromo freedom fighter who fought against oppression. Born in the early 20th century, she became legendary for her courage, leading resistance against colonial forces. Her story inspires Oromo women warriors, symbolizing unbreakable spirit and leadership in struggle for justice.`
  };

  const sections = [
    // Updated line below:
    { title: '1. Origin', content: oromoData.origin, color: 'emerald', imgSrc: oromoimage },
    { title: '2. Gadaa System', content: oromoData.gadaa, color: 'emerald', imgSrc: 'GADAA_IMAGE_URL' },
    { title: '3. Culture', content: oromoData.cultureDetail, color: 'amber', imgSrc: cultureimage },
    { title: '4. Activists & Politicians', content: oromoData.activists, color: 'blue', imgSrc: 'ACTIVISTS_IMAGE_URL' },
    { title: '5. Olympic Glory', content: oromoData.olympic, color: 'orange', imgSrc: 'OLYMPIC_IMAGE_URL' },
    { title: '6. Famous Oromo Legends', content: oromoData.famous, color: 'rose', imgSrc: 'LEGENDS_IMAGE_URL' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-serif bg-gradient-to-br from-amber-50 to-emerald-50">
      {/* Full-width Hero */}
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-emerald-400 to-amber-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-widest drop-shadow-2xl z-10">OROMO</h1>
        </div>
        <div className="text-center mt-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-800 uppercase tracking-widest bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl">{oromoData.name}</h1>
          <p className="text-xl md:text-2xl text-stone-600 italic mt-4">"{oromoData.culture}"</p>
        </div>
      </div>

      <div className="w-full grid gap-12">
        {sections.map((section, i) => (
          <section key={i} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`p-8 rounded-3xl shadow-2xl min-h-[300px] flex items-center border 
              ${section.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-200' : 
                section.color === 'amber' ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-200' : 
                section.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200' : 
                section.color === 'orange' ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200' : 
                'bg-gradient-to-br from-rose-500/10 to-rose-600/10 border-rose-200'}`}>

              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-6 bg-gradient-to-r from-gray-800 to-stone-700 bg-clip-text drop-shadow-lg">{section.title}</h2>
                <p className="text-lg md:text-xl leading-relaxed text-stone-800">{section.content}</p>
              </div>
            </div>
            <div className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
              <img 
                src={section.imgSrc} 
                alt={section.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Coming+Soon'; }}
              />
            </div>
          </section>
        ))}

        {/* 7. Bilile Story */}
        <section className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-200 p-8 rounded-3xl shadow-2xl">
          <div className="min-h-[300px] flex items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-6 bg-gradient-to-r from-violet-800 to-purple-900 bg-clip-text drop-shadow-lg">7. Bilile - Freedom Fighter</h2>
              <p className="text-lg md:text-xl leading-relaxed text-stone-800">{oromoData.bilile}</p>
            </div>
          </div>
          <div className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
            <img 
              src="BILILE_IMAGE_URL" 
              alt="Bilile Oromo Freedom Fighter" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Bilile+Portrait'; }}
            />
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-20">
          <a href="/ethnic-groups" className="inline-block px-12 py-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xl font-bold rounded-3xl hover:shadow-emerald-500/50 shadow-2xl hover:scale-105 transition-all duration-300">
            ← Explore Other Nations
          </a>
        </div>
      </div>
    </div>
  ); 
};

export default Oromo;