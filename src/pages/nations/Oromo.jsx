
import React from 'react';

const Oromo = () => {
  return (
    <div className="bg-[#fdfcf8] min-h-screen text-stone-900 font-serif">
      {/* SECTION 1: HERO / COVER */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <h1 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-none z-10">
          Oromia
        </h1>
        <p className="text-xl md:text-2xl mt-4 max-w-2xl font-light italic z-10">
          "The Heart of the Horn: Exploring the cradle of mankind, the birthplace of coffee, and the home of democracy."
        </p>
        {/* [INSERT PHOTO_1: Hero Landscape - e.g., Bale Mountains] */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="INSERT_PHOTO_1_URL" 
            className="w-full h-full object-cover" 
            alt="Hero Background" 
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* SECTION 2: IDENTITY & ORIGINS */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold uppercase border-b-4 border-amber-600 mb-6">Origins</h2>
            <ul className="space-y-4 text-lg leading-relaxed">
              <li><strong>Cradle of Mankind:</strong> Home to some of the oldest human fossils ever discovered.</li>
              <li><strong>Cushitic Roots:</strong> A proud lineage within the Afro-Asiatic family tree.</li>
              <li><strong>Afaan Oromoo:</strong> A powerhouse language, widely spoken across the African continent.</li>
              <li><strong>Waaqeffanna:</strong> Ancient monotheistic belief in Waaqa, the supreme creator.</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            {/* [INSERT PHOTO_2: Cultural Artifact or Portrait] */}
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ra6q1zE4WYSZSOewYclgTJ-zhUqYuS7fjA&s" 
              className="w-full h-[400px] object-cover rounded-sm shadow-2xl" 
              alt="Oromo Culture" 
            />
          </div>
        </div>

        {/* SECTION 3: THE GADAA SYSTEM (Special Feature) */}
        <section className="bg-stone-900 text-stone-100 p-12 rounded-sm mb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6 text-amber-500">The Gadaa System</h2>
              <p className="text-xl leading-relaxed opacity-90">
                Oromia gifted the world one of the oldest democratic governance structures. 
                The Gadaa system organizes society into age-sets, ensuring a peaceful 
                rotation of power every eight years—a prehistoric blueprint for modern democracy.
              </p>
            </div>
            {/* [INSERT PHOTO_3: Gadaa Ceremony or Symbol] */}
            <img 
              src="https://www.ethioeyewitness.com/wp-content/uploads/2024/06/Guji-Oromo-1-936x624-1.webp" 
              className="grayscale hover:grayscale-0 transition duration-500 rounded-lg" 
              alt="Gadaa System" 
            />
          </div>
        </section>

        {/* SECTION 4: GEOGRAPHY & ECONOMY (Three Column Grid) */}
        <h2 className="text-4xl font-bold uppercase text-center mb-12">Landscape & Life</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-6 border border-stone-200 bg-white">
            <h3 className="font-bold text-xl mb-3 text-amber-700">The Breadbasket</h3>
            <p>From fertile highland soil to vast livestock herds, Oromia feeds the nation of Ethiopia.</p>
          </div>
          <div className="p-6 border border-stone-200 bg-white">
            <h3 className="font-bold text-xl mb-3 text-amber-700">Rift Valley Lakes</h3>
            <p>A geological wonder featuring stunning lakes and the powerful Awash River.</p>
          </div>
          <div className="p-6 border border-stone-200 bg-white">
            <h3 className="font-bold text-xl mb-3 text-amber-700">Black Gold</h3>
            <p>Kaffa is the legendary home of Arabica coffee, Oromia's greatest gift to world culture.</p>
          </div>
        </div>

        {/* SECTION 5: CULTURE & LANDMARKS (Magazine Style Layout) */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          <div className="break-inside-avoid bg-stone-100 p-8">
            <h3 className="text-2xl font-bold mb-4">The Irreecha Festival</h3>
            <p>Millions gather at Lake Hora to celebrate thanksgiving, a vibrant display of Oromo unity.</p>
          </div>
          {/* [INSERT PHOTO_4: Irreecha Festival] */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZM4x0VC8TtzKG4Zti471UkjAXoYhW03G0A&s" className="w-full rounded-sm" alt="Irreecha" />
          
          <div className="break-inside-avoid bg-stone-100 p-8">
            <h3 className="text-2xl font-bold mb-4">Natural Wonders</h3>
            <p>Explore the Sof Omar Caves—one of the world's most spectacular underground systems.</p>
          </div>
          {/* [INSERT PHOTO_5: Sof Omar Caves] */}
          <img src="INSERT_PHOTO_5_URL" className="w-full rounded-sm" alt="Sof Omar" />
        </div>

        {/* SECTION 6: THE PEOPLE & ATHLETES */}
        <section className="mt-24 text-center border-t-2 border-stone-200 pt-16">
          <h2 className="text-5xl font-black italic mb-6">"Home of Champions"</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            From the legendary Abebe Bikila to the Dibaba sisters, Oromia’s high-altitude 
            highlands have raised the world's greatest long-distance runners.
          </p>
          {/* [INSERT PHOTO_6: Athletes or Running Track] */}
          <img 
            src="INSERT_PHOTO_6_URL" 
            className="w-full h-80 object-cover rounded-sm grayscale" 
            alt="Champions" 
          />
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-500 py-12 text-center text-sm uppercase tracking-widest">
        Oromia Cultural Portfolio &copy; 2026
      </footer>
    </div>
  );
};

export default Oromo;