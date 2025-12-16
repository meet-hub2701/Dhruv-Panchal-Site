import React from 'react';
import { Instagram, Figma } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="home" 
      className={`relative w-full min-h-[815px] flex flex-col justify-center items-center overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      {/* Left Social Icons */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        <a href="https://www.figma.com" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <Figma size={24} />
        </a>
        <a href="https://www.instagram.com" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <Instagram size={24} />
        </a>
        <a href="https://www.behance.net" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
           <span className="font-bold text-xl">Bē</span>
        </a>
      </div>

      {/* Right Vertical Text */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:block">
        <div className={`rotate-90 origin-center whitespace-nowrap tracking-[0.3em] text-xs font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          WEB DESIGNER
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center z-10 animate-fade-in-up">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 border-4 border-transparent shadow-2xl">
          <img 
            src="/images/home/Dhruv-image.png" 
            alt="Dhruv Panchal" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="font-marker text-4xl md:text-6xl text-primary mb-4 text-center">
          Dhruv Panchal
        </h1>
        
        <p className={`text-xl md:text-2xl font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          I am a UI/UX Designer
        </p>
      </div>
    </section>
  );
};