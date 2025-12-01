import { CircleChevronRight } from "lucide-react";
import React from "react";
import about_img from "../assets/about_img.jpg"
import { Link } from "react-router-dom";

const AboutUs = () => {
  const about_points = [
    `Biotechnology continues to revolutionize Healthcare, Agriculture, and Environmental Sustainability. Staying updated with the latest Innovations and Scientific breakthroughs is essential for Researchers, Professionals, and Students in this rapidly evolving field. One of the best ways to stay informed and connected is by attending <Link to="https://biocon.helixconferences.com/" target="_blank" rel="noopener noreferrer">Biotechnology Conferences</Link>. These events serve as crucial platforms for Knowledge Sharing, Networking, and Collaboration across Academia, Industry, and Policy sectors.`,
  ];

  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={about_img}
          alt="mediclave"
          className="h-[40vh] md:min-h-[50vh] w-auto md:w-[80vh] mx-auto md:mx-16 rounded-xl object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one"></span>
          Future of Science at Upcoming Biotechnology Conferences{" "}
          <span className="text-one"></span>
        </h1>

        <div className="flex flex-col gap-3 mt-4">
          {about_points.map((item, idx) => (
            <div key={idx} className="flex flex-row gap-2 items-start">
              <CircleChevronRight
                size={24}
                className="text-one flex-shrink-0 mt-1"
              />
              <p className="text-sm md:text-base">
                Biotechnology continues to revolutionize Healthcare,
                Agriculture, and Environmental Sustainability. One of the best
                ways to stay informed and connected is by attending{" "}
                <Link
                  to="/about-world-biotechnology-summit/"
                  className="fw-bold text-one"
                  target="_blank"
                >
                  Biotechnology Conferences.
                </Link>{" "}
                These events serve as crucial platforms for Knowledge Sharing,
                Networking, and Collaboration across Academia, Industry, and
                Policy sectors.
              </p>
            </div>
          ))}
        </div>

        <blockquote className="italic text-one my-2 border-l-4 border-one pl-4 ml-3 ">
          “Join one of the leading Biotechnology Conferences of the year.”
        </blockquote>

        <Link to="/about-world-biotechnology-summit/">
          <button className="flex bg-one text-black !text-black text-one px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

