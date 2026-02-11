import React from 'react';
import Magnet from './Magnet';

// src/components/ui/Navbar.jsx
const Navbar = ({ t, darkMode, activeSection, scrollToSection }) => {
  return (
    <div className="sticky top-0 z-40 w-full overflow-x-auto no-scrollbar backdrop-blur-md">
      <nav className="flex md:justify-center min-w-max md:min-w-full px-4 py-3 gap-2">
        {t.sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-1.5 text-xs md:text-sm font-mono rounded-full transition-all
              ${activeSection === section.id ? 'bg-cyan-500 text-white' : 'text-slate-500'}`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;