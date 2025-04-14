import React from "react";
import "../../Styles/Skills.css";
// Import icons for skills section
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLeaf,
} from "react-icons/fa";
import { SiMongodb, SiFigma } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const Skills = () => {
  return (
    <div className="skills-grid-container">
      <div className="skills-text">
        <h2>
          My <span className="highlight">Skills</span>
        </h2>
        <p>
          I blend frontend expertise (HTML5, CSS3, JavaScript, React, Ui/Ux,
          figma) with backend capabilities (Node.js, MongoDB) to create
          responsive, performant web applications that deliver exceptional user
          experiences.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skill-item">
          <FaHtml5 className="skill-icon html" />
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon css" />
        </div>
        <div className="skill-item">
          <FaJs className="skill-icon js" />
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon react" />
        </div>
        <div className="skill-item">
          <MdDesignServices className="skill-icon ux/ui" />
        </div>
        <div className="skill-item">
          <SiFigma className="skill-icon figma" />
        </div>
        <div className="skill-item">
          <FaNodeJs className="skill-icon node" />
        </div>
        <div className="skill-item">
          <SiMongodb className="skill-icon mongodb" />
          <span className="skill-label">MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
