import React, { Children } from "react";

function SectionLittle({ children }: { children: any }) {
  return (
    <div className="flex flex-col sm:rounded-md border-2 border-gray-200 p-3 sm:border-solid bg-white bg-opacity-40 sm:shadow-md">
      {Children.map(children, (child) => child)}
    </div>
  );
}

export default SectionLittle;
