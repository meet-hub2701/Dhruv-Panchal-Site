import React from 'react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const skills = ['Figma', 'Illustrator', 'Photoshop', 'Adobe XD', 'Sketch'];

  return (
    <section 
      id="about" 
      className={`relative w-full py-20 px-6 md:px-24 transition-colors duration-500 flex flex-col md:flex-row items-center justify-center gap-16 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      {/* Left Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-xl">
           <img 
            src="/images/about/About-image.jpg" 
            alt="About Me" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <div>
            <div className="flex items-center gap-4 mb-2">
                <h2 className={`text-3xl font-medium tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>
                ABOUT
                </h2>
                <div className={`h-0.5 w-16 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
            </div>
            
            <h3 className="font-marker text-4xl text-primary mb-6">
                Dhruv Panchal
            </h3>
            
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Detail-oriented team player with strong organizational skills.
                Ability to handle multiple projects simultaneously with a high
                degree of accuracy.
            </p>
        </div>

        <div className="mt-8">
            <div className="flex items-center gap-4 mb-6">
                <h2 className={`text-3xl font-medium tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>
                SKILLS
                </h2>
                <div className={`h-0.5 w-16 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-primary block"></span>
                        <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};