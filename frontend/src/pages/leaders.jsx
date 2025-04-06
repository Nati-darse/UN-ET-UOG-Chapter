import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLinkedin } from "react-icons/fa";
import Bethlehem from "../assets/BethlehemTadesse.jpg";
import Beti from "../assets/betty.jpg";
import Maryamawit from "../assets/MaryamawitSolomon.jpg";
import esub from "../assets/esub-fiseha.jpg";
import habib from "../assets/habib.png";    
import Yohannes from "../assets/Yohannes Getaneh.jpg";

const leaders = [
  { name: "Bethlehem Tadesse", role: "President", image: Bethlehem, linkedin: "https://www.linkedin.com/in/bethlehem-tadesse-damtaw-11b313228/" },
  { name: "Maryamawit Solomon", role: "Vice President", image: Maryamawit, linkedin: "https://www.linkedin.com/in/maryamawit-solomon-9024ba251" },
  { name: "Habib Oumer", role: "Head of Communications", image: habib, linkedin: "https://www.linkedin.com/in/habib-oumer-endris-351490279/" },
  { name: "Etsub Fiseha", role: "Secretary", image: esub, linkedin: "https://www.linkedin.com/in/etsubfiseha/" },
  { name: "Bethlehem Mekonnen", role: "Membership Coordinator", image: Beti, linkedin: "https://www.linkedin.com/in/bethelhem-mekonnen-5799a1215/" },
  { name: "Yohannes Getaneh", role: "Head of Internal and External Affairs", image: Yohannes, linkedin: "https://www.linkedin.com/in/yohannes-getaneh-383531228/" }
];

const LeaderCard = ({ name, role, image, linkedin }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl w-72">
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover rounded-xl mx-auto"
    />
    <h2 className="text-xl font-semibold mt-4 text-gray-800">{name.trim()}</h2>
    <p className="text-gray-500 mb-2">{role}</p>
    {linkedin && (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-sm"
      >
        <FaLinkedin size={18} />
        <span>LinkedIn</span>
      </a>
    )}
  </div>
);

const LeadersPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">Our Leaders</h1>

        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-wrap justify-center gap-8">
            {leaders.slice(0, 3).map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>

          {/* Second row: remaining leaders */}
          <div className="flex flex-wrap justify-center gap-8">
            {leaders.slice(3).map((leader, index) => (
              <LeaderCard key={index + 3} {...leader} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeadersPage;
