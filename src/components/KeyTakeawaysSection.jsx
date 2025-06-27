import React from "react";
import { BsLightbulb } from "react-icons/bs";

const TakeawayCard = ({ takeaway, index }) => (
  <article
    className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group"
    role="listitem"
    aria-labelledby={`takeaway-${index}`}
  >
    <div className="flex items-start gap-3">
      <div className="mt-1" aria-hidden="true">
        <BsLightbulb className="text-[#493B32] text-xl group-hover:text-amber-400 transition-colors" />
      </div>
      <p
        id={`takeaway-${index}`}
        className="text-[#493B32] text-lg leading-relaxed"
      >
        {takeaway}
      </p>
    </div>
  </article>
);

const KeyTakeawaysSection = () => {
  const takeaways = [
    "Poor shelf management flow leads to frustration",
    "Lack of filtering and visibility hinders social interaction",
    "Discussions are hidden, reducing community engagement",
  ];

  return (
    <section className="space-y-8" aria-labelledby="key-takeaways-heading">
      {/* Header */}
      <header className="flex flex-row items-center gap-2">
        <div
          className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
          aria-hidden="true"
        ></div>
        <h2
          id="key-takeaways-heading"
          className="text-2xl sm:text-3xl font-tan text-[#493B32]"
        >
          Key Takeaways
        </h2>
      </header>

      {/* Introduction */}
      <aside
        className="bg-[#493B32]/5 rounded-xl p-6"
        aria-labelledby="takeaways-intro"
      >
        <p id="takeaways-intro" className="text-[#493B32]/80 text-lg">
          Our usability study revealed several critical areas that significantly
          impact the user experience on Goodreads:
        </p>
      </aside>

      {/* Takeaways Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label="Key takeaways from usability study"
      >
        {takeaways.map((takeaway, index) => (
          <TakeawayCard key={index} takeaway={takeaway} index={index} />
        ))}
      </div>
    </section>
  );
};

export default KeyTakeawaysSection;
