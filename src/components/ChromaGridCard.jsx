import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChromaGridCard = ({
  image,
  imageAlt,
  category,
  title,
  description,
  technologies,
  projectLink,
  index = 0,
  gradientFrom,
  gradientTo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={projectLink}
      className="block group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View ${title} project details`}
    >
      {/* Main card */}
      <article
        className={`
        relative h-full bg-white rounded-xl overflow-hidden transition-all duration-300
        border border-[#493B32]/10 hover:shadow-md
      `}
        role="listitem"
        aria-labelledby={`project-${index}-title`}
      >
        {/* Image container */}
        <figure className="relative h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden bg-[#FFF7F2]">
          <img
            src={image}
            alt={imageAlt}
            className={`w-full h-full object-cover object-center aspect-[4/3] transition-all duration-300 hover:opacity-95 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />

          {/* Subtle gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"
            aria-hidden="true"
          />
        </figure>

        {/* Content */}
        <section className="p-6" aria-labelledby={`project-${index}-title`}>
          {/* Category badge */}
          <span
            className="inline-block text-xs font-medium text-[#493B32]/60 mb-2"
            role="text"
            aria-label={`Project category: ${category}`}
          >
            {category}
          </span>

          {/* Title */}
          <header>
            <h3
              id={`project-${index}-title`}
              className="text-xl font-medium text-[#493B32] mb-2 group-hover:text-[#F75590] transition-colors"
            >
              {title}
            </h3>
          </header>

          {/* Description */}
          <p className="text-sm text-[#493B32]/70 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Technologies */}
          <div role="group" aria-label="Technologies used in this project">
            <ul className="flex flex-wrap gap-2" role="list">
              {technologies.map((tech, idx) => (
                <li key={idx} role="listitem">
                  <span className="px-2 py-1 text-xs rounded-lg bg-[#493B32]/5 text-[#493B32]/80">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default ChromaGridCard;
