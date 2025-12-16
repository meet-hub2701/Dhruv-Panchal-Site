import React, { useState, useEffect } from 'react';
import { Instagram, Figma, Twitter } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Frontend Developer", "Fullstack Developer", "Jamstack Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section 
      id="home" 
      className={`relative w-full min-h-[100dvh] md:min-h-[815px] flex flex-col justify-center items-center overflow-hidden transition-colors duration-500 pt-20 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      {/* Social Icons - Mobile: Bottom Row, Desktop: Left Column */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:left-16 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-8 z-20"
      >
        <a href="https://x.com" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <Twitter size={24} />
        </a>
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
      <div 
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:block"
      >
        <div className={`rotate-90 origin-center whitespace-nowrap tracking-[0.3em] text-xs font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Fullstack Developer
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center z-10">
        <div 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 border-4 border-transparent shadow-2xl"
        >
          <img 
            src="/images/home/Dhruv-image.png" 
            alt="Dhruv Panchal" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 
          className="font-marker text-4xl md:text-6xl text-primary mb-4 text-center"
        >
          Dhruv Panchal
        </h1>
        
        <p 
          className={`text-xl md:text-2xl font-light h-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
        >
          I am a <span className="font-semibold text-primary">{text}</span>
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
};