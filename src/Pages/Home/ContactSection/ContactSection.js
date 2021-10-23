import React from "react";

const ContactSection = () => {
  return (
    <div className="container px-4 shadow-lg rounded">
      <h2 className="text-center blue-color pt-3">
        <i className="fas fa-clock"></i> Schedule
      </h2>
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 w-75 mx-auto">
            <h2 className="fw-bolder blue-color">Medisure</h2>
            <p className="fw-bold text-secondary">MediSure ensures the best health care as well as clinical service with outstanding personal service. We ensures the best health care as well as clinical service with outstanding personal service.</p>
            <p className="mt-4">
              <i className="blue-color fas fa-location-arrow"></i> Tupac Amaru 200 - Lima
            </p>
            <p>
              <i className="blue-color fas fa-phone"></i> +51 0123456789
            </p>
            <div className="mb-3 fs-4">
              <i className="fab fa-facebook-square me-4"></i>
              <i className="fab fa-twitter me-4"></i>
              <i className="fab fa-instagram me-4"></i>
              <i className="fab fa-linkedin-in me-4"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="p-3 w-75 mx-auto">
            <h4 className="fw-bolder">Opening Hours</h4>
            <table className="table bluish-bg text-secondary fw-bold rounded">
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Wedneday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>09:00 - 19:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Emergency</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
