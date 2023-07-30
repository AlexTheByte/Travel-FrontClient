import React, { useState } from "react";
import "./MainPicture.css";

const pictures = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

function MainPicture() {
  const img = {
    url: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  };

  const [pictureIndex, setPictureIndex] = useState(0 as number);

  function onclick(direction: string) {
    let newPictureIndex =
      direction === "+" ? pictureIndex + 1 : pictureIndex - 1;

    if (newPictureIndex === -1) {
      newPictureIndex = pictures.length - 1;
    }
    if (newPictureIndex > pictures.length - 1) {
      newPictureIndex = 0;
    }

    setPictureIndex(newPictureIndex);
  }

  return (
    <div className="relative h-full w-full">
      {pictures.map((picture, index) => (
        // <div
        //   key={"MainPicture" + picture.title}
        //   className={
        //     "picture h-full w-full bg-cover " +
        //     (index !== pictureIndex ? "hidden" : "")
        //   }
        //   style={{
        //     backgroundImage: `url(${picture.img})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     backgroundPositionY: "center",
        //   }}
        // ></div>
        <div
          className={
            "picture h-full w-full " +
            (index !== pictureIndex ? "yes-hidden hidden" : "not-hidden")
          }
          key={"MainPicture" + picture.title}
        >
          <img
            className="h-auto w-full"
            src={picture.img}
            alt={picture.title}
          ></img>
        </div>
      ))}

      <div className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-between">
        <button
          onClick={() => onclick("-")}
          className="ml-20 h-10 w-10 rounded-full"
        >
          {"<"}
        </button>
        <button
          onClick={() => onclick("+")}
          className="mr-20 h-10 w-10 rounded-full"
        >
          {">"}
        </button>
      </div>
    </div>
    // <img
    //   className="h-full w-full rounded-l object-cover"
    //   src={img.url}
    //   alt={img.title}
    // />
  );
}

export default MainPicture;
