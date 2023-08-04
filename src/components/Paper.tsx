import React, { Children } from "react";
import "./Paper.css";

function Paper({ children }: { children: any }) {
  return (
    <div className="bg-paper flex h-full w-full items-center justify-center rounded-lg shadow-2xl">
      {Children.map(children, (child) => child)}
    </div>
  );
}

export default Paper;
