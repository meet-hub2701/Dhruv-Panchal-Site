import React from 'react';


export const Contact = ({ isDarkMode }) => {

    return (
        <>
            <section
                id="contact"
                className={`relative w-full pt-12 pb-20 lg:pt-24 lg:pb-52 px-6 md:px-12 emd:px-20 lg:px-24 transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
            >
                <div className="flex items-center justify-center gap-4 mb-16">
                    <div className={`h-[2px] w-[50px] lg:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                    <h2 className={`font-sans text-3xl lg:text-4xl font-bold tracking-widest uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        Contact
                    </h2>
                    <div className={`h-[2px] w-[50px] lg:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                </div>

                {/* Unified Contact Card */}
                <div className={`max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] lg:shadow-[0_0_80px_rgba(255,193,7,0.05)] border transition-all duration-500 hover:shadow-[0_0_100px_rgba(255,193,7,0.1)] ${isDarkMode ? 'bg-[#1a1a1a] border-white/5' : 'bg-white border-gray-200'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left: Content & Profile (Swapped to Left) */}
                        <div className="flex flex-col justify-center p-8 lg:p-16">
                            <h3 className="font-marker text-4xl lg:text-5xl text-primary mb-6">
                                Let's Work
                            </h3>
                            <p className={`text-base lg:text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                It's important to have a brand that represents you and what you stand for.
                                That's why I'm committed to helping you create a website that truly represents you,
                                resonates with your audience, and makes a real difference.
                            </p>


                        </div>

                        {/* Right: Calendly (Swapped to Right) */}
                        <div className="w-full h-[600px] lg:h-[600px] relative">
                            <iframe
                                src={`https://calendly.com/imdhruv-dev/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=FFC107${isDarkMode ? '&background_color=1a1a1a&text_color=ffffff' : '&background_color=ffffff&text_color=000000'}`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Schedule a meeting"
                                className="w-full h-full"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-primary py-12 px-6 flex flex-col items-center justify-center gap-6">
                <ul className="flex gap-6 lg:gap-12 flex-wrap justify-center">
                    {['HOME', 'ABOUT', 'SPECIALITIES', 'PORTFOLIO', 'RESUME', 'CONTACT'].map((item) => {
                        const isResume = item === 'RESUME';
                        const href = isResume ? '/Dhruv.pdf' : `#${item.toLowerCase()}`;

                        return (
                            <li key={item}>
                                <a
                                    href={href}
                                    target={isResume ? "_blank" : undefined}
                                    rel={isResume ? "noopener noreferrer" : undefined}
                                    className="text-black text-sm font-medium hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <h2 className="font-marker text-4xl text-black mt-4">
                    Dhruv Panchal
                </h2>

                <p className="text-black/60 text-xs mt-4">
                    &copy; Copyright by Dhruv Panchal {new Date().getFullYear()}
                </p>
            </footer>
        </>
    );
};
