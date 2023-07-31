import React from "react";
import CalendarIcon from "icons/calendar.icon";
import DayIcon from "icons/day.icon";

function PanelHeader() {
  return (
    <div className="sticky top-2 mt-2 z-20 flex w-[95%] flex-row items-center justify-between rounded-md bg-white text-center shadow-xl sm:w-[100%]">
      <div className="flex basis-2/3 flex-col items-start space-y-4 p-1 sm:p-6 sm:text-[2rem]">
        <div
          style={{
            fontFamily: "URW Chancery L, cursive",
            textAlign: "left",
          }}
        >
          <span>Test du nom du voyage, pôur voir ce </span>
        </div>
        <div className="text-[0.6rem flex flex-row items-center justify-start space-x-1 sm:space-x-6 sm:text-[1rem]">
          <CalendarIcon className="text-secondary"></CalendarIcon>
          <div>Jeudi 19 Mai</div>
          <DayIcon className="text-secondary"></DayIcon>
          <div>Une journée</div>
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
        <button className="h-6 w-2/3 rounded-lg bg-secondary text-[0.6rem] text-white sm:h-10 sm:text-[1rem]">
          <b>Contact</b>
        </button>
      </div>
    </div>
  );
}

export default PanelHeader;
