import React from 'react';
import nnpHero from '../../assets/nnp.png'; 
import cultureImage from '../../assets/cultu.png';

const Nnp = () => {
  const nnpData = {
    name: 'SNNPR',
    shortDesc: 'A vibrant ethnic mosaic of over 50 nations, where ancient terraced mountains meet the birthplace of wild coffee and the unique architecture of the Rift Valley.',
    culture: 'Cradle of Diversity - 50+ Nations in Harmony',
  };

  const sections = [
    {
      title: 'Ethnic Mosaic',
      content: "Ethiopia's most diverse region is home to 56 ethnic groups, including the Wolayta, Gamo, and Gurage. This 'Museum of Peoples' preserves a rich tapestry of distinct languages, traditional dress, and social structures found nowhere else on earth.",
      imgSrc: nnpHero,
      color: 'violet'
    },
    {
      title: 'Konso Terraces',
      content: "The Konso Cultural Landscape is a UNESCO World Heritage site featuring stone-walled terraces that have protected the soil for over 400 years. These engineering marvels demonstrate the community's ancient bond with the rugged highlands.",
      // Image of agricultural terracing
      imgSrc: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop', 
      color: 'indigo'
    },
    {
      title: 'Coffee Birthplace',
      content: "Deep within the Kaffa Zone lies the wild origin of Arabica coffee. Legend tells of Kaldi the goat herder discovering the bean here, sparking a global culture that still honors the traditional Ethiopian coffee ceremony.",
      // High-quality coffee bean/plant image
      imgSrc: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop', 
      color: 'amber'
    },
    {
      title: 'Dorze Beehives',
      content: "The Dorze people are famous for their remarkable 'beehive' houses, woven from bamboo and elephant grass. These structures can stand 12 meters tall and are ingeniously designed to be moved when termites attack the base.",
      // Image representing unique woven architecture
      imgSrc: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop', 
      color: 'emerald'
    },
    {
      title: 'The Rift Valley Lakes',
      content: "Lakes Chamo and Abaya provide a stunning backdrop for Arbaminch. This biodiversity hotspot is home to 'crocodile markets' and hippos, where the water levels change the landscape of the Great Rift Valley daily.",
      // Image of an African Rift Valley lake
      imgSrc: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1200&auto=format&fit=crop', 
      color: 'blue'
    },
    {
      title: 'Gurage Ingenuity',
      content: "The Gurage people are known for their intensive Enset (false banana) cultivation and communal work ethic. Their unique circular homes and rich polyphonic music are central pillars of Southern Ethiopian culture.",
      imgSrc: cultureImage,
      color: 'purple'
    }
  ];

  const getColorTheme = (color) => {
    const themes = {
      violet: 'bg-[#2e1065] text-violet-50', // Deep Violet
      purple: 'bg-[#4c1d95] text-purple-50', // Royal Purple
      indigo: 'bg-[#1e1b4b] text-indigo-50', // Midnight Indigo
      amber: 'bg-[#451a03] text-amber-50',  // Deep Earth Amber
      emerald: 'bg-[#064e3b] text-emerald-50', // Forest Green
      blue: 'bg-[#172554] text-blue-50',   // Deep Sea Blue
    };
    return themes[color] || themes.violet;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-violet-200">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden group">
        <img 
          src={nnpHero} 
          alt="Southern Ethiopian Landscape" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
          <span className="text-white/70 tracking-[0.5em] uppercase text-sm mb-4 block animate-pulse font-serif">
            The Cradle of Diversity
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter transition-all duration-700 group-hover:tracking-normal font-serif">
            {nnpData.name}
          </h1>
          
          <p className="max-w-2xl text-xl md:text-2xl text-white/0 group-hover:text-white/90 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 italic font-light mt-4 font-serif">
            {nnpData.shortDesc}
          </p>
          
          <div className="absolute bottom-10 animate-bounce text-white/40">
            <span className="text-xs tracking-[0.3em] uppercase">Explore the Mosaic</span>
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
                <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2 block font-sans">Mosaic 0{i + 1}</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{section.title}</h2>
                <div className="h-1 w-16 bg-violet-400 mb-8"></div>
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
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <footer className="py-24 bg-[#fdfaff] text-center px-6 border-t border-violet-100">
        <div className="max-w-3xl mx-auto">
          <div className="h-px w-24 bg-violet-600 mx-auto mb-10" />
          <p className="text-stone-800 font-serif italic text-2xl md:text-3xl leading-relaxed mb-12">
            "{nnpData.culture}"
          </p>
          <a 
            href="/" 
            className="inline-block px-12 py-4 border-2 border-violet-900 text-violet-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-violet-900 hover:text-white transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Nnp;