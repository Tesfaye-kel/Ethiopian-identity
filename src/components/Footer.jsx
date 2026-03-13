import React from 'react';

function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ethiopian Identity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

