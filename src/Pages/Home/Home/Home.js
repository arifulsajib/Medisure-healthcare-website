import React from "react";
import AppointmentSection from "../AppointmentSection/AppointmentSection";
import Banner from "../Banner/Banner";
import ContactSection from "../ContactSection/ContactSection";
import Intro from "../Intro/Intro";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
      <AppointmentSection></AppointmentSection>
    </div>
  );
};

export default Home;
