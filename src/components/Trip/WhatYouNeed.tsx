import React, { useContext } from "react";
import TripContext from "contexts/trip.context";

function WhatYouNeed() {
  const tripContext = useContext(TripContext);
  return (
    <div className="text-left">
      <h2>What you need to prepare :</h2>
      <ol className="list-disc">
        {tripContext.whatYouNeed.map((wYN) => (
          <li key={"WYN" + wYN.id}>{wYN.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default WhatYouNeed;
