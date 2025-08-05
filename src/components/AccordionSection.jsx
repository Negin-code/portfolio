import React from "react";
import { FiPlus } from "react-icons/fi";

const AccordionSection = ({
  title,
  isExpanded,
  onToggle,
  children,
  headingLevel = 2,
  id,
}) => {
  const HeadingTag = `h${headingLevel}`;
  const panelId = id
    ? `${id}-panel`
    : `accordion-panel-${Math.random().toString(36).substr(2, 9)}`;
  const buttonId = id
    ? `${id}-button`
    : `accordion-button-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section className="mr-15 ml-20 lg:mr-0 lg:ml-0 bg-[#FFF7F2] backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden p-4 xs:p-5 sm:p-6 md:p-8">
      <header>
        <HeadingTag className="sr-only">{title}</HeadingTag>
        <button
          id={buttonId}
          onClick={onToggle}
          className="flex justify-between items-center w-full text-left p-1 xs:p-5 sm:p-6 md:p-8"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${title} section`}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="w-[0.2rem] sm:w-1 h-6 sm:h-8 bg-[#493b32] rounded-full"
              aria-hidden="true"
            ></div>
            <span
              className="font-tan text-lg xs:text-lg sm:text-xl font-bold text-[#1a1a1a] group-hover:text-[#493b32] transition-colors duration-200"
              aria-hidden="true"
            >
              {title}
            </span>
          </div>
          <div
            className={`p-1.5 sm:p-2 rounded-full bg-[#5e3f27] group-hover:bg-[#493b32] group-hover:text-white transition-all duration-300 ${
              isExpanded ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <FiPlus
              size={20}
              className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300"
              aria-hidden="true"
            />
          </div>
        </button>
      </header>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isExpanded}
      >
        <div className="pt-6 px-4 pb-4 xs:px-5 xs:pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
