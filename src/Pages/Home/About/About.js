import React from "react";
import img1 from "../../../Images/About/about1.jpg";
import img2 from "../../../Images/About/about2.jpg";
import img3 from "../../../Images/About/about3.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-center">About Us</h1>
      <div className="container overflow-hidden">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={img1} alt="" height="450" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={img2} alt="" height="500" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={img3} alt="" height="450" />
          </div>
        </div>
      </div>

      <div className="container my-5 d-flex flex-column align-items-center">
        <h2>WHO WE ARE!</h2>
        <h3 className="w-75 text-center">We ensures the best health care as well as clinical service with outstanding personal service.</h3>
      </div>
    </div>
  );
};

export default About;
