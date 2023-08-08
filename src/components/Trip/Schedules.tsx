import React, { useContext } from "react";
import "./Schedules.css";
import TripContext from "contexts/trip.context";

function Schedules() {
  const tripContext = useContext(TripContext);

  function step({ hour, description }: { hour: string; description: string }) {
    return (
      <div
        className="step relative w-[95%] bg-gray-900"
        key={"Schedule" + hour + description}
      >
        <div className="step-draw absolute left-0 top-0 h-[4px] w-[4px] -translate-x-[2.5px] rounded-full border-[1px] border-solid border-secondary bg-gray-900 "></div>
        <div className="step-description h-full w-full border-b-0 border-l-[1px] border-r-0 border-t-0 border-solid border-l-gray-400 pb-5 pl-5">
          <div className="text-white">
            <span>
              <b>{hour}</b>
            </span>
            <br />
            <span className="text-sm">{description}</span>
          </div>
        </div>
      </div>
    );
  }

  const steps = tripContext.schedules.map((schedule) => step(schedule));

  return (
    <div className="flex h-full max-h-[256px] flex-col overflow-y-scroll rounded-md bg-gray-900 p-6 shadow-md">
      {steps}
    </div>
  );
}

export default Schedules;
