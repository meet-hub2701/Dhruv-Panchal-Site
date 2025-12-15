import React from 'react';
import { NavItem } from '../types';
import { Moon, Sun } from 'lucide-react';

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
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center transition-colors duration-300">
      <div className="text-primary font-marker text-2xl tracking-wider">
        BIELAVIN
      </div>
      
      <div className="flex items-center gap-8">
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
      </div>
    </nav>
  );
};