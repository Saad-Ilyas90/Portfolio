import React from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Site",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      demoLink: "https://example.com/demo1",
    },
    {
      id: 2,
      title: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      demoLink: "https://example.com/demo2",
    },
    {
      id: 3,
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      demoLink: "https://example.com/demo3",
    },
  ];

  return (
    <section className="projects-section" id="portfolio">
      <div className="projects-container">
        <div className="projects-header">
          <h2>
            My <span className="highlight">Jobs</span>
          </h2>
          <h1>Recent Projects</h1>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                    View Demo <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
