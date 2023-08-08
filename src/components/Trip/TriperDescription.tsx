import React, { useContext } from "react";
import TripContext from "contexts/trip.context";

function TriperDescription() {
  const user = {
    avatarUrl: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    handle: "Name",
  };
  const tripService = useContext(TripContext);

  return (
    <div className="flex flex-col-reverse items-center p-6 text-justify sm:flex-row sm:space-x-6">
      <div className="my-auto h-48 w-48 flex-none p-2">
        <img
          className="h-full w-full grow rounded-full ring-2 ring-white"
          src={tripService.triper.avatarSrc}
          alt={tripService.triper.pseudo}
        />
      </div>
      <div className="flex-1 text-gray-900">
        <h1>About the triper</h1>
        <p>{tripService.triper.description}</p>
        <p>We are able to speak: English, French, Vietnamese</p>
        <p className="text-right">
          <b>
            <i>{tripService.triper.pseudo}</i>
          </b>
        </p>
      </div>
    </div>
  );
}

export default TriperDescription;
