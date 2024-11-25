import React, { useState } from 'react';

export function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full p-4">
      <div className="mx-auto w-[90%] flex items-center justify-between">
        <p className="font-gochi font-bold text-3xl">Vishal Bharti</p>
        
        {/* Hamburger menu for mobile */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex font-nunito font-normal">
          <a href="" className="px-4">Home</a>
          <a href="" className="px-4">About us</a>
          <a href="" className="px-4">Infrastructure</a>
          <a href="" className="px-4">Admission</a>
          <a href="" className="px-4">Academics</a>
          <a href="" className="px-4">Activities</a>
          <a href="" className="px-4">Contact us</a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 font-nunito font-normal">
          <a href="" className="block py-2 px-4">Home</a>
          <a href="" className="block py-2 px-4">About us</a>
          <a href="" className="block py-2 px-4">Infrastructure</a>
          <a href="" className="block py-2 px-4">Admission</a>
          <a href="" className="block py-2 px-4">Academics</a>
          <a href="" className="block py-2 px-4">Activities</a>
          <a href="" className="block py-2 px-4">Contact us</a>
        </div>
      )}
    </div>
  );
}

