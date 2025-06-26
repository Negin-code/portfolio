import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";

const MagnifiableImage = ({ src, alt, caption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div 
        className="w-full overflow-hidden rounded-lg cursor-zoom-in group"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Zoom Icon Overlay */}
        <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <IoMdSearch className="text-[#493B32] text-lg sm:text-xl" />
        </div>
      </div>
      
      {/* Caption */}
      {caption && (
        <p className="mt-2 text-xs sm:text-sm text-[#493B32]/70 text-center">
          {caption}
        </p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-[95vw] max-h-[90vh]">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            {caption && (
              <p className="text-white text-center mt-2 text-xs sm:text-sm">
                {caption}
              </p>
            )}
            <button
              className="absolute -top-2 -right-2 sm:top-4 sm:right-4 bg-white/90 p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 text-[#493B32]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagnifiableImage;
