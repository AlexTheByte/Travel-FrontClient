import React from "react";
import Informations from "../components/Informations";
import Description from "../components/Description";
import Pictures from "components/Pictures";
import Price from "components/Price";
import Schedule from "components/Schedule";
import TriperDescription from "components/TriperDescription";
import MainPicture from "components/MainPicture";
import Title from "components/Title";
import Summary from "components/Summary";

function Trip() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <div className="h-12 w-full bg-lime-100"></div>
      <div className="flex h-auto w-full flex-col items-center border-b-0 border-l-4 border-r-4 border-t-0 border-solid border-gray-950 bg-white">
        <div className="basis-none h-96 w-[100%] truncate">
          <MainPicture />
        </div>

        <div className="w-[60%] rounded-lg p-6 shadow-lg">
          <Summary></Summary>
        </div>

        <div className="flex w-[60%] flex-row justify-between rounded-lg p-6 shadow-lg">
          <div className="flex w-[70%] basis-auto flex-col">
            <div className="flex h-full w-[100%] basis-auto items-center pl-10">
              <Title />
            </div>
            <div className="w-[100%] basis-auto">
              <Pictures />
            </div>
          </div>

          <div className="w-[25%] basis-auto">
            <Price />
          </div>
        </div>

        <div className="flex h-auto w-[60%] flex-col rounded-lg shadow-lg">
          <div className="flex basis-1/6 flex-row items-center justify-around">
            <div className="w-[70%] basis-auto">
              <Informations />
              <Description />
            </div>
            <div className="w-[25%] basis-auto">
              <Schedule />
            </div>
          </div>

          <div className="flex basis-1/6 flex-row items-center justify-around">
            <TriperDescription />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
