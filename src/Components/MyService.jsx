import React from "react";
import "../Styles/MyService.css";
import Service from "../Pages/Service";
import { FaPencilRuler, FaCode, FaServer } from "react-icons/fa";

const MyService = () => {
  const services = [
    {
      id: 1,
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      description:
        "I design clean, intuitive user interfaces that offer seamless user experiences. My focus is on creating visually appealing layouts that enhance usability and engagement.",
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Web Development",
      description:
        "I build responsive, high-performance web applications using modern technologies. From concept to deployment, I ensure each project is fast, scalable, and fully optimized.",
    },
    {
      id: 3,
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "I develop robust backend systems using Node.js and Express, ensuring secure APIs, smooth data flow, and efficient server-side logic to support dynamic applications.",
    },
  ];

  return (
    <section id="services" className="services-container">
      <div className="services-header">
        <h2 className="section-title">
          My <span className="highlight">Services</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <Service
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MyService;
