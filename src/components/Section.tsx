import React, { Children } from "react";

function Section({ children }: { children: any }) {
  return (
    <div className="relative h-full w-full sm:rounded-md border-2 sm:border-solid border-gray-200 shadow-xl drop-shadow-2xl">
      {Children.map(children, (child) => child)}
    </div>
  );
}

export default Section;
