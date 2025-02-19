import React from "react";
import { motion } from "framer-motion";
import teamProjects from "../assets/ab1.png";
import workshops from "../assets/ab11.png";
import network from "../assets/network.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const GlobalAwarenessSection = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:px-24">
        <h2 className="text-4xl md:text-5xl font-bold max-w-xl relative leading-tight">
          Fostering Global 
          <span className="block">Awareness and</span>
          <span className="block">Leadership</span>
          <div className="absolute -bottom-5 left-2 w-32 md:w-64 h-1 bg-yellow-400"></div>
          <div className="absolute -bottom-7 left-6 md:left-7 w-40 md:w-72 h-1 bg-yellow-400"></div>
        </h2>
        
        <div className="max-w-xl mt-6 md:mt-0">
          <p className="text-gray-700 text-lg leading-relaxed">
            UN-ET UOG Chapter empowers students at the University of Gondar to embrace the ideals of the United Nations through active engagement and collaboration. Our organization is committed to nurturing leadership skills and promoting a sense of global responsibility among our members.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            image: teamProjects,
            title: "Participate in Dynamic Team Projects for Social Impact",
            description:
              "Join one of our six specialized teams to collaborate on initiatives that align with the UN's vision, creating real change within our community and beyond.",
          },
          {
            image: workshops,
            title: "Enhance Your Skills through Engaging Workshops and Events",
            description:
              "Take part in skill-building events designed to equip you with essential competencies, fostering innovation and collaboration among like-minded peers.",
          },
          {
            image: network,
            title: "Network and Collaborate for Meaningful Connections",
            description:
              "Build a strong network of peers and mentors, creating partnerships that extend beyond the university and actively support global objectives.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-gray-50 rounded-3xl p-8 flex flex-col items-start shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-2xl w-full h-64 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GlobalAwarenessSection;
