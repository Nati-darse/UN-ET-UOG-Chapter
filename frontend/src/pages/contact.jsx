import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
    <Header/>
    <div className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Contact Us</h1>

        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Contact Information</h2>
          <p className="text-gray-700">📍 Maraki Campus, Gondar, Ethiopia</p>
          <p className="text-gray-700">📞 +251 912 345 678</p>
          <p className="text-gray-700">📧 unaetuogchapter@gmail.com</p>
          <p className="text-gray-700">🕒 Mon-Fri, 9 AM - 5 PM</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Send Us a Message</h2>
          {submitted ? (
            <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-md" required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-md" required />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-md" rows="4" required></textarea>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Submit</button>
            </form>
          )}
        </div>

        {/* Google Map Embed */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Location: university of Gondar </h2>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.openstreetmap.org/export/embed.html?bbox=37.4612%2C12.6242%2C37.4812%2C12.6442&layer=mapnik"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Social Media Links */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://t.me/UNAETUoG" className="text-blue-600 hover:text-blue-800">Telegram </a>
            <a href="ticktok.com" className="text-blue-600 hover:text-blue-800">Ticktok</a>
            <a href="https://www.linkedin.com/company/united-nation-association-of-ethiopia-university-of-gondar-chapter/" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="https://www.instagram.com/una.et.uog?utm_source=qr&igsh=MTh4Y202eDE0NnJn" className="text-blue-600 hover:text-blue-800">Instagram</a>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <details className="mb-4">
            <summary className="cursor-pointer font-semibold text-blue-600">How can I become a member?</summary>
            <p className="text-gray-700 mt-2">You can join by filling out the membership form and attending our orientation session.</p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer font-semibold text-blue-600">How do I register for events?</summary>
            <p className="text-gray-700 mt-2">Event registration links are shared on our social media and website before each event.</p>
          </details>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
