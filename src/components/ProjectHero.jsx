import React from 'react';

const ProjectHero = ({ title, image, imageAlt }) => {
  return (
    <>
      {/* Project Title */}
      <div className="flex flex-row items-start justify-start gap-1 mb-8 pl-0 mt-10 md:mt-0">
        <div className="w-[4vh] sm:w-[4vh] md:w-[5vh] h-[3px] bg-gradient-to-r from-[#493B32] to-[#F75590]"></div>
        <h1 id="top" className="text-xl sm:text-4xl md:text-5xl leading-relaxed font-tan text-[#493B32]">
          {title}
        </h1>
      </div>

      {/* Project Hero Image Container */}
      <div className="w-full mb-8 sm:mb-12 lg:mb-16">
        <div className="relative w-full lg:w-full overflow-hidden bg-[#FFF7F2]">
          {/* Aspect ratio container */}
          <div className="relative w-full h-0 pb-[75%] sm:pb-[65%] md:pb-[55%] lg:pb-[45%]">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Optional gradient overlay for better text visibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHero; 