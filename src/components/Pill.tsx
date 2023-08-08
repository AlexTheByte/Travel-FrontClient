import React from "react";

function Pill({ children }: { children: any }) {
  return (
    <span className="rounded-full bg-primary px-3 py-1 text-[12px]">
      {children}
    </span>
  );
}

export default Pill;
