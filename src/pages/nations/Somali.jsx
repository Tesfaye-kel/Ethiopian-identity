import React from 'react';

const Somali = () => {
  const somaliData = {
    name: 'Somali',
    origin: 'Cushitic pastoralists with a deep history in the Horn of Africa.',
    culture: 'Famous for oral poetry, camel husbandry, and Islamic scholarship.',
    language: 'Somali',
    location: 'Somali Region (Eastern Ethiopia).',
    image: 'https://images.unsplash.com/photo-1617992999558-c756c4634240?q=80&w=800'
  };

  return (
    <div className="nation-page max-w-4xl mx-auto py-12 px-4 font-serif">
      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src={somaliData.image} 
          alt={`A cultural representation of the ${somaliData.name} people`} 
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-black text-stone-800 uppercase">{somaliData.name}</h1>
        <p className="text-xl text-stone-600 italic mt-2">"{somaliData.culture}"</p>
      </header>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 text-lg">
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Origin</h2>
          <p className="text-stone-700 leading-relaxed">{somaliData.origin}</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Language</h2>
          <p className="text-stone-700 leading-relaxed">The primary language is <strong>{somaliData.language}</strong>.</p>
        </div>
        <div className="bg-white p-6 border border-stone-200 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-bold text-stone-800 mb-4 border-b-2 border-amber-600 pb-2">Geographic Region</h2>
          <p className="text-stone-700 leading-relaxed">Primarily located in the <strong>{somaliData.location}</strong>.</p>
        </div>
      </div>

      {/* You can add more sections here, like a photo gallery, famous individuals, etc. */}
      <div className="mt-16 text-center">
        <p className="text-stone-500">This is a starting template. Feel free to modify and expand upon it.</p>
      </div>
    </div>
  );
};

export default Somali;