import React from "react";
import { BiTime } from "react-icons/bi";

const TaskStep = ({ step }) => (
  <li className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#493B32]/5 text-[#493B32] text-sm font-medium">
    {step}
  </li>
);

const TaskCard = ({ number, title, steps, time, quote, issue, result }) => {
  return (
    <article
      className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group"
      role="listitem"
      aria-labelledby={`task-${number}-title`}
    >
      {/* Task Header */}
      <header className="flex items-start gap-4 mb-6">
        <div
          className="w-10 h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors"
          aria-hidden="true"
        >
          <span className="text-lg font-semibold text-[#493B32]">{number}</span>
        </div>
        <h3
          id={`task-${number}-title`}
          className="text-xl font-medium text-[#493B32]"
        >
          {title}
        </h3>
      </header>

      {/* Task Steps */}
      <section className="mb-6" aria-labelledby={`task-${number}-steps`}>
        <h4 id={`task-${number}-steps`} className="sr-only">
          Task Steps
        </h4>
        <ul
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="Task steps"
        >
          {steps.map((step, index) => (
            <TaskStep key={index} step={step} />
          ))}
        </ul>
      </section>

      {/* Time */}
      <section
        className="flex items-center gap-2 mb-4"
        aria-labelledby={`task-${number}-time`}
      >
        <BiTime className="text-xl text-[#493B32]" aria-hidden="true" />
        <p id={`task-${number}-time`} className="text-[#493B32]/80">
          <span className="font-medium">Avg Time:</span> {time}
        </p>
      </section>

      {/* Quote */}
      <blockquote
        className="bg-[#493B32]/5 rounded-lg p-4 mb-6"
        aria-labelledby={`task-${number}-quote`}
      >
        <div className="flex items-start gap-2">
          <span className="text-lg" aria-hidden="true">
            💬
          </span>
          <p id={`task-${number}-quote`} className="text-[#493B32]/80 italic">
            "{quote}"
          </p>
        </div>
      </blockquote>

      {/* Issues and Results */}
      <section
        className="space-y-4 border-t border-[#493B32]/10 pt-4"
        aria-labelledby={`task-${number}-findings`}
      >
        <h4 id={`task-${number}-findings`} className="sr-only">
          Task Findings
        </h4>

        <article className="bg-red-50/50 rounded-lg p-4">
          <header className="text-sm font-medium text-[#493B32] uppercase tracking-wider mb-2 flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full bg-red-500"
              aria-hidden="true"
            ></div>
            Issue
          </header>
          <p className="text-[#493B32]/80">{issue}</p>
        </article>

        <article className="bg-amber-50/50 rounded-lg p-4">
          <header className="text-sm font-medium text-[#493B32] uppercase tracking-wider mb-2 flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full bg-amber-500"
              aria-hidden="true"
            ></div>
            Result
          </header>
          <p className="text-[#493B32]/80">{result}</p>
        </article>
      </section>
    </article>
  );
};

export default TaskCard;
