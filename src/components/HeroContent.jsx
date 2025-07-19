import React from "react";
import { PageHeading, RegularText } from "./Typography";

const HeroContent = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <header className="pt-8 mr-10 md:col-span-7 flex flex-col gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 lg:pl-8">
      <hgroup>
        <PageHeading className="leading-tight">
          {title}
          {subtitle && (
            <>
              <span className="block sm:inline">{subtitle.line1}</span>{" "}
              <span className="block sm:inline">{subtitle.line2}</span>{" "}
              <span className="block sm:inline">{subtitle.line3}</span>
            </>
          )}
        </PageHeading>
      </hgroup>

      <div role="complementary" aria-label="Page description">
        <RegularText className="mt-2 sm:mt-4 lg:mt-6 max-w-prose">
          {description}
        </RegularText>
      </div>
    </header>
  );
};

export default HeroContent;
