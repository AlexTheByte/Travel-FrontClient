import React, { useContext } from "react";
import "./MainPicture.css";
import TripContext from "contexts/trip.context";

function MainPicture() {
  console.log(process.env.PUBLIC_URL);
  const tripContext = useContext(TripContext);

  return (
    <img
      className="h-full w-full rounded-l object-cover"
      src={tripContext.mainPictureSrc}
      alt={"Test"}
    />
  );
}

export default MainPicture;
