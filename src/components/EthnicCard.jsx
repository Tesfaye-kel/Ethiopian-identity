import React from 'react';

function EthnicCard({ name, description, imageUrl }) {
  return (
    <div className="ethnic-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden flex flex-col">
      <img src={imageUrl} alt={`Image of ${name}`} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors">{name}</h3>
        <p className="text-stone-600 leading-relaxed flex-grow">{description}</p>
        <a href="#" className="text-emerald-600 hover:text-emerald-800 font-semibold mt-4 self-start">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
}

export default EthnicCard;