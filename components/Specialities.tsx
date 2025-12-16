import React from 'react';
import { Palette, Code, Layers } from 'lucide-react';

interface SpecialitiesProps {
  isDarkMode: boolean;
}

export const Specialities: React.FC<SpecialitiesProps> = ({ isDarkMode }) => {
  const specialities = [
    {
      title: "UI/UX Design",
      description: "I design interfaces that feel right. It's not just about looking good; it's about creating a smooth, logical flow that users actually enjoy navigating.",
      icon: <Palette size={40} className="mb-4 text-primary" />,
    },
    {
      title: "Frontend Dev",
      description: "I bring designs to life with clean, efficient code. Fast loading, responsive on any screen, and buttery smooth animations are my standard.",
      icon: <Code size={40} className="mb-4 text-primary" />,
    },
    {
      title: "Fullstack Solutions",
      description: "Need more than just a pretty face? I build the heavy-lifting logic behind the scenes, ensuring your app works as seamlessly as it looks.",
      icon: <Layers size={40} className="mb-4 text-primary" />,
    }
  ];

  return (
    <section 
      id="specialities" 
      className={`relative w-full py-20 px-6 md:px-24 transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className={`h-[2px] w-[50px] md:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
          <h2 className={`font-sans text-3xl md:text-4xl font-bold tracking-widest uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Specialities
          </h2>
          <div className={`h-[2px] w-[50px] md:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {specialities.map((item, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center
                ${isDarkMode 
                  ? 'bg-[#1a1a1a] hover:bg-[#252525] border border-white/5' 
                  : 'bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl'
                }`}
            >
              <div className={`p-4 rounded-full mb-6 ${isDarkMode ? 'bg-white/5' : 'bg-primary/10'}`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
