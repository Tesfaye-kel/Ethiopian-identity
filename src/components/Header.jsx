import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ethioFlag from '../assets/ethio.png';
import oroFlag from '../assets/oro.png';
import amarFlag from '../assets/amar.png';
import tigFlag from '../assets/tig.png';
import somFlag from '../assets/som.png';
import affarFlag from '../assets/affar.png'; 
import nnpFlag from '../assets/nnp.png';
import gabFlag from '../assets/gab.png';
import gumuzFlag from '../assets/gumuz.png';

const flags = [
  { name: 'Ethiopia', id: 'ethio', image: ethioFlag },
  { name: 'Oromia', id: 'oro' , image: oroFlag},
  { name: 'Amhara', id: 'amar', image: amarFlag },
  { name: 'Tigray', id: 'tig', image: tigFlag },
  { name: 'Somali', id: 'som', image: somFlag },
  { name: 'Afar', id: 'affar' , image: affarFlag }, 
  { name: 'SNNPR', id: 'nnp', image: nnpFlag },
  { name: 'Gambela', id: 'gab', image: gabFlag },
  { name: 'B. Gumuz', id: 'gumuz', image: gumuzFlag },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled based on the scroll position.
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getFlagSizeClass = (flagId) => {
    if (isScrolled) return 'w-8 h-5';
    return flagId === 'ethio' ? 'w-14 h-9' : 'w-10 h-6';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-stone-100 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled ? 'py-2 shadow-md' : 'py-5 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Title: Shrinks slightly when scrolled */}
      <h1
  className={`font-extrabold text-emerald-800 tracking-tight shrink-0 transition-all duration-300 
  ${isScrolled ? 'text-2xl -mt-1' : 'text-3xl mt-1'}`}
>
  Ethiopian Identity
</h1>
        {/* Flags Container */}
        <div className="flex-1 mx-8 overflow-x-auto max-w-2xl">
          <div className="flex justify-between items-center min-w-max space-x-4">
            {flags.map((flag) => (
              <div key={flag.id} className="flex flex-col items-center">
                <img 
                  src={flag.image} 
                  alt={flag.name} 
                  className={`object-cover rounded shadow-sm transition-all duration-300 ${getFlagSizeClass(flag.id)}`} 
                />
                <span className="text-[10px] italic text-stone-500 mt-1">{flag.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;