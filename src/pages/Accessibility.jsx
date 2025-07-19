import React from "react";
import { FaFigma, FaUsers, FaClock, FaCog, FaSearch, FaCheck, FaTimes, FaBuilding } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { MdWork, MdAccessibility, MdColorLens, MdVisibility, MdExplore, MdKeyboard, MdPsychology, MdWarning, MdInsertChart, MdExtension } from "react-icons/md";
import { IoEyeSharp, IoNavigate } from "react-icons/io5";
import { BiTestTube } from "react-icons/bi";
import { HiExclamation } from "react-icons/hi";
import ProjectHero from "../components/ProjectHero";
import ObjectiveCard from "../components/ObjectiveCard";
import SideNav from "../components/SideNav";
import comparison from "../assets/comparison.png";
import colorpalette from "../assets/colorpalette.png";
import poster from "../assets/poster.png";
import colorref from "../assets/ColorRef.png";
import redblind from "../assets/redblind.png";
import contrastfixer from "../assets/contrast.png";
import { SectionHeading, SubsectionHeading, MediumText, RegularText, Metadata, CardHeading } from "../components/Typography";

const Accessibility = () => {
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

      {/* Side Navigation */}
      <SideNav />

      {/* Project Content */}
      <article id="top" className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 mr-15 lg:mr-0 ml-20 lg:ml-10">
        <ProjectHero
          title="Designing for Color Blindness: Enhancing Web Accessibility"
          image={contrastfixer}
          imageAlt="Accessibility design showing color contrast and inclusive design principles"
        />

        {/* Project Metadata */}
        <aside
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0"
          aria-label="Project information"
        >
          {/* Project Type */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
                aria-hidden="true"
              >
                <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">
                  Project Type
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#493B32]">
                  Accessibility Study
                </p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">
                  (UX Research)
                </p>
              </div>
            </div>
          </section>

          {/* Team Size */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
                aria-hidden="true"
              >
                <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">
                  Team
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#493B32]">
                  Team of 3
                </p>
                
              </div>
            </div>
          </section>

          {/* Role */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
                aria-hidden="true"
              >
                <MdWork className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">
                  My Role
                </h3>
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-medium text-[#493B32]">
                    UX Designer
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools & Process */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
                aria-hidden="true"
              >
                <FaCog className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-4 sm:mb-5">
                  Tools Used
                </h3>
                <ul
                  className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5 flex-wrap"
                  role="list"
                  aria-label="Tools used in project"
                >
                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="ChromeLens"
                      role="img"
                      aria-label="ChromeLens"
                    >
                      <IoEyeSharp className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="Coolors"
                      role="img"
                      aria-label="Coolors"
                    >
                      <MdColorLens className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="Canva"
                      role="img"
                      aria-label="Canva"
                    >
                      <SiCanva className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="Figma"
                      role="img"
                      aria-label="Figma"
                    >
                      <FaFigma className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="User Testing"
                      role="img"
                      aria-label="User Testing"
                    >
                      <BiTestTube className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </aside>

        {/* Project Overview Section */}
        <section
          id="overview"
          className="space-y-6 mt-12"
          aria-labelledby="overview-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="overview-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              Project Overview
            </h2>
          </header>

          <p className="text-[#493B32] leading-relaxed text-lg">
          The goal of this school project was to explore how users with red-blindness (protanopia) interact with digital interfaces and identify the barriers they face. As a UX design team, we simulated a red-blind user's perspective, analyzed pain points, and prototyped inclusive solutions that promote accessibility in visual design. This hands-on assignment challenged us to apply accessibility principles in real-world contexts and advocate for inclusive user experiences from the ground up.
          </p>
        </section>

        {/* Problem Section */}
        <section
          id="problem"
          className="space-y-6 mt-16"
          aria-labelledby="problem-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="problem-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              Problem
            </h2>
          </header>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
            <p className="text-[#493B32] leading-relaxed text-lg mb-4">
              Many websites rely on red to communicate meaning—alerts, highlights, or branding. But red-blind users often cannot distinguish these elements, which can result in poor usability and exclusion.
            </p>
            <p className="text-[#493B32]/80 leading-relaxed text-base font-medium">
              Our challenge was to understand these barriers through simulation, then design a solution that doesn't rely solely on color.
            </p>
          </div>
        </section>

        {/* Research & Empathy Section */}
        <section
          id="research"
          className="space-y-6 mt-16"
          aria-labelledby="research-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="research-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              User Testing & Observations
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-[#493B32] leading-relaxed text-lg">
              We began with task-based simulations using the ChromeLens extension, which emulates red-blindness:
            </p>

            {/* Task 1 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center border-b border-[#493B32]/10 pb-4">
                  <h3 className="text-xl font-medium text-[#493B32] mb-2">
                    Task 1: Red Building Search with ChromeLens
                  </h3>
                  <p className="text-[#493B32]/80 text-sm max-w-2xl mx-auto">
                    Simulating how users with red-blindness experience visual search on Unsplash
                  </p>
                  <div className="mt-2 text-xs text-[#493B32]/60 bg-[#493B32]/5 px-3 py-1 rounded-full inline-block">
                    Tool Active: ChromeLens – Protanopia mode
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-[#493B32] text-center">User Flow Steps</h4>
                  <ol className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Task 1 user flow steps">
                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Navigate to Unsplash</h5>
                          <p className="text-xs text-[#493B32]/80">Open the image search on Unsplash</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          2
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Search Query</h5>
                          <p className="text-xs text-[#493B32]/80">Typed "red building" in search bar</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          3
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Attempt Visual Scan</h5>
                          <p className="text-xs text-[#493B32]/80">Try to identify red buildings in results</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          4
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Experience Difficulty</h5>
                          <p className="text-xs text-[#493B32]/80">Struggle with color-based identification</p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Visual Comparison */}
                <figure className="text-center space-y-4">
                  <h4 className="text-lg font-medium text-[#493B32] flex items-center justify-center gap-2">
                    <MdVisibility className="w-5 h-5" />
                    Vision Comparison
                  </h4>
                  
                  <div className="relative overflow-hidden rounded-lg shadow-md max-w-2xl mx-auto border-4 border-[#493B32]">
                    <img
                      src={comparison}
                      alt="Side-by-side comparison showing how red buildings appear in normal vision versus protanopia (red-blind) vision"
                      className="w-full h-auto object-cover max-h-80"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                      <div className="space-y-3">
                        <MdVisibility className="w-12 h-12 text-gray-400 mx-auto" />
                        <h5 className="font-medium text-gray-600">Vision Comparison</h5>
                        <p className="text-sm text-gray-500">Normal vs. Protanopia vision</p>
                      </div>
                    </div>
                  </div>
                  
                  <figcaption className="text-sm text-[#493B32]/70 max-w-lg mx-auto">
                    Visual demonstration of how red building search results appear to users with normal vision compared to those with protanopia (red-blindness)
                  </figcaption>
                </figure>

                {/* Challenges & Results */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-labelledby="task1-findings">
                  <h4 id="task1-findings" className="sr-only">Task 1 Findings</h4>
                  
                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <HiExclamation className="w-5 h-5 text-[#493B32]" />
                      Challenges
                    </h5>
                    <ul className="space-y-2" role="list" aria-label="Challenges encountered">
                      <li className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Visual confusion due to muted red tones</span>
                      </li>
                      <li className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Failed identification, had to rely on text descriptions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <FaCheck className="w-5 h-5 text-[#493B32]" />
                      Key Insights
                    </h5>
                    <ul className="space-y-2" role="list" aria-label="Key insights learned">
                      <li className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Color-only cues create significant barriers</span>
                      </li>
                      <li className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Alternative visual signals are essential</span>
                      </li>
                    </ul>
                  </div>
                </section>

              </div>
            </div>

            {/* Task 2 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center border-b border-[#493B32]/10 pb-4">
                  <h3 className="text-xl font-medium text-[#493B32] mb-2">
                    Task 2: Creating a Custom Color Palette on Coolors.co
                  </h3>
                  <p className="text-[#493B32]/80 text-sm max-w-2xl mx-auto">
                    Design an accessible blue–orange color palette suitable for red-blind users
                  </p>
                  <div className="mt-2 text-xs text-[#493B32]/60 bg-[#493B32]/5 px-3 py-1 rounded-full inline-block">
                    Tool Active: ChromeLens – Protanopia mode (still ON)
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-[#493B32] text-center">User Flow Steps</h4>
                  <ol className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Task 2 user flow steps">
                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Open Coolors.co</h5>
                          <p className="text-xs text-[#493B32]/80">Navigate to the color palette generator on Coolors.co</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          2
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Start with Base Colors</h5>
                          <p className="text-xs text-[#493B32]/80">Select blue as primary color (unaffected by red-blindness)</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          3
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Experiment with Orange</h5>
                          <p className="text-xs text-[#493B32]/80">Adjust orange variants by shifting hue toward yellow spectrum</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          4
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Validate Colors Visually</h5>
                          <p className="text-xs text-[#493B32]/80">Use ChromeLens to preview contrast and visibility in real time</p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                {/* Color Palette Visual */}
                <figure className="text-center space-y-4">
                   <h4 className="text-lg font-medium text-[#493B32] flex items-center justify-center gap-2">
                     <MdColorLens className="w-5 h-5" />
                     Accessible Blue-Orange Palette
                   </h4>
                   
                   <div className="relative overflow-hidden rounded-lg shadow-md max-w-2xl mx-auto border-4 border-[#493B32]">
                     <img
                       src={colorpalette}
                       alt="Custom blue-orange color palette designed for red-blind accessibility, showing yellow-based orange and bright blue colors"
                       className="w-full h-auto object-cover max-h-80"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextElementSibling.style.display = 'block';
                       }}
                     />
                     <div className="hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                       <div className="space-y-3">
                         <MdColorLens className="w-12 h-12 text-gray-400 mx-auto" />
                         <h5 className="font-medium text-gray-600">Color Palette</h5>
                         <p className="text-sm text-gray-500">Blue-Orange accessibility palette</p>
                       </div>
                     </div>
                   </div>

                   <figcaption className="text-sm text-[#493B32]/80 max-w-xl mx-auto">
                     The final palette features yellow-based orange tones and bright blue colors that maintain high contrast and visibility for users with protanopia.
                   </figcaption>
                 </figure>

                {/* Challenges & Results */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-labelledby="task2-findings">
                  <h4 id="task2-findings" className="sr-only">Task 2 Findings</h4>
                  
                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <HiExclamation className="w-5 h-5 text-[#493B32]" />
                      Challenges 
                    </h5>
                    <ul className="space-y-2" role="list" aria-label="Challenges encountered in Task 2">
                      <li className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Orange with red undertones still appeared muted</span>
                      </li>
                      <li className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Red–orange combinations were difficult to evaluate without feedback from normal vision users</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <FaCheck className="w-5 h-5 text-[#493B32]" />
                      Key Insights
                    </h5>
                    <ul className="space-y-2" role="list" aria-label="Key insights from Task 2">
                      <li className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Created a green-based orange and bright blue palette</span>
                      </li>
                      <li className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Noted the need for additional contrast strategies beyond color (e.g., labels, spacing)</span>
                      </li>
                    </ul>
                  </div>
                </section>
                 
               </div>
             </div>

            {/* Task 3 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center border-b border-[#493B32]/10 pb-4">
                  <h3 className="text-xl font-medium text-[#493B32] mb-2">
                    Task 3: Designing a Poster in Canva Using the Accessible Color Palette
                  </h3>
                  <p className="text-[#493B32]/80 text-sm max-w-2xl mx-auto">
                    Create a visually appealing and accessible poster using the custom color palette and selected Unsplash photo
                  </p>
                  <div className="mt-2 text-xs text-[#493B32]/60 bg-[#493B32]/5 px-3 py-1 rounded-full inline-block">
                    Tool Active: ChromeLens – Protanopia mode (still ON)
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-[#493B32] text-center">User Flow Steps</h4>
                  <ol className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Task 3 user flow steps">
                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Preparation</h5>
                          <p className="text-xs text-[#493B32]/80">Upload the selected Unsplash stock photo (chosen during Task 1)</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          2
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Apply Custom Color Palette</h5>
                          <p className="text-xs text-[#493B32]/80">Use the previously created blue and green-based orange palette</p>
                        </div>
                      </div>
                    </li>

                    <li className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                          3
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Add Text Labels</h5>
                          <p className="text-xs text-[#493B32]/80">Add text labels over color-coded areas to ensure meaning isn't lost</p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Poster Result */}
                <figure className="text-center space-y-4">
                  <h4 className="text-lg font-medium text-[#493B32] flex items-center justify-center gap-2">
                    <SiCanva className="w-5 h-5" />
                    Final Poster Result
                  </h4>
                  
                  <div className="relative overflow-hidden rounded-lg shadow-md max-w-2xl mx-auto border-4 border-[#493B32]">
                    <img
                      src={poster}
                      alt="Final accessible poster created in Canva using blue-orange color palette with text labels and clear visual hierarchy"
                      className="w-full h-auto object-cover max-h-80"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                      <div className="space-y-3">
                        <SiCanva className="w-12 h-12 text-gray-400 mx-auto" />
                        <h5 className="font-medium text-gray-600">Accessible Poster</h5>
                        <p className="text-sm text-gray-500">Canva design with accessible palette</p>
                      </div>
                    </div>
                  </div>

                  <figcaption className="text-sm text-[#493B32]/80 max-w-xl mx-auto">
                    The final poster incorporates accessible colors and text labels for enhanced accessibility.
                  </figcaption>
                </figure>

                {/* Challenges & Results */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-labelledby="task3-findings">
                  <h4 id="task3-findings" className="sr-only">Task 3 Findings</h4>
                  
                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <HiExclamation className="w-5 h-5 text-[#493B32]" />
                      Challenges
                    </h5>
                    <ul className="space-y-2" role="list" aria-label="Challenges encountered in Task 3">
                      <li className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Red-orange still rendered as greenish; difficult to assess solo</span>
                      </li>
                      <li className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Simulated view alone wasn't enough to ensure accessibility — required team review</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <FaCheck className="w-5 h-5 text-[#493B32]" />
                      Key Insights
                    </h5>
                    <ul className="space-y-2" role="list" aria-label="Key insights from Task 3">
                      <li className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Added text labels over color-coded areas</span>
                      </li>
                      <li className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <span className="text-sm text-[#493B32]/80">Implemented strong contrast and clear typography hierarchy</span>
                      </li>
                    </ul>
                  </div>
                </section>

                               </div>
             </div>
          </div>
        </section>


        {/* Solutions Section */}
        <section
          id="solutions"
          className="space-y-6 mt-16"
          aria-labelledby="solutions-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="solutions-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              Proposed Solutions
            </h2>
          </header>

          {/* Solutions Container */}
          <div className="bg-gradient-to-br from-white to-[#FFF7F2] rounded-2xl p-8 sm:p-12 shadow-lg border border-[#493B32]/10 mt-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#493B32] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MdExtension className="w-4 h-4" />
                Accessibility Solutions
              </div>
              <p className="text-[#493B32]/80 max-w-2xl mx-auto">
                Two powerful Figma plugins that help designers create more inclusive interfaces for users with color vision deficiencies.
              </p>
            </div>

            <div className="space-y-16">
              {/* Solution 1: ColorRef Plugin */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#493B32] mb-4 flex items-center justify-center gap-3">
                    <div className="w-8 h-8 bg-[#493B32] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    ColorRef Tooltip Plugin
                  </h3>
                  <p className="text-[#493B32]/80 mb-8 max-w-3xl mx-auto">
                    The ColorRef tooltip plugin helps designers support color-blind users by providing textual color context, such as names, contrast values, or icons, when they hover over or focus on a UI element.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Normal Vision */}
                  <div className="text-center space-y-4">
                    <h4 className="font-semibold text-[#493B32]">Normal Vision</h4>
                    <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-[#493B32] w-72 h-96 mx-auto">
                      <img
                        src={colorref}
                        alt="ColorRef plugin showing normal color vision with clear red and green distinctions"
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <div className="hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 text-center border-2 border-dashed border-gray-300 w-full h-full">
                        <div className="space-y-3 flex flex-col justify-center h-full">
                          <MdColorLens className="w-12 h-12 text-gray-400 mx-auto" />
                          <h5 className="font-medium text-gray-600">Normal Vision</h5>
                          <p className="text-sm text-gray-500">ColorRef normal view</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Red-Blind Vision */}
                  <div className="text-center space-y-4">
                    <h4 className="font-semibold text-[#493B32]">Red-Blind Vision (Protanopia)</h4>
                    <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-[#493B32] w-72 h-96 mx-auto">
                      <img
                        src={redblind}
                        alt="ColorRef plugin showing red-blind vision where red elements appear muted and difficult to distinguish"
                        className="w-full h-full object-contain"
                        style={{ imageRendering: 'crisp-edges' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <div className="hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 text-center border-2 border-dashed border-gray-300 w-full h-full">
                        <div className="space-y-3 flex flex-col justify-center h-full">
                          <MdVisibility className="w-12 h-12 text-gray-400 mx-auto" />
                          <h5 className="font-medium text-gray-600">Red-Blind Vision</h5>
                          <p className="text-sm text-gray-500">ColorRef protanopia view</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-[#493B32]/80 max-w-2xl mx-auto italic">
                    The ColorRef plugin reveals how red elements become indistinguishable for users with protanopia, 
                    highlighting the critical need for alternative visual cues beyond color alone.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-px bg-[#493B32]/20"></div>
                <div className="mx-4 w-2 h-2 bg-[#493B32]/20 rounded-full"></div>
                <div className="w-24 h-px bg-[#493B32]/20"></div>
              </div>

              {/* Solution 2: Contrast Fixer */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#493B32] mb-4 flex items-center justify-center gap-3">
                    <div className="w-8 h-8 bg-[#493B32] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Contrast Fixer – Figma Plugin
                  </h3>
                  <p className="text-[#493B32]/80 mb-8 max-w-3xl mx-auto">
                    The Contrast Fixer plugin automatically analyzes and give feedback to designers to improve color combinations to meet WCAG accessibility standards, ensuring sufficient contrast ratios for users with visual impairments.
                  </p>
                </div>
                  
                {/* Figma Embed */}
                <div className="max-w-5xl mx-auto">
                  <div className="relative bg-white rounded-xl shadow-lg border border-[#493B32]/10 overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe 
                        className="w-full h-full border-0"
                        src="https://embed.figma.com/design/DFFVHQQcx0p21vLODLOVWu/Contrast-Fixer?node-id=0-1&embed-host=share"
                        allowFullScreen
                        title="Contrast Fixer Figma Plugin Demo"
                      />
                    </div>
                    
                    {/* Caption */}
                    <div className="p-4 bg-[#493B32]/5 border-t border-[#493B32]/10">
                      <p className="text-sm text-[#493B32]/80 text-center font-medium">
                        Interactive demo of the Contrast Fixer plugin in action
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <section className="bg-white rounded-xl p-8 shadow-sm border border-[#493B32]/10 max-w-4xl mx-auto" aria-labelledby="contrast-fixer-features">
                  <h4 id="contrast-fixer-features" className="sr-only">Contrast Fixer Plugin Features and Benefits</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-[#493B32] flex items-center gap-2">
                        <FaCheck className="w-5 h-5 text-green-600" />
                        Key Features
                      </h5>
                      <ul className="space-y-3" role="list" aria-label="Key features of Contrast Fixer plugin">
                        <li className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <span className="text-sm text-[#493B32]/80 font-medium">Real-time contrast ratio calculations</span>
                        </li>
                        <li className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <span className="text-sm text-[#493B32]/80 font-medium">WCAG AA/AAA compliance checking</span>
                        </li>
                        <li className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <span className="text-sm text-[#493B32]/80 font-medium">Automatic color adjustments</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-[#493B32] flex items-center gap-2">
                        <MdVisibility className="w-5 h-5 text-blue-600" />
                        Benefits for Red-Blind Users
                      </h5>
                      <ul className="space-y-3" role="list" aria-label="Benefits for red-blind users">
                        <li className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <span className="text-sm text-[#493B32]/80 font-medium">Ensures text remains readable</span>
                        </li>
                        <li className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <span className="text-sm text-[#493B32]/80 font-medium">Reduces reliance on color alone</span>
                        </li>
                        <li className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <span className="text-sm text-[#493B32]/80 font-medium">Improves overall visual hierarchy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
            
          
        </section>

        {/* Key Learnings Section */}
        <section
          id="learnings"
          className="space-y-8 mt-16"
          aria-labelledby="learnings-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="learnings-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              Key Learnings
            </h2>
          </header>

          {/* Key Learnings Container */}
          <div className="bg-gradient-to-br from-[#493B32] to-[#5a4a3e] rounded-2xl p-8 sm:p-12 shadow-xl border border-[#493B32]/20 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" aria-hidden="true"></div>
            
            {/* Header */}
            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MdPsychology className="w-4 h-4" />
                Research Insights
              </div>
              <p className="text-white/90 max-w-2xl mx-auto text-lg">
                Three fundamental insights that transformed our understanding of accessible design and will guide future projects.
              </p>
            </div>

            {/* Cards Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10"
              role="list"
            >
              <div role="listitem" className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#493B32] text-white rounded-xl flex items-center justify-center text-xl font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-semibold text-[#493B32]">
                      Color ≠ Communication
                    </h3>
                  </div>
                  <p className="text-[#493B32]/80 leading-relaxed">
                    Visual hierarchy should never depend solely on color. Patterns, icons, and text are essential for inclusive design.
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#493B32]/10">
                    <div className="flex items-center gap-2 text-sm text-[#493B32]/60">
                      <MdAccessibility className="w-4 h-4" />
                      <span>Design Principle</span>
                    </div>
                  </div>
                </div>
              </div>

              <div role="listitem" className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#493B32] text-white rounded-xl flex items-center justify-center text-xl font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-semibold text-[#493B32]">
                      Design with Simulation
                    </h3>
                  </div>
                  <p className="text-[#493B32]/80 leading-relaxed">
                    Tools like ChromeLens are critical in the design process to understand user experiences with visual impairments.
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#493B32]/10">
                    <div className="flex items-center gap-2 text-sm text-[#493B32]/60">
                      <MdExtension className="w-4 h-4" />
                      <span>Tool Integration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div role="listitem" className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#493B32] text-white rounded-xl flex items-center justify-center text-xl font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-semibold text-[#493B32]">
                      Universal Benefits
                    </h3>
                  </div>
                  <p className="text-[#493B32]/80 leading-relaxed">
                    Accessible design benefits everyone. High contrast and clear patterns aid not only color-blind users but all users.
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#493B32]/10">
                    <div className="flex items-center gap-2 text-sm text-[#493B32]/60">
                      <MdVisibility className="w-4 h-4" />
                      <span>Universal Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-12 text-center relative z-10">
              <div className="inline-flex items-center gap-2 text-white/70 text-sm">
                <div className="w-6 h-px bg-white/30"></div>
                <span>Insights from accessibility research</span>
                <div className="w-6 h-px bg-white/30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section
          id="conclusion"
          className="space-y-8 mt-16 mb-16"
          aria-labelledby="conclusion-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="conclusion-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              Reflection
            </h2>
          </header>

          {/* Reflection Container */}
          <div className="bg-gradient-to-br from-white via-[#FFF7F2] to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-[#493B32]/10 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#493B32]/5 rounded-full -translate-y-20 -translate-x-20" aria-hidden="true"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#493B32]/5 rounded-full translate-y-16 translate-x-16" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#493B32]/5 to-transparent opacity-50" aria-hidden="true"></div>
            
            {/* Content Container */}
            <div className="relative z-10">
              {/* Header Section */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[#493B32]/10 backdrop-blur-sm text-[#493B32] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <MdPsychology className="w-4 h-4" />
                  Personal Reflection
                </div>
                <p className="text-[#493B32]/70 max-w-2xl mx-auto text-base">
                  Transformative insights that will shape my future approach to inclusive design
                </p>
              </div>

              {/* Main Reflection Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#493B32]/10 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-3 h-3 bg-[#493B32] rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#493B32] mb-4 flex items-center gap-2">
                      <MdExplore className="w-5 h-5" />
                      Key Reflection
                    </h3>
                    <p className="text-[#493B32] leading-relaxed text-lg">
                      This project deepened my understanding of accessibility-first design. By putting ourselves in the shoes of users with color blindness, we were able to identify critical flaws and rethink our visual design language.
                    </p>
                  </div>
                </div>
              </div>

              {/* Future Commitments */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#493B32]/10">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#493B32] rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-[#493B32] mb-6 flex items-center gap-2">
                      <IoNavigate className="w-5 h-5" />
                      Future Commitments
                    </h3>
                    
                    <div className="grid gap-4 sm:gap-6">
                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-[#493B32]/5 to-transparent hover:from-[#493B32]/10 transition-all duration-300 border border-transparent hover:border-[#493B32]/20">
                          <div className="w-8 h-8 bg-[#493B32] text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <MdAccessibility className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#493B32] mb-1">Advocate for Inclusive Design</h4>
                            <p className="text-[#493B32]/70 text-sm">Promote accessibility principles in all future projects and team collaborations</p>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-[#493B32]/5 to-transparent hover:from-[#493B32]/10 transition-all duration-300 border border-transparent hover:border-[#493B32]/20">
                          <div className="w-8 h-8 bg-[#493B32] text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <MdExtension className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#493B32] mb-1">Integrate Simulation Tools</h4>
                            <p className="text-[#493B32]/70 text-sm">Embed color blindness simulation tools and plugins into my standard Figma workflow</p>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-[#493B32]/5 to-transparent hover:from-[#493B32]/10 transition-all duration-300 border border-transparent hover:border-[#493B32]/20">
                          <div className="w-8 h-8 bg-[#493B32] text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <MdVisibility className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#493B32] mb-1">Champion Alternative Methods</h4>
                            <p className="text-[#493B32]/70 text-sm">Push for alternatives to color-based information across all collaborative design settings</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center gap-2 text-[#493B32]/60 text-sm italic">
                  <div className="w-8 h-px bg-[#493B32]/30"></div>
                  <span>"Accessibility is not a feature, it's a fundamental design principle"</span>
                  <div className="w-8 h-px bg-[#493B32]/30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Accessibility;
