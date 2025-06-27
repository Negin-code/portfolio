import React from "react";

const ScoreGauge = ({ currentScore, targetScore }) => {
  // Calculate the percentage for positioning
  const maxScore = 100;
  const currentPercent = (currentScore / maxScore) * 100;
  const targetPercent = (targetScore / maxScore) * 100;

  return (
    <figure
      className="relative w-full h-60 bg-[#493B32]/5 rounded-xl p-6 overflow-hidden"
      role="img"
      aria-labelledby="score-gauge-title"
      aria-describedby="score-gauge-description"
    >
      <figcaption id="score-gauge-title" className="sr-only">
        SUS Score Visualization showing current score of {currentScore} and
        target score of {targetScore}
      </figcaption>

      {/* Score Scale */}
      <div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"
        aria-hidden="true"
      />

      {/* Current Score Marker */}
      <div
        className="absolute bottom-2 transform -translate-x-1/2 transition-all duration-1000"
        style={{ left: `${currentPercent}%` }}
        role="presentation"
      >
        <div className="relative">
          <div
            className="absolute bottom-0 w-0.5 h-4 bg-[#493B32]"
            aria-hidden="true"
          />
          <div className="absolute bottom-6 -left-14 w-28 text-center">
            <div className="bg-[#493B32] text-white px-3 py-1 rounded-lg text-sm">
              Current: {currentScore}
            </div>
          </div>
        </div>
      </div>

      {/* Target Score Marker */}
      <div
        className="absolute bottom-2 transform -translate-x-1/2 transition-all duration-1000"
        style={{ left: `${targetPercent}%` }}
        role="presentation"
      >
        <div className="relative">
          <div
            className="absolute bottom-0 w-0.5 h-4 bg-green-500"
            aria-hidden="true"
          />
          <div className="absolute bottom-16 -left-14 w-28 text-center">
            <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
              Target: {targetScore}+
            </div>
          </div>
        </div>
      </div>

      {/* Score Labels */}
      <div
        className="absolute bottom-4 left-0 w-full flex justify-between px-4 text-xs text-[#493B32]/70"
        aria-hidden="true"
      >
        <span>0</span>
        <span>Poor</span>
        <span>OK</span>
        <span>Good</span>
        <span>100</span>
      </div>

      <div id="score-gauge-description" className="sr-only">
        Score scale from 0 to 100, with current score at {currentScore} and
        target score at {targetScore}
      </div>
    </figure>
  );
};

const SUSScoreSection = () => {
  return (
    <section className="space-y-8" aria-labelledby="sus-score-heading">
      {/* Header */}
      <header className="flex flex-row items-center gap-2">
        <div
          className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"
          aria-hidden="true"
        ></div>
        <h2
          id="sus-score-heading"
          className="text-2xl sm:text-3xl font-tan text-[#493B32]"
        >
          System Usability Scale (SUS)
        </h2>
      </header>

      {/* Score Display */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        role="group"
        aria-labelledby="sus-score-heading"
      >
        {/* Score Visualization */}
        <article className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow">
          <ScoreGauge currentScore={38.13} targetScore={70} />
        </article>

        {/* Score Description */}
        <article className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <section aria-labelledby="current-score-heading">
              <header className="flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">
                  📉
                </span>
                <h3
                  id="current-score-heading"
                  className="text-xl font-medium text-[#493B32]"
                >
                  Current Score: 38.13
                </h3>
              </header>
              <p className="text-[#493B32]/80 leading-relaxed">
                This significantly low score indicates severe usability issues,
                placing Goodreads well below acceptable standards. Users
                experienced considerable difficulty with basic navigation and
                core functionality.
              </p>
            </section>

            <section
              aria-labelledby="target-score-heading"
              className="pt-4 border-t border-[#493B32]/10"
            >
              <header className="flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">
                  🎯
                </span>
                <div>
                  <h3
                    id="target-score-heading"
                    className="text-xl font-medium text-[#493B32]"
                  >
                    Target: 70+
                  </h3>
                  <p className="text-[#493B32]/80 mt-1">
                    Our goal is to nearly double the usability score, bringing
                    it up to industry standards for good user experience.
                  </p>
                </div>
              </header>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SUSScoreSection;
