import React from 'react';
import { Instagram, Dribbble } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  return (
    <>
      <section 
        id="contact" 
        className={`relative w-full pt-20 pb-40 px-6 md:px-24 transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
      >
        <div className="flex items-center justify-center mb-16">
          <h2 className={`text-3xl font-medium tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>
            CONTACT
          </h2>
          <div className={`h-0.5 w-16 ml-4 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 justify-between max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="lg:w-5/12">
            <h3 className="font-marker text-5xl text-primary mb-8">
              Let's Work
            </h3>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              It's important to have a brand that represents you and what you stand for. 
              That's why I'm committed to helping you create a website that truly represents you, 
              resonates with your audience, and makes a real difference. Together we can create 
              a website that inspires, inspires and makes an impact. Let's do that!
            </p>
            
            <div className="flex gap-6 mt-8">
                <a href="#" className="text-primary hover:text-yellow-500 transition-colors">
                    <Dribbble size={24} />
                </a>
                <a href="#" className="text-primary hover:text-yellow-500 transition-colors">
                    <Instagram size={24} />
                </a>
                <span className="text-primary font-bold text-sm flex items-center">Bē</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2">
            <form className="flex flex-col gap-6">
                <div>
                    <label className={`block mb-2 text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        Name
                    </label>
                    <input 
                        type="text" 
                        placeholder="Write your name here"
                        className="w-full bg-gray-100 p-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                
                <div>
                    <label className={`block mb-2 text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        Email
                    </label>
                    <input 
                        type="email" 
                        placeholder="Write your email here"
                        className="w-full bg-gray-100 p-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label className={`block mb-2 text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        Message
                    </label>
                    <textarea 
                        rows={5}
                        placeholder="Write your message here"
                        className="w-full bg-gray-100 p-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                </div>

                <div className="flex justify-end mt-4">
                    <button 
                        type="button"
                        className="bg-primary text-white font-medium px-12 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-md"
                    >
                        Send
                    </button>
                </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-primary py-12 px-6 flex flex-col items-center justify-center gap-6">
        <ul className="flex gap-6 md:gap-12 flex-wrap justify-center">
            {['HOME', 'ABOUT', 'PORTFOLIO', 'RESUME', 'CONTACT'].map((item) => (
                <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-black text-sm font-medium hover:text-white transition-colors">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
        
        <h2 className="font-marker text-4xl text-black mt-4">
            Dhruv Panchal
        </h2>
        
        <p className="text-black/60 text-xs mt-4">
            Copyright by Nikita Bielavin 2023
        </p>
      </footer>
    </>
  );
};