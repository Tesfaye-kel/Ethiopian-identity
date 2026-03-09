import React from 'react';

function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 mt-12">
      <p className="text-center text-sm font-light">&copy; {new Date().getFullYear()} Ethiopia Identity. All rights reserved.</p>
    </footer>
  );
}

export default Footer;