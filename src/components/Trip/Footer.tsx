import React from "react";

function Footer({ className }: { className: string }) {
  return (
    <div className={"relative h-full w-full " + className}>
      <p
        className="absolute right-2 bottom-1 text-white "
        style={{
          fontFamily: "URW Chancery L, cursive",
          fontSize: "0.5rem",
        }}
      >
        <b>Alpha Version</b>
      </p>
    </div>
  );
}

export default Footer;
