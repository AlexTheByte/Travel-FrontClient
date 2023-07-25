import React from "react";

function TriperDescription() {
  const user = {
    avatarUrl: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    handle: "Name",
  };
  return (
    <div className="flex flex-row space-x-5 p-5">
      <div className="p-2 my-auto flex-none w-28 h-28">
        <img
          className="grow h-full w-full rounded-full ring-2 ring-white"
          src={user.avatarUrl}
          alt={user.handle}
        />
      </div>
      <div className="flex-1">
        <p>
          <b>The Triper </b>
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
}

export default TriperDescription;
