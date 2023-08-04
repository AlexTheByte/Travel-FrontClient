import React from "react";
import TriperDescription from "components/Trip/TriperDescription";
import MainPicture from "components/Trip/MainPicture";
import PanelStory from "components/Trip/PanelStory";
import Header from "components/Trip/Header";
import Paper from "components/Paper";
import PanelHeader from "./PanelHeader";
import Footer from "./Footer";
import PanelMoreStory from "./PanelMoreStory";

function Trip() {
  return (
    <div className="itms-center flex h-auto w-full flex-col justify-center text-base">
      <div className="flex h-12 w-full items-center justify-center bg-primary">
        <Header className="" />
      </div>
      <div className="flex h-auto w-full flex-col items-center bg-white">
        <div className="basis-none h-52 w-full truncate sm:h-96">
          <MainPicture />
        </div>
        <div className="z-20 mb-8 h-auto w-full sm:-mt-5 sm:w-[70vw]">
          <Paper>
            <div className="z-20 flex flex-col items-center sm:-mt-5 sm:space-y-2 sm:p-10 sm:pt-14">
              <PanelHeader></PanelHeader>

              <PanelStory></PanelStory>

              <PanelMoreStory></PanelMoreStory>

              <TriperDescription />
            </div>
          </Paper>
        </div>
      </div>
      <div className="flex h-12 w-full items-center justify-center bg-gray-900">
        <Footer className="" />
      </div>
    </div>
  );
}

export default Trip;
