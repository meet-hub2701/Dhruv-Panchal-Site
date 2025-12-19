import React, { useState, useEffect } from 'react';
import { Instagram, Figma, Twitter } from 'lucide-react';

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
            className={`relative w-full min-h-[100dvh] xl:min-h-[815px] flex flex-col justify-center items-center overflow-hidden transition-colors duration-500 pt-20 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
        >
            {/* Social Icons - Mobile: Bottom Row, Desktop: Left Column */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-auto lg:left-16 lg:top-1/2 lg:-translate-y-1/2 flex flex-row lg:flex-col gap-8 z-20"
            >
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Twitter size={24} />
                </a>
                <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Figma size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <Instagram size={24} />
                </a>
                <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className={`transform hover:scale-110 transition-transform ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <span className="font-bold text-xl">Bē</span>
                </a>
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
                    className="w-64 h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden mb-8 border-4 border-transparent shadow-2xl"
                >
                    <img
                        src="/images/home/Dhruv-image.png"
                        alt="Dhruv Panchal"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1
                    className="font-marker text-3xl sm:text-4xl xl:text-6xl text-primary mb-4 text-center"
                >
                    Dhruv Panchal
                </h1>

                <p
                    className={`text-xl xl:text-2xl font-light h-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
                >
                    I am a <span className="font-semibold text-primary">{text}</span>
                    <span className="animate-pulse">|</span>
                </p>
            </div>
        </section>
    );
};
