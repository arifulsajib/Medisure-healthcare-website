import React from "react";
import introBanner from "../../../Images/Banner/intro-banner.png";

const Intro = () => {
  return (
    <div className="container overflow-hidden my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="img-fluid" src={introBanner} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h1 className="fw-extrabold blue-color">WHY CHOOSE US?</h1>
            <p className="fs-5">
              We have High quality Doctors who are ready to help you recover. We provide all kinds of medical Treatment. We have various research laboratory and Expertice doctor. MediSure ensures the best health care as well as clinical service with
              outstanding personal service.{" "}
            </p>
            <p className="fs-5">The motto of Medisure is that human care is more than healthcare. We prefer quality over anything.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
