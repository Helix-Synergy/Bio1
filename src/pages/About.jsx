
import React from "react";
import { Link } from "react-router-dom";
import {
   Brain,
   HeartPulse,
   SmilePlus,
   Dna,
   Video,
   Globe,
   Biohazard,
   Radiation,
   Star,
   User,
   BookOpen,
   Stethoscope,
   PackageSearch,
   Calendar,
   BadgeCheck,
} from "lucide-react";
import { banner_style } from "../Styles/styles";

const data = {
   event: {
     title: "About Event",
     date: "25–26 June 2026",
     location: "Amsterdam | Netherlands",
     organizer: "Helix Conferences",
     description: [
       <>
         Helix Conferences, a trusted{" "}
         <Link to="/venue" target="_blank" className="fw-bold text-one">
           {" "}
           Event Organizer
         </Link>{" "}
         in the global scientific community, is proud to host a series of
         Upcoming Biotechnology Conferences designed to bring together the
         brightest minds in the field.With a proven track record of organizing
         impactful Scientific Events, Helix Conferences ensure each conference
         provides a dynamic environment for Learning, Presenting Research, and
         Fostering Professional growth.
       </>,
       <>
         Whether you're interested in Genetic Engineering, Bioinformatics,
         Molecular Biology, or Biopharmaceuticals, Helix’s Biotechnology
         Conferences cover a wide range of cutting-edge topics. These events
         attract International speakers, Including leading Scientists,
         Innovators, and policy-makers, making them ideal opportunities to gain
         insights into emerging technologies and trends.
       </>,
       <>
         One of the standout features of Helix Conferences is our commitment to
         quality and inclusivity. The conferences are meticulously planned with
         structured sessions, Keynote Speeches, Panel discussions, and
         Interactive workshops. Additionally, Young Researchers and Students
         are encouraged to present our work, providing them with a platform to
         gain exposure and feedback from experts in the field.
       </>,
       <>
         The{" "}
         <Link to="/tracks" target="_blank" className="text-one fw-bold">
           {" "}
           upcoming Biotechnology Conferences
         </Link>{" "}
         organized by Helix will be held in globally accessible locations,
         ensuring ease of travel and participation. Whether you’re a seasoned
         professional or a budding scientist, these conferences offer unmatched
         value in terms of Content, Connections, and Career advancement.
       </>,
     ],
   },
   whyAttend: [
     "Attending the Global Oral Medicine Conclave offers unparalleled opportunities for professional growth. Participants will have access to:",
     "Expert-led sessions and workshops: Gain insights from world-renowned speakers who are pioneers in oral medicine and dental research.",
     "Networking opportunities: Connect with global leaders, researchers, and peers to build partnerships and foster collaborations.",
     "Innovative technology showcases: Explore the latest tools, products, and technologies revolutionizing oral healthcare.",
     "Research presentations: Discover new scientific findings and clinical studies that impact the diagnosis and treatment of oral diseases.",
     "Helix Conferences is committed to delivering an experience that combines scientific excellence with practical applications, ensuring attendees leave with actionable knowledge to advance practices.",
   ],
   aboutHelix: [
     "Helix Conferences has a longstanding reputation as a premier global conference organizer specializing in healthcare and scientific events. With years of expertise in curating impactful conferences, Helix ensures that every detail of the 2025 Oral Medicine Conference is crafted to deliver maximum value to attendees.",
   ],
   whoShouldAttend: [
     "Oral medicine specialists and dentists",
     "Researchers and academicians in dental sciences",
     "Healthcare providers involved in oral health",
     "Pharmaceutical and medical device professionals",
     "Students and trainees in dentistry and related fields",
   ],
   join: [
     "The 2025 Public Health Conference by Helix Conferences is more than just an event, it's a global movement toward better public health through science, technology, and collaboration. Join thousands of professionals from around the world as they share knowledge, advance research, and inspire innovation in public health.",
   ],
   themes: [
     {
       icon: Brain,
       title: "AI in Healthcare",
       description: "Researchers & Academicians",
     },
     {
       icon: HeartPulse,
       title: "Cardiovascular Diseases",
       description: "Biotech Professionals",
     },
     {
       icon: SmilePlus,
       title: "Mental Health Innovations",
       description: "Biotech Innovators",
     },
     {
       icon: Dna,
       title: "Genetics & Personalized Medicine",
       description: "Government Officials & Policymakers",
     },
     {
       icon: Video,
       title: "Telemedicine & Digital Health",
       description: "Pharmaceutical & Biotech Professionals",
     },
     {
       icon: Globe,
       title: "Public Health & Global Systems",
       description: "Students & Early-Career Professionals",
     },
     {
       icon: Biohazard,
       title: "Infectious Diseases & Security",
       description: "Investors & Biosciences Enterpreneurs",
     },
     {
       icon: Radiation,
       title: "Cancer Research & Treatment",
       description: "Investors & Healthcare Entrepreneurs",
     },
   ],

   highlights: [
  {
    title: "Keynote Speakers",
    description: "Leading Experts in Biotechnology, Policy, and Tech.",
  },
  {
    title: "Workshops & Seminars",
    description: "Interactive Sessions on Current Topics.",
  },
  {
    title: "Exhibition",
    description: "A Showcase of Cutting-Edge Biotechnology Innovations.",
  },
  {
    title: "Networking Opportunities",
    description: "Connect With Global Leaders.",
  },
  {
    title: "Accredited Learning",
    description: "Earn CPD Credits by Attending the Conferences.",
  },
  {
    title: "Collaboration Building",
    description: "Initiate Joint Research Projects or Multi-Institutional Studies.",
  },
  {
    title: "Publication Opportunities",
    description: "Proceedings or Journal Partnerships for Presented Work.",
  },
  {
    title: "Awards & Recognition",
    description: "Compete for Best Paper/Poster Prizes and Other Accolades.",
  },

   ],
   dates: {
     eventDate: "25-26 June",
     venue: "Amsterdam | Netherlands",
     registrationDeadline: "20th November",
   },
};

