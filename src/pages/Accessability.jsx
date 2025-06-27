import React, { useState } from "react";
import { FaFigma, FaUsers, FaClock, FaCog, FaEye, FaPalette, FaLightbulb, FaClipboard } from "react-icons/fa";
import { SiCanva, SiFigma } from "react-icons/si";
import { MdAccessibility, MdWork, MdColorLens, MdVisibility } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import { AiOutlineExperiment } from "react-icons/ai";
import ProjectHero from "../components/ProjectHero";
import ObjectiveCard from "../components/ObjectiveCard";
import HMWSection from "../components/HMWSection";
import KeyTakeawaysSection from "../components/KeyTakeawaysSection";
import ReflectionSection from "../components/ReflectionSection";
import NextStepsSection from "../components/NextStepsSection";

const Accessability = () => {
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
      <article className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 mr-15 lg:mr-0 ml-20 lg:ml-10">
        <ProjectHero
          title="Designing for Color Blindness: Enhancing Web Accessibility"
          image="/assets/hero.png"
          imageAlt="Color Blindness Accessibility Study Preview"
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
                <MdAccessibility className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">
                  Project Type
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#493B32]">
                  UX Research
                </p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">
                  (Accessibility Study)
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
                  Ju, Juan, Negin
                </p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">
                  3 members
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
                      <FaEye className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="Coolors"
                      role="img"
                      aria-label="Coolors"
                    >
                      <IoColorPalette className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
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
                      <AiOutlineExperiment className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
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
              🧠 Project Overview
            </h2>
          </header>

          <p className="text-[#493B32] leading-relaxed text-lg">
            The goal of this project was to explore how users with red-blindness (protanopia) interact with digital interfaces and identify barriers they face. As a UX design team, we simulated a red-blind user's perspective, analyzed pain points, and prototyped inclusive solutions that promote accessibility in visual design.
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
              🔍 Problem
            </h2>
          </header>

          <p className="text-[#493B32] leading-relaxed text-lg">
            Many websites rely on red to communicate meaning—alerts, highlights, or branding. But red-blind users often cannot distinguish these elements, which can result in poor usability and exclusion. Our challenge was to understand these barriers through simulation, then design a solution that doesn't rely solely on color.
          </p>
        </section>

        {/* How Might We Section */}
        <section className="mt-16 mb-16">
          <HMWSection question="...create inclusive design solutions that ensure users with color blindness can navigate digital interfaces effectively without relying solely on color differentiation?" />
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
              🧪 Research & Empathy
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-[#493B32] leading-relaxed text-lg">
              We began with task-based simulations using the ChromeLens extension, which emulates red-blindness:
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-xl font-semibold text-[#493B32] mb-4">Task 1: Search for an architecture photo with red highlights on Unsplash</h3>
              
              <div className="mb-4">
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  🔴 Issue
                </span>
                <p className="text-[#493B32] leading-relaxed">
                  Red elements appeared muted or blended into brown/green, making them hard to spot.
                </p>
              </div>

              <div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  🎯 Insight
                </span>
                <p className="text-[#493B32] leading-relaxed">
                  Users with color blindness may miss critical cues if color is the only differentiator.
                </p>
              </div>
            </div>

            <p className="text-[#493B32] leading-relaxed text-lg">
              We then created a custom blue-orange palette in Coolors:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Blue Primary</h4>
                <p className="text-blue-700">Chosen as the primary hue due to its visibility in protanopia.</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-2">Orange Secondary</h4>
                <p className="text-orange-700">Adjusted to be more yellow-based to avoid red tones.</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <p className="text-amber-800 leading-relaxed">
                <strong>Challenge:</strong> Despite using simulations, we struggled to validate color effectiveness without outside input.
              </p>
            </div>
          </div>
        </section>

        {/* Design Exploration Section */}
        <section
          id="design"
          className="space-y-6 mt-16"
          aria-labelledby="design-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="design-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              🎨 Accessible Design Exploration
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-[#493B32] leading-relaxed text-lg">
              <strong>Task 3:</strong> Using Canva, we designed a simple poster using our accessible palette.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-xl font-semibold text-[#493B32] mb-4">To strengthen clarity, we added:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#493B32] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#493B32]">Text labels and icons alongside color codes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#493B32] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#493B32]">Strong contrast between elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#493B32] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#493B32]">Clear typography hierarchy</span>
                </li>
              </ul>
            </div>

            <p className="text-[#493B32] leading-relaxed text-lg">
              🔄 Feedback loops with teammates helped us validate contrast and usability, especially since color-blind validation tools had limits.
            </p>
          </div>
        </section>

        {/* User Testing Section */}
        <section
          id="testing"
          className="space-y-6 mt-16"
          aria-labelledby="testing-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="testing-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              👀 User Testing & Observations
            </h2>
          </header>

          <p className="text-[#493B32] leading-relaxed text-lg">
            We conducted two rounds of informal usability testing, using simulated red-blindness:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-lg font-semibold text-[#493B32] mb-3">Observed Behavior</h3>
              <p className="text-[#493B32]">Missed cues in traditional red elements</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-lg font-semibold text-[#493B32] mb-3">Challenges Reported</h3>
              <p className="text-[#493B32]">Difficulty reading low-contrast text, misidentification of UI elements based on color alone</p>
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
              🛠 Proposed Solutions
            </h2>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-[#493B32]/10">
              <thead>
                <tr className="border-b border-[#493B32]/10">
                  <th className="text-left p-6 text-[#493B32] font-semibold">Issue</th>
                  <th className="text-left p-6 text-[#493B32] font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#493B32]/5">
                  <td className="p-6 text-[#493B32]">Color-only UI indicators</td>
                  <td className="p-6 text-[#493B32]">Add icons, patterns, and text labels</td>
                </tr>
                <tr className="border-b border-[#493B32]/5">
                  <td className="p-6 text-[#493B32]">Poor red contrast</td>
                  <td className="p-6 text-[#493B32]">Shift brand palette to high-contrast blue & orange with simulation tests</td>
                </tr>
                <tr>
                  <td className="p-6 text-[#493B32]">Designer feedback gap</td>
                  <td className="p-6 text-[#493B32]">Use plugins like Color Ref and Contrast Fixer in Figma</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <a
              href="#"
              className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-[#493B32] mb-2 group-hover:text-[#493B32]/80">
                🔗 Color Ref Plugin
              </h3>
              <p className="text-[#493B32]/60">Figma plugin for color accessibility testing</p>
            </a>
            <a
              href="#"
              className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-[#493B32] mb-2 group-hover:text-[#493B32]/80">
                🔗 Contrast Fixer Plugin
              </h3>
              <p className="text-[#493B32]/60">Tool for fixing contrast issues in designs</p>
            </a>
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
              💡 Key Learnings
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-lg font-semibold text-[#493B32] mb-3">Color ≠ Communication</h3>
              <p className="text-[#493B32]">Visual hierarchy should never depend solely on color.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-lg font-semibold text-[#493B32] mb-3">Design with Simulation</h3>
              <p className="text-[#493B32]">Tools like ChromeLens are critical in the design process.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-lg font-semibold text-[#493B32] mb-3">Universal Benefits</h3>
              <p className="text-[#493B32]">Accessible design benefits everyone: Patterns, icons, and high contrast aid not only color-blind users but all users.</p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section
          id="conclusion"
          className="space-y-6 mt-16"
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
              📣 Conclusion
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-[#493B32] leading-relaxed text-lg">
              This project deepened my understanding of accessibility-first design. By putting ourselves in the shoes of users with color blindness, we were able to identify critical flaws and rethink our visual design language.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
              <h3 className="text-xl font-semibold text-[#493B32] mb-4">Going forward, I will:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#493B32] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#493B32]">Advocate for inclusive design principles in all projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#493B32] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#493B32]">Incorporate color blindness simulation tools and plugins into my Figma workflow</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#493B32] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[#493B32]">Push for alternatives to color-based information in collaborative settings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Accessability;
