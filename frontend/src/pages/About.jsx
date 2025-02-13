import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg from '../assets/4675.jpg'; // Placeholder image
import { FaHandsHelping, FaUsers, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <section className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 relative inline-block">
          About <span className="text-yellow-500">UN-ET UOG</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-500 mt-2"></div>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
          UN-ET UOG Chapter is committed to instilling United Nations values within the University of Gondar. We empower students through leadership, engagement, and impactful initiatives.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img src={aboutImg} alt="About Us" className="w-full h-88 object-cover rounded-lg shadow-md" />
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            Our mission is to inspire, educate, and engage students in global issues by creating opportunities for collaboration, advocacy, and leadership development.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <FaHandsHelping className="text-yellow-500 text-5xl" />
            <span className="text-lg text-gray-700">We promote a culture of unity and purpose through teamwork.</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaUsers className="text-blue-900 text-5xl mx-auto mb-4" />
          <h4 className="text-xl font-bold text-blue-900 mb-2">Diverse Teams</h4>
          <p className="text-gray-600">Join our six dedicated teams working on impactful global projects.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaGlobe className="text-blue-900 text-5xl mx-auto mb-4" />
          <h4 className="text-xl font-bold text-blue-900 mb-2">Global Engagement</h4>
          <p className="text-gray-600">Participate in initiatives that align with the United Nations’ vision.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaHandsHelping className="text-blue-900 text-5xl mx-auto mb-4" />
          <h4 className="text-xl font-bold text-blue-900 mb-2">Collaboration</h4>
          <p className="text-gray-600">Work with students, faculty, and global partners for positive change.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white text-center py-12 mt-16 rounded-lg">
        <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Be a part of our journey towards creating a better world. Join UN-ET UOG Chapter today!
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdk15_qIaFj-MXxpxd3h5VIRFJ2dYjMHSTaX7W3C_00lJqY0A/viewform" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition">
          Join Us Now
        </a>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default AboutUs;
