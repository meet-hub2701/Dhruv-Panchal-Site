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
      className={`relative w-full py-12 md:py-24 px-6 md:px-24 flex justify-center items-center overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      <div className={`relative w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-4 md:p-8 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
        
        {/* Left Image */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0">
          <img 
            src="/images/about/Dhruv-Image.png" 
            alt="Dhruv Panchal" 
            className="w-full h-full object-cover grayscale" 
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start z-10 w-full md:w-auto">
          {/* ABOUT Header */}
          <div className="flex items-center gap-4 mb-2">
            <h3 className={`text-2xl font-normal tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>
              ABOUT
            </h3>
            <div className={`h-[2px] w-[70px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
          </div>

          {/* Name */}
          <h2 className={`font-bold text-[40px] leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Roboto' }}>
            Dhruv Panchal
          </h2>

          {/* Description */}
          <p className={`text-base font-normal leading-relaxed max-w-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>
            With a Master's from GTU, I bridge the gap between logic and creativity. 
            I specialize in Graphic Design and UI/UX, building clean, intuitive interfaces that just work. 
            My focus is simple: modern aesthetics, seamless flows, and designs that truly connect with people.
          </p>
          
          {/* SKILLS Header */}
          <div className="flex items-center gap-4 mb-6">
            <h3 className={`text-2xl font-normal tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>
              SKILLS
            </h3>
            <div className={`h-[2px] w-[70px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
          </div>

          {/* Skills List */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 relative">
             {/* Column 1 */}
             <div className="flex items-center gap-3">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFB800]"></div>
                <span className={`text-base font-normal ${isDarkMode ? 'text-gray-300' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>Figma</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFB800]"></div>
                <span className={`text-base font-normal ${isDarkMode ? 'text-gray-300' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>Adobe XD</span>
             </div>

             {/* Column 2 */}
             <div className="flex items-center gap-3">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFB800]"></div>
                <span className={`text-base font-normal ${isDarkMode ? 'text-gray-300' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>Illustrator</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFB800]"></div>
                <span className={`text-base font-normal ${isDarkMode ? 'text-gray-300' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>Sketch</span>
             </div>

             {/* Column 3 (Wrapping) */}
             <div className="flex items-center gap-3">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFB800]"></div>
                <span className={`text-base font-normal ${isDarkMode ? 'text-gray-300' : 'text-black'}`} style={{ fontFamily: 'Poppins' }}>Photoshop</span>
             </div>
          </div>
        </div>

        {/* Signature - Adjusted Position */}
        <div className="absolute right-6 bottom-16 md:right-16 md:bottom-20 z-20 hidden md:block">
           <img 
             src="/images/about/signature.png" 
             alt="Signature" 
             className={`w-[60px] h-auto object-contain opacity-90 ${isDarkMode ? 'invert' : ''}`}
           />
        </div>

        {/* Vertical Text - Absolute Positioned */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none">
          <span 
            className="block text-[120px] font-bold text-[#DBDBDB80] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(360deg)' }}
          >
            AUTHOR
          </span>
        </div>

      </div>
    </section>
  );
};