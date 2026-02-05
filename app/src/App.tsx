import React from "react";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import Tools from "./sections/Tools";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import TrialDownload from "./sections/TrialDownload";
import LicenseRenewal from "./sections/LicenseRenewal";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <main>
        <Hero />
        <Tools />
        <HowItWorks />
        <Pricing />
        <TrialDownload />
        <LicenseRenewal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
