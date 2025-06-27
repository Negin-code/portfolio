import React from "react";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { FaSearch, FaUser, FaUsers, FaFilter } from "react-icons/fa";
import { MdVerified, MdLocationOn, MdSort } from "react-icons/md";
import MagnifiableImage from "./MagnifiableImage";

// Import images - you'll need to add these to your assets
import beforeImage from "../assets/Before3.png";
import afterImage3 from "../assets/After3.png";

const FlowStep = ({ icon: Icon, text, iconColor, bgColor }) => (
  <div
    className="flex flex-col items-center gap-1 text-center"
    role="listitem"
    aria-label={text}
  >
    <div
      className="w-6 h-6 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <Icon
        className="w-3 h-3"
        style={{ color: iconColor }}
        aria-hidden="true"
      />
    </div>
    <span className="text-xs text-[#493B32]/80 max-w-[80px] font-medium">
      {text}
    </span>
  </div>
);

const UserFlow = ({ steps }) => (
  <nav
    className="flex items-center justify-center gap-2 py-3"
    role="navigation"
    aria-label="User flow steps"
  >
    <ol className="flex items-center gap-2" role="list">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <li role="listitem">
            <FlowStep
              icon={step.icon}
              text={step.text}
              iconColor={step.iconColor}
              bgColor={step.bgColor}
            />
          </li>
          {index < steps.length - 1 && (
            <BsArrowRight
              className="text-[#493B32]/40 w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            />
          )}
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

const ComparisonPoint = ({ before, after }) => (
  <div className="grid grid-cols-2 gap-4 text-sm" role="row">
    <div className="text-red-500" role="cell">
      <span aria-hidden="true">✖</span> {before}
    </div>
    <div className="text-emerald-600" role="cell">
      <span aria-hidden="true">✓</span> {after}
    </div>
  </div>
);

const BranchingUserFlow = ({ steps }) => {
  const mainPath = steps.filter(
    (step) => !step.isAlternative && !step.isOptional
  );
  const alternativePath = steps.filter((step) => step.isAlternative);
  const optionalSteps = steps.filter((step) => step.isOptional);

  return (
    <nav
      className="space-y-4 py-3"
      role="navigation"
      aria-label="Branching user flow with alternatives"
    >
      {/* Main Path */}
      <div role="group" aria-label="Primary flow path">
        <ol className="flex items-center justify-center gap-2" role="list">
          {mainPath.map((step, index) => (
            <React.Fragment key={index}>
              <li role="listitem">
                <FlowStep
                  icon={step.icon}
                  text={step.text}
                  iconColor={step.iconColor}
                  bgColor={step.bgColor}
                />
              </li>
              {index < mainPath.length - 1 && (
                <BsArrowRight
                  className="text-[#493B32]/40 w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>

      {/* OR text */}
      <div className="flex justify-center">
        <span
          className="text-xs text-[#493B32]/60 font-medium"
          role="separator"
          aria-label="Alternative path separator"
        >
          OR
        </span>
      </div>

      {/* Alternative Path */}
      <div role="group" aria-label="Alternative flow path">
        <ol className="flex items-center justify-center gap-2" role="list">
          {alternativePath.map((step, index) => (
            <React.Fragment key={index}>
              <li role="listitem">
                <FlowStep
                  icon={step.icon}
                  text={step.text}
                  iconColor={step.iconColor}
                  bgColor={step.bgColor}
                />
              </li>
              {index < alternativePath.length - 1 && (
                <BsArrowRight
                  className="text-[#493B32]/40 w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>

      {/* Optional Steps */}
      {optionalSteps.length > 0 && (
        <div
          className="flex flex-col items-center pt-2"
          role="group"
          aria-label="Optional flow steps"
        >
          <BsArrowDown
            className="text-[#493B32]/40 w-4 h-4 mb-2"
            aria-hidden="true"
          />
          <ol className="flex items-center gap-2" role="list">
            {optionalSteps.map((step, index) => (
              <React.Fragment key={index}>
                <li role="listitem">
                  <FlowStep
                    icon={step.icon}
                    text={step.text}
                    iconColor={step.iconColor}
                    bgColor={step.bgColor}
                  />
                </li>
                {index < optionalSteps.length - 1 && (
                  <BsArrowRight
                    className="text-[#493B32]/40 w-4 h-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      )}
    </nav>
  );
};

const FriendDiscoverySection = () => {
  const beforeSteps = [
    {
      icon: FaSearch,
      text: "Search Name",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)",
    },
    {
      icon: FaUsers,
      text: "Multiple Duplicates",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)",
    },
    {
      icon: FaSearch,
      text: "Try Again",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)",
    },
  ];

  const afterSteps = [
    {
      icon: FaSearch,
      text: "Direct Search",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)",
    },
    {
      icon: MdVerified,
      text: "Find Friend",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)",
    },
    {
      icon: FaSearch,
      text: "People Tab",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)",
      isAlternative: true,
    },
    {
      icon: MdVerified,
      text: "Find Friend",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)",
      isAlternative: true,
    },
    {
      icon: MdLocationOn,
      text: "Location Filter",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)",
      isOptional: true,
    },
    {
      icon: MdSort,
      text: "Activity Sort",
      iconColor: "#BE8C63",
      bgColor: "rgba(190, 140, 99, 0.1)",
      isOptional: true,
    },
  ];

  return (
    <section className="space-y-8" aria-labelledby="friend-discovery-heading">
      {/* Solution Title */}
      <header className="space-y-3">
        <h3
          id="friend-discovery-heading"
          className="text-xl sm:text-2xl font-semibold text-[#493B32]"
        >
          Verified Profile Discovery
        </h3>
      </header>

      {/* UI Comparison Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        role="group"
        aria-label="Before and after UI comparison"
      >
        {/* Before Panel */}
        <article className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
          <header>
            <h4 className="text-xl font-semibold text-[#493B32] mb-4">
              Before
            </h4>
          </header>

          {/* Before Image with Magnification */}
          <figure>
            <MagnifiableImage
              src={beforeImage}
              alt="Original Goodreads friend discovery interface"
              caption="Confusing search with duplicate usernames and inactive profiles"
            />
          </figure>

          <aside className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">
              Original Search Flow:
            </p>
            <UserFlow steps={beforeSteps} />
          </aside>
        </article>

        {/* After Panel */}
        <article className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
          <header>
            <h4 className="text-xl font-semibold text-[#493B32] mb-4">After</h4>
          </header>

          {/* After Image with Magnification */}
          <figure>
            <MagnifiableImage
              src={afterImage3}
              alt="Redesigned Goodreads friend discovery interface"
              caption="Clear profile discovery with unique usernames and smart filters"
            />
          </figure>

          <aside className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">
              Improved Search Flow:
            </p>
            <BranchingUserFlow steps={afterSteps} />
          </aside>
        </article>
      </div>

      {/* Key Improvements Callout */}
      <aside
        className="bg-[#493B32]/5 rounded-xl p-6"
        aria-labelledby="improvements-heading"
      >
        <header>
          <h4
            id="improvements-heading"
            className="text-lg font-semibold text-[#493B32] mb-3"
          >
            Key Improvements
          </h4>
        </header>
        <div
          className="space-y-4"
          role="table"
          aria-label="Comparison of improvements"
        >
          <ComparisonPoint
            before="Duplicate usernames causing confusion"
            after="Unique username system with real-time validation"
          />
          <ComparisonPoint
            before="No filtering options for search results"
            after="Smart filters for location and reading activity"
          />
          <ComparisonPoint
            before="Mixed results with inactive profiles"
            after="Profile cards with activity indicators and follower count"
          />
          <ComparisonPoint
            before="Hidden People tab with limited functionality"
            after="Dedicated People tab with advanced search features"
          />

          <div className="mt-6 pt-4 border-t border-[#493B32]/10">
            <p className="text-sm font-medium text-[#493B32]">
              <span aria-hidden="true">🎯</span> Flow Improvement:
            </p>
            <p className="text-sm text-[#493B32]/80 mt-1">
              Scattered → Filtered → Verified
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default FriendDiscoverySection;
