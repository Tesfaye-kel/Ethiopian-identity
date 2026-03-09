import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-stone-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-emerald-800 tracking-tight">Ethiopian Identity</h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;