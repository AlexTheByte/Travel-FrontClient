import React from "react";

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-primary px-3 py-1 text-[12px]">
      {text}
    </span>
  );
}

export default Pill;
