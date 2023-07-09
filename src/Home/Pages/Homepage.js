import React from "react";
import Feature from "../components/Features/Feature";
import TestimonialSlider from "../components/Testimonial_slider/TestimonialSlider";
import Home from "../components/Home/Home";
import FooterNew from "../components/Footer/FooterNew";

const Homepage = () => {
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Home />
        <Feature />
        <TestimonialSlider />
        <FooterNew />
      </div>
    </>
  );
};

export default Homepage;
