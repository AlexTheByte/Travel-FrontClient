import React from "react";

function Header({ className }: { className: string }) {
  return (
    <div className={"h-full w-full " + className}>
      <h1
        className="m-0 ml-2 mt-2 text-white "
        style={{ fontFamily: "URW Chancery L, cursive" }}
      >
        <b>Travel companion</b>
      </h1>
    </div>
  );
}

export default Header;
