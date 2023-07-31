import React from "react";

function Informations(): React.ReactElement {
  return (
    <div className="flex flex-col space-y-5 p-6">
      <div>
        <span>
          <b>Destination :</b> Gourdon
        </span>
      </div>
      <div>
        <span>
          <b>Way of traveling :</b> car
        </span>
      </div>
      <div>
        <span>
          <b>Slots available :</b> 4
        </span>
      </div>
      <div className="space-x-1">
        <span className="rounded-full bg-teal-300 px-1 py-0.5 text-[12px]">
          Hiking
        </span>

        <span className="rounded-full bg-teal-300 px-1 py-0.5 text-[12px]">
          Eating
        </span>
      </div>
    </div>
  );
}

export default Informations;
