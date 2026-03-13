import React from 'react';

const Oromo = () => {
  return (
    <div className="h-screen w-screen fixed inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50 text-slate-900 font-serif antialiased overflow-hidden">
      {/* Parallax Hero */}
      <section className="h-screen relative flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 to-amber-900/40" />
        <div className="relative z-20 w-full max-w-6xl mx-auto p-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
            Oromia
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-loose max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-2xl">
            The heartbeat of Ethiopia – largest ethnic group with ancient Gadaa democracy, legendary warriors, Olympic champions, and unbreakable spirit.
          </p>
        </div>
      </section>

      {/* Gadaa Democracy - Full Width */}
      <section className="h-screen flex items-center justify-between px-8 py-20 bg-gradient-to-r from-slate-900/90 to-stone-900/90 text-white">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-widest bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Gadaa System
            </h2>
            <p className="text-xl md:text-2xl leading-loose mb-12 max-w-lg opacity-95">
              World's most sophisticated indigenous democracy. 500+ years of peaceful power rotation through age-sets. UNESCO World Heritage.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">⚖️</div>
                <h4 className="text-2xl font-bold uppercase mb-2">8-Year Cycles</h4>
                <p>Leadership rotates every 8 years</p>
              </div>
              <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">⭕</div>
                <h4 className="text-2xl font-bold uppercase mb-2">Peaceful Transfer</h4>
                <p>No violence - community consensus</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl lg:rotate-3 hover:rotate-0 transition-all">
            <img src="https://images.unsplash.com/photo-1621346655624-12d42f47a6fb?w=800" className="w-full h-full object-cover" alt="Gadaa ceremony" />
          </div>
        </div>
      </section>

      {/* Timeline Cards */}
      <section className="h-screen bg-emerald-50/50 py-20 px-8 flex items-center">
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { year: '16th C', title: 'Great Expansion', desc: 'Oromo migrate across Ethiopia', color: 'bg-orange-500' },
            { year: '18th C', title: 'Kingdoms Rise', desc: 'Jimma, Limmu-Ennarea powerhouses', color: 'bg-emerald-500' },
            { year: '1889', title: 'Menelik Era', desc: 'Oromia joins Ethiopian Empire', color: 'bg-blue-500' },
            { year: '1936', title: 'Abebe Bikila', desc: 'First barefoot Olympic marathon gold', color: 'bg-amber-500' },
            { year: '2016', title: 'UNESCO Honor', desc: 'Gadaa system World Heritage', color: 'bg-purple-500' },
            { year: '2024', title: '40M+ Strong', desc: 'Largest Ethiopian ethnic group', color: 'bg-rose-500' }
          ].map((item, i) => (
            <div key={i} className={`group p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all bg-white/70 backdrop-blur-xl border border-white/50 ${item.color} shadow-lg hover:shadow-${item.color.slice(4)}/25`}>
              <div className="text-3xl md:text-4xl font-black text-white mb-4">{item.year}</div>
              <h4 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">{item.title}</h4>
              <p className="text-lg text-slate-100 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Showcase */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-emerald-900/30" />
        <div className="relative z-10 h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-20 items-center">
          {[
            { title: 'Irreecha', desc: 'Massive thanksgiving festival', img: 'https://images.unsplash.com/photo-1578632354576-5d5fbea98581?w=400' },
            { title: 'Afaan Oromoo', desc: 'Cushitic language of millions', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
            { title: 'Gadaa Democracy', desc: 'Ancient political genius', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400' },
            { title: 'Clan Heritage', desc: 'Complex social organization', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
            { title: 'Geerarsa', desc: 'Epic oral literature', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400' },
            { title: 'Siqqee', desc: 'Women\'s rights institution', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400' }
          ].map((item, i) => (
            <div key={i} className="group relative h-80 rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-all">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-lg text-slate-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call */}
      <footer className="h-screen bg-gradient-to-br from-stone-900 via-slate-900 to-black flex items-center justify-center px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif italic mb-12 bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">
            Nagaa dhaaraa Oromiyaa
          </h2>
          <p className="text-2xl md:text-3xl text-slate-300 mb-8 leading-loose max-w-3xl mx-auto">
            Peace endures Oromia – from ancient Gadaa to modern Ethiopia, the Oromo spirit defines a nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xl font-bold rounded-full hover:shadow-emerald-500/50 shadow-2xl hover:scale-105 transition-all hover:from-emerald-500">
              Explore More Nations
            </button>
            <button className="px-12 py-6 border-4 border-white/50 text-white text-xl font-bold rounded-full hover:bg-white/20 backdrop-blur-xl transition-all hover:shadow-white/25 hover:scale-105">
              Learn Gadaa Deeply
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Oromo;

