import React from "react";
import useDoctors from "../../Hooks/useDoctors";
import Doctor from "../Home/Doctor/Doctor";

const Appointment = () => {
  const [doctors] = useDoctors();

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">Request Appointment</h2>
      <p className="text-center fs-5">Make sure to make an appointment before visiting our clinic</p>
      <div className="container">
        <div className="row g-3">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
