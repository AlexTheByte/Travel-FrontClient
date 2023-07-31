import React, { useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import "./MainPicture.css";

const images = [
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
];

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

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function MainPicture() {
  // const [pictureIndex, setPictureIndex] = useState(0 as number);

  // function onclick(direction: string) {
  //   let newPictureIndex =
  //     direction === "+" ? pictureIndex + 1 : pictureIndex - 1;

  //   if (newPictureIndex === -1) {
  //     newPictureIndex = pictures.length - 1;
  //   }
  //   if (newPictureIndex > pictures.length - 1) {
  //     newPictureIndex = 0;
  //   }

  //   setPictureIndex(newPictureIndex);
  // }

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="main-picture relative h-full w-full">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={
            {
              // x: { type: "spring", stiffness: 300, damping: 30 },
              // opacity: { duration: 0.2 },
            }
          }
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-between">
        <button
          onClick={() => paginate(1)}
          className="z-10 ml-20 h-10 w-10 rotate-180 rounded-full"
        >
          {"‣"}
        </button>
        <button
          onClick={() => paginate(-1)}
          className="z-10 mr-20 h-10 w-10 rounded-full"
        >
          {"‣"}
        </button>
      </div>
      {/* <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div> */}
      {/* {pictures.map((picture, index) => (
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
          {"‣"}
        </button>
        <button
          onClick={() => onclick("+")}
          className="mr-20 h-10 w-10 rounded-full"
        >
          {"‣"}
        </button>
      </div> */}
    </div>
    // <img
    //   className="h-full w-full rounded-l object-cover"
    //   src={img.url}
    //   alt={img.title}
    // />
  );
}

export default MainPicture;
