import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Info from "./Info";

const sliderImages = [
    "/images/logo/logo1.png",
    "/images/logo/logo2.png",
    "/images/logo/logo3.png",
    "/images/logo/logo4.png",
    "/images/logo/logo5.png",
    "/images/logo/logo6.png",
    "/images/logo/logo7.png",
    "/images/logo/logo8.png",
    "/images/logo/logo9.png",
    "/images/logo/logo10.png",
    "/images/logo/logo11.png",
    "/images/logo/logo12.png",
    "/images/logo/logo13.png",
    "/images/logo/logo14.png",
    "/images/logo/logo15.png",
    "/images/logo/logo16.png",
    "/images/logo/logo17.png",
    "/images/logo/logo18.png",
    "/images/logo/logo19.png",
];

const infoData = {
    INFO_TITLE: "Specialities",
    INFO_DESC: "I love building websites that are fast, intuitive, and visually stunning. My expertise spans the entire stack—from crafting pixel-perfect interfaces with React and Next.js to architecting robust backends using Node.js and scalable databases. I focus on cleaner code, optimize performance, and reliable digital experiences.",
    INFO_NUMBER: "(02)",
};

export const Specialities = ({ isDarkMode }) => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    const [scrollDistance, setScrollDistance] = useState(0);
    const [startOffset, setStartOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const calculateDimensions = () => {
            const width = window.innerWidth;
            setIsMobile(width < 1024);

            if (trackRef.current) {
                const totalWidth = trackRef.current.scrollWidth;
                const scroll = totalWidth - width;
                const buffer = width * 0.05; // Slightly increased buffer

                setScrollDistance(scroll > 0 ? scroll + buffer : 0);
                setStartOffset(width);
            }
        };

        // Initial calculation
        calculateDimensions();

        // ResizeObserver monitors the track content itself (robust against asset loading)
        const resizeObserver = new ResizeObserver(() => {
            calculateDimensions();
        });

        if (trackRef.current) {
            resizeObserver.observe(trackRef.current);
        }

        // Window resize listener
        window.addEventListener("resize", calculateDimensions);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", calculateDimensions);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [startOffset, -scrollDistance]
    );

    const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.97]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["0px", "40px"]);

    const animationStyle = isMobile
        ? {}
        : {
            scale,
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            transformOrigin: "bottom center",
        };

    // Duplicate images for seamless loop on mobile
    const seamlessImages = [...sliderImages, ...sliderImages];

    return (
        <motion.section
            ref={sectionRef}
            id="specialities"
            style={animationStyle}
            className={`relative ${isDarkMode ? 'bg-dark' : 'bg-white'} ${isMobile ? 'h-auto py-12 overflow-hidden' : 'h-[300vh]'}`}
        >
            <div className={`${isMobile ? '' : 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full'}`}>

                <div className="w-full container mx-auto mb-10 md:mb-16 px-4">
                    <Info infoData={infoData} isDarkMode={isDarkMode} />
                </div>

                <div className="w-full">
                    {isMobile ? (
                        /* MOBILE: Infinite Marquee */
                        <div className="flex overflow-hidden">
                            <motion.div
                                className="flex gap-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 20,
                                        ease: "linear",
                                    },
                                }}
                                style={{ width: "fit-content" }}
                            >
                                {seamlessImages.map((imgPath, index) => (
                                    <div
                                        key={`mobile-${index}`}
                                        className={`
                      group relative
                      w-[140px]
                      p-6
                      border rounded-[30px] flex-shrink-0 flex items-center justify-center aspect-square
                      ${isDarkMode
                                                ? 'border-white/5 bg-[#1a1a1a]/40 backdrop-blur-sm'
                                                : 'border-black/5 bg-gray-50/50 backdrop-blur-sm'}
                    `}
                                    >
                                        <img
                                            src={imgPath}
                                            alt={`Technology ${index + 1}`}
                                            className={`
                        w-full h-full object-contain
                        ${isDarkMode
                                                    ? 'brightness-0 invert opacity-60'
                                                    : 'brightness-0 opacity-60'}
                      `}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    ) : (
                        /* DESKTOP: Scroll Animation */
                        <motion.div
                            ref={trackRef}
                            style={{ x, opacity }}
                            className="flex gap-7 will-change-transform"
                        >
                            {sliderImages.map((imgPath, index) => (
                                <div
                                    key={`desktop-${index}`}
                                    className={`
                    group relative
                    w-[250px] md:w-[353px] 
                    p-10 md:p-14
                    border rounded-[40px] flex-shrink-0 flex items-center justify-center aspect-square
                    transition-all duration-500 ease-out
                    ${isDarkMode
                                            ? 'border-white/5 bg-[#1a1a1a]/40 backdrop-blur-sm hover:bg-[#1a1a1a]/80 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,193,7,0.1)]'
                                            : 'border-black/5 bg-gray-50/50 backdrop-blur-sm hover:bg-white hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,193,7,0.15)]'}
                  `}
                                >
                                    <img
                                        src={imgPath}
                                        alt={`Technology ${index + 1}`}
                                        className={`
                      w-full h-full object-contain transition-all duration-500 
                      ${isDarkMode
                                                ? 'brightness-0 invert opacity-60 group-hover:filter-none group-hover:opacity-100'
                                                : 'brightness-0 opacity-60 group-hover:opacity-100'}
                    `}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.section>
    );
};
