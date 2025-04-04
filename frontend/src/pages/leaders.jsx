import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLinkedin } from "react-icons/fa";
import Bethlehem from "../assets/Bethlehem Tadesse.jpg";
import Beti from "../assets/Bethlehem Mekonnen.jpg";
import Maryamawit from "../assets/Maryamawit-Solomon.jpg";
import esub from "../assets/esub-fiseha.jpg";
import Yohannes from "../assets/Yohannes Getaneh.jpg";
//import habib from "../assets/Habib Oumer.JPG";



  // You can change this path based on your setup
  const leaders = [
    { name: "Bethlehem Tadesse", role: "President", image: Bethlehem, linkedin: "https://linkedin.com/in/bethlehem" },
    { name: "Maryamawit Solomon", role: "Vice President", image: Maryamawit, linkedin: "https://linkedin.com/in/emilyjohnson" },
    { name: "Habib Oumer", role: "Head of Communications", image: "../assets/Habib Oumer.JPG", linkedin: "https://linkedin.com/in/janesmith" },
    { name: "Etsub Fiseha", role: "Secretary", image: esub, linkedin: "https://linkedin.com/in/davidwilson" },
    { name: " Bethlehem Mekonnen", role: "Membership Coordinator", image: Beti, linkedin: "https://linkedin.com/in/michaelbrown" },
    { name: " Yohannes Getaneh", role: "Head of Internal and External Affairs", image: Yohannes, linkedin: "https://linkedin.com/in/sophiamartinez" }
  ];

  // Reusable Leader Card
  const LeaderCard = ({ name, role, image, linkedin }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-72 sm:w-64 m-6 transform transition duration-300 hover:scale-110 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-56 h-40 object-cover mx-auto rounded-xl"
      />
      <h2 className="text-2xl font-bold mt-4 text-gray-800">{name}</h2>
      <p className="text-gray-500 mb-3 text-lg">{role}</p>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 inline-flex items-center justify-center gap-2 text-sm">
          <FaLinkedin size={20} />
          <span className="font-normal">LinkedIn</span>
        </a>
      )}
    </div>
  );

  const LeadersPage = () => {
    return (
      <>
      <Header />
        <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6 sm:px-8 lg:px-10">
          <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-900">Our Leaders</h1>

          <div className="max-w-7xl mx-auto space-y-16">
            {/* Top Level */}
            <div className="flex justify-center">
              <LeaderCard {...leaders[0]} />
            </div>

            {/* Second Level */}
            <div className="flex flex-wrap justify-center gap-6">
              {leaders.slice(1, 3).map((leader, idx) => (
                <LeaderCard key={idx} {...leader} />
              ))}
            </div>

            {/* Third Level */}
            <div className="flex flex-wrap justify-center gap-6">
              {leaders.slice(3).map((leader, idx) => (
                <LeaderCard key={idx + 3} {...leader} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  export default LeadersPage;
