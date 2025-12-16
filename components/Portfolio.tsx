import React, { useState } from 'react';

interface PortfolioProps {
  isDarkMode: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
  // Project data with assigned categories
  const projects = [
    { id: 1, category: 'UI/UX' },
    { id: 2, category: 'GRAPHIC DESIGN' },
    { id: 3, category: 'UI/UX' },
    { id: 4, category: 'GRAPHIC DESIGN' },
    { id: 5, category: 'UI/UX' },
    { id: 6, category: 'GRAPHIC DESIGN' },
    { id: 7, category: 'UI/UX' },
    { id: 8, category: 'GRAPHIC DESIGN' },
  ];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'UI/UX', 'GRAPHIC DESIGN'];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      className={`relative w-full py-24 px-6 md:px-24 transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className={`text-4xl font-sans text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          PORTFOLIO
        </h2>
        <div className={`h-[2px] w-[70px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-12 mb-12 flex-wrap">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative text-base font-sans tracking-wide transition-colors
              ${isDarkMode ? 'text-white' : 'text-black'}
              ${activeCategory === category ? 'font-medium' : 'font-normal hover:opacity-70'}
            `}
          >
            {category}
            {activeCategory === category && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[25px] h-[3px] bg-[#FFB800]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative w-full aspect-[4/3] bg-gray-200 overflow-hidden cursor-pointer">
            <img 
              src={`/images/portfolio/P-${project.id}.jpg`} 
              alt={`Project ${project.id}`}
              className="w-full h-full object-cover"
            />
            {project.id === 8 ? (
              /* Last item: Permanent overlay + Plus icon */
              <div className="absolute inset-0 bg-[#252525]/65 flex items-center justify-center">
                 <div className="relative w-10 h-10">
                    <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#FFB800] -translate-y-1/2"></div>
                    <div className="absolute top-0 left-1/2 h-full w-[4px] bg-[#FFB800] -translate-x-1/2"></div>
                 </div>
              </div>
            ) : (
              /* Other items: Hover overlay + "View Project" text */
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[#FFC107] font-marker text-2xl">View Project</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-16">
        <button className="w-2 h-2 rounded-full bg-[#FFB800]"></button>
        <button className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white/25' : 'bg-black/25'}`}></button>
        <button className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-white/25' : 'bg-black/25'}`}></button>
      </div>
    </section>
  );
};