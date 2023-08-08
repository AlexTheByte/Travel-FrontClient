import React, { useContext } from "react";
import TripContext from "contexts/trip.context";
import { useTranslation } from "react-i18next";

function WhatYouNeed() {
  const tripContext = useContext(TripContext);
  const { t } = useTranslation();

  return (
    <div className="text-left">
      <h2>{t("trip.whatYouNeed")}</h2>
      <ol className="list-disc">
        {tripContext.whatYouNeed.map((wYN) => (
          <li key={"WYN" + wYN.id}>{wYN.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default WhatYouNeed;
