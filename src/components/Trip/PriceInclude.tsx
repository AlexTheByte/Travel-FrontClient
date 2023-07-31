import React from "react";

function PriceInclude() {
  return (
    <div className="flex flex-col rounded-md border-2 border-solid border-gray-200 bg-white shadow-md">
      <div className="px-5 text-left">
        <p>
          <b>Price includes</b>
        </p>
        <ol className="list-disc">
          <li>2 ways travel Nice-Gordon-Nice by car</li>
          <li>1 water bottle / person</li>
        </ol>
      </div>
    </div>
  );
}

export default PriceInclude;
