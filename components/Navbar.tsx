import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-black text-white">
  <h1 className="text-2xl font-bold tracking-widest">Ara Style</h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="hover:text-rose-400 transition-colors duration-300">
          Home
        </a>
        <a href="#collections" className="hover:text-rose-400 transition-colors duration-300">
          Collections
        </a>
        <a href="#about" className="hover:text-rose-400 transition-colors duration-300">
          About
        </a>
        <a href="#contact" className="hover:text-rose-400 transition-colors duration-300">
          Contact
        </a>
      </nav>
    </header>
  );
}
