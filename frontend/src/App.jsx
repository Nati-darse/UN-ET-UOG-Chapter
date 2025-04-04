import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import ImpactSection from "./components/ImpactSection";
import Section from "./components/Section";
import AboutUsSection from "./components/AboutUsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Import your new pages
import EventsPage from "./pages/Event";
import AboutPage from "./pages/About";
import ContactPage from "./pages/contact";
import Teams from "./pages/Teams";
import LeadersPage from "./pages/leaders";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Testimonials />
      <AboutUsSection />
      <Section />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/leaders" element={<LeadersPage/>}/>
      </Routes>
    // </Router>
  );
};

export default App;
