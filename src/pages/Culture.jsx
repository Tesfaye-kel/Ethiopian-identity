import React from 'react';
import { Link } from 'react-router-dom';

function Culture() {
  const traditions = [
    { title: 'Coffee Ceremony', description: 'The traditional Ethiopian coffee ceremony is a symbol of hospitality and friendship.' },
    { title: 'Timket', description: 'The Ethiopian Orthodox celebration of Epiphany, featuring colorful processions and sprinklings of holy water.' },
    { title: 'Irreechaa', description: 'The Oromo people\'s thanksgiving festival, celebrating harvest and unity.' },
    { title: 'Meskel', description: 'The Finding of the True Cross, marked by bonfires and dancing.' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Culture of Ethiopia
          </h1>
          <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto">
            Discover the rich traditions, festivals, and customs that make Ethiopian culture unique.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6">
            {traditions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 text-center">
            <Link 
              to="/ethnic-groups" 
              className="inline-block px-6 sm:px-8 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors duration-300"
            >
              Explore Ethnic Groups
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Culture;

