import React from "react";

function PriceInclude() {
  return (
    // flex h-full w-auto cursor-pointer flex-row items-center justify-around space-x-2 border-r-2 border-gray-vs-900 p-2 last:border-r-0
    <div className="p-6">
      <div className="flex flex-col rounded-md border-2 border-solid border-gray-200 bg-white shadow-md">
        {/* <div className="w-[100%] border-b-2 border-l-0 border-r-0 border-t-0 border-solid border-gray-200 py-10 text-center">
        <span>50€</span>
      </div> */}
        <div className="px-5 text-left">
          <p>
            <b>Price includes</b>
          </p>
          <ol>
            <li>Blahblah</li>
            <li>Coucou</li>
            <li>Coucou</li>
            <li>Coucou</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PriceInclude;
