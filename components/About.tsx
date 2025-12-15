import React from 'react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  /*
  // OLD IMPLEMENTATION
  const skills = ['Figma', 'Illustrator', 'Photoshop', 'Adobe XD', 'Sketch'];

  return (
    <section 
      id="about" 
      className={`relative w-full py-20 px-6 md:px-24 transition-colors duration-500 flex flex-col md:flex-row items-center justify-center gap-16 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      // ... (old code) ...
    </section>
  );
  */

  return (
    <section 
      id="about" 
      className={`relative w-full py-24 px-6 md:px-24 flex justify-center items-center overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      <div className={`relative w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-8 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
        
        {/* Left Image */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0">
          <img 
            src="/images/about/Dhruv-image.png" 
            alt="Dhruv Panchal" 
            className="w-full h-full object-cover grayscale" 
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start z-10">
          <h3 className="text-[#8262FF] text-xl font-normal tracking-wide mb-2 uppercase">
            The Author
          </h3>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Dhruv Panchal
          </h2>
          <p className={`text-base font-light leading-relaxed max-w-sm mb-8 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
            Detail-oriented team player with strong organizational skills. 
            Ability to handle multiple projects simultaneously with a high 
            degree of accuracy.
          </p>
          
          {/* Signature Placeholder - Since no image was provided, using a script font or simple text for now */}
          {/* <img src="/path/to/signature.png" alt="Signature" className="h-16" /> */}
        </div>

        {/* Vertical Text - Absolute Positioned */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none">
          <span 
            className="block text-[120px] font-bold text-[#DBDBDB]/30 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
          >
            AUTHOR
          </span>
        </div>

      </div>
    </section>
  );
};