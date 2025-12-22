import React, { useState } from 'react';

export const Portfolio = ({ isDarkMode }) => {
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
        : []; // Projects only visible in 'ALL' for now

    return (
        <section
            id="portfolio"
            className={`relative w-full py-12 lg:py-24 px-6 lg:px-24 transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
        >
            {/* Header */}
            <div
                className="flex items-center justify-center gap-4 mb-8"
            >
                <div className={`h-[2px] w-[50px] lg:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <h2 className={`font-sans text-3xl lg:text-4xl font-bold tracking-widest ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    PORTFOLIO
                </h2>
                <div className={`h-[2px] w-[50px] lg:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
            </div>

            {/* Category Tabs */}
            <div
                className="flex justify-center gap-4 mb-12"
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => cat === 'ALL' && setActiveCategory(cat)}
                        className={`text-sm lg:text-base font-sans font-medium tracking-wide transition-colors ${activeCategory === cat
                            ? 'text-primary cursor-default'
                            : cat === 'ALL'
                                ? isDarkMode ? 'text-gray-400 hover:text-white cursor-pointer' : 'text-gray-600 hover:text-black cursor-pointer'
                                : isDarkMode ? 'text-gray-600 cursor-default' : 'text-gray-400 cursor-default'
                            }`}
                    >
                        {cat}
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
        </section>
    );
};
