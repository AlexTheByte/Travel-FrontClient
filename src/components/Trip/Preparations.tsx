import React from "react";

function Preparations() {
  return (
    <div className="flex flex-col space-y-5 rounded-md border-2 border-solid border-gray-200 bg-white p-6 shadow-md">
      <div>
        <span>
          <b>Hiking Gear :</b> Bring your own hiking gear, including proper
          shoes, clothing, and equipment.
        </span>
      </div>
      <div>
        <span>
          <b>Meals :</b> Be sure to pack your own food or purchase some in
          Gourdon. There are plenty of local delights to try during our journey.
        </span>
      </div>
      <div>
        <span>
          <b>Water Bottle :</b> While we will provide a 500ml water bottle, we
          encourage you to bring your own refillable water bottle for
          environmental reasons.
        </span>
      </div>
    </div>
  );
}

export default Preparations;
