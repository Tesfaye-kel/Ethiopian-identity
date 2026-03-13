import React from 'react';

const Gumuz = () => {
  const gumuzData = {
    name: 'B. Gumuz',
    image: 'https://images.unsplash.com/photo-1558618047-b17a8049da89?w=800',
    origin: 'Hunter-gatherers and small-scale farmers from northwestern Ethiopia.',
    language: 'Gumuz',
    culture: 'Traditional hunter-gatherers with unique musical traditions.',
    location: 'Benishangul-Gumuz Region (northwestern Ethiopia).',
  };

  return (
    <div className="nation-page max-w-4xl mx-auto py-12 px-4 font-serif">
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={gumuzData.image} 
          alt={`A cultural representation of the ${gumuzData.name} people`} 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-stone-800 uppercase">{gumuzData.name}</h1>
        <p className="text-lg md:text-xl text-stone-600 italic mt-2">"{gumuzData.culture}"</p>
      </header>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-base md:text-lg">
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Origin</h2>
          <p className="text-stone-700 leading-relaxed">{gumuzData.origin}</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Language</h2>
          <p className="text-stone-700 leading-relaxed">The primary language is <strong>{gumuzData.language}</strong>.</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Geographic Region</h2>
          <p className="text-stone-700 leading-relaxed">Primarily located in the <strong>{gumuzData.location}</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Gumuz;

