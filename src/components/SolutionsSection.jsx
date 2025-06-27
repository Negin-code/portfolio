import React from "react";
import UIComparisonSection from "./UIComparisonSection";
import DiscussionUISection from "./DiscussionUISection";
import FriendDiscoverySection from "./FriendDiscoverySection";

const SolutionsSection = () => {
  return (
    <section className="space-y-12" aria-labelledby="solutions-heading">
      {/* Header */}
      <header className="flex flex-row items-center gap-2">
        <div
          className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
          aria-hidden="true"
        ></div>
        <h2
          id="solutions-heading"
          className="text-2xl sm:text-3xl font-tan text-[#493B32]"
        >
          Solutions
        </h2>
      </header>

      {/* Solutions Container */}
      <div
        className="grid grid-cols-1 gap-16"
        role="list"
        aria-label="Design solutions"
      >
        {/* First Solution */}
        <article
          className="bg-white rounded-xl p-8 shadow-sm border border-[#493B32]/10"
          role="listitem"
        >
          <UIComparisonSection />
        </article>

        {/* Second Solution */}
        <article
          className="bg-white rounded-xl p-8 shadow-sm border border-[#493B32]/10"
          role="listitem"
        >
          <DiscussionUISection />
        </article>

        {/* Third Solution */}
        <article
          className="bg-white rounded-xl p-8 shadow-sm border border-[#493B32]/10"
          role="listitem"
        >
          <FriendDiscoverySection />
        </article>
      </div>
    </section>
  );
};

export default SolutionsSection;
