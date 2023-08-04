import React from "react";

function TriperDescription() {
  const user = {
    avatarUrl: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    handle: "Name",
  };
  return (
    <div className="flex flex-col-reverse items-center p-6 text-justify sm:flex-row sm:space-x-6">
      <div className="my-auto h-48 w-48 flex-none p-2">
        <img
          className="h-full w-full grow rounded-full ring-2 ring-white"
          src={user.avatarUrl}
          alt={user.handle}
        />
      </div>
      <div className="flex-1 text-gray-900">
        <h1>About the triper</h1>
        <p>
          My friend and I are travel lovers living in Côte D'azur in France.
          With a shared passion for adventure, sports, photography, and
          discovering different cultures, we embark on weekly travel and hiking
          expeditions. Our desire is to connect with like-minded individuals who
          share their passions for exploration, outdoor activities, and diverse
          cultures. We will bond over adrenaline-pumping sports, discovering
          hidden gems, and exchanging stories and languages. Together, we will
          create unforgetable memories, forge lasting friendships.
        </p>
        <p>We are able to speak: English, French, Vietnamese</p>
        <p className="text-right">
          <b>
            <i>Alex</i>
          </b>
        </p>
      </div>
    </div>
  );
}

export default TriperDescription;
