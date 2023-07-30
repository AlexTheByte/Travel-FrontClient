import CalendarIcon from "icons/calendar.icon";
import DayIcon from "icons/day.icon";
import React from "react";

function Summary() {
  return (
    <div className="flex w-[100%] flex-row items-center justify-between text-center">
      <div className="flex basis-1/2 flex-row items-center justify-start space-x-6">
        <CalendarIcon></CalendarIcon>
        <div>Date : jeudi 19 mai</div>
        <DayIcon></DayIcon>
        <div>Une journée</div>
      </div>
      <div className="flex basis-1/2 flex-row items-center justify-end space-x-6">
        <div className="">50€</div>
        <button className="h-10 w-40 rounded-lg bg-lime-50">Contacter</button>
      </div>
    </div>
  );
}

export default Summary;
