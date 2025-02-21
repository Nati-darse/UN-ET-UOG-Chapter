import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SDJimage from "../assets/teamp1.jpg";
import projects from "../assets/teamp2.jpg";
import debate from "../assets/teamp3.jpg";
import events from "../assets/teamp4.jpg";
import mun from "../assets/photo_2025-02-10_15-34-59.jpg";
import social from "../assets/teamp5.jpg";
import { FaTimes } from "react-icons/fa";

const teams = [
  {
    name: "SDGs Team – UNA-ET UoG Chapter",
    shortDescription: "Committed to the UN 2030 Agenda, our team raises awareness, advocates for action...",
    description: "Committed to the UN 2030 Agenda, our team raises awareness, advocates for action, and implements initiatives aligned with the 17 SDGs.",
    image: SDJimage,
    extraImages: [social, mun],
  },
  {
    name: "Model United Nations (MUN)",
    shortDescription: "Model United Nations (MUN) is an academic simulation where students role-play as delegates...",
    description: "MUN helps develop skills such as research, writing, public speaking, debate, negotiation, and critical thinking.",
    image: mun,
    extraImages: [debate, events],
  },
  {
    name: "Events Team",
    shortDescription: "Ensures smooth planning and execution of various events.",
    description: "Our team ensures logistics and coordination for impactful events.",
    image: events,
    extraImages: [mun, social],
  },
  {
    name: "Debate Team",
    shortDescription: "The UNA-ET UoG Chapter's debate team is dedicated to empowering voices and sparking change!",
    description: "Join us to think critically, speak boldly, and champion important causes. Your voice matters!",
    image: debate,
    extraImages: [social, mun],
  },
  
  {
    name: "Social Media Team",
    shortDescription: "Handles communication and outreach for maximum event exposure.",
    description: "We manage social media strategies to enhance awareness and engagement.",
    image: social,
    extraImages: [mun, events],
  },
  {
    name: "Projects Team",
    shortDescription: "Secures sponsorships and partnerships to enhance event success.",
    description: "Works tirelessly to bring in sponsors and funding for our initiatives.",
    image: projects,
    extraImages: [mun, events],
  },
];

export default function TeamSection() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const closeModal = (e) => {
    if (e.target.id === "modalBackground") {
      setSelectedTeam(null);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">Meet Our Teams</h2>
        <p className="text-center text-gray-600 mb-6">Get to know the amazing people behind our initiatives.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teams.slice(0, showMore ? teams.length : 3).map((team, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => setSelectedTeam(team)}
            >
              <img src={team.image} alt={team.name} className="w-full h-56 rounded-lg object-cover" />
              <h3 className="text-xl font-semibold mt-3 text-blue-900">{team.name}</h3>
              <p className="text-gray-600 mt-2">{team.shortDescription}</p>
              <button className="mt-4 text-blue-600 hover:underline">Discover More →</button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <button
            className="text-blue-600 font-semibold hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
        
        {selectedTeam && (
          <div
            id="modalBackground"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
            onClick={closeModal}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative animate-fade-in">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedTeam(null)}
              >
                <FaTimes size={24} />
              </button>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{selectedTeam.name}</h2>
              <p className="mb-4 text-gray-700">{selectedTeam.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {selectedTeam.extraImages.map((img, idx) => (
                  <img key={idx} src={img} alt={`Extra ${idx}`} className="rounded-lg object-cover" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
