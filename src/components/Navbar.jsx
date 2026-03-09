import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li><a href="/" className="text-stone-600 hover:text-emerald-700 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4">Home</a></li>
        <li><a href="/history" className="text-stone-600 hover:text-emerald-700 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4">History</a></li>
        <li><a href="/ethnic-groups" className="text-stone-600 hover:text-emerald-700 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4">Ethnic Groups</a></li>
        <li><a href="/culture" className="text-stone-600 hover:text-emerald-700 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4">Culture</a></li>
        <li><a href="/contact" className="text-stone-600 hover:text-emerald-700 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;