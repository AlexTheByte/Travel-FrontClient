import React from "react";
import Description from "./Description";
import Schedule from "./Schedule";
import Section from "components/Section";
import SectionLittle from "../SectionLittle";

function PanelMoreStory() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-around space-y-6 p-2 sm:flex-row sm:space-x-6 sm:space-y-0 sm:p-6">
        <div className="w-full basis-3/5 sm:w-auto">
          <SectionLittle>
            <Description />
          </SectionLittle>
        </div>
        <div className="basis-2/5">
          <Schedule />
        </div>
      </div>
    </Section>
  );
}

export default PanelMoreStory;
