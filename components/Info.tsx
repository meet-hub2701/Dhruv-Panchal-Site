import React from 'react';

export interface InfoType {
  INFO_TITLE: string;
  INFO_DESC: string;
  INFO_NUMBER: string;
}

interface InfoProps {
  infoData: InfoType;
  isDarkMode?: boolean;
}

const Info: React.FC<InfoProps> = ({ infoData, isDarkMode = false }) => {
  return (
    <div className="flex flex-col items-center mb-16 px-4 md:px-0 text-center">
      {/* Standardized Header */}
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <div className={`h-[2px] w-[50px] md:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
        <h2 className={`font-sans text-3xl md:text-5xl font-bold tracking-widest uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {infoData.INFO_TITLE}
        </h2>
        <div className={`h-[2px] w-[50px] md:w-[100px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
      </div>

      <div 
        className={`max-w-4xl text-lg md:text-xl font-light leading-relaxed space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
        dangerouslySetInnerHTML={{ __html: infoData.INFO_DESC }}
      />
    </div>
  );
};

export default Info;
