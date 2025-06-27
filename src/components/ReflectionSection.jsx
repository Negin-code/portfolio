import React from "react";
import { BsStars } from "react-icons/bs";

const ReflectionCard = ({ title, description, index }) => (
  <article
    className="relative bg-gradient-to-br from-white to-[#493B32]/5 rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group overflow-hidden"
    role="listitem"
    aria-labelledby={`reflection-${index}-title`}
  >
    {/* Background decoration */}
    <div
      className="absolute top-0 right-0 w-32 h-32 bg-[#493B32]/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>

    <div className="relative">
      {/* Title with icon */}
      <header className="flex items-center gap-3 mb-4">
        <BsStars
          className="text-[#493B32] text-xl group-hover:text-amber-400 transition-colors"
          aria-hidden="true"
        />
        <h3
          id={`reflection-${index}-title`}
          className="text-xl font-medium text-[#493B32] font-tan"
        >
          {title}
        </h3>
      </header>

      {/* Description */}
      <p className="text-[#493B32]/80 text-lg leading-relaxed pl-9">
        {description}
      </p>
    </div>
  </article>
);

const ReflectionSection = () => {
  const reflections = [
    {
      title: "Design Where Action Happens",
      description:
        'Users need controls like "edit shelf" exactly where they expect to act.',
    },
    {
      title: "The Power of Small UX Changes",
      description:
        "Tiny shifts like tabbed search and feedback made a big difference in usability.",
    },
    {
      title: "It's Not About Pretty - It's About Mental Models",
      description:
        "Real UX impact comes from aligning with user expectations, not just redesigning visually.",
    },
  ];

  return (
    <section className="space-y-8" aria-labelledby="reflections-heading">
      {/* Header */}
      <header className="flex flex-row items-center gap-2">
        <div
          className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
          aria-hidden="true"
        ></div>
        <h2
          id="reflections-heading"
          className="text-2xl sm:text-3xl font-tan text-[#493B32]"
        >
          Reflections
        </h2>
      </header>

      {/* Introduction */}
      <aside
        className="bg-[#493B32]/5 rounded-xl p-6 sm:p-8"
        aria-labelledby="reflections-intro"
      >
        <p id="reflections-intro" className="text-[#493B32]/80 text-lg">
          Through this usability study, we gained valuable insights that shaped
          our understanding of effective UX design:
        </p>
      </aside>

      {/* Reflections Stack */}
      <div
        className="space-y-6"
        role="list"
        aria-label="Key reflections from the study"
      >
        {reflections.map((reflection, index) => (
          <ReflectionCard
            key={index}
            index={index}
            title={reflection.title}
            description={reflection.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ReflectionSection;
