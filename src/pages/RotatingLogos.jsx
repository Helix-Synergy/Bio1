import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { trackImages } from "../assets";
import { Sparkle } from "lucide-react";
import animal_biotechnology from "../assets/tracks/animal_biotechnology.webp";
import industrial_biotechnology from "../assets/tracks/industrial_biotechnology.webp";
import environmental_biotechnology from "../assets/tracks/environmental_biotechnology.webp";
import genetic_engineering from "../assets/tracks/genetic_engineering.webp";
import bioinformatics from "../assets/tracks/bioinfomatics.webp";
import nanotechnology from "../assets/tracks/nano_technology.webp";
import graphene from "../assets/tracks/graphene.webp";
import nanomaterials from "../assets/tracks/nano_materials.webp";
import nanoelectronics from "../assets/tracks/nano_electronics.webp";
import nanomedicine from "../assets/tracks/nano_medicine.webp";
import nanobiotechnology from "../assets/tracks/nano_biotechnology.webp";
import biochemistry from "../assets/tracks/biochemistry.webp";
import plant_biotechnology from "../assets/tracks/synthetics_biology.webp";
import {Link} from "react-router-dom"


const extractText = (node) => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (React.isValidElement(node)) {
    return extractText(node.props.children);
  }
  return "";
};


const tracks = [
  {
  image: animal_biotechnology,
  title: "Animal Biotechnology",
  subtitle: "Revolutionizing Veterinary Science with Genetic Innovation",
  description: 
 <>
  
      <Link to="https://helixconferences.com/buy-a-ticket" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Animal Biotechnology</Link> leverages advanced Genetic Engineering techniques to enhance Animal Health, Productivity, and Disease Resistance. With tools like CRISPR and TALENs, scientists create Transgenic Animals producing vital Therapeutic Proteins.This innovation transforms Veterinary Medicine, improves global LivestockManagement, and promotes Sustainable Food Production in the Biotechnology and Agriculture industries.
</>

},
  {
    image: industrial_biotechnology,
    title: "Industrial Biotechnology",
    subtitle: "Biofactories of the Future Driving Sustainable Innovation",
    description:
    <>
      <Link to="/event_partners" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Industrial Biotechnology</Link> focuses on using Enzymes and Microorganisms to develop Sustainable Industrial Processes. From Biofuels to Biodegradable Plastics, this field reduces reliance on Fossil Fuels while increasing efficiency in Manufacturing. Biocatalysis and Fermentation Technologies are transforming industries, making Industrial Biotechnology a key driver of the global Green Economy.
      </>
  },
  {
    image: plant_biotechnology,
    title: "Plant Biotechnology",
    subtitle: "Feeding the Future Through Crop Genetic Innovation",
    description:
    <>
      <Link to="https://helixconferences.com/buy-a-ticket" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Plant Biotechnology </Link>integrates modern Genetic Tools to improve Crop Yields, Drought Resistance, and Nutritional Value. Technologies such as Gene Editing, Transgenic Crops, and Biological Pest Control help address Global Food Security challenges. These innovations support Sustainable Agriculture, reduce chemical inputs, and create Eco-Friendly Farming Solutions for future generations.
      </>
  },
  {
    image: environmental_biotechnology,
    title: "Environmental Biotechnology",
    subtitle: "Cleaning the Planet with Bio-Based Technologies",
    description:
    <>
      <Link to="/biotechnology-summit-orators" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Environmental Biotechnology</Link> uses living organisms, especially Microbes and Plants, to clean polluted environments and manage waste sustainably. Through Bioremediation, Wastewater Treatment, and Pollution Control, this field offers Eco-Friendly Solutions to reduce Environmental Hazards, restore Ecosystems, and combat Climate Change by applying Biotechnology to preserve Natural Resources.
      </>
  },
  {
    image: genetic_engineering,
    title: "Genetic Engineering",
    subtitle: "Redesigning Life Through Advanced DNA Technology",
    description:
    <>
      "Genetic Engineering enables precise modification of DNA in Plants, Animals, and Humans to introduce desirable traits. Techniques such as CRISPR-Cas9 and Recombinant DNA Technology drive Medical Breakthroughs, Agricultural Enhancements, and Biotech Innovations. This powerful science opens new possibilities while raising Ethical and Ecological questions in <Link to="/event_schedule" className="hover:text-one hover:decoration-accent
             transition-colors duration-300" >Biotechnology</Link>  
      Applications.     </>
  },
  {
    image: bioinformatics,
    title: "Bioinformatics",
    subtitle: "Big Data Meets Biology in the Digital Era",
    description:
    <>
      "Bioinformatics is the Computational Backbone of Modern Biology, integrating Data Science, Artificial Intelligence, and Biology to decode complex Biological Data. It’s pivotal in Genomics, Proteomics, Drug Discovery, and Systems Biology. By analyzing Genetic Sequences and modeling Biological Functions, Bioinformatics accelerates innovation in Personalized Medicine and <Link to="/" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Biotechnological Research.</Link>
      </>
  },
  {
    image: nanotechnology,
    title: "Tissue Engineering",
    subtitle: "Building Living Systems for Regenerative Medicine",
    description:
    <>
      "Tissue Engineering combines Biomaterials, Cells, and Biochemical Factors to restore, maintain, or improve tissue functions. It focuses on creating Lab-Grown Organs, Skin Substitutes, and Cartilage Implants, offering solutions for Organ Shortage and Chronic Diseases. By integrating Biology, Engineering, and <Link to="/about-world-biotechnology-summit/" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Material Science,</Link> this field accelerates Regenerative Medicine, paving the way for Personalized Therapies and Functional Tissue Repair.
      </>
  },
  {
    image: graphene,
    title: "Graphene in Biotechnology",
    subtitle: "Graphene: A Game-Changer in Modern Biomedicine",
    description:
    <>
      "Graphene’s extraordinary properties — Strength, Flexibility, and Conductivity — make it an ideal material for<Link to="/venue" className="hover:text-one hover:decoration-accent
             transition-colors duration-300">Biotechnology and Healthcare</Link>  Applications. It is widely used in Biosensors, Drug Delivery Systems, and Diagnostic Platforms. As a Next-Generation Nanomaterial, Graphene enhances Biomedical Devices and supports Personalized Medicine, Wearable Tech, and Antimicrobial Surfaces.
      </>
  },
  {
    image: nanomaterials,
    title: "Nanomaterials",
    subtitle: "Building the Future with Advanced Nano Innovations",
    description:
    <>
   
    <Link to="/event_partners"  className="hover:text-one hover:decoration-accent
             transition-colors duration-300"> Nanomaterials</Link> are Engineered Substances with unique properties at the Nanoscale, transforming Biotechnology through applications in Medicine, Agriculture, and Environmental Cleanup. These materials enable precise Drug Delivery, Biosensing, and Regenerative Treatments. Their versatility makes them foundational in advancing Sustainable Technologies, Biomanufacturing, and Nanotechnology-Enhanced Diagnostics for Global Health Solutions.
      </>
  },
  {
    image: nanoelectronics,
    title: "Nanoelectronics",
    subtitle: "The Future Is Tiny: Revolutionizing Bio-Care",
    description:
    <>
   
      Nanoelectronics merges Electronics and  <Link to="/about-world-biotechnology-summit/">Nanotechnology</Link> to build Ultra-Small, High-Performance Devices used in Biotechnology. Applications include Wearable Biosensors, Neural Implants, and Lab-on-a-Chip Diagnostics. This field is central to the future of Personalized Medicine, Real-Time Health Monitoring, and Minimally Invasive Treatments that deliver Precision Care with maximum efficiency.
      </>
  },
  {
    image: nanomedicine,
    title: "Nanomedicine",
    subtitle: "Precision Healthcare with Targeted Nano Therapies",
    description:
      "Nanomedicine utilizes Nanotechnology to develop Precise and Effective solutions for Disease Diagnosis, Treatment, and Prevention. It enables Controlled Drug Delivery, Cancer Therapy, and Gene Editing. These innovations reduce Side Effects and improve Treatment Outcomes, establishing Nanomedicine as a core pillar in the evolution of Advanced, Personalized Healthcare.",
  },
  {
    image: nanobiotechnology,
    title: "Nanobiotechnology",
    subtitle: "Where Biology Meets Nanotech for Advanced Healing",
    description:
      "Nanobiotechnology combines Nanotechnology with Biological Systems to create novel solutions for Medicine, Agriculture, and Diagnostics. It enhances Drug Delivery, Biosensor Efficiency, and Therapeutic Development. This cutting-edge field contributes to Smart Healthcare Devices, Antimicrobial Treatments, and Sustainable Biotech Innovations, bridging Science and Nature through Nanoscale Engineering.",
  },
  {
    image: biochemistry,
    title: "Biochemistry",
    subtitle: "Molecules in Motion Fueling Biotech Innovation",
    description:
    <>
    <Link to="/biotechnology-summit-orators">
      Biochemistry </Link> explores Chemical Processes within Living Organisms, forming the foundation of Biotechnology. It enables advancements in Enzyme Engineering, Protein Synthesis, and Metabolic Pathways. Applications span Medical Diagnostics, Pharmaceuticals, and Environmental Biotechnology. Understanding Molecular Interactions allows scientists to innovate across Healthcare, Agriculture, and Industrial Biotech sectors with unmatched precision.
      </>
  },
];



