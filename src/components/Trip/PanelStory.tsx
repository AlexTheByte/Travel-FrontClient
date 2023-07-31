import React from "react";
import Informations from "./Informations";
import PriceInclude from "./PriceInclude";
import Description from "./Description";
import Schedule from "./Schedule";

function PanelStory() {
  return (
    <div className="h-full w-full rounded-sm shadow-xl">
      <div className="flex w-full flex-col items-center justify-between shadow-xl drop-shadow-2xl sm:flex-row">
        <div className="basis-1/5">
          <Informations></Informations>
        </div>

        <div className="basis-none h-auto w-auto p-6">
          <div className="h-[256px] w-[256px] bg-black"></div>
        </div>

        <div className="basis-2/5">
          <PriceInclude />
        </div>
      </div>
      <div className=" flex basis-1/2 flex-col items-center justify-around space-x-6 p-6 drop-shadow-2xl sm:flex-row">
        <div className="basis-3/5">
          <Description />
        </div>
        <div className="basis-2/5">
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default PanelStory;
