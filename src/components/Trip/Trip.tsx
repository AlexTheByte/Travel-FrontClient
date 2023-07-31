import React from "react";
import TriperDescription from "components/Trip/TriperDescription";
import MainPicture from "components/Trip/MainPicture";
import PanelStory from "components/Trip/PanelStory";
import Header from "components/Trip/Header";
import Paper from "components/Paper";
import PanelHeader from "./PanelHeader";
import Footer from "./Footer";

// bg-teal-900
// bg-amber-700
function Trip() {
  const content = () => {
    return (
      <div className="z-20 flex w-full flex-col items-center space-y-2 sm:-mt-5 sm:p-10 sm:pt-14">
        <PanelHeader></PanelHeader>

        <PanelStory></PanelStory>

        <TriperDescription />
      </div>
    );
  };

  return (
    <div className="itms-centeer flex h-auto w-full flex-col justify-center">
      <div className="flex h-12 w-full items-center justify-center bg-primary">
        <Header className="" />
      </div>
      <div className="flex h-auto w-full flex-col items-center bg-white">
        <div className="basis-none h-52 w-full truncate sm:h-96">
          <MainPicture />
        </div>
        <div className="z-20 m-8 h-auto w-full sm:-mt-5 sm:w-[70vw]">
          <Paper props={{ children: content() }} />
        </div>
      </div>
      <div className="flex h-12 w-full items-center justify-center bg-gray-900">
        <Footer className="" />
      </div>
    </div>
  );
}

export default Trip;
