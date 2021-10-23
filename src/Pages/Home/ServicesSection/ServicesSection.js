import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const ServicesSection = () => {
  const [services] = useServices();

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> OUR MAIN SERVICES
      </h2>
      <p className="text-center fs-5">Human care is more than healthcare. We prefer quality over anything.</p>
      <div className="container">
        <div className="row g-3">
          {services.slice(0, 6).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <Link to="/services" className="text-decoration-none">
          <button className="btn btn-secondary d-block mx-auto">More Services</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
