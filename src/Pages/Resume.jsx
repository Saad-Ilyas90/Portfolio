import React, { useState } from "react";
import "../Styles/Resume.css";
import Experience from "../Components/Resume/Experience";
import Education from "../Components/Resume/Education";
import Skills from "../Components/Resume/Skills";
import AboutMe from "../Components/Resume/AboutMe";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const renderContent = () => {
    switch (activeSection) {
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "aboutMe":
        return <AboutMe />;
      default:
        return <Experience />;
    }
  };

  return (
    <section className="resume-container" id="resume">
      <div className="resume-split-layout">
        <div className="resume-left">
          <h1>Why Hire Me?</h1>
          <p>
            I blend technical expertise with creative problem-solving to deliver
            exceptional digital experiences that drive results. My full-stack
            development skills and user-centered approach ensure I can
            contribute immediate value to your team.
          </p>

          <div className="resume-nav">
            <button
              className={`resume-nav-button ${
                activeSection === "experience" ? "active" : ""
              }`}
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </button>
            <button
              className={`resume-nav-button ${
                activeSection === "education" ? "active" : ""
              }`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
            <button
              className={`resume-nav-button ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
            <button
              className={`resume-nav-button ${
                activeSection === "aboutMe" ? "active" : ""
              }`}
              onClick={() => setActiveSection("aboutMe")}
            >
              About Me
            </button>
          </div>
        </div>

        <div className="resume-right">{renderContent()}</div>
      </div>
    </section>
  );
};

export default Resume;
