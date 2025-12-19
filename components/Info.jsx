import React from 'react';

const Info = ({ infoData, isDarkMode = false }) => {
    return (
        <div className="flex flex-col items-center mb-16 px-4 lg:px-0 text-center">
            {/* Standardized Header */}
            <div className="flex items-center gap-2 esm:gap-4 mb-8 lg:mb-12">
                <div className={`h-[2px] w-[20px] esm:w-[50px] lg:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <h2 className={`font-sans text-2xl esm:text-3xl lg:text-5xl font-bold tracking-widest uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {infoData.INFO_TITLE}
                </h2>
                <div className={`h-[2px] w-[20px] esm:w-[50px] lg:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
            </div>

            <div
                className={`max-w-4xl text-lg lg:text-xl font-light leading-relaxed space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                dangerouslySetInnerHTML={{ __html: infoData.INFO_DESC }}
            />
        </div>
    );
};

export default Info;
