// ScheduleData.jsx
import React from "react";
import ScheduleCard from "./ui/ScheduleCard";


const ScheduleData = ({ scheduleList, height }) => {
  return (
    <div className={`w-full flex flex-col items-center p-[30px] space-y-6 h-[${height}vh] overflow-y-scroll scrollbar-hide bg-white rounded-2xl`}>
      {scheduleList.map((item, idx) => (
        <ScheduleCard
          key={idx}
          time={item.time}
          plan={item.plan}
          note={item.note}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ScheduleData;
