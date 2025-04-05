// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { FaLinkedin } from "react-icons/fa";
// import Bethlehem from "../assets/Bethlehem Tadesse.jpg";
// import Beti from "../assets/betty.jpg";
// import Maryamawit from "../assets/Maryamawit-Solomon.jpg";
// import esub from "../assets/esub-fiseha.jpg";
// //import habib from "../assets/habib.JPG";
// import Yohannes from "../assets/Yohannes Getaneh.jpg";




//   // You can change this path based on your setup
//   const leaders = [
//     { name: "Bethlehem Tadesse", role: "President", image: Bethlehem, linkedin: "https://linkedin.com/in/bethlehem" },
//     { name: "Maryamawit Solomon", role: "Vice President", image: Maryamawit, linkedin: "https://linkedin.com/in/emilyjohnson" },
//     //{ name: "Habib Oumer", role: "Head of Communications", image: habib, linkedin: "https://linkedin.com/in/janesmith" },
//     { name: "Etsub Fiseha", role: "Secretary", image: esub, linkedin: "https://linkedin.com/in/davidwilson" },
//     { name: " Bethlehem Mekonnen", role: "Membership Coordinator", image: Beti, linkedin: "https://linkedin.com/in/michaelbrown" },
//     { name: " Yohannes Getaneh", role: "Head of Internal and External Affairs", image: Yohannes, linkedin: "https://linkedin.com/in/sophiamartinez" }
//   ];

//   // Reusable Leader Card
//   const LeaderCard = ({ name, role, image, linkedin }) => (
//     <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-72 sm:w-64 m-6 transform transition duration-300 hover:scale-110 hover:shadow-2xl">
//       <img
//         src={image}
//         alt={name}
//         className="w-56 h-40 object-cover mx-auto rounded-xl"
//       />
//       <h2 className="text-2xl font-bold mt-4 text-gray-800">{name}</h2>
//       <p className="text-gray-500 mb-3 text-lg">{role}</p>
//       {linkedin && (
//         <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 inline-flex items-center justify-center gap-2 text-sm">
//           <FaLinkedin size={20} />
//           <span className="font-normal">LinkedIn</span>
//         </a>
//       )}
//     </div>
//   );

//   const LeadersPage = () => {
//     return (
//       <>
//       <Header />
//         <div className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6 sm:px-8 lg:px-10">
//           <h1 className="text-5xl font-extrabold text-center mb-16 text-gray-900">Our Leaders</h1>

//           <div className="max-w-7xl mx-auto space-y-16">
//             {/* Top Level */}
//             <div className="flex justify-center">
//               <LeaderCard {...leaders[0]} />
//             </div>

//             {/* Second Level */}
//             <div className="flex flex-wrap justify-center gap-6">
//               {leaders.slice(1, 3).map((leader, idx) => (
//                 <LeaderCard key={idx} {...leader} />
//               ))}
//             </div>

//             {/* Third Level */}
//             <div className="flex flex-wrap justify-center gap-6">
//               {leaders.slice(3).map((leader, idx) => (
//                 <LeaderCard key={idx + 3} {...leader} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   };

//   export default LeadersPage;


import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLinkedin } from "react-icons/fa";
import Bethlehem from "../assets/Bethlehem Tadesse.jpg";
import Beti from "../assets/betty.jpg";
import Maryamawit from "../assets/Maryamawit-Solomon.jpg";
import esub from "../assets/esub-fiseha.jpg";
//import habib from "../assets/habib.JPG";
import Yohannes from "../assets/Yohannes Getaneh.jpg";

const leaders = [
  { name: "Bethlehem Tadesse", role: "President", image: Bethlehem, linkedin: "https://linkedin.com/in/bethlehem" },
  //{ name: "Habib Oumer", role: "Head of Communications", image: habib, linkedin: "https://linkedin.com/in/janesmith" },
  { name: "Maryamawit Solomon", role: "Vice President", image: Maryamawit, linkedin: "https://linkedin.com/in/emilyjohnson" },
  { name: "Etsub Fiseha", role: "Secretary", image: esub, linkedin: "https://linkedin.com/in/davidwilson" },
  { name: "Bethlehem Mekonnen", role: "Membership Coordinator", image: Beti, linkedin: "https://linkedin.com/in/michaelbrown" },
  { name: "Yohannes Getaneh", role: "Head of Internal and External Affairs", image: Yohannes, linkedin: "https://linkedin.com/in/sophiamartinez" }
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
          {/* First row: 3 leaders */}
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
