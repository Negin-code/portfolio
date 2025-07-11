import React from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import CrimsonPlateImage from "../assets/CrimsonPlate.webp";
import ListeningLabImage from "../assets/LLCover.png";
import CultureCafeImage from "../assets/CCCover.png";
import GuardianImage from "../assets/Guardiancard.webp";
import GoodReadsImage from "../assets/goodreadshero.png";
import AccessibilityImage from "../assets/contrast.png";

import ChromaGridCard from "../components/ChromaGridCard";

import "./Projects.css";

const Projects = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const { selectedCategory = categoryFromUrl || "all" } = useOutletContext() || {};
  
  const projects = [
    {
      image: GuardianImage,
      imageAlt: "Overdose Prevention App",
      category: "UI/UX Design",
      categoryType: "design",
      title: "Guardian",
      description: "Guardian is a harm reduction mobile application designed for recreational substance users, particularly young adults like Evelyn who use drugs in isolation or in social settings.",
      technologies: ["Figma", "Canva"],
      projectLink: "/projects/guardian#top",
      gradientFrom: "#F75590",
      gradientTo: "#FF8C94"
    },
    {
      image: GoodReadsImage,
      imageAlt: "GoodReads Website",
      category: "UI/UX Design",
      categoryType: "design",
      title: "GoodReads Website usability study",
      description: "The goal of the GoodReads website usability study was to evaluate the effectiveness of the website's design and functionality in meeting the needs of its users.",
      technologies: ["Figma", "Canva"],
      projectLink: "/projects/goodreads#top",
      gradientFrom: "#F75590",
      gradientTo: "#FF8C94"
    },
    {
      image: CrimsonPlateImage,
      imageAlt: "Crimson Plate Website",
      category: "Front-end",
      categoryType: "coding",
      title: "Crimson Plate Website",
      description: "The goal was to create a responsive, visually engaging, and user-friendly restaurant website that delivers an intuitive, interactive digital experience while accurately reflecting the restaurant's brand, ensuring seamless navigation, performance, and accessibility.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      projectLink: "/projects/crimson-plate#top",
      gradientFrom: "#F75590",
      gradientTo: "#FF6B6B"
    },
    {
      image: AccessibilityImage,
      imageAlt: "Accessibility Study",
      category: "Accessibility",
      categoryType: "design",
      title: "Accessibility Study",
      description: "The goal of the Accessibility Study was to evaluate the effectiveness of the website's design and functionality in meeting the needs of its users.",
      projectLink: "/projects/accessibility#top",
      gradientFrom: "#F75590",
      gradientTo: "#FF8C94"
    },
    {
      image: CultureCafeImage,
      imageAlt: "Culture Cafe",
      category: "Service Design",
      categoryType: "design",
      title: "Culture Cafe",
      description: "A digital platform designed to connect people through cultural experiences and foster community engagement.",
      technologies: ["Research", "Prototyping"],
      projectLink: "/projects/culture-cafe#top",
      gradientFrom: "#7B6F63",
      gradientTo: "#493B32"
    },
    {
      image: ListeningLabImage,
      imageAlt: "Listening Lab Service Design",
      category: "Service Design",
      categoryType: "design",
      title: "Listening Lab",
      description: "The goal of the Listening Lab was to enhance the effectiveness of listening practices within the immigrant services sector by fostering trust, cultural understanding, and empathy.",
      technologies: ["Zoom", "Miro", "Canva"],
      projectLink: "/projects/listening-lab#top",
      gradientFrom: "#FF6B6B",
      gradientTo: "#F75590"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.categoryType === selectedCategory);

  return (

      
      <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 min-h-screen relative w-full pt-30 sm:pt-45 lg:pt-50 lg:px-0 overflow-hidden">
      {/* Decorative elements - kept as divs since they're purely visual */}
      <div className="absolute left-16 md:left-20 top-0 sm:h-[190rem] h-[185rem] md:h-[150rem] lg:h-[80rem] w-[2px] bg-[#493b32]" aria-hidden="true"></div>
      <div className="absolute right-10 top-0 sm:h-[190rem] h-[185rem] md:h-[150rem] lg:h-[80rem] w-[2px] bg-[#493b32]" aria-hidden="true"></div>

      {/* Content container */}
      <section className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 ml-20 lg:ml-10">
        <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 pr-15 sm:pr-15 lg:pl-0 lg:pr-0">
          {/* Page Header */}
          <header className="flex flex-row items-start justify-start gap-1 mb-8">
            <div className="w-[4vh] sm:w-[4vh] md:w-[5vh] h-[3px] bg-gradient-to-r from-[#493B32] to-[#F75590] mt-4" aria-hidden="true"></div>
            <h1
              id="top"
              className="text-2xl sm:text-5xl font-tan text-[#493B32]"
            >
              My Projects
            </h1>
          </header>

          {/* Projects Section */}
          <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              {selectedCategory === "all" ? "All Projects" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Projects`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 sm:ml-0 md:ml-8 lg:ml-0 mb-20 mx-auto max-w-7xl" role="list">
              {filteredProjects.map((project, index) => (
                <article key={index} role="listitem">
                  <ChromaGridCard {...project} index={index} />
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20" role="status" aria-live="polite">
                <p className="text-[#493B32]/60 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default Projects; 