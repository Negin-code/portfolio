import React from "react";

const GlassIcon = ({ icon: Icon, name, color }) => {
  return (
    <figure className="group" role="listitem">
      <div
        className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-[30px] bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 transition-all duration-300 cursor-pointer"
        role="img"
        aria-labelledby={`icon-${
          name?.toLowerCase().replace(/\s+/g, "-") || "unnamed"
        }`}
      >
        <div
          className="absolute inset-0 rounded-[30px] ring-1 ring-white/30"
          aria-hidden="true"
        ></div>
        <Icon
          style={{ color }}
          className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        />
      </div>
      <figcaption
        id={`icon-${name?.toLowerCase().replace(/\s+/g, "-") || "unnamed"}`}
        style={{ color }}
        className="mt-3 text-sm text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {name || "Unnamed"}
      </figcaption>
    </figure>
  );
};

export default GlassIcon;
