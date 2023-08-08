import React, { useContext } from "react";
import Pill from "components/Pill";
import TripContext from "contexts/trip.context";

function Activities() {
  const tripContext = useContext(TripContext);

  return (
    <div className="flex flex-row space-x-1 p-2 font-bold text-white">
      {tripContext.activities.map((activity) => (
        <Pill key={"Activity" + activity.id}>{activity.name}</Pill>
      ))}
    </div>
  );
}

export default Activities;
