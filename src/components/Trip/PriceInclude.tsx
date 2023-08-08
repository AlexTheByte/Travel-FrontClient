import React, { useContext } from "react";
import TripContext from "contexts/trip.context";
import { useTranslation } from "react-i18next";

function PriceInclude() {
  const tripContext = useContext(TripContext);
  const { t } = useTranslation();

  return (
    <div className="text-left">
      <h2>{t("trip.priceIncludes")}</h2>
      <ol className="list-disc">
        {tripContext.priceIncludes.map((pI) => (
          <li key={"PriceIncludes" + pI.id}>{pI.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default PriceInclude;
