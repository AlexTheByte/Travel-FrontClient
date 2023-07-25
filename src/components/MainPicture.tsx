import React from "react";

function MainPicture() {
  const img = {
    url: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  };

  return (
    <div
      className={"h-full w-full rounded-l bg-cover shadow-md"}
      style={{
        backgroundImage: `url(${img.url})`,
        backgroundRepeat: "no-repeat",
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
