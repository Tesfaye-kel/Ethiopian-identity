import React from 'react';

function EthnicCard({ name, description, imageUrl, onClick }) {
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
      <div className="ethnic-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden flex flex-col cursor-pointer" onClick={handleClick}>
      <img src={imageUrl} alt={`Image of ${name}`} className="w-full h-40 md:h-48 object-cover" />
      <div className="p-4 md:p-6 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-2 md:mb-3 group-hover:text-emerald-700 transition-colors">{name}</h3>
        <p className="text-stone-600 leading-relaxed flex-grow text-sm md:text-base">{description}</p>
<button className="text-emerald-600 hover:text-emerald-800 font-semibold mt-3 md:mt-4 self-start text-sm md:text-base bg-transparent border-none cursor-pointer p-0 text-left">
          Read More &rarr;
        </button>
      </div>
    </div>
  );
}

export default EthnicCard;

