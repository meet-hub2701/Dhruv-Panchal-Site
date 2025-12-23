import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Specialities', href: '#specialities' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSelect, setActiveSelect] = useState('HOME');
    const [scrolled, setScrolled] = useState(false);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    // Removed TS type annotation for ref
    const itemRefs = useRef({});

    // Handle Scroll for background styling and Scroll Spy
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Scroll Spy Logic
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const matchingItem = navItems.find(item => item.href === `#${id}`);
                    if (matchingItem) {
                        setActiveSelect(matchingItem.label);
                    }
                }
            });
        }, observerOptions);

        navItems.forEach(item => {
            const id = item.href.substring(1);
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    // Update Pill Position
    useEffect(() => {
        const activeElement = itemRefs.current[activeSelect];
        if (activeElement) {
            setPillStyle({
                left: activeElement.offsetLeft,
                width: activeElement.offsetWidth,
                opacity: 1
            });
        }
    }, [activeSelect]);

    const handleNavClick = (label, href) => {
        setActiveSelect(label);
        setIsOpen(false);
    };

    return (
        <>
            {/* Logo - Fixed Top Left */}
            <div className="hidden xl:block fixed top-8 left-12 z-50">
                <div
                    className="font-marker text-2xl tracking-wider transition-colors duration-300"
                    style={{ color: '#FFC107' }}
                >
                    BONJOUR
                </div>
            </div>

            {/* Desktop Floating Pill Navbar */}
            <nav
                className={`hidden xl:flex fixed top-8 left-1/2 -translate-x-1/2 z-50 items-center gap-1 rounded-full px-2 py-2 shadow-2xl transition-all duration-300 ring-1 opacity-80 hover:opacity-100 backdrop-blur-xl
        ${isDarkMode
                        ? 'bg-[#1a1a1a]/60 ring-white/10'
                        : 'bg-white/60 ring-black/5'
                    }`}
            >
                {/* Sliding Pill Background */}
                <div
                    className={`absolute h-[calc(100%-16px)] top-2 rounded-full transition-all duration-300 ease-out shadow-lg
            ${isDarkMode ? 'bg-white' : 'bg-[#0F172A]'}`}
                    style={{
                        left: pillStyle.left,
                        width: pillStyle.width,
                        opacity: pillStyle.opacity
                    }}
                />

                {navItems.map((item) => (
                    <a
                        key={item.label}
                        ref={(el) => { itemRefs.current[item.label] = el; }}
                        href={item.href}
                        onClick={() => handleNavClick(item.label, item.href)}
                        className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200
              ${activeSelect === item.label
                                ? (isDarkMode ? 'text-black' : 'text-white')
                                : (isDarkMode ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-800')
                            }
            `}
                    >
                        {item.label}
                    </a>
                ))}

                <div className={`w-[1px] h-6 mx-2 ${isDarkMode ? 'bg-white/20' : 'bg-black/10'}`}></div>

                {/* Resume Icon */}
                <a
                    href="/Dhruv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors z-10 ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`}
                    aria-label="Resume"
                    title="Resume"
                >
                    <FileText size={18} />
                </a>

                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-colors z-10 ${isDarkMode ? 'text-yellow-400 hover:bg-white/10' : 'text-gray-600 hover:bg-black/5'}`}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </nav>

            {/* Mobile Navbar (Standard Fixed Top) */}
            <nav className={`xl:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-colors duration-300 ${isDarkMode ? 'bg-dark/90 backdrop-blur-md border-b border-white/5' : 'bg-white/90 backdrop-blur-md border-b border-black/5'}`}>
                <div
                    className="font-marker text-xl tracking-wider transition-colors duration-300"
                    style={{ color: '#FFC107' }}
                >
                    BONJOUR
                </div>
                <div className="flex items-center gap-4">
                    {/* Mobile Resume Icon */}
                    <a
                        href="/Dhruv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-black'}`}
                        aria-label="Resume"
                    >
                        <FileText size={20} />
                    </a>

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400' : 'text-gray-600'}`}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                        className="relative w-8 h-8 flex items-center justify-center p-0"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <X size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Menu size={24} className={isDarkMode ? 'text-white' : 'text-black'} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`absolute top-full left-0 w-full py-8 px-6 flex flex-col gap-6 shadow-xl border-t ${isDarkMode ? 'bg-dark border-white/10' : 'bg-white border-black/5'}`}
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.label, item.href)}
                                    className={`text-lg font-medium tracking-wide text-center ${activeSelect === item.label ? 'text-primary' : (isDarkMode ? 'text-white' : 'text-black')}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};
