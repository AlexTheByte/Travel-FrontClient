import React from "react";
import Informations from "./Informations";
import PriceInclude from "./PriceInclude";
import Description from "./Description";
import Schedule from "./Schedule";
import Map from "./Map";
import Preparations from "./Preparations";

function PanelStory() {
  return (
    <div className="h-full w-full rounded-sm shadow-xl">
      <div className="flex w-auto flex-col items-center justify-around p-6 shadow-xl drop-shadow-2xl sm:flex-row">
        <div className="basis-none p-6">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-md bg-white">
            <Map className="m-auto h-[90%] w-[90%]"></Map>
          </div>
        </div>
        <div className="flex basis-3/5 flex-col sm:space-y-2">
          <div className="flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0">
            <div className="basis-2/5">
              <Informations />
            </div>
            <div className="basis-3/5">
              <Preparations />
            </div>
          </div>
          <div className="">
            <PriceInclude />
          </div>
        </div>
      </div>

      <div className="flex basis-1/2 flex-col items-center justify-around p-6 drop-shadow-2xl sm:flex-row sm:space-x-6">
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
