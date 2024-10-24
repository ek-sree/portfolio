import React from 'react';

interface NavbarProps {
  scrollToSection: (section: 'home' | 'about' | 'projects' | 'skills' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-700 bg-opacity-80 backdrop-blur-sm">
      <ul className="flex justify-center items-center gap-6 p-4 font-serif text-slate-400">
        {(['home', 'about', 'projects', 'skills', 'contact'] as const).map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className="relative overflow-hidden group"
            >
              <span className="hover:text-slate-300 transition-colors duration-200 capitalize">{section}</span>
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-slate-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
