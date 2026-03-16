import React from 'react';
import { Link } from 'react-router-dom';

const ethnicGroups = [
  { id: 'ethio', name: 'Ethiopia', flag: 'ethio', color: 'bg-emerald-600' },
  { id: 'oro', name: 'Oromo', flag: 'oro', color: 'bg-blue-600' },
  { id: 'amar', name: 'Amhara', flag: 'amar', color: 'bg-red-600' },
  { id: 'tig', name: 'Tigray', flag: 'tig', color: 'bg-purple-600' },
  { id: 'som', name: 'Somali', flag: 'som', color: 'bg-cyan-600' },
  { id: 'affar', name: 'Afar', flag: 'affar', color: 'bg-amber-600' },
  { id: 'nnp', name: 'SNNPR', flag: 'nnp', color: 'bg-green-600' },
  { id: 'gab', name: 'Gambela', flag: 'gab', color: 'bg-pink-600' },
  { id: 'gumuz', name: 'B. Gumuz', flag: 'gumuz', color: 'bg-orange-600' },
];

const EthnicGroups = () => {
  return (
     <div className="min-h-screen bg-stone-50 text-stone-800 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mb-3 sm:mb-4">
            Ethnic Groups of Ethiopia
          </h1>
          <p className="text-stone-600 text-sm sm:text-lg max-w-2xl mx-auto">
            Ethiopia is home to over 80 ethnic groups, each with unique traditions, languages, and cultures.
          </p>
        </div>

        {/* Ethnic Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ethnicGroups.map((group) => (
            <Link 
              key={group.id}
              to={group.id === 'ethio' ? '/nations/ethiopia' : `/nations/${group.id}`}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Flag Placeholder */}
                <div className={`h-24 sm:h-32 ${group.color} flex items-center justify-center`}>
                  <span className="text-white text-3xl sm:text-4xl font-bold">{group.name.charAt(0)}</span>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 group-hover:text-emerald-600 transition-colors">
                    {group.name}
                  </h3>
                  <p className="text-stone-500 text-sm mt-2">
                    Click to learn more about the {group.name} people.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8 sm:mt-12">
          <Link 
            to="/" 
            className="inline-block px-6 sm:px-8 py-3 bg-stone-800 text-white font-medium rounded-full hover:bg-emerald-600 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EthnicGroups;

