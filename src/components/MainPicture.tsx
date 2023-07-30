import React from "react";

function MainPicture() {
  const img = {
    url: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  };

  return (
    <div
      className={"h-full w-full bg-cover shadow-md"}
      style={{
        backgroundImage: `url(${img.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    ></div>
    // <img
    //   className="h-full w-full rounded-l object-cover"
    //   src={img.url}
    //   alt={img.title}
    // />
  );
}

export default MainPicture;
