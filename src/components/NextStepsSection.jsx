import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const NextStepCard = ({ step, number }) => (
  <article
    className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group"
    role="listitem"
    aria-labelledby={`next-step-${number}`}
  >
    <div className="flex items-start gap-4">
      {/* Step Number */}
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
        aria-hidden="true"
      >
        <span className="text-lg font-semibold text-[#493B32]">{number}</span>
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <p
            id={`next-step-${number}`}
            className="text-lg text-[#493B32] leading-relaxed"
          >
            {step}
          </p>
        </div>
      </div>
    </div>
  </article>
);

const NextStepsSection = () => {
  const steps = [
    "Conduct second-round testing on mobile experience",
    "Explore notifications for discussion replies and new friend activity",
    "Add accessibility enhancements",
    "Develop a community onboarding experience",
  ];

  return (
    <section className="space-y-8" aria-labelledby="next-steps-heading">
      {/* Header */}
      <header className="flex flex-row items-center gap-2">
        <div
          className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
          aria-hidden="true"
        ></div>
        <h2
          id="next-steps-heading"
          className="text-2xl sm:text-3xl font-tan text-[#493B32]"
        >
          Next Steps
        </h2>
      </header>

      {/* Introduction */}
      <aside
        className="bg-[#493B32]/5 rounded-xl p-6 sm:p-8"
        aria-labelledby="next-steps-intro"
      >
        <p id="next-steps-intro" className="text-[#493B32]/80 text-lg">
          Moving forward, we've identified key areas to focus on for continued
          improvement of the Goodreads experience:
        </p>
      </aside>

      {/* Steps Stack */}
      <ol
        className="space-y-4"
        role="list"
        aria-label="Next steps for improving the Goodreads experience"
      >
        {steps.map((step, index) => (
          <li key={index} role="listitem">
            <NextStepCard
              step={step}
              number={(index + 1).toString().padStart(2, "0")}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default NextStepsSection;
