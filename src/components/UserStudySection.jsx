import React from "react";

const StudyMethod = ({ method }) => (
  <li className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#493B32]/10 hover:shadow-sm transition-shadow">
    <div className="w-2 h-2 rounded-full bg-[#493B32]" aria-hidden="true"></div>
    <p className="text-[#493B32] text-base sm:text-lg">{method}</p>
  </li>
);

const ParticipantCard = ({ label, value }) => (
  <article className="bg-[#493B32]/5 rounded-lg p-4 hover:bg-[#493B32]/10 transition-colors">
    <h4 className="text-sm text-[#493B32]/70 mb-1">{label}</h4>
    <p className="text-base sm:text-lg font-medium text-[#493B32]">{value}</p>
  </article>
);

const UserStudySection = () => {
  const methods = [
    "Task-based testing (6 total tasks, 4 participants)",
    "Observations and think-aloud protocol",
    "SUS survey for scoring usability",
  ];

  const participants = [
    { label: "Ages", value: "21–42" },
    { label: "Tech Proficiency", value: "Moderate" },
    { label: "Familiarity with Goodreads", value: "0–Moderate" },
    {
      label: "Roles",
      value: "Medical student, design student, accountant, supervisor",
    },
  ];

  return (
    <section className="space-y-12" aria-labelledby="user-study-heading">
      {/* Header */}
      <header className="flex flex-row items-center gap-2">
        <div
          className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
          aria-hidden="true"
        ></div>
        <h2
          id="user-study-heading"
          className="text-2xl sm:text-3xl font-tan text-[#493B32]"
        >
          User Study
        </h2>
      </header>

      {/* Methodology Section */}
      <section className="space-y-6" aria-labelledby="methodology-heading">
        <header>
          <h3
            id="methodology-heading"
            className="text-xl font-medium text-[#493B32]"
          >
            Methodology
          </h3>
        </header>
        <ul className="space-y-3" role="list" aria-label="Study methods">
          {methods.map((method, index) => (
            <StudyMethod key={index} method={method} />
          ))}
        </ul>
      </section>

      {/* Participants Section */}
      <section className="space-y-6" aria-labelledby="participants-heading">
        <header>
          <h3
            id="participants-heading"
            className="text-xl font-medium text-[#493B32]"
          >
            Participants
          </h3>
        </header>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="Participant demographics"
        >
          {participants.map((participant, index) => (
            <ParticipantCard
              key={index}
              label={participant.label}
              value={participant.value}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default UserStudySection;
