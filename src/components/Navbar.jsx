import React from 'react';

function Navbar() {
  return (
    <nav>
      {/* -mt-1 moves the entire list up by 4px */}
      <ul className="flex space-x-6 -mt-1">
        <li>
          <a 
            href="/" 
            className="text-emerald-700 hover:text-emerald-900 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="/history" 
            className="text-emerald-700 hover:text-emerald-900 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4"
          >
            History
          </a>
        </li>
        <li>
          <a 
            href="/culture" 
            className="text-emerald-700 hover:text-emerald-900 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4"
          >
            Culture
          </a>
        </li>
        <li>
          <a 
            href="/contact" 
            className="text-emerald-700 hover:text-emerald-900 font-semibold transition-colors duration-300 hover:underline decoration-2 decoration-emerald-500 underline-offset-4"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;