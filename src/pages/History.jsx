import React from 'react';
import { Link } from 'react-router-dom';

function History() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            History of Ethiopia
          </h1>
          <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto">
            Explore thousands of years of rich history, from the ancient Aksumite Empire to modern Ethiopia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Timeline Items */}
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold text-sm sm:text-lg">950</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2">Aksumite Empire</h3>
                  <p className="text-stone-600 text-sm sm:text-base">
                    One of the greatest ancient civilizations, known for the obelisks, coinage, and trade networks connecting Rome, Persia, and India.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-sm sm:text-lg">1270</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2">Zagwe Dynasty</h3>
                  <p className="text-stone-600 text-sm sm:text-base">
                    Known for the rock-hewn churches of Lalibela, a UNESCO World Heritage site and one of the wonders of the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm sm:text-lg">1889</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2">Menelik II Era</h3>
                  <p className="text-stone-600 text-sm sm:text-base">
                    Ethiopia defeated Italy at the Battle of Adwa in 1896, becoming the only African nation to resist European colonization.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm sm:text-lg">1974</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2">Derg Regime</h3>
                  <p className="text-stone-600 text-sm sm:text-base">
                    A period of significant political change that led to the fall of the monarchy and eventually the EPRDF era.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm sm:text-lg">1995</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-2">Federal Constitution</h3>
                  <p className="text-stone-600 text-sm sm:text-base">
                    Ethiopia adopted a new federal constitution granting autonomy to ethnic regions and establishing a multi-party system.
                  </p>
                </div>
              </div>
            </div>
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

export default History;

