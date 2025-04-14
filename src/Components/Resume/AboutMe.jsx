import React from "react";
import "../../Styles/Aboutme.css";

const Aboutme = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">
        About <span className="highlight">Me</span>
      </h2>

      <p className="about-description">
        This is the short introduction about me.
      </p>

      <div className="about-details">
        <div className="detail-item">
          <span className="detail-label">Name</span>
          <span className="detail-value">Saad Ilyas</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Gender</span>
          <span className="detail-value">Male</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Age</span>
          <span className="detail-value">22 Years Old</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Status</span>
          <span className="detail-value">UnMarried</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">City</span>
          <span className="detail-value">Rawalpindi</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Nationality</span>
          <span className="detail-value">Pakistan</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Experience</span>
          <span className="detail-value">1 Year</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Availablity</span>
          <span className="detail-value">Part Time</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Freelance</span>
          <span className="detail-value">Available</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Phone</span>
          <span className="detail-value">+923131578027</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Email</span>
          <span className="detail-value">saadilyas966@gmail.com</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Languages</span>
          <span className="detail-value">English, Urdu</span>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
