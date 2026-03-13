import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ethioFlag from '../assets/ethio.png';
import oroFlag from '../assets/oro.png';
import amarFlag from '../assets/amar.png';
import tigFlag from '../assets/tig.png';
import somFlag from '../assets/som.png';
import affarFlag from '../assets/affar.png';
import nnpFlag from '../assets/nnp.png';
import gabFlag from '../assets/gab.png';
import gumuzFlag from '../assets/gumuz.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const flags = [
    { name: 'Home', id: 'ethio', path: '/', image: ethioFlag },
    { name: 'Oromia', id: 'oro', path: '/nations/oro', image: oroFlag },
    { name: 'Amhara', id: 'amar', path: '/nations/amhara', image: amarFlag },
    { name: 'Tigray', id: 'tig', path: '/nations/tigrayan', image: tigFlag },
    { name: 'Somali', id: 'som', path: '/nations/somali', image: somFlag },
    { name: 'Afar', id: 'affar', path: '/nations/affar', image: affarFlag },
    { name: 'SNNPR', id: 'nnp', path: '/nations/nnp', image: nnpFlag },
    { name: 'Gambela', id: 'gab', path: '/nations/gab', image: gabFlag },
    { name: 'B. Gumuz', id: 'gumuz', path: '/nations/gumuz', image: gumuzFlag },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="flex items-center gap-4">
      {/* Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-1 text-emerald-700 hover:text-emerald-900 rounded transition-colors"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Flags Row - Scrollable */}
      <div className="hidden md:flex items-center gap-2 lg:gap-3 overflow-x-auto scrollbar-hide pb-2 mx-4 lg:mx-6 flex-nowrap">
        {flags.map((flag) => (
          <Link
            key={flag.id}
            to={flag.path}
            className="flex flex-col items-center flex-shrink-0 px-2 py-1.5 hover:bg-emerald-50 rounded-lg transition-all duration-200 hover:-translate-y-1 group"
            onClick={closeMenu}
          >
            {flag.id === 'ethio' ? (
              <img
                src={flag.image}
                alt={flag.name}
                className="w-10 h-8 object-cover rounded shadow-md"
              />
            ) : (
              <img
                src={flag.image}
                alt={flag.name}
                className="w-8 h-6 object-cover rounded shadow-sm hover:shadow-lg"
              />
            )}
            <span className="text-xs text-stone-600 mt-1.5 whitespace-nowrap group-hover:text-stone-800">{flag.name}</span>
          </Link>
        ))}
      </div>

      {/* Desktop Contact */}
      <Link
        to="/contact"
        className="hidden md:block ml-auto px-4 py-1.5 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors"
      >
        Contact
      </Link>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border py-4 px-2 z-50">
        <div className="grid grid-cols-3 gap-4 mb-6 p-2">
            {flags.map((flag) => (
              <Link
                key={flag.id}
                to={flag.path}
                className="flex flex-col items-center p-2 hover:bg-emerald-50 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                <img src={flag.image} alt={flag.name} className="w-10 h-7 object-cover rounded" />
                <span className="text-xs text-stone-600 mt-1">{flag.name}</span>
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="flex items-center justify-center p-3 bg-emerald-50 border-t border-stone-100 hover:bg-emerald-100 rounded-b-lg transition-colors"
            onClick={closeMenu}
          >
            <span className="text-emerald-700 font-medium">Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

