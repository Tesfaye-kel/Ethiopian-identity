import React from 'react';
import HeroSection from '../components/HeroSection';
import EthnicGroups from './EthnicGroups';

function Home() {
  return (
    <div className="home-page space-y-16">
      <HeroSection />

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop" alt="A woman from the Mursi tribe in Ethiopia" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">A Land of Origins</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Ethiopia is a tapestry woven from ancient threads of history, diverse cultures, and breathtaking landscapes. Often called the "Cradle of Humankind," its story is as old as humanity itself. 
            </p>
            <p className="text-stone-600 leading-relaxed">
              From the rock-hewn churches of Lalibela to the vibrant tribes of the Omo Valley, every corner of this nation tells a unique story. This journal is an invitation to explore the soul of Ethiopia—its people, its traditions, and its enduring spirit.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-stone-100 py-16 rounded-2xl">
        <EthnicGroups/>
      </div>
    </div>
  );
}

export default Home;