import React, { PropsWithChildren } from "react";
import "./Paper.css";

function Paper({ props }: { props: any }) {
  return (
    <div className="bg-paper flex h-full w-full items-center justify-center rounded-lg shadow-2xl">
      {props.children}
    </div>
  );
}

export default Paper;
