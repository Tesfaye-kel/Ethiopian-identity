import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-stone-200
      bg-gradient-to-r from-stone-200/90 via-stone-100/95 to-stone-200/90 backdrop-blur-xl animate-pulse-subtle transition-all duration-500 
      hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-stone-400/30 ${
        isScrolled ? 'py-1.5 shadow-xl shadow-stone-500/40' : 'py-4 shadow-xl shadow-stone-400/30'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-14 lg:h-16 2xl:h-20">

          {/* Logo/Title */}
          <Link to="/" className="no-underline flex-shrink-0">
            <h1
              className={`font-bold text-emerald-800 tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}
            >
              Ethiopian Identity
            </h1>
          </Link>

          {/* Navbar */}
          <div className="flex items-center">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

