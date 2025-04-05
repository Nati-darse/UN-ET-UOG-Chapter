import React, { useState } from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

// Static image paths for each event
const eventsData = [
  {
    id: 1,
    title: "🌟 A Remarkable Afternoon: The Final Round Debate Competition! 🌟",
    image: [
      "/Debate/ev4_1.jpeg",
      "/Debate/ev4_2.jpeg",
      "/Debate/ev4_3.jpeg",
      "/Debate/ev4_4.jpeg"
    ],
    description:
      "On December 4, 2024, the UNA-ET University of Gondar Chapter hosted the highly anticipated Final Round Debate Competition at Maraki Campus Alumni Hall.",
    details:
      " 🎤 Debate Topic:\nShould Local Justice Mechanisms Take Precedence Over International Interventions in Addressing Conflict-Related Gender-Based Violence?\n\nOur skilled debaters showcased exceptional arguments, critical thinking, and teamwork, leaving the audience inspired and engaged.\n\n🌟 Judges Panel:\nAssistant Professor Gashaw Sisay\nMr. Fiqadu\nMr. Eyasu\n\n🙏 A heartfelt thank you to our esteemed judges for their invaluable insights, to all the participants for their dedication, and to our wonderful audience for their enthusiastic support.\n\nTogether, we celebrated the power of youth voices and constructive dialogue. Stay tuned for more impactful events!",
  },

  {
    id: 2,
    title: "🌍 Engaging Discussions on CRGBV 🌍",
    image: [
      "/CRGBV/ev1.jpeg", 
      "/CRGBV/ev3.jpeg",
      "/CRGBV/ev4.jpeg",
      "/CRGBV/ev2.jpeg",
      "/CRGBV/ev5.jpeg",
      "/CRGBV/ev6.jpeg"
    ],
    description:
      "The UNA-ET University of Gondar Chapter held an enlightening Panel Discussion on Conflict-Related Gender-Based Violence (CRGBV) in Ethiopia on December 4, 2024, at Maraki Campus Alumni Hall.",
    details:
      " 🗣️ Our Distinguished Panelists:\nMs. Huluhager Mandefro\nAssistant Professor Getasew Nigussie\nAssistant Professor Habtamu Genet\n\n💡 Their profound insights and expertise highlighted the pressing issues surrounding CRGBV, fostering awareness and encouraging solutions within our community.\n\n🙏 A special thank you to our esteemed panelists, judges, and guests who made this program a success. Your contributions were truly inspiring and impactful.\n\nLet’s continue to drive meaningful change through education and collaboration. Thank you to everyone who participated and supported this event!",
  },
  
  {
    id: 3,
    title: "UNA-ET UOG Chapter Launch: Igniting Youth Action for SDGs!",
    image: [
      "/SDGS/sd1.jpeg",
      "/SDGS/sd2.jpeg",
      "/SDGS/sd3.jpeg",
      "/SDGS/sd4.jpeg",
      "/SDGS/sd5.jpeg"
    ],
    description:
      "The UNA-ET UOG Chapter's impactful launch brought together students, faculty, and esteemed guests for a day dedicated to empowering youth for a sustainable future in Ethiopia.",
    details:
      "🌟 Prior to the Launch:\nUNA-ET UOG members displayed compassion through volunteering at the Mena Home for the Elderly and Disabled. A campus blood donation drive raised awareness of the importance of giving back.\n\n🚀 The Launch Event:\nA thought-provoking panel discussion featuring prominent figures like Dr. Tefera Eshete (University of Gondar Law School Staff), Mr. Hiruy G/giorgis (High Court Judge & University Lecturer), and Mr. Messay Kebede (University of Gondar TV & Production Head) explored how youth can contribute to achieving the SDGs in Ethiopia. An engaging SDG awareness game tested the audience's knowledge and sparked meaningful conversations.\n\n🎉 Celebrating Success:\nFollowing the event, chapter members enjoyed a celebratory dinner hosted by chapter coordinator Mr. Yalew Melaku. The UNA-ET UOG Chapter launch ignited a spirit of social responsibility and collaboration, paving the way for future initiatives empowering young Ethiopians to be active participants in achieving the SDGs!\n\n#UNAET #SDGs #Ethiopia #YouthAction\n\n🙌 Special Thanks to: Hailemariam Belay, Yosef Workelule, Loyd Tessema, Yonas Yizezew, Nahom Tseda, Bethlehem Tadesse, Habib Oumer, Liyat Kefyalew, Yohannes Getaneh.",
  },
  
  {
    id: 4,
    title: "Training Program",
    image: [
      "/Training/tr1.jpeg",
      "/Training/tr2.jpeg",
      "/Training/tr3.jpeg"
    ],
    description:
      "Training program from UNA-ET UoG Chapter in collaboration with Youth for Human Rights International",
    details:
      "📚 Training Announcement:\nToday, UNA-ET UoG Chapter, in collaboration with Youth for Human Rights International, kicked off Day #1 of our training on basic human rights concepts from the perspective of the 1948 UDHR for students from UoG Community School, Waliya Secondary School, and Fasiledes Secondary School.\n\nWe introduced UNA-ET and the Vibrant University of Gondar Chapter, followed by an engaging discussion on foundational human rights issues through interactive training and fun games.\n\n🤝 Networking:\nWe successfully created a network among all participating schools, fostering a deeper understanding of the UDHR.\n\n📅 The training will continue for 3 days, empowering youth voices in human rights education!\n\n📅 Date: May 31, 2024",
  },
  
];

const EventsPage = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <>
      <Header />
      <div className="bg-white-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">
            Events
          </h1>
          <div className="space-y-8">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  expandedEventId === event.id
                    ? "fixed inset-0 z-50 m-4 p-8 bg-white overflow-y-auto"
                    : expandedEventId
                    ? "opacity-50 blur-sm"
                    : ""
                }`}
              >
                {/* Event Images */}
                <div className="w-full">
                  {expandedEventId === event.id ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {event.image.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${event.title} ${index + 1}`}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={event.image[0]}
                      alt={event.title}
                      className="w-full h-96 object-cover"
                    />
                  )}
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-md font-bold mb-4">
                    {event.description}
                  </p>
                  {expandedEventId !== event.id && (
                    <button
                      onClick={() => toggleDetails(event.id)}
                      className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
                    >
                      View More
                    </button>
                  )}
                </div>

                {/* Expanded Details */}
                {expandedEventId === event.id && (
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 whitespace-pre-line">
                      {event.details}
                    </p>
                    <button
                      onClick={() => toggleDetails(event.id)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                      Show Less
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
