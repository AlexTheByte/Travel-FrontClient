import { FunctionComponent } from "react";
import Informations from "../components/Informations";
import Description from "../components/Description";
import Pictures from "components/Pictures";
import Price from "components/Price";
import Schedule from "components/Schedule";
import TriperDescription from "components/TriperDescription";
import MainPicture from "components/MainPicture";

function Trip() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-[90%] w-[75%] flex-col rounded-xl border-4 border-solid border-gray-950 bg-white">
        <div className="h-2/6 flex-none truncate">
          <MainPicture />
        </div>

        <div className="relative w-[100%] flex-none basis-1/6">
          <div className="absolute -top-10 left-5 w-[70%] basis-auto">
            <Pictures />
          </div>
          <div className="absolute -top-20 right-5 w-[25%] basis-auto">
            <Price />
          </div>
        </div>

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
  );
}

export default Trip;
