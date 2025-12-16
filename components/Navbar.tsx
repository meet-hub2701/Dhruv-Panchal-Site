import React, { useState } from 'react';
import { NavItem } from '../types';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 transition-colors duration-300 ${isDarkMode ? 'bg-dark/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="flex justify-between items-center">
        <div className="text-primary font-marker text-2xl tracking-wider">
          BIELAVIN
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-yellow-400' : 'bg-black/5 text-gray-800'}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
            ) : (
              <Menu size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full py-8 px-6 flex flex-col gap-6 shadow-xl transition-colors ${isDarkMode ? 'bg-dark border-t border-white/10' : 'bg-white border-t border-black/5'}`}>
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium tracking-wide text-center hover:text-primary transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};