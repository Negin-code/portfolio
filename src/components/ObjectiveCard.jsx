import React from "react";

const ObjectiveCard = ({ number, title, description }) => {
  return (
    <article
      className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group"
      role="listitem"
      aria-labelledby={`objective-${number}-title`}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
          aria-hidden="true"
        >
          <span className="text-2xl font-semibold text-[#493B32]">
            {number}
          </span>
        </div>
        <div className="flex-1">
          <header>
            <h3
              id={`objective-${number}-title`}
              className="text-lg sm:text-xl font-medium text-[#493B32] mb-2"
            >
              {title}
            </h3>
          </header>
          <p className="text-base text-[#493B32]/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ObjectiveCard;
