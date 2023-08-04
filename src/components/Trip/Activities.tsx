import Pill from "components/Pill";
import React from "react";

function Activities() {
  return (
    <div className="flex flex-row space-x-1 p-2 font-bold text-white">
      <Pill text="Hiking"></Pill>
      <Pill text="Eating"></Pill>
      <Pill text="City visit"></Pill>
      <Pill text="Car"></Pill>
    </div>
  );
}

export default Activities;
