import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import img1 from "../assets/Maryamawit-Solomon.jpg";
import img2 from "../assets/endihnew.jpg"; 
import img3 from "../assets/dawit.jpg";

const testimonials = [
  {
    image: img1,
    name: "Maryamawit Solomon",
    text: "UN-ET UOG Chapter has been instrumental in helping students find their voice and fostering a sense of community on campus.",
  },
  {
    image: img2,
    name: "Endihnew Mitiku",
    text: "Participating in UN-ET UOG Chapter has allowed me to explore unique leadership opportunities while impacting our campus positively.",
  },
  {
    image: img3,
    name: "Dawit Mulugeta ",
    text: "The chapter's initiatives have inspired me to take action and contribute to meaningful causes. Truly a transformative experience!",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.6, duration: 1.6, ease: "easeOut" },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-white-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          What Our Members Say
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative text-center"
            >
              <FaQuoteLeft className="text-yellow-500 text-3xl absolute -top-6 left-6" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full mx-auto mb-4 border-4 border-yellow-400"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              {/* Decorative Stars */}
              <div className="flex justify-center mt-3 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
