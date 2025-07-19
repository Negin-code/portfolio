import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaClock,
  FaCode,
  FaLink,
  FaTools,
} from "react-icons/fa";
import { IoIosArrowDropupCircle, IoIosArrowRoundBack } from "react-icons/io";
import CrimsonPlateImage from "../assets/CrimsonPlateHero.webp";
import ProjectHero from "../components/ProjectHero";
import { SectionHeading, SubsectionHeading, MediumText, RegularText, Metadata } from "../components/Typography";

const CrimsonPlate = () => {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Decorative elements - purely visual */}
      <div
        className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"
        aria-hidden="true"
      ></div>

      <div
        className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"
        aria-hidden="true"
      ></div>

      {/* Project Content */}
      <article className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 ml-20 lg:ml-10 mr-15 lg:mr-0">
        <ProjectHero
          title="Crimson Plate"
          image={CrimsonPlateImage}
          imageAlt="Crimson Plate Website Preview"
        />

        {/* Project Metadata */}
        <aside
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0"
          aria-label="Project information"
        >
          {/* Project Type */}
          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
                aria-hidden="true"
              >
                <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-[#493B32]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#493B32]/60 mb-1">
                  Project Type
                </h3>
                <p className="text-lg sm:text-xl font-medium text-[#493B32]">
                  Front End
                </p>
                <p className="text-sm text-[#493B32]/80 mt-1">
                  Restaurant Website
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
                aria-hidden="true"
              >
                <FaCode className="w-5 h-5 sm:w-6 sm:h-6 text-[#493B32]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#493B32]/60 mb-1">
                  Tech Stack
                </h3>
                <p className="text-lg sm:text-xl font-medium text-[#493B32]">
                  Modern Web
                </p>
                <p className="text-sm text-[#493B32]/80 mt-1">
                  HTML, JS, Tailwind
                </p>
              </div>
            </div>
          </section>

          {/* Project Links */}
          <nav
            className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group"
            aria-label="Project links"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
                aria-hidden="true"
              >
                <FaLink className="w-5 h-5 sm:w-6 sm:h-6 text-[#493B32]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-[#493B32]/60 mb-1">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-2 mt-3" role="list">
                  <li>
                    <a
                      href="https://github.com/Negin-code/crimson-plate-restaurant.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#493B32]/5 hover:bg-[#493B32]/10 transition-all group/link"
                      aria-label="View Crimson Plate source code on GitHub"
                    >
                      <FaGithub
                        className="w-5 h-5 text-[#493B32] group-hover/link:scale-110 transition-transform"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-[#493B32]">
                        View Source Code
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://crimsonplate.neginasem.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#493B32]/5 hover:bg-[#493B32]/10 transition-all group/link"
                      aria-label="Visit Crimson Plate live website"
                    >
                      <FaExternalLinkAlt
                        className="w-4 h-4 text-[#493B32] group-hover/link:scale-110 transition-transform"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-[#493B32]">
                        Visit Live Site
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </aside>

        {/* Project Overview Section */}
        <section
          id="overview"
          className="space-y-8 mt-16 sm:mt-24 px-4 sm:px-0"
          aria-labelledby="overview-heading"
        >
          <header className="flex flex-row items-center gap-3">
            <div
              className="w-[3vh] sm:w-[4vh] md:w-[5vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <SectionHeading
              id="overview-heading"
            >
              Project Overview
            </SectionHeading>
          </header>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-[#493B32] leading-relaxed">
              The Crimson Plate project was a practical demonstration of my
              front-end development expertise, focusing on responsive design,
              interactivity, and performance optimization. The objective was to
              create a fully functional restaurant website that not only looks
              visually appealing but also provides a seamless and engaging user
              experience.
            </p>

            <p className="text-lg sm:text-xl text-[#493B32] leading-relaxed">
              I chose Tailwind CSS for its utility-first approach, which allowed
              me to quickly build a structured, mobile-friendly layout with
              minimal custom CSS. Tailwind's predefined classes ensured a
              consistent design system, improved scalability, and reduced
              development time while maintaining flexibility for customization.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section
          id="technologies"
          className="mt-16 sm:mt-24 px-4 sm:px-0"
          aria-labelledby="technologies-heading"
        >
          <header className="flex flex-row items-center gap-3 mb-10">
            <div
              className="w-[3vh] sm:w-[4vh] md:w-[5vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
                      <SectionHeading
            id="technologies-heading"
          >
            Technologies Used
          </SectionHeading>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* JavaScript Libraries */}
            <article className="bg-white rounded-xl p-8 sm:p-10 shadow-sm border border-[#493B32]/10">
              <h3 className="text-xl sm:text-2xl font-medium text-[#493B32] mb-6">
                JavaScript Libraries
              </h3>
              <ul className="space-y-6" role="list">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#493B32]"></div>
                  <div>
                    <p className="font-medium text-lg text-[#493B32]">
                      AOS (Animate on Scroll)
                    </p>
                    <p className="text-[#493B32]/70 mt-1">
                      JavaScript library for scroll-based animations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#493B32]"></div>
                  <div>
                    <p className="font-medium text-lg text-[#493B32]">
                      Typed.js
                    </p>
                    <p className="text-[#493B32]/70 mt-1">
                      JavaScript library for typing text animations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#493B32]"></div>
                  <div>
                    <p className="font-medium text-lg text-[#493B32]">
                      SweetAlert.js
                    </p>
                    <p className="text-[#493B32]/70 mt-1">
                      JavaScript library for modern pop-up alerts
                    </p>
                  </div>
                </li>
              </ul>
            </article>

            {/* jQuery Plugins */}
            <article className="bg-white rounded-xl p-8 sm:p-10 shadow-sm border border-[#493B32]/10">
              <h3 className="text-xl sm:text-2xl font-medium text-[#493B32] mb-6">
                jQuery Plugins
              </h3>
              <ul className="space-y-6" role="list">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#493B32]"></div>
                  <div>
                    <p className="font-medium text-lg text-[#493B32]">
                      Magnific Popup
                    </p>
                    <p className="text-[#493B32]/70 mt-1">
                      jQuery plugin for creating lightbox-style galleries
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#493B32]"></div>
                  <div>
                    <p className="font-medium text-lg text-[#493B32]">
                      DataTables.js
                    </p>
                    <p className="text-[#493B32]/70 mt-1">
                      jQuery plugin for enhancing HTML tables
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#493B32]"></div>
                  <div>
                    <p className="font-medium text-lg text-[#493B32]">
                      jQuery Validation
                    </p>
                    <p className="text-[#493B32]/70 mt-1">
                      jQuery plugin for form validation
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Accessibility Section */}
        <section
          id="accessibility"
          className="mt-16 sm:mt-24 mb-24 px-4 sm:px-0"
          aria-labelledby="accessibility-heading"
        >
          <header className="flex flex-row items-center gap-3 mb-10">
            <div
              className="w-[3vh] sm:w-[4vh] md:w-[5vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
                      <SectionHeading
            id="accessibility-heading"
          >
            Accessibility & Performance
          </SectionHeading>
          </header>

          <div className="bg-gradient-to-br from-[#493B32]/5 to-[#493B32]/10 p-8 sm:p-10 rounded-xl border border-[#493B32]/10">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-[#493B32] leading-relaxed">
                Beyond functionality, I prioritized accessibility and
                performance. I applied ARIA labels, semantic HTML, and
                WCAG-compliant color contrasts to ensure inclusivity for all
                users, including those using assistive technologies.
              </p>
              <p className="text-lg sm:text-xl text-[#493B32] leading-relaxed">
                To optimize load times, I compressed images and leveraged lazy
                loading to reduce initial page weight. The site achieves
                excellent performance scores across all key metrics.
              </p>
            </div>
          </div>
        </section>
      </article>

    </main>
  );
};

export default CrimsonPlate;