const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expandedIndexes, setExpandedIndexes] = useState([]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px #e1af00;
          }
          50% {
            box-shadow: 0 0 18px 6px #e1af00;
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style>

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div
          className="fixed top-[22%] right-[1%] z-50 transition-custom"
        >
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
      {tracks.map((track, index) => {
        const isExpanded = expandedIndexes.includes(index);
const fullText = extractText(track.description);

        return (
          <div
            key={index}
            className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
          >
            {/* Image */}
            <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
              <img
                src={track.image}
                alt={track.title}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                <Sparkle className="fill-one" />
                {track.title}
              </h2>
              <h3 className="text-xl text-gray-600 font-semibold mb-3 text-justify">
                {track.subtitle}
              </h3>

              {/* Description with Read More / Read Less */}
              <p
                className={`text-md text-gray-800 leading-relaxed transition-all duration-300 text-justify ${
                  isExpanded ? "" : "line-clamp-5"
                }`}
              >
                {track.description}
              </p>

              {/* Toggle Button */}
 {fullText.split(" ").length > 40 && (
  <button
   aria-label="submit" 
    onClick={() => toggleExpand(index)}
    className="mt-2 text-blue-600 hover:underline text-sm font-medium"
  >
    {isExpanded ? "Read Less" : "Read More"}
  </button>
)}


            </div>
          </div>
        );
      })}
    </div>

      </div>
    </>
  );
};

export default StaticTracks;




