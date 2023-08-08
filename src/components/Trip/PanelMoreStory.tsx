import React from "react";
import Description from "./Description";
import Schedules from "./Schedules";
import Section from "components/Section";
import SectionLittle from "../SectionLittle";
import Activities from "./Activities";

function PanelMoreStory() {
  return (
    <Section>
      <div className="relative flex flex-col items-center justify-around space-y-3 p-2 sm:flex-row sm:space-x-6 sm:space-y-0 sm:p-6">
        <div className="w-full basis-3/5 sm:w-auto">
          <SectionLittle>
            <Description />
          </SectionLittle>
        </div>
        <div className="basis-2/5">
          <Schedules />
        </div>
        <div className="absolute right-2 top-0">
          <Activities />
        </div>
      </div>
    </Section>
  );
}

export default PanelMoreStory;
