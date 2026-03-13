import React from 'react';

const Nnp = () => {
  const nnpData = {
    name: 'SNNPR',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
    origin: 'Diverse ethnic groups from southern Ethiopia\'s highlands and lowlands.',
    language: 'Multiple (Wolayta, Gamo, Dawro and others)',
    culture: 'Rich cultural diversity with hundreds of ethnic groups.',
    location: 'Southern Nations, Nationalities, and Peoples\' Region.',
  };

  return (
    <div className="nation-page max-w-4xl mx-auto py-12 px-4 font-serif">
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={nnpData.image} 
          alt={`A cultural representation of the ${nnpData.name} people`} 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-stone-800 uppercase">{nnpData.name}</h1>
        <p className="text-lg md:text-xl text-stone-600 italic mt-2">"{nnpData.culture}"</p>
      </header>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-base md:text-lg">
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Origin</h2>
          <p className="text-stone-700 leading-relaxed">{nnpData.origin}</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Language</h2>
          <p className="text-stone-700 leading-relaxed">The primary language is <strong>{nnpData.language}</strong>.</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Geographic Region</h2>
          <p className="text-stone-700 leading-relaxed">Primarily located in the <strong>{nnpData.location}</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Nnp;

