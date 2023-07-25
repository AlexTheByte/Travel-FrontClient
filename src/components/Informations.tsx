import React from "react";

function Informations(): React.ReactElement {
  return (
    <div className="flex flex-col p-1 space-y-3">
      <div>
        <span>
          <b>Name of the trip</b>
        </span>
      </div>
      <div className="flex flex-row space-x-5">
        <div>
          <span>
            <b>Destination :</b> Gordon
          </span>
        </div>
        <div>
          <span>
            <b>Way of traveling :</b> car
          </span>
        </div>
        <div>
          <span>
            <b>Total slots :</b> 4
          </span>
        </div>
      </div>
    </div>
  );
}

export default Informations;
