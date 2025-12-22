import React from "react";
import Navbar from "../components/Navbar";
import HeroComponent from "../components/HeroComponent";
import WhatWeDo from "../components/WhatWeDo";
import BangerGallery from "../components/BangerGallery";
import TrustUs from "../components/TrustUs";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import MusicCreatorBanner from "../components/MusicCreatorBanner";
import Footer from "../components/Footer";
import StepByStep from "../components/StepByStep";
import NewBangerDifference from "../components/NewBangerDifference";
import ResponsiveHeroSection from "../components/ResponsiveHeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <div className="responsiveherosection">
        <ResponsiveHeroSection />
      </div>
      <div className="whatWeDo-container">
        <WhatWeDo />
      </div>

      <div className="hidden-component">
        <NewBangerDifference />
      </div>

      <BangerGallery />
      <div className="parent-container">
        <StepByStep />
        <TrustUs />
      </div>

      <Slider />
      <Testimonial />
      <MusicCreatorBanner />
      <Footer />
    </>
  );
};

export default Home;
