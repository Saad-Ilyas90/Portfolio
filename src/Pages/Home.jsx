import React from "react";
import "../Styles/Home.css";
import profileImage from "../Assets/saad.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CV from "../Assets/CV.pdf";

const Home = () => {
  const handleDownloadCV = () => {
    // Create an anchor element and set the href to the CV file
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Saad_Ilyas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container" id="home">
      <div className="home-content">
        <div className="profile-info">
          <h1 className="name">Saad Ilyas</h1>
          <h2 className="title">
            I'm a <span className="highlight">Software Engineer</span>
          </h2>
          <p className="description">
            As a dedicated Software Engineer, I specialize in building
            efficient, scalable, and user-friendly web applications. With a
            strong foundation in modern technologies and a passion for
            problem-solving, I aim to create impactful solutions that enhance
            user experiences and drive innovation.
          </p>
          <div className="cta-container">
            <button className="download-btn" onClick={handleDownloadCV}>
              Download CV
            </button>
            <div className="social-icons">
              <a
                href="https://github.com/Saad-Ilyas90"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saad-ilyas-b666482bb"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
