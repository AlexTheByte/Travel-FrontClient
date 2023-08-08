import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainContainer({ children }: { children: any }) {
  return (
    <div className="itms-center flex h-auto w-full flex-col justify-center text-base">
      <div className="flex h-12 w-full items-center justify-center bg-primary">
        <Header />
      </div>
      {children}
      <div className="flex h-12 w-full items-center justify-center bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;
