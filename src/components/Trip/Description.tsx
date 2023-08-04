import React from "react";

function Description(): React.ReactElement {
  return (
    <div className="flex flex-col p-1 text-justify">
      <div>
        <h2>Description :</h2>
      </div>
      <div>
        <p>
          We're planning a thrilling car trip combined with exhilarating hiking
          experiences. We would like to find 02 more travel companions to share
          the adventure with us.
        </p>
        <p>
          <b>About Gordon :</b> Situated just 40 kilometers away from Nice,
          Gourdon is renowned for its remarkable hiking trails, making it a
          nature lover's paradise. It's also considered one of the finest
          paragliding destinations in the Provence-Alpes-Côte d'Azur
          region.Moreover, it's a place with history and culture richness. In
          this trip, we are able to visit: Gourdon Castle (Château de Gourdon)
          and Village of Gourdon
        </p>
        <p>
          <b>About hiking :</b> Surrounding Gourdon are numerous hiking trails
          that wind through the beautiful Provençal countryside. We will choose
          the hike with depending on the weather and our interest. Difficulty :
          Easy to medium. Duration : Less than 03 hours
        </p>
      </div>
    </div>
  );
}

export default Description;
