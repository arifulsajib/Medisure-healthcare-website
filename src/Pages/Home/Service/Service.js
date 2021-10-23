import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, name, countDoctors, openDays, pic } = props.service;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <img src={pic} className="card-img-top" alt="..." height="200" />
          <div className="card-body">
            <h4 className="card-title text-center">{name}</h4>
            <h6>
              <i className="fas fa-user-nurse"></i> Specialised Doctors: {countDoctors}
            </h6>
            <h6>
              <i className="fas fa-calendar-week"></i> Open: {openDays}
            </h6>
            <p>Click on the details button to see more information about this service.</p>
            <Link to={`/service/${id}`} className="text-decoration-none">
              <button className="default-btn d-block mx-auto">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
