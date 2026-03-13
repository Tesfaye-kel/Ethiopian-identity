import React from 'react';

const Afar = () => {
  const afarData = {
    name: 'Afar',
    image: 'https://images.unsplash.com/photo-1578632354576-5d5fbea98581?w=800',
    origin: 'Cushitic pastoralists of the harsh Danakil Depression and Red Sea coast.',
    language: 'Afar',
    culture: 'Camel herders and salt miners of the Afar Triangle.',
    location: 'Afar Region (northeastern Ethiopia, Danakil Desert).',
  };

  return (
    <div className="nation-page max-w-4xl mx-auto py-12 px-4 font-serif">
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={afarData.image} 
          alt={`A cultural representation of the ${afarData.name} people`} 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-stone-800 uppercase">{afarData.name}</h1>
        <p className="text-lg md:text-xl text-stone-600 italic mt-2">"{afarData.culture}"</p>
      </header>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-base md:text-lg">
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Origin</h2>
          <p className="text-stone-700 leading-relaxed">{afarData.origin}</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Language</h2>
          <p className="text-stone-700 leading-relaxed">The primary language is <strong>{afarData.language}</strong>.</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Geographic Region</h2>
          <p className="text-stone-700 leading-relaxed">Primarily located in the <strong>{afarData.location}</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Afar;

