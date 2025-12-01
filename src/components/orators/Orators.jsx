import React from "react";
import { Link } from "react-router-dom";
import { orators } from "../../utils/Orators";
import OraterCard from "../ui/OraterCard";

const Orators = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 py-2 items-center justify-center my-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Biocon - Orators
      </h1>
      <p className="w-full md:w-2/3 my-2 text-center text-sm md:text-base text-slate-600">
        Renowned experts from across the globe sharing insights and leading the
        conversation at Biocon.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap cursor-default gap-6 items-center justify-center mt-4">
        {orators.slice(0, 4).map((item, idx) => (
          <OraterCard 
            key={idx}
            name={item.name}
            about={item.about}
            from={item.from}
            image={item.image}
            // link={item.link}
          />
        ))}
      </div>

      <Link to="/biotechnology-summit-orators">
        <button className="bg-one text-white px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
          View All
        </button>
      </Link>
    </div>
  );
};

export default Orators;
