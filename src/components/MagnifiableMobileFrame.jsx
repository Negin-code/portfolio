import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const MagnifiableMobileFrame = ({ children, caption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Frame Container */}
      <div
        className="relative group cursor-zoom-in"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Phone Frame */}
        <div className="w-[240px] md:w-[280px] h-[480px] md:h-[560px] mx-auto relative">
          <div className="absolute inset-0 bg-[#F75590] rounded-[45px] md:rounded-[55px] p-4 shadow-xl">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95px] md:w-[126px] h-[26px] md:h-[35px] bg-[#F75590] rounded-b-[18px] md:rounded-b-[24px] flex items-center justify-center">
              <div className="w-[68px] md:w-[90px] h-[18px] md:h-[24px] bg-black rounded-[15px] md:rounded-[20px] flex items-center">
                <div className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] rounded-full bg-[#1a1a1a] ml-2"></div>
                <div className="w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-full bg-[#1a1a1a] ml-2"></div>
                <div className="w-[30px] md:w-[40px] h-[3px] md:h-[4px] rounded-full bg-[#1a1a1a] ml-2"></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="absolute top-[83px] md:top-[110px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
            <div className="absolute top-[143px] md:top-[190px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
            <div className="absolute top-[180px] md:top-[240px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
            <div className="absolute top-[98px] md:top-[130px] -right-[2px] w-[3px] md:w-[4px] h-[38px] md:h-[50px] bg-[#2a2a2a] rounded-r-full"></div>

            {/* Screen Content */}
            <div className="relative w-full h-full bg-white rounded-[38px] md:rounded-[48px] overflow-hidden">
              {children}
            </div>
          </div>
        </div>

        {/* Zoom Icon Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <IoMdSearch className="text-[#493B32] text-xl" />
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <p className="text-sm text-[#493B32]/80 mt-2 text-center italic">
          {caption}
        </p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* Larger Mobile Frame in Modal */}
            <div className="w-[320px] md:w-[375px] h-[640px] md:h-[750px] relative">
              <div className="absolute inset-0 bg-[#F75590] rounded-[55px] p-4 shadow-xl">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[35px] bg-[#F75590] rounded-b-[24px] flex items-center justify-center">
                  <div className="w-[90px] h-[24px] bg-black rounded-[20px] flex items-center">
                    <div className="w-[12px] h-[12px] rounded-full bg-[#1a1a1a] ml-2"></div>
                    <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a] ml-2"></div>
                    <div className="w-[40px] h-[4px] rounded-full bg-[#1a1a1a] ml-2"></div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="absolute top-[110px] -left-[2px] w-[4px] h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                <div className="absolute top-[190px] -left-[2px] w-[4px] h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                <div className="absolute top-[240px] -left-[2px] w-[4px] h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                <div className="absolute top-[130px] -right-[2px] w-[4px] h-[50px] bg-[#2a2a2a] rounded-r-full"></div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden">
                  {children}
                </div>
              </div>
            </div>

            {/* Caption in Modal */}
            {caption && (
              <p className="text-white text-center mt-4 italic">{caption}</p>
            )}

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
            >
              <svg
                className="w-6 h-6 text-[#493B32]"
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

export default MagnifiableMobileFrame; 