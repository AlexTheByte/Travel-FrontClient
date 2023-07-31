import React from "react";

function Header({ className }: { className: string }) {
  return (
    <div className={"h-full w-full " + className}>
      <h2
        className="m-0 ml-2 mt-2 text-white "
        style={{ fontFamily: "URW Chancery L, cursive" }}
      >
        <b>Travel companion</b>
      </h2>
    </div>
  );
}

export default Header;
