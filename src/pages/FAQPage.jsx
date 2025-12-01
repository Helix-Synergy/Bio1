import React, { useState } from "react";

const faqLinks = {
  tracks: "https://biocon.helixconferences.com/#tracks",
  abstractSubmission: "https://biocon.helixconferences.com/abstractsubmission/",
  schedule: "https://biocon.helixconferences.com/#schedule",
  email: "mailto:hello@helixconferences.com",
};

export const faqData = [
  {
    question: "What is BIOCON 2025?",
    answer:
      "BIOCON 2025, officially known as the “World Biotechnology Summit” (BIOCON-2025), is a premier International conference organized by Helix Conferences. The event aims to bring together Biotechnology Professionals, Researchers, and Industry leaders to discuss and explore Advancements & Innovations in Biotechnology.",
  },
  {
    question: "When and Where will the BIOCON 2025 take place?",
    answer: "The conference will be held in Valencia, Spain from November 25–27, 2025.",
  },
  {
    question: "What are the highlights of BIOCON 2025?",
    answer:
      "Networking opportunities with Industry leaders and Biotechnology Professionals. Interactive Workshops and Sessions. Exhibitions showcasing Innovations, Products, and Services.",
  },
  {
    question: "What conference tracks are featured at the Expo?",
    answer: (
      <>
        You can visit the session tracks at{" "}
        <a href={faqLinks.tracks} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Helix Conferences Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products and services or explore sponsorship opportunities?",
    answer: (
      <>
        For showcasing Products, Services, or exploring Sponsorship opportunities, please contact us directly at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract for the conference?",
    answer: (
      <>
        You can submit your abstract{" "}
        <a href={faqLinks.abstractSubmission} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Will an invitation letter be provided for Visa purposes?",
    answer:
      "Yes, we will provide an Invitation letter once after the successful registration. Contact us at hello@helixconferences.com to receive the necessary documentation for your visa application.",
  },
  {
    question: "Where do I stay if I come for the conference?",
    answer:
      "We will be providing you accommodation at the hotel we proposed. You can directly contact us at hello@helixconferences.com.",
  },
  {
    question: "What about my travel?",
    answer:
      "We can assist with affordable flight booking options for your trip to Spain.",
  },
  {
    question: "Are Travel, Hotel fees, and additional services covered by the event organizers?",
    answer:
      "While the event does not cover Travel, Hotel fees, or additional services, we can assist you with booking accommodation, flights, and provide options for sightseeing tours. You will need to cover these costs separately.",
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder for your invoice.",
  },
  {
    question: "What materials will I receive at the conference?",
    answer:
      "You will receive a Conference kit which includes a name badge, a conference booklet, and a program guide upon arrival. Your name badge grants access to all sessions of the event.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation slots typically range from 15 to 25 minutes. Specific times will be assigned once your abstract is accepted.",
  },
  {
    question: "Who will be attending the BIOCON 2025?",
    answer:
      "This event is expected to attract a diverse group of professionals from the Global Biotechnology community.",
  },
  {
    question: "How many people usually attend the Forum?",
    answer:
      "We anticipate over 200 attendees, including Participants, Speakers, and Exhibitors.",
  },
  {
    question: "Can I register for multiple speaking slots?",
    answer:
      "Yes, you can register for multiple speaking slots if each topic is distinct and relevant to the conference tracks. Please submit separate abstracts for each session.",
  },
  {
    question: "Are Keynote speaking opportunities available?",
    answer:
      "Yes, keynote speaking slots are available. If you are interested in a Keynote position, please specify this in your abstract submission.",
  },
  {
    question: "What does being a Speaker involve?",
    answer:
      "Speakers are expected to present on relevant topics, provide valuable insights, and engage with the audience. Detailed guidelines will be provided upon acceptance.",
  },
  {
    question: "Is there a cost associated with participation as a Speaker or Delegate?",
    answer:
      "Yes, there is a registration fee for all participants, including speakers. Check the 'Buy A Ticket' section on our website for pricing details.",
  },
  {
    question: "How can I find out the schedule of presentations?",
    answer: (
      <>
        The schedule will be available on our website. You can download it{" "}
        <a href={faqLinks.schedule} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I see the session list before the event?",
    answer:
      "Yes, the full confirmed agenda, including sessions along with speaker details, will be posted on our website before the event.",
  },
  {
    question: "Can I purchase tickets on-site?",
    answer:
      "While we encourage pre-registration, a limited number of tickets may be available at the event. Registering in advance is recommended.",
  },
  {
    question: "How can I book accommodation for the Expo?",
    answer: (
      <>
        Contact us directly at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>{" "}
        for assistance with booking.
      </>
    ),
  },
  {
    question: "Are meals included with my registration?",
    answer:
      "Meals depend on your registration type. Various dining options will be available at the venue. For a comprehensive meal package, please contact us at hello@helixconferences.com.",
  },
  {
    question: "Do you provide a whole package for flight booking, travel, sightseeing, hotel, and food?",
    answer:
      "Yes, if you would like a comprehensive package that includes flight booking, travel, hotel accommodation, and meals, please contact us. We will provide different options for you to choose from.",
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
