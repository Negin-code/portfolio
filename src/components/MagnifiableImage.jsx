import React from 'react';

const MagnifiableImage = ({ src, alt, caption }) => {
  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Caption */}
      {caption && (
        <p className="mt-2 text-xs sm:text-sm text-[#493B32]/70 text-center">
          {caption}
        </p>
      )}
    </div>
  );
};

export default MagnifiableImage;
