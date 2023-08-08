import React, { useContext } from "react";
import TripContext from "contexts/trip.context";

function PriceInclude() {
  const tripContext = useContext(TripContext);

  return (
    <div className="text-left">
      <h2>Price includes</h2>
      <ol className="list-disc">
        {tripContext.priceIncludes.map((pI) => (
          <li key={"PriceIncludes" + pI.id}>{pI.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default PriceInclude;
