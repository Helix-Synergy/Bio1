import React from "react";
import { MapPin, Timer } from "lucide-react";

const ScheduleCard = ({ time, plan, note, image }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-5xl mx-auto items-start sm:items-center justify-between border border-one rounded-xl px-4 sm:px-8 py-4 gap-4 sm:gap-6">
      {/* Left-side area */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto gap-4">
        <img src={image} alt="" className="h-24 w-24 sm:h-28 sm:w-28 object-cover rounded-full shrink-0 border border-one/50" loading="lazy" />

        <div className="flex flex-col gap-2 w-full">
          {/* Time and location */}
          <div className="flex flex-wrap gap-3 text-sm text-one font-semibold">
            <div className="flex items-center gap-1">
              <Timer size={18} />
              <span>{time}</span>
            </div>
            {/* <div className="flex items-center gap-1">
              <MapPin size={18} />
              <span>Spain</span>
            </div> */}
          </div>

          {/* Plan title and description */}
          <div>
            <p className="text-base sm:text-xl font-bold text-black">{plan}</p>
            <p className="text-sm text-slate-600">
              {note}
            </p>
          </div>
        </div>
      </div>

      {/* Right-side button (optional) */}
      {/* <button className="px-6 py-2 bg-one rounded-full text-sm self-end sm:self-center">
        Register
      </button> */}
    </div>
  );
};

export default ScheduleCard;
