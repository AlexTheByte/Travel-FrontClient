import React from "react";
import "./MainPicture.css";

function MainPicture() {
  console.log(process.env.PUBLIC_URL);
  return (
    <img
      className="h-full w-full rounded-l object-cover"
      src={process.env.PUBLIC_URL + "/images/bg/gourdon.jpg"}
      alt={"Test"}
    />
  );
}

export default MainPicture;
