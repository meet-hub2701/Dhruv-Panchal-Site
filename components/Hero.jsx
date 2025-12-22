import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero = ({ isDarkMode }) => {
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
            className={`relative w-full flex flex-col items-center overflow-hidden transition-colors duration-500 pt-32 lg:pt-48 pb-20 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
        >
            {/* Left Vertical Scroll Indicator */}
            <div
                className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20 hidden lg:flex"
            >
                <div
                    className={`text-xs uppercase tracking-[0.3em] font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                >
                    Scroll Down
                </div>
                <div className={`w-[1px] h-24 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} relative overflow-hidden`}>
                    <motion.div
                        className={`absolute top-0 left-0 w-full h-1/2 ${isDarkMode ? 'bg-white' : 'bg-black'}`}
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Right Vertical Text */}
            <div
                className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block"
            >
                <div className={`rotate-90 origin-center whitespace-nowrap tracking-widest text-sm font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                    Fullstack Developer
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center z-10">
                <div
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mb-8 border-4 border-transparent shadow-2xl"
                >
                    <img
                        src="/images/home/Dhruv-image.png"
                        alt="Dhruv Panchal"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1
                    className="font-marker text-3xl sm:text-4xl lg:text-6xl text-primary mb-4 text-center"
                >
                    Dhruv Panchal
                </h1>

                <p
                    className={`text-xl lg:text-2xl font-light h-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
                >
                    I am a <span className="font-semibold text-primary">{text}</span>
                    <span className="animate-pulse">|</span>
                </p>
            </div>
        </section>
    );
};
