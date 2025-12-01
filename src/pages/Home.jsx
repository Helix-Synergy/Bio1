// import { LocateIcon, MapPin } from "lucide-react";
import React from "react";
import HomeTemplate from "../components/HomeTemplate";
import FlipClock from "../components/ui/FlipClock";
import { norxin } from "../utils/Hello";

const Home = () => {
  // const targetDate = "2026-01-01T00:00:00";
  return (
    <>
      <div className="scroll-smooth relative h-[86vh] home flex flex-col md:flex-row py-12 scroll-x-hidden w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950 bg-opacity-50 z-0"></div>

        <div className="absolute top-2 right-6 z-10 flex flex-col items-center">
          <p className="text-sm md:text-base text-white md:mt-1">
            In collaboration with
          </p>
          <img
            src={norxin}
            alt="Collaborating Logo"
            className="h-10 md:h-10 md:w-24 object-contain bg-white p-2 rounded-lg shadow-lg mb-2"
          />
         
        </div>

        {/* Content */}
        <div className="relative z-2 flex flex-col items-start px-1 md:px-8 mt-4 justify-center h-full text-white text-2xl md:text-3xl font-bold">
          <div className="flex flex-row items-end gap-4">
            <h1 className="text-one text-shadow-blue font-bold text-5xl md:text-6xl">
              Nov
            </h1>
            <div className="flex flex-col justify-center items-start leading-tight">
              <p className="text-base md:text-lg font-bold">
                25 - 27 | 2025
              </p>
              <p className="text-base font-extrabold md:text-lg gap-2 flex flex-row font-normal">
                VALENCIA | SPAIN
              </p>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl my-4 w-full md:w-[90vw]">
            WORLD BIOTECHNOLOGY SUMMIT
          </h1>
          <p className="text-2xl md:text-5xl text-slate-200">
            Biocon - 2025
          </p>
          <div className="float-end mt-4">
            <FlipClock />
          </div>
        </div>
        <div className="fixed bottom-6 right-6 space-y-3 z-50"></div>
      </div>

      {/* Sections */}
      {/* <AboutUs /> */}
      {/* <PanelMembers /> */}
      {/* <Tracks /> */}
      {/* <Orators /> */}
      {/* <EventSchedule /> */}
      {/* <Venue /> */}
      <HomeTemplate />
      {/* <Partners /> */}
      {/* <FlipClock /> */}
    </>
  );
};

export default Home;
