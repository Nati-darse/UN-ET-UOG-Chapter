import React, { useState } from "react";
import Header from '../components/Header'
import Footer from "../components/Footer";

// Dummy data for events
const eventsData = [
  {
    id: 1,
    
    title: " UNA-ET UOG Chapter Launch: Igniting Youth Action for SDGs!",
    image: ["https://media.licdn.com/dms/image/v2/D4E22AQHM8twVdXenPA/feedshare-shrink_1280/feedshare-shrink_1280/0/1714080971515?e=1742428800&v=beta&t=kNnuSHfDtaqJNsBRIdXFMdCtY1JTlAPF2S_MkjwpU0o",
      "https://media.licdn.com/dms/image/v2/D4E22AQEwDkl1WRA_oQ/feedshare-shrink_800/feedshare-shrink_800/0/1714080971204?e=1742428800&v=beta&t=Kv2l_u3m7ZgxPM7vi0Zw4ufKptSEa9a2vXXLHWDg3ug",
      "https://media.licdn.com/dms/image/v2/D4E22AQGBg1Wb0ukwRw/feedshare-shrink_1280/feedshare-shrink_1280/0/1714080970992?e=1742428800&v=beta&t=hLkd8Lii_VZQ3PbLLLjUMIw4RpRR7vD7Uj1qRd37XxQ",
      "https://media.licdn.com/dms/image/v2/D4E22AQEXHjoVKRVpRA/feedshare-shrink_800/feedshare-shrink_800/0/1714080971040?e=1742428800&v=beta&t=urDojE2Dm1MVaVxCjp3zayxU7inAy9_KYHIOy-qfDsg",
      "https://media.licdn.com/dms/image/v2/D4E22AQEA1TbLuMCgog/feedshare-shrink_1280/feedshare-shrink_1280/0/1714080971495?e=1742428800&v=beta&t=iqgI9PjGD_rnvMBbSSjob-W4GJUB889KsW-EtjpFw_Q",
    ],
    description:
      "The UNA-ET UOG Chapter's impactful launch brought together students, faculty, and esteemed guests for a day dedicated to empowering youth for a sustainable future in Ethiopia.",
      details:
        "🌟 Prior to the Launch:\nUNA-ET UOG members displayed compassion through volunteering at the Mena Home for the Elderly and Disabled. A campus blood donation drive raised awareness of the importance of giving back.\n\n🚀 The Launch Event:\nA thought-provoking panel discussion featuring prominent figures like Dr. Tefera Eshete (University of Gondar Law School Staff), Mr. Hiruy G/giorgis (High Court Judge & University Lecturer), and Mr. Messay Kebede (University of Gondar TV & Production Head) explored how youth can contribute to achieving the SDGs in Ethiopia. An engaging SDG awareness game tested the audience's knowledge and sparked meaningful conversations.\n\n🎉 Celebrating Success:\nFollowing the event, chapter members enjoyed a celebratory dinner hosted by chapter coordinator Mr. Yalew Melaku. The UNA-ET UOG Chapter launch ignited a spirit of social responsibility and collaboration, paving the way for future initiatives empowering young Ethiopians to be active participants in achieving the SDGs!\n\n#UNAET #SDGs #Ethiopia #YouthAction\n\n🙌 Special Thanks to: Hailemariam Belay, Yosef Workelule, Loyd Tessema, Yonas Yizezew, Nahom Tseda, Bethlehem Tadesse, Habib Oumer, Liyat Kefyalew, Yohannes Getaneh.",
 
   
  },
  {
    id: 2,
    title: "🌍 Engaging Discussions on CRGBV 🌍",
    image: ["https://media.licdn.com/dms/image/v2/D4E22AQEXGUeCDWLeYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805658196?e=1742428800&v=beta&t=BB8ydwbRviZhptOlVXoYSt0lucnbvZK7NxIxkvNuhGM",
      "https://media.licdn.com/dms/image/v2/D4E22AQHKKzCAISB87A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805664668?e=1742428800&v=beta&t=TlrstAr0Oxz4A3D_pgNjCLA7ckGnL5jucb6kIJCiGpM",
      "https://media.licdn.com/dms/image/v2/D4E22AQGeLni8g8VmKQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805671198?e=1742428800&v=beta&t=RRnAQQYksrbf0uC9N93zagE80UyK-MzHo8mTy2OqB_g",
      "https://media.licdn.com/dms/image/v2/D4E22AQHSsmqPdDZSGg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805665621?e=1742428800&v=beta&t=DtrA312gVngf_2qBFUavAzldYym3EhitELAwYMfWMqk",
      "https://media.licdn.com/dms/image/v2/D4E22AQGNa6S87-taQQ/feedshare-shrink_800/feedshare-shrink_800/0/1733805665348?e=1742428800&v=beta&t=evS2pgwTifO_kYMKEj37PglIUZiRzoxn7maxVPHTkbg",
      "https://media.licdn.com/dms/image/v2/D4E22AQGiu_n9wNnX3g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805664135?e=1742428800&v=beta&t=LHWTBks3zg4V9EfO7sLBEPc-_j2TMF_frxnzl_QOzqY",
    ],
    description:
      "The UNA-ET University of Gondar Chapter held an enlightening Panel Discussion on Conflict-Related Gender-Based Violence (CRGBV) in Ethiopia on December 4, 2024, at Maraki Campus Alumni Hall.",
    details:
      " 🗣️ Our Distinguished Panelists:\nMs. Huluhager Mandefro\nAssistant Professor Getasew Nigussie\nAssistant Professor Habtamu Genet\n\n💡 Their profound insights and expertise highlighted the pressing issues surrounding CRGBV, fostering awareness and encouraging solutions within our community.\n\n🙏 A special thank you to our esteemed panelists, judges, and guests who made this program a success. Your contributions were truly inspiring and impactful.\n\nLet’s continue to drive meaningful change through education and collaboration. Thank you to everyone who participated and supported this event!",
    
  },
  {
    id: 3,
    title: " Training Program",
    image: ["https://media.licdn.com/dms/image/v2/D4E22AQE9zUDBOR3nXg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717180362930?e=1742428800&v=beta&t=SdbUIhscA4FYwQESW4gvecwb19nmg9OPREWpmmKTkX0",
      "https://media.licdn.com/dms/image/v2/D4E22AQFjuCqdKlRzEg/feedshare-shrink_1280/feedshare-shrink_1280/0/1717180364549?e=1742428800&v=beta&t=IW651AxMAU3rOYAGE22ioj09K4B_NkNixhPvT13L73Q",
      "https://media.licdn.com/dms/image/v2/D4E22AQFPeRwxraQNzQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717180364376?e=1742428800&v=beta&t=dFsGztQyr1ur4ey56pI147xMqx4-RJHaNzQsKQN7bf0",
    ],
    description:
      "Training program from UNA-ET UoG Chapter in collaboration with Youth for Human Rights International",
      details: 
        "📚 Training Announcement:\nToday, UNA-ET UoG Chapter, in collaboration with Youth for Human Rights International, kicked off Day #1 of our training on basic human rights concepts from the perspective of the 1948 UDHR for students from UoG Community School, Waliya Secondary School, and Fasiledes Secondary School.\n\nWe introduced UNA-ET and the Vibrant University of Gondar Chapter, followed by an engaging discussion on foundational human rights issues through interactive training and fun games.\n\n🤝 Networking:\nWe successfully created a network among all participating schools, fostering a deeper understanding of the UDHR.\n\n📅 The training will continue for 3 days, empowering youth voices in human rights education!\n\n📅 Date: May 31, 2024",
  },
  {
    id: 4,
    title: "🌟 A Remarkable Afternoon: The Final Round Debate Competition! 🌟",
    image: ["https://media.licdn.com/dms/image/v2/D4E22AQE5GnKEl5G6xg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805578901?e=1742428800&v=beta&t=izF-XR2deCBUZZeqoK6kAVX2uaN0NIYC-1NPEkL9dj4",
    "https://media.licdn.com/dms/image/v2/D4E22AQEehmmnovpxUQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805576130?e=1742428800&v=beta&t=YR6w1aQqqFFbExS3P7PQqubihue9hcQ0YXxW_hxVqak",
    "https://media.licdn.com/dms/image/v2/D4E22AQHP4Y6e7PGqLA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733805574567?e=1742428800&v=beta&t=SSiza1cLnDz4pzFaqddeB1RZNc8SCNGh1cl-s7fHbi8",],
    description:
      "On December 4, 2024, the UNA-ET University of Gondar Chapter hosted the highly anticipated Final Round Debate Competition at Maraki Campus Alumni Hall.",
    details:
      " 🎤 Debate Topic:\nShould Local Justice Mechanisms Take Precedence Over International Interventions in Addressing Conflict-Related Gender-Based Violence?\n\nOur skilled debaters showcased exceptional arguments, critical thinking, and teamwork, leaving the audience inspired and engaged.\n\n🌟 Judges Panel:\nAssistant Professor Gashaw Sisay\nMr. Fiqadu\nMr. Eyasu\n\n🙏 A heartfelt thank you to our esteemed judges for their invaluable insights, to all the participants for their dedication, and to our wonderful audience for their enthusiastic support.\n\nTogether, we celebrated the power of youth voices and constructive dialogue. Stay tuned for more impactful events!",
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
                        <img key={index} src={img} alt={`${event.title} ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
                      ))}
                    </div>
                  ) : (
                    <img src={event.image[0]} alt={event.title} className="w-full h-96 object-cover" />
                  )}
                </div>

              {/* Event Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-md font-bold mb-4">{event.description}</p>
                {/* View More Button */}
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
                  <p className="text-gray-700 mb-4 whitespace-pre-line">{event.details}</p>
                  {/* Show Less Button */}
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
    <Footer/>
    </>
  );
};

export default EventsPage;
