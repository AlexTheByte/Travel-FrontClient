import React, { useContext } from "react";
import CalendarIcon from "icons/calendar.icon";
import DayIcon from "icons/day.icon";
import MapPinIcon from "icons/map-pin.icon";
import TripContext from "contexts/trip.context";
import { useTranslation } from "react-i18next";

function PanelHeader() {
  const tripContext = useContext(TripContext);
  const { t } = useTranslation();

  function sendMail() {
    var link =
      `mailto:${tripContext.triper.mail}` +
      "?subject=" +
      encodeURIComponent(t("trip.travelInterested")) +
      "&body=[Describe your profile and ask any question you want]";

    window.location.href = link;
  }

  return (
    <div className="sticky top-2 z-30 mt-2 flex w-[95%] flex-col sm:w-[100%]">
      <div className="flex w-full flex-row items-center justify-between rounded-md bg-white text-center shadow-xl">
        <div className="flex basis-2/3 flex-col items-start space-y-4 p-1 text-[1.2rem] sm:p-6 sm:text-[2rem]">
          <div
            style={{
              fontFamily: "URW Chancery L, cursive",
              textAlign: "left",
            }}
          >
            <span>{tripContext.title}</span>
          </div>
          <div className="flex flex-row items-center justify-start space-x-1 text-[0.6rem] sm:space-x-6 sm:text-[1rem]">
            <div className="flex flex-row items-center space-x-2">
              <MapPinIcon className="text-secondary"></MapPinIcon>
              <div>
                {tripContext.fromAdress} - {tripContext.toAdress} -{" "}
                {tripContext.fromAdress}
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <CalendarIcon className="text-secondary"></CalendarIcon>
              <div>{tripContext.dateDetails}</div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <DayIcon className="text-secondary"></DayIcon>
              <div>{t("trip.day", { count: tripContext.duration })}</div>
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 flex-col items-center justify-end sm:flex-row sm:space-x-6 sm:p-6">
          <div className="flex flex-col">
            <span className="text-[0.6rem] text-secondary sm:text-[1rem]">
              {t("trip.pricePerSlot")}
            </span>
            <div className="text-orange-700">
              <span>
                <b>
                  {tripContext.price} {tripContext.priceCurrency}
                </b>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center sm:space-y-2">
            <button
              onClick={sendMail}
              className="h-6 w-full rounded-lg bg-secondary text-[0.6rem] text-white sm:h-10 sm:text-[1rem]"
            >
              <b>{t("trip.contact")}</b>
            </button>
            <div>
              <span className="text-[0.6rem] sm:text-[1rem]">
                <b>
                  {t("trip.slotAvailable", {
                    count: tripContext.slotsAvailable,
                  })}
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelHeader;

// {
/* <div className="sticky top-2 z-20 mt-2 flex w-[95%] flex-row items-center justify-between rounded-md bg-white text-center shadow-xl sm:w-[100%]">
<div className="flex basis-2/3 flex-col items-start space-y-4 p-1 sm:p-6 sm:text-[2rem]">
  <div
    style={{
      fontFamily: "URW Chancery L, cursive",
      textAlign: "left",
    }}
  >
    <span>Gourdon exploration and hiking</span>
  </div>
  <div className="text-[0.6rem flex flex-row items-center justify-start space-x-1 sm:space-x-6 sm:text-[1rem]">
    <div className="flex flex-row items-center space-x-2">
      <MapPinIcon className="text-secondary"></MapPinIcon>
      <div>Nice - Gourdon - Nice</div>
    </div>
    <div className="flex flex-row items-center space-x-2">
      <CalendarIcon className="text-secondary"></CalendarIcon>
      <div>Jeudi 19 Mai</div>
    </div>
    <div className="flex flex-row items-center space-x-2">
      <DayIcon className="text-secondary"></DayIcon>
      <div>One day</div>
    </div>
  </div>
</div>
<div className="flex basis-1/3 flex-col items-center justify-end sm:flex-row sm:space-x-6 sm:p-6">
  <div className="flex flex-col">
    <span className="text-[0.6rem] text-secondary sm:text-[1rem]">
      price per slot
    </span>
    <div className="text-orange-700">
      <b>50€</b>
    </div>
  </div>
  <button
    onClick={sendMail}
    className="h-6 w-2/3 rounded-lg bg-secondary text-[0.6rem] text-white sm:h-10 sm:text-[1rem]"
  >
    <b>Contact</b>
  </button>
</div>
</div> */
// }
