import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaBook, FaKeyboard, FaCheck } from "react-icons/fa";
import { MdAdd, MdInput } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import MagnifiableImage from "./MagnifiableImage";

// Import images with correct filenames
import beforeImage from "../assets/Before1.png";
import afterImage from "../assets/After1.png";

const FlowStep = ({ icon: Icon, text, iconColor, bgColor }) => (
  <li className="flex flex-col items-center gap-1 text-center min-w-[60px] sm:min-w-[80px]">
    <div
      className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <Icon
        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
        style={{ color: iconColor }}
      />
    </div>
    <span className="text-[10px] sm:text-xs text-[#493B32]/80 max-w-[60px] sm:max-w-[80px] font-medium leading-tight">
      {text}
    </span>
  </li>
);

const UserFlow = ({ steps, label }) => (
  <nav className="overflow-x-auto pb-2" aria-label={label}>
    <ol
      className="flex items-center w-max gap-1 sm:gap-2 py-2 sm:py-3"
      role="list"
    >
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <FlowStep
            icon={step.icon}
            text={step.text}
            iconColor={step.iconColor}
            bgColor={step.bgColor}
          />
          {index < steps.length - 1 && (
            <li aria-hidden="true">
              <BsArrowRight className="text-[#493B32]/40 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </li>
          )}
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

const ComparisonPoint = ({ before, after }) => (
  <div
    className="grid grid-cols-2 gap-4 text-sm"
    role="group"
    aria-label="Before and after comparison"
  >
    <div className="text-red-500" aria-label="Before state">
      ✖ {before}
    </div>
    <div className="text-emerald-600" aria-label="After state">
      ✓ {after}
    </div>
  </div>
);

const UIComparisonSection = () => {
  const beforeSteps = [
    {
      icon: FaBook,
      text: "My Books",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)",
    },
    {
      icon: MdInput,
      text: "Find Input",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)",
    },
    {
      icon: FaKeyboard,
      text: "Type Name",
      iconColor: "#BE8C63",
      bgColor: "rgba(190, 140, 99, 0.1)",
    },
    {
      icon: FaCheck,
      text: "No Feedback",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)",
    },
  ];

  const afterSteps = [
    {
      icon: FaBook,
      text: "My Books",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)",
    },
    {
      icon: MdAdd,
      text: "Create Shelf",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)",
    },
    {
      icon: FaKeyboard,
      text: "Fill Details",
      iconColor: "#BE8C63",
      bgColor: "rgba(190, 140, 99, 0.1)",
    },
    {
      icon: IoMdCheckmarkCircle,
      text: "Success ✓",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)",
    },
  ];

  return (
    <section className="space-y-8" aria-labelledby="ui-comparison-heading">
      {/* Solution Title */}
      <header className="space-y-3">
        <h3
          id="ui-comparison-heading"
          className="text-xl sm:text-2xl font-semibold text-[#493B32]"
        >
          Streamlined Shelf Creation
        </h3>
      </header>

      {/* UI Comparison Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"
        role="group"
        aria-labelledby="ui-comparison-heading"
      >
        {/* Before Panel */}
        <article className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10">
          <header>
            <h4 className="text-lg sm:text-xl font-semibold text-[#493B32] mb-4">
              Before
            </h4>
          </header>

          {/* Image Container */}
          <figure className="w-full aspect-[4/3] mb-4">
            <MagnifiableImage
              src={beforeImage}
              alt="Original Goodreads shelf creation interface"
              caption="Original interface with hidden input field and no guidance"
            />
          </figure>

          <aside className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">
              Original User Flow:
            </p>
            <UserFlow steps={beforeSteps} label="Original user flow steps" />
          </aside>
        </article>

        {/* After Panel */}
        <article className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10">
          <header>
            <h4 className="text-lg sm:text-xl font-semibold text-[#493B32] mb-4">
              After
            </h4>
          </header>

          {/* Image Container */}
          <figure className="w-full aspect-[4/3] mb-4">
            <MagnifiableImage
              src={afterImage}
              alt="Redesigned Goodreads shelf creation interface"
              caption="Redesigned interface with clear modal and guided process"
            />
          </figure>

          <aside className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">
              Improved User Flow:
            </p>
            <UserFlow steps={afterSteps} label="Improved user flow steps" />
          </aside>
        </article>
      </div>

      {/* Key Improvements Callout */}
      <aside
        className="bg-[#493B32]/5 rounded-xl p-4 sm:p-6"
        aria-labelledby="key-improvements-heading"
      >
        <header>
          <h4
            id="key-improvements-heading"
            className="text-base sm:text-lg font-semibold text-[#493B32] mb-3"
          >
            Key Improvements
          </h4>
        </header>
        <div
          className="space-y-4"
          role="list"
          aria-label="List of key improvements"
        >
          <ComparisonPoint
            before="Hidden input field with no clear entry point"
            after="Prominent '+ Create Shelf' button in main navigation"
          />
          <ComparisonPoint
            before="No guidance or validation during creation"
            after="Modal with clear form fields and validation"
          />
          <ComparisonPoint
            before="No feedback on successful creation"
            after="Visual confirmation and success notification"
          />
          <ComparisonPoint
            before="Inconsistent visibility settings"
            after="Clear privacy options with visual indicators"
          />

          <div className="mt-6 pt-4 border-t border-[#493B32]/10">
            <p className="text-sm font-medium text-[#493B32]">
              🎯 Flow Improvement:
            </p>
            <p className="text-sm text-[#493B32]/80 mt-1">
              Hidden → Guided → Confirmed
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default UIComparisonSection;
