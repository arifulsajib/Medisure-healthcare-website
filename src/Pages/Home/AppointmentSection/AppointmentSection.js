import React from "react";
import { Link } from "react-router-dom";
import useDoctors from "../../../Hooks/useDoctors";
import Doctor from "../Doctor/Doctor";

const AppointmentSection = () => {
  const [doctors] = useDoctors();

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> Request Appointment
      </h2>
      <p className="text-center fs-5">Make sure to make an appointment before visiting our clinic</p>
      <div className="container">
        <div className="row g-3">
          {doctors.slice(0, 3).map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
        <Link to="/appointment" className="text-decoration-none">
          <button className="btn btn-secondary d-block mx-auto">More Doctors</button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentSection;
