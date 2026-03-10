import React from 'react';

const Ethiopia = () => {
  return (
    <div className="nation-page max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
         <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1200&auto=format&fit=crop" 
              alt="Ethiopian landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-7xl font-black text-white uppercase drop-shadow-lg">Ethiopia</h1>
            </div>
         </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-stone-800 mb-6">A Land of Origins</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Ethiopia is a tapestry woven from ancient threads of history, diverse cultures, and breathtaking landscapes. Often called the "Cradle of Humankind," its story is as old as humanity itself. 
            </p>
            <p className="text-stone-600 leading-relaxed">
              From the rock-hewn churches of Lalibela to the vibrant tribes of the Omo Valley, every corner of this nation tells a unique story. This journal is an invitation to explore the soul of Ethiopia—its people, its traditions, and its enduring spirit.
            </p>
          </div>
           <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1580619315624-05e2f559222c?q=80&w=800" alt="Rock-hewn church in Lalibela" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Brief History Section */}
       <section className="bg-stone-100 p-10 rounded-2xl my-16">
          <h3 className="text-3xl font-bold text-stone-800 mb-6 text-center">A Glimpse into History</h3>
          <p className="text-stone-700 leading-relaxed max-w-3xl mx-auto text-center">
            The lands of present-day Ethiopia were home to some of Africa's most powerful kingdoms, like the Aksumite Empire, a major player in global trade. Adopting Christianity in the 4th century, it established one of the world's oldest Christian denominations. The modern ethnic landscape was shaped by centuries of migration, interaction, and settlement across its rugged, mountainous highlands and vast lowlands.
          </p>
        </section>

      {/* You can add more sections here, like major cities, cuisine, etc. */}
      <div className="mt-16 text-center">
        <p className="text-stone-500">This is a starting template for the Ethiopia page. Feel free to modify and expand upon it.</p>
      </div>
    </div>
  );
};

export default Ethiopia;