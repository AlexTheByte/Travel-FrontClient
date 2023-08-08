import React, { useContext } from "react";
import PriceInclude from "./PriceInclude";
import Map from "./Map";
import WhatYouNeed from "./WhatYouNeed";
import Section from "components/Section";
import SectionLittle from "../SectionLittle";

function PanelStory() {
  return (
    <Section>
      <div className="flex flex-col-reverse items-center justify-around p-2 sm:flex-row sm:p-6">
        <div className="m-2 flex h-[300px] w-[300px] items-center justify-center rounded-md bg-white sm:m-0 sm:h-[400px] sm:w-[400px]">
          <Map className=""></Map>
        </div>

        <div className="flex w-full flex-col sm:w-auto sm:space-y-2">
          <SectionLittle>
            <PriceInclude />
          </SectionLittle>
          <SectionLittle>
            <WhatYouNeed />
          </SectionLittle>
        </div>
      </div>
    </Section>
  );
}

export default PanelStory;
