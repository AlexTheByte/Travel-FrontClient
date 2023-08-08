import React, { useContext } from "react";
import TripContext from "contexts/trip.context";
import { useTranslation } from "react-i18next";

function TriperDescription() {
  const tripService = useContext(TripContext);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col-reverse items-center p-6 text-justify sm:flex-row sm:space-x-6">
      <div className="my-auto h-48 w-48 flex-none p-2">
        <img
          className="h-full w-full grow rounded-full ring-2 ring-white"
          src={tripService.triper.avatarSrc}
          alt={tripService.triper.pseudo}
        />
      </div>
      <div className="flex-1 text-gray-900">
        <h1>{t("trip.aboutOrganizer")}</h1>
        <p>{tripService.triper.description}</p>
        <p>We are able to speak: English, French, Vietnamese</p>
        <p className="text-right">
          <b>
            <i>{tripService.triper.pseudo}</i>
          </b>
        </p>
      </div>
    </div>
  );
}

export default TriperDescription;
