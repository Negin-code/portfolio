import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiCodeAlt, BiPalette } from "react-icons/bi";

import Button from "../components/Button";
import AnimatedThreads from "../components/AnimatedThreads";
import CategoryCard from "../components/CategoryCard";
import { HeroHeading, SectionHeading, LargeText, GradientText } from "../components/Typography";

const Home = () => {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 min-h-screen relative w-full pt-20 lg:pt-40 lg:px-0 overflow-hidden">
      {/* Decorative elements - purely visual */}
      <div
        className="absolute left-16 md:left-20 top-0 sm:h-[40rem] h-[38rem] md:h-[40rem] lg:h-[40rem] xl:h-[50rem] w-[2px] bg-[#493b32]"
        aria-hidden="true"
      >
        <span className="absolute -left-6 md:-left-9 top-[40rem] sm:top-[43rem] md:top-[45rem] lg:top-[45rem] xl:top-[54rem] -translate-y-1/2 rotate-[-90deg] text-md md:text-xl text-[#493B32] font-tan">
          2025
        </span>
      </div>

      {/* Social Navigation */}
      <nav
        className="absolute right-10 top-0 sm:h-[35rem] h-[30rem] md:h-[38rem] lg:h-[38rem] xl:h-[45rem] w-[2px] bg-[#493b32]"
        aria-label="Social media links"
      >
        <div className="absolute -right-3 sm:top-[42rem] top-[36rem] md:top-[42rem] lg:top-[45rem] xl:top-[52rem] -translate-y-1/2 flex flex-col items-center justify-evenly gap-7 z-20 text-[#493b32]">
          <a
            href="https://www.linkedin.com/in/neginasem/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:iamneginasem@gmail.com"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="Email Contact"
          >
            <MdEmail size={32} />
          </a>
          <a
            href="https://github.com/Negin-code"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2"
        aria-labelledby="hero-heading"
      >
        {/* Hero Content */}
        <header className="col-span-4 md:col-span-6 lg:col-span-11 text-right mt-15 md:mt-20 px-6 md:px-10 lg:px-0">
          <HeroHeading
            id="hero-heading"
            className="leading-relaxed mb-6 mr-8 lg:mr-0"
          >
            <GradientText as="span" className="block">
              UI/UX Designer
            </GradientText>
            <span className="block text-[#493B32] mt-2" aria-hidden="true">
              &
            </span>
            <GradientText as="span" className="block">
              Frontend Developer
            </GradientText>
          </HeroHeading>

          <div className="max-w-2xl ml-auto mt-10">
            <LargeText className="font-open mb-6 leading-relaxed sm:leading-tight mr-8 lg:mr-0">
              Bridging the gap between
              <span className="block sm:inline text-[#F75590] font-bold">
                {" "}
                logic and empathy
              </span>
            </LargeText>
          </div>

          {/* Call to Action */}
          <div
            className="flex flex-col sm:flex-row items-center justify-end sm:mr-8 lg:mr-0 gap-8 sm:gap-6 mt-20 sm:mt-15"
            role="group"
            aria-label="Primary actions"
          >
            <Button
              href="/assets/resume/resume.pdf"
              variant="primary"
              className="w-[225px] sm:w-auto text-center"
              showArrow={true}
            >
              View My Resume
            </Button>
            <Button
              href="https://www.linkedin.com/in/neginasem/"
              variant="outline"
              className="w-[225px] sm:w-auto text-center"
            >
              Let's Connect
            </Button>
          </div>
        </header>
      </section>

      {/* Animated Threads Section */}
      <section className="col-span-full mt-10 sm:mt-40 md:mt-10 lg:mt-0 mb-10">
        <AnimatedThreads />
      </section>

      {/* Services Section */}
      <section
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 col-span-full mb-10 sm:mb-20 px-6 md:px-10 lg:px-20 bg-[#FFF7F2]"
        aria-labelledby="services-heading"
      >
        {/* Section Header */}
        <header className="col-span-full flex items-center gap-4 mb-12">
          <div
            className="w-[4vh] md:w-[9vh] h-[2px]"
            style={{
              background: "linear-gradient(to right, #493B32, #F75590)",
            }}
            aria-hidden="true"
          ></div>
          <SectionHeading
            id="services-heading"
          >
            What I Do
          </SectionHeading>
        </header>

        {/* Services Grid */}
        <div
          className="col-span-full lg:col-start-2 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 mt-0 sm:mt-10 gap-8 md:gap-15 max-w-5xl mx-auto"
          role="list"
        >
          {/* UX/UI Design Service */}
          <article role="listitem">
            <CategoryCard
              icon={BiPalette}
              title="UX/UI Design"
              description="Creating intuitive interfaces with a focus on user experience, wireframing, prototyping, and visual design that connects with users."
              buttonText="View UX/UI Projects"
              buttonHref="/projects?category=design#top"
              gradientFrom="#F75590"
              gradientTo="#493B32"
            />
          </article>

          {/* Frontend Development Service */}
          <article role="listitem">
            <CategoryCard
              icon={BiCodeAlt}
              title="Frontend Development"
              description="Building responsive, interactive web applications with modern frameworks and best practices for optimal performance."
              buttonText="View Frontend Projects"
              buttonHref="/projects?category=coding#top"
              gradientFrom="#493B32"
              gradientTo="#F75590"
            />
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
