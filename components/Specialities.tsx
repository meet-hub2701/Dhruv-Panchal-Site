import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Info, { InfoType } from "./Info";

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

const infoData: InfoType = {
  INFO_TITLE: "Specialities",
  INFO_DESC: "I love building websites that are fast, intuitive, and visually stunning. My expertise spans the entire stack—from crafting pixel-perfect interfaces with React and Next.js to architecting robust backends using Node.js and scalable databases. I focus on cleaner code, optimize performance, and reliable digital experiences.",
  INFO_NUMBER: "(02)",
};

interface SpecialitiesProps {
  isDarkMode: boolean;
}

export const Specialities: React.FC<SpecialitiesProps> = ({ isDarkMode }) => {
  // Duplicate images for seamless loop
  const seamlessImages = [...sliderImages, ...sliderImages];

  return (
    <section
      id="specialities"
      className={`relative py-12 md:py-24 overflow-hidden ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
    >
      <div className="w-full container mx-auto mb-16">
        <Info infoData={infoData} isDarkMode={isDarkMode} />
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-7 will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {seamlessImages.map((imgPath, index) => (
            <div
              key={`${imgPath}-${index}`}
              className={`
                group relative
                w-[200px] sm:w-[250px] md:w-[353px] 
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
      </div>
    </section>
  );
};

