import React from 'react';

const Amhara = () => {
  const amharaData = {
    name: 'Amhara',
    origin: 'Semitic origins from the northern and central highlands.',
    culture: 'Rich literary tradition in Ge\'ez and Amharic; known for the "Shemma" hand-woven clothing.',
    language: 'Amharic (the working language of the federal government).',
    location: 'Amhara Region (North and Central Ethiopia).',
    image: 'https://images.unsplash.com/photo-1618829262293-d88b88f89f8a?q=80&w=800'
  };

  return (
    <div className="nation-page max-w-4xl mx-auto py-8 md:py-12 px-4 font-serif">
      {/* Hero Image */}
      <div className="mb-6 md:mb-8">
        <img 
          src={amharaData.image} 
          alt={`A cultural representation of the ${amharaData.name} people`} 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Header */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-stone-800 uppercase">{amharaData.name}</h1>
        <p className="text-base md:text-xl text-stone-600 italic mt-2">"{amharaData.culture}"</p>
      </header>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-base md:text-lg">
        <div className="bg-white p-4 md:p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4 border-b-2 border-amber-600 pb-2">Origin</h2>
          <p className="text-stone-700 leading-relaxed">{amharaData.origin}</p>
        </div>
        <div className="bg-white p-4 md:p-6 border border-stone-200 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4 border-b-2 border-amber-600 pb-2">Language</h2>
          <p className="text-stone-700 leading-relaxed">The primary language is <strong>{amharaData.language}</strong>.</p>
        </div>
        <div className="bg-white p-4 md:p-6 border border-stone-200 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4 border-b-2 border-amber-600 pb-2">Geographic Region</h2>
          <p className="text-stone-700 leading-relaxed">Primarily located in the <strong>{amharaData.location}</strong>.</p>
        </div>
      </div>

      {/* You can add more sections here, like a photo gallery, famous individuals, etc. */}
      <div className="mt-12 md:mt-16 text-center">
        <p className="text-stone-500">This is a starting template. Feel free to modify and expand upon it.</p>
      </div>
    </div>
  );
};

export default Amhara;

