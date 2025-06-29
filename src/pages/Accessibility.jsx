import React from "react";
import { FaFigma, FaUsers, FaClock, FaCog, FaSearch, FaCheck, FaTimes, FaBuilding } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { MdWork, MdAccessibility, MdColorLens, MdVisibility, MdExplore, MdKeyboard, MdPsychology, MdWarning, MdInsertChart, MdExtension } from "react-icons/md";
import { IoEyeSharp, IoNavigate } from "react-icons/io5";
import { BiTestTube } from "react-icons/bi";
import { HiExclamation } from "react-icons/hi";
import ProjectHero from "../components/ProjectHero";
import ObjectiveCard from "../components/ObjectiveCard";
import comparison from "../assets/comparison.png";
import colorpalette from "../assets/colorpalette.png";
import poster from "../assets/poster.png";
import colorref from "../assets/ColorRef.png";
import redblind from "../assets/redblind.png";

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

      {/* Project Content */}
      <article id="top" className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 mr-15 lg:mr-0 ml-20 lg:ml-10">
        <ProjectHero
          title="Designing for Color Blindness: Enhancing Web Accessibility"
          image="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                    {/* Step 1 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Navigate to Unsplash</h5>
                          <p className="text-xs text-[#493B32]/80">Open the image search on Unsplash</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            2
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Search Query</h5>
                          <p className="text-xs text-[#493B32]/80">Typed "red building" in search bar</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            3
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Attempt Visual Scan</h5>
                          <p className="text-xs text-[#493B32]/80">Try to identify red buildings in results</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            4
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Experience Difficulty</h5>
                          <p className="text-xs text-[#493B32]/80">Struggle with color-based identification</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Visual Comparison */}
                <div className="text-center space-y-4">
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
                </div>

                {/* Challenges & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <HiExclamation className="w-5 h-5 text-[#493B32]" />
                      Challenges
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Visual confusion due to muted red tones</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Failed identification, had to rely on text descriptions</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <FaCheck className="w-5 h-5 text-[#493B32]" />
                      Key Insights
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Color-only cues create significant barriers</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Alternative visual signals are essential</p>
                      </div>
                    </div>
                  </div>
                </div>

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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    

                    {/* Step 1 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Open Coolors.co</h5>
                          <p className="text-xs text-[#493B32]/80">Navigate to the color palette generator on Coolors.co</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Start with Base Colors</h5>
                          <p className="text-xs text-[#493B32]/80">Select blue as primary color (unaffected by red-blindness)</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Experiment with Orange</h5>
                          <p className="text-xs text-[#493B32]/80">Adjust orange variants by shifting hue toward yellow spectrum</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Validate Colors Visually</h5>
                          <p className="text-xs text-[#493B32]/80">Use ChromeLens to preview contrast and visibility in real time</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                {/* Color Palette Visual */}
                <div className="text-center space-y-4">
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

                   <p className="text-sm text-[#493B32]/80 max-w-xl mx-auto">
                     The final palette features yellow-based orange tones and bright blue colors that maintain high contrast and visibility for users with protanopia.
                   </p>
                 </div>

                {/* Challenges & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <HiExclamation className="w-5 h-5 text-[#493B32]" />
                      Challenges 
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Orange with red undertones still appeared muted</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Red–orange combinations were difficult to evaluate without feedback from normal vision users</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <FaCheck className="w-5 h-5 text-[#493B32]" />
                      Key Insights
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Created a green-based orange and bright blue palette</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Noted the need for additional contrast strategies beyond color (e.g., labels, spacing)</p>
                      </div>
                    </div>
                  </div>
                </div>
                 
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Step 1 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Preparation</h5>
                          <p className="text-xs text-[#493B32]/80">Upload the selected Unsplash stock photo (chosen during Task 1)</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Apply Custom Color Palette</h5>
                          <p className="text-xs text-[#493B32]/80">Use the previously created blue and green-based orange palette</p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#493B32]/5 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#493B32] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="font-medium text-[#493B32] text-sm mb-1">Add Text Labels</h5>
                          <p className="text-xs text-[#493B32]/80">Add text labels over color-coded areas to ensure meaning isn't lost</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Poster Result */}
                <div className="text-center space-y-4">
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

                  <p className="text-sm text-[#493B32]/80 max-w-xl mx-auto">
                    The final poster incorporates accessible colors, text labels.
                  </p>
                </div>

                {/* Challenges & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <HiExclamation className="w-5 h-5 text-[#493B32]" />
                      Challenges
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Red-orange still rendered as greenish; difficult to assess solo</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Simulated view alone wasn't enough to ensure accessibility — required team review</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <FaCheck className="w-5 h-5 text-[#493B32]" />
                      Key Insights
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Added text labels over color-coded areas</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Implemented strong contrast and clear typography hierarchy</p>
                      </div>
                    </div>
                  </div>
                </div>

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

         
            {/* ColorRef Plugin Comparison */}
            <div className="mt-8 space-y-6">
              <div className="text-center">
                
                <h3 className="text-lg font-medium text-[#493B32] mb-4 flex items-center justify-center gap-2">
                  <MdExtension className="w-5 h-5" />
                   Solution 1: ColorRef Tooltip Plugin
                </h3>
                <p className="text-sm text-[#493B32]/80 mb-6">
                  The ColorRef tooltip plugin helps designers support color-blind users by providing textual color context, such as names, contrast values, or icons, when they hover over or focus on a UI element.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Normal Vision */}
                <div className="text-center space-y-3">
                  <h4 className="font-medium text-[#493B32]">Normal Vision</h4>
                  <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-[#493B32] w-72 h-96 mx-auto">
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
                    <div className="hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8 text-center border-2 border-dashed border-gray-300 w-full h-full">
                      <div className="space-y-3 flex flex-col justify-center h-full">
                        <MdColorLens className="w-12 h-12 text-gray-400 mx-auto" />
                        <h5 className="font-medium text-gray-600">Normal Vision</h5>
                        <p className="text-sm text-gray-500">ColorRef normal view</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Red-Blind Vision */}
                <div className="text-center space-y-3">
                  <h4 className="font-medium text-[#493B32]">Red-Blind Vision (Protanopia)</h4>
                  <div className="relative overflow-hidden rounded-lg shadow-md border-2 border-[#493B32] w-72 h-96 mx-auto">
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
                    <div className="hidden bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8 text-center border-2 border-dashed border-gray-300 w-full h-full">
                      <div className="space-y-3 flex flex-col justify-center h-full">
                        <MdVisibility className="w-12 h-12 text-gray-400 mx-auto" />
                        <h5 className="font-medium text-gray-600">Red-Blind Vision</h5>
                        <p className="text-sm text-gray-500">ColorRef protanopia view</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Solution 2: Contrast Fixer */}
            <div className="mt-12 space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-[#493B32] mb-4 flex items-center justify-center gap-2">
                  <MdExtension className="w-5 h-5" />
                  Solution 2: Contrast Fixer – Figma Plugin
                </h3>
                <p className="text-sm text-[#493B32]/80 mb-6">
                  The Contrast Fixer plugin automatically analyzes and give feedback to designers to improve color combinations to meet WCAG accessibility standards, ensuring sufficient contrast ratios for users with visual impairments.
                </p>
                              </div>
                
                {/* Figma Embed */}
                <div className="max-w-4xl mx-auto px-4">
                  <div className="relative bg-white rounded-xl shadow-md border border-[#493B32]/10 overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe 
                        className="w-full h-full border-0"
                        src="https://embed.figma.com/design/DFFVHQQcx0p21vLODLOVWu/Contrast-Fixer?node-id=0-1&embed-host=share"
                        allowFullScreen
                        title="Contrast Fixer Figma Plugin Demo"
                      />
                    </div>
                    
                    {/* Optional Caption */}
                    <div className="p-3 bg-[#493B32]/5 border-t border-[#493B32]/10">
                      <p className="text-sm text-[#493B32]/80 text-center">
                        Interactive demo of the Contrast Fixer plugin in action
                      </p>
                    </div>
                  </div>
                </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <FaCheck className="w-5 h-5 text-[#493B32]" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Real-time contrast ratio calculations</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• WCAG AA/AAA compliance checking</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Automatic color adjustments</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-[#493B32] flex items-center gap-2">
                      <MdWarning className="w-5 h-5 text-[#493B32]" />
                      Benefits for Red-Blind Users
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Ensures text remains readable</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Reduces reliance on color alone</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-[#493B32]/80">• Improves overall visual hierarchy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          
        </section>

        {/* Key Learnings Section */}
        <section
          id="learnings"
          className="space-y-6 mt-16"
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

          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6"
            role="list"
          >
            <div role="listitem">
              <ObjectiveCard
                number="01"
                title="Color ≠ Communication"
                description="Visual hierarchy should never depend solely on color. Patterns, icons, and text are essential for inclusive design."
              />
            </div>
            <div role="listitem">
              <ObjectiveCard
                number="02"
                title="Design with Simulation"
                description="Tools like ChromeLens are critical in the design process to understand user experiences with visual impairments."
              />
            </div>
            <div role="listitem">
              <ObjectiveCard
                number="03"
                title="Universal Benefits"
                description="Accessible design benefits everyone. High contrast and clear patterns aid not only color-blind users but all users."
              />
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section
          id="conclusion"
          className="space-y-6 mt-16 mb-16"
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
              Conclusion
            </h2>
          </header>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
            <p className="text-[#493B32] leading-relaxed text-lg mb-6">
              This project deepened my understanding of accessibility-first design. By putting ourselves in the shoes of users with color blindness, we were able to identify critical flaws and rethink our visual design language.
            </p>
            
            <div>
              <h3 className="text-xl font-medium text-[#493B32] mb-4">Going forward, I will:</h3>
              <ul className="space-y-3 text-[#493B32]/80">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Advocate for inclusive design principles in all projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Incorporate color blindness simulation tools and plugins into my Figma workflow</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Push for alternatives to color-based information in collaborative settings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Accessibility;
