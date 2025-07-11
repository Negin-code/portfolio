import React, { useState } from "react";
import { FaFigma, FaUsers, FaClock, FaCog } from "react-icons/fa";
import { SiCanva, SiGoogleforms, SiZoom } from "react-icons/si";
import { MdAssessment, MdWork } from "react-icons/md";
import ProjectHero from "../components/ProjectHero";
import ObjectiveCard from "../components/ObjectiveCard";
import HMWSection from "../components/HMWSection";
import UserStudySection from "../components/UserStudySection";
import SUSScoreSection from "../components/SUSScoreSection";
import TaskInsightSection from "../components/TaskInsightSection";
import KeyTakeawaysSection from "../components/KeyTakeawaysSection";
import ReflectionSection from "../components/ReflectionSection";
import NextStepsSection from "../components/NextStepsSection";
import GoodReadsImage from "../assets/goodreadshero.png";
import SolutionsSection from "../components/SolutionsSection";

const GoodReads = () => {
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
          title="GoodReads Website Usability Study"
          image={GoodReadsImage}
          imageAlt="GoodReads Website Usability Study Preview"
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
                  4-week study
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
                  Team Size
                </h3>
                <p className="text-base sm:text-lg font-medium text-[#493B32]">
                  4 members
                </p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">
                  Team project
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
                    UX/UI Designer
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
                  Tools & Process
                </h3>
                <ul
                  className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5 flex-wrap"
                  role="list"
                  aria-label="Tools used in project"
                >
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
                      title="Zoom"
                      role="img"
                      aria-label="Zoom"
                    >
                      <SiZoom className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="System Usability Scale (SUS)"
                      role="img"
                      aria-label="System Usability Scale"
                    >
                      <MdAssessment className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer"
                      title="Google Forms"
                      role="img"
                      aria-label="Google Forms"
                    >
                      <SiGoogleforms className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
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
            Goodreads is a well-established platform for book lovers, but key
            features—like organizing shelves, connecting with readers, and
            engaging in discussions—have become frustratingly outdated. Through
            user testing, we identified critical usability gaps and redesigned
            the experience with more intuitive, modern interactions.This
            redesign is part of a student case study project completed at BCIT.
            It is not affiliated with or commissioned by Goodreads.
          </p>
        </section>

        {/* How Might We Section */}
        <section className="mt-16 mb-16">
          <HMWSection question="...make Goodreads more intuitive and socially connected, by redesigning key features like shelf creation, friend search, and community discussion?" />
        </section>

        {/* Project Objectives Section */}
        <section
          id="objectives"
          className="space-y-6 mt-16"
          aria-labelledby="objectives-heading"
        >
          <header className="flex flex-row items-center gap-2">
            <div
              className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
              aria-hidden="true"
            ></div>
            <h2
              id="objectives-heading"
              className="text-2xl sm:text-3xl font-tan text-[#493B32]"
            >
              Project Objectives
            </h2>
          </header>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            <div role="listitem">
              <ObjectiveCard
                number="01"
                title="Improve Task Success"
                description="Increase success rate of core Goodreads tasks by 25% through intuitive interface design and streamlined user flows"
              />
            </div>
            <div role="listitem">
              <ObjectiveCard
                number="02"
                title="Enhance Usability"
                description="Raise System Usability Scale (SUS) score from 53 to 70+ by implementing user-centered design improvements"
              />
            </div>
            <div role="listitem">
              <ObjectiveCard
                number="03"
                title="Community Focus"
                description="Create a streamlined, community-first experience that better connects readers and facilitates meaningful discussions"
              />
            </div>
          </div>
        </section>

        {/* User Study Section */}
        <section id="study" className="mt-12">
          <UserStudySection />
        </section>

        {/* SUS Score Section */}
        <section id="sus" className="mt-16">
          <SUSScoreSection />
        </section>

        {/* Tasks & Insights Section */}
        <section id="tasks" className="mt-16">
          <TaskInsightSection />
        </section>

        {/* Key Takeaways Section */}
        <section id="takeaways" className="mt-16">
          <KeyTakeawaysSection />
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="mt-16">
          <SolutionsSection />
        </section>

        {/* Reflections Section */}
        <section id="reflections" className="mt-16">
          <ReflectionSection />
        </section>

        {/* Next Steps Section */}
        <section id="next" className="mt-16 mb-16">
          <NextStepsSection />
        </section>
      </article>
    </main>
  );
};

export default GoodReads;
