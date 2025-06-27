import React from "react";

const DesignProcessCard = ({ number, title, description }) => {
  return (
    <article
      className="bg-[#FFF7F2] rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 hover:shadow-md transition-shadow duration-200"
      role="listitem"
      aria-labelledby={`process-step-${number}-title`}
    >
      <header className="flex items-center gap-2 xs:gap-3 mb-3 sm:mb-4">
        <div
          className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-[#493b32] rounded-full flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-white font-bold text-sm sm:text-base">
            {number}
          </span>
        </div>
        <h4
          id={`process-step-${number}-title`}
          className="text-base xs:text-lg sm:text-lg font-bold text-[#1a1a1a] leading-tight"
        >
          {title}
        </h4>
      </header>
      <div role="main" aria-labelledby={`process-step-${number}-title`}>
        <p className="text-[#666] text-xs xs:text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default DesignProcessCard;