const AboutPublicHealth = () => {
   return (
     <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
       <div className={`${banner_style} w-full mx-auto about-banner`}>
         <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
           {data.event.title}
         </h1>
       </div>

       <h1 className="text-4xl mt-2 font-bold text-one">
         World Biotechnology Summit
       </h1>
       <p className="text-center text-gray-600 text-3xl mb-6">
         <strong>
           {data.event.date}
         </strong>{" "}
         | {data.event.location}
       </p>

       {data.event.description.map((desc, idx) => (
         <p
           key={idx}
           className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
         >
           {desc}
         </p>
       ))}

       {/* Themes Section */}
       <section className="mb-16 text-center w-full px-12">
         <h2 className="text-4xl my-8 font-bold text-one">Who Can Attend...</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
             <User className="h-10 w-10 text-one mb-3" />
             <h3 className="text-lg font-semibold text-gray-800 mb-1">
               Biocon Professionals
             </h3>
           </div>
           <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
             <BookOpen className="h-10 w-10 text-one mb-3" />
             <h3 className="text-lg font-semibold text-gray-800 mb-1">
               Academics & Researchers
             </h3>
           </div>
           <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
             <Stethoscope className="h-10 w-10 text-one mb-3" />
             <h3 className="text-lg font-semibold text-gray-800 mb-1">
               Healthcare Administrators
             </h3>
           </div>
           <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
             <PackageSearch className="h-10 w-10 text-one mb-3" />
             <h3 className="text-lg font-semibold text-gray-800 mb-1">
               Healthcare product and Service providers
             </h3>
           </div>
           {/* <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
             <GraduationCap className="h-10 w-10 text-one mb-3" />
             <h3 className="text-lg font-semibold text-gray-800 mb-1">Students and trainees in dentistry and related fields</h3>
           </div> */}
         </div>
       </section>

       {/* Highlights Section */}
       <section className="mb-16 text-center w-full px-12">
         <h2 className="text-4xl font-bold text-one mb-8">Event Highlights</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-start">
           {data.highlights.map((highlight, idx) => (
             <div
               key={idx}
               className="bg-white rounded-xl p-4 text-md text-gray-800 text-left flex items-start shadow-sm "
             >
               <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-3 mt-1" />
               <div className="flex flex-wrap items-start">
                 <h3 className="font-semibold whitespace-nowrap mr-1">
                   {highlight.title} –
                 </h3>
                 <p className="text-md text-gray-600 flex-1">
                   {highlight.description}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </section>

       {/* Dates Section */}
       <section className="mb-16 text-center w-full md:px-12 px-4">
         <h2 className="text-4xl font-bold text-one mb-8">
           Important Dates
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm">
           <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
             <Calendar className="w-6 h-6 text-one mb-2" />
             <strong>Event Date</strong>
             <p>{data.dates.eventDate}</p>
           </div>
           <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
             <Globe className="w-6 h-6 text-one mb-2" />
             <strong>Proposed Venue</strong>
             <p>{data.dates.venue}</p>
           </div>
           <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
             <BadgeCheck className="w-6 h-6 text-one mb-2" />
             <strong>Registration Deadline</strong>
             <p>{data.dates.registrationDeadline}</p>
           </div>
         </div>
       </section>
     </div>
   );
};

export default AboutPublicHealth;