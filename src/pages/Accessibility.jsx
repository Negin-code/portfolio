import React from "react";
import { FaFigma, FaUsers, FaClock, FaCog } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { MdWork, MdAccessibility, MdColorLens, MdVisibility } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { BiTestTube } from "react-icons/bi";
import ProjectHero from "../components/ProjectHero";
import ObjectiveCard from "../components/ObjectiveCard";

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
              Research & Empathy
            </h2>
          </header>

          <div className="space-y-6">
            <p className="text-[#493B32] leading-relaxed text-lg">
              We began with task-based simulations using the ChromeLens extension, which emulates red-blindness:
            </p>

            {/* Task 1 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
              <h3 className="text-xl font-medium text-[#493B32] mb-4">
                Task 1: Search for an architecture photo with red highlights on Unsplash
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">🔴</span>
                  <div>
                    <strong className="text-[#493B32]">Issue:</strong>
                    <p className="text-[#493B32]/80 mt-1">Red elements appeared muted or blended into brown/green, making them hard to spot.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold text-lg">🎯</span>
                  <div>
                    <strong className="text-[#493B32]">Insight:</strong>
                    <p className="text-[#493B32]/80 mt-1">Users with color blindness may miss critical cues if color is the only differentiator.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette Creation */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
              <h3 className="text-xl font-medium text-[#493B32] mb-4">
                Custom Blue-Orange Palette in Coolors
              </h3>
              <ul className="space-y-2 text-[#493B32]/80">
                <li>• Blue was chosen as the primary hue due to its visibility in protanopia</li>
                <li>• Orange was adjusted to be more yellow-based to avoid red tones</li>
                <li>• Despite using simulations, we struggled to validate color effectiveness without outside input</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessible Design Exploration Section */}
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
              Accessible Design Exploration
            </h2>
          </header>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
            <h3 className="text-xl font-medium text-[#493B32] mb-4">
              Task 3: Creating an accessible poster using Canva
            </h3>
            <p className="text-[#493B32] leading-relaxed text-base mb-4">
              Using our accessible palette, we designed a simple poster. To strengthen clarity, we added:
            </p>
            <ul className="space-y-2 text-[#493B32]/80">
              <li>• Text labels and icons alongside color codes</li>
              <li>• Strong contrast between elements</li>
              <li>• Clear typography hierarchy</li>
            </ul>
            <p className="text-[#493B32]/80 text-sm mt-4 italic">
              Feedback loops with teammates helped us validate contrast and usability, especially since color-blind validation tools had limits.
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
              User Testing & Observations
            </h2>
          </header>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
            <p className="text-[#493B32] leading-relaxed text-base mb-4">
              We conducted two rounds of informal usability testing, using simulated red-blindness:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-[#493B32] mb-2">Observed Behavior:</h4>
                <p className="text-[#493B32]/80 text-sm">Missed cues in traditional red elements</p>
              </div>
              <div>
                <h4 className="font-medium text-[#493B32] mb-2">Challenges Reported:</h4>
                <p className="text-[#493B32]/80 text-sm">Difficulty reading low-contrast text, misidentification of UI elements based on color alone</p>
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

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#493B32]/20">
                    <th className="text-left py-4 px-2 text-[#493B32] font-medium">Issue</th>
                    <th className="text-left py-4 px-2 text-[#493B32] font-medium">Solution</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b border-[#493B32]/10">
                    <td className="py-4 px-2 text-[#493B32]/80">Color-only UI indicators</td>
                    <td className="py-4 px-2 text-[#493B32]/80">Add icons, patterns, and text labels</td>
                  </tr>
                  <tr className="border-b border-[#493B32]/10">
                    <td className="py-4 px-2 text-[#493B32]/80">Poor red contrast</td>
                    <td className="py-4 px-2 text-[#493B32]/80">Shift brand palette to high-contrast blue & orange with simulation tests</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-2 text-[#493B32]/80">Designer feedback gap</td>
                    <td className="py-4 px-2 text-[#493B32]/80">Use plugins like Color Ref and Contrast Fixer in Figma</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 space-y-2">
              <p className="text-[#493B32] font-medium">Recommended Figma Plugins:</p>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-blue-600 hover:underline">🔗 Color Ref Plugin</a>
                <a href="#" className="text-blue-600 hover:underline">🔗 Contrast Fixer Plugin</a>
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
