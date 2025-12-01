import { div } from "framer-motion/client";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import EventSchedule from "../components/EventSchedule";
import { banner_style } from "../Styles/styles";

const Schedule = () => {
  return (
    <div className="container mx-auto ">
      <section className="container w-[100%] mx-auto flex flex-col items-center justify-center">
        <div className={`${banner_style} schedule-banner `}>
          <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
            Biocon - 2026
          </h1>
        </div>
        <EventSchedule
          height={"auto"}
          name={"Download"}
          link={"/public_health_schedule.pdf"}
        />
      </section>
    </div>
  );
};

export default Schedule;


// import React, { useState, useEffect } from "react";
// import ScheduleData from "../components/ScheduleData";
// import { Link } from "react-router-dom";

// const EventSchedule = ({ height, name, link }) => {
//   const [plan1, setPlan1] = useState([]);
//   const [plan2, setPlan2] = useState([]);
//   const [plan3, setPlan3] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedZone, setSelectedZone] = useState("US"); // Default timezone

//   useEffect(() => {
//     const loadSchedules = async () => {
//       setLoading(true);
//       try {
//         const [plan1Module, plan2Module, plan3Module] = await Promise.all([
//           import("../utils/Schedule Plans/schedule_plan1"),
//           import("../utils/Schedule Plans/schedule_plan2"),
//           import("../utils/Schedule Plans/schedule_plan3"),
//         ]);
//         setPlan1(plan1Module.default);
//         setPlan2(plan2Module.default);
//         setPlan3(plan3Module.default);
//       } catch (err) {
//         console.error("Failed to load schedules:", err);
//         setPlan1([]);
//         setPlan2([]);
//         setPlan3([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadSchedules();
//   }, []);

//   const renderSchedule = () => {
//     switch (selectedZone) {
//       case "US":
//         return plan1;
//       case "EU":
//         return plan2;
//       case "APAC":
//         return plan3;
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="w-full mx-auto px-4 md:px-12 py-8 flex flex-col items-center border-t">
//       <p className="text-3xl font-semibold text-one">Event Schedule</p>

//       {/* Timezone selection buttons */}
//       <div className="flex flex-wrap justify-center gap-4 my-6 bg-one/20 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
//         {[
//           { zone: "US", label: "United States Timezone" },
//           { zone: "EU", label: "Europe Timezone" },
//           { zone: "APAC", label: "APAC Timezone" },
//         ].map(({ zone, label }) => (
//           <button
//             key={zone}
//             onClick={() => setSelectedZone(zone)}
//             className={`flex items-center gap-3 px-4 py-2 rounded-full border border-white/30 text-xs md:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ${
//               selectedZone === zone
//                 ? "bg-one text-white"
//                 : "bg-transparent text-one hover:scale-105 hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
//             }`}
//           >
//             <h1 className="bg-white text-black px-3 py-1 rounded-md font-semibold shadow-sm">
//               {zone}
//             </h1>
//             <p className="text-base md:text-lg font-semibold drop-shadow-sm">
//               {label}
//             </p>
//           </button>
//         ))}
//       </div>

//       <div className="w-full">
//         {loading ? (
//           <p className="text-center text-slate-500">Loading schedule...</p>
//         ) : renderSchedule().length > 0 ? (
//           <ScheduleData scheduleList={renderSchedule()} height={height} />
//         ) : (
//           <p className="text-center text-slate-500">No schedule available.</p>
//         )}
//       </div>

//       {link && (
//         <a href={link} download target="_blank" rel="noopener noreferrer">
//           <button className="bg-one text-white px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
//             {name}
//           </button>
//         </a>
//       )}
//     </div>
//   );
// };

// export default EventSchedule;
