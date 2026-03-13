import React from 'react';

const Tigrayan = () => {
  const tigrayanData = {
    name: 'Tigrayan',
    origin: 'Descendants of the Aksumite Empire, one of the ancient worlds greatest civilizations.',
    culture: 'Ancient rock-hewn churches and the colorful Ashenda festival.',
    language: 'Tigrinya',
    location: 'Tigray Region (Northern Ethiopia).',
    image: 'https://images.unsplash.com/photo-1580619315624-05e2f559222c?q=80&w=800'
  };

  return (
    <div className="nation-page max-w-4xl mx-auto py-8 md:py-12 px-4 font-serif">
      {/* Hero Image */}
      <div className="mb-6 md:mb-8">
        <img 
          src={tigrayanData.image} 
          alt={`A cultural representation of the ${tigrayanData.name} people`} 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Header */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-stone-800 uppercase">{tigrayanData.name}</h1>
        <p className="text-base md:text-xl text-stone-600 italic mt-2">"{tigrayanData.culture}"</p>
      </header>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-base md:text-lg">
        <div className="bg-white p-4 md:p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4 border-b-2 border-amber-600 pb-2">Origin</h2>
          <p className="text-stone-700 leading-relaxed">{tigrayanData.origin}</p>
        </div>
        <div className="bg-white p-4 md:p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4 border-b-2 border-amber-600 pb-2">Language</h2>
          <p className="text-stone-700 leading-relaxed">The primary language is <strong>{tigrayanData.language}</strong>.</p>
        </div>
        <div className="bg-white p-4 md:p-6 border border-stone-200 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4 border-b-2 border-amber-600 pb-2">Geographic Region</h2>
          <p className="text-stone-700 leading-relaxed">Primarily located in the <strong>{tigrayanData.location}</strong>.</p>
        </div>
      </div>

      {/* You can add more sections here, like a photo gallery, famous individuals, etc. */}
      <div className="mt-12 md:mt-16 text-center">
        <p className="text-stone-500">This is a starting template. Feel free to modify and expand upon it.</p>
      </div>
    </div>
  );
};

export default Tigrayan;

