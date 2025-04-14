import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  // Set initial active link to "home" to ensure it's highlighted on page load
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle navigation when a link is clicked
  const handleNavigation = (section) => {
    // Update the active link immediately when clicked
    setActiveLink(section);
    
    // Close the mobile menu when a link is clicked
    setMenuOpen(false);

    // Scroll to the section
    const element = document.getElementById(section);
    if (element) {
      // Calculate position with offset for navbar
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const navbarHeight = 80; // Approximate navbar height

      // Scroll with smooth behavior
      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if menu is open and the click is outside the navbar
      if (menuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Function to detect which section is currently in view
  useEffect(() => {
    // Initialize with home as active on first load
    if (window.location.hash === "" || window.location.hash === "#") {
      setActiveLink("home");
    }

    const handleScroll = () => {
      // Set scrolled state for potential navbar styling changes
      setScrolled(window.scrollY > 50);

      const sections = ["home", "services", "resume", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 150; // Adding offset for navbar height

      // Find the section that is currently in view
      let currentSection = sections[0]; // Default to home
      let minDistance = Number.MAX_VALUE;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const distance = Math.abs(top - 150); // 150px offset for better detection

          // If this section is closer to the viewport top + offset
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      }

      // Only update if the section has changed
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    // Add scroll event listener with throttling for performance
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledScroll);

    // Call once on mount to set initial active link
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []); // Remove activeLink from dependency array to prevent re-running effect when activeLink changes

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Saad.</div>
      
      {/* Hamburger Menu Icon */}
      <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            className={activeLink === "home" ? "active home" : "home"}
            style={{ color: activeLink === "home" ? "#00abf0" : "white" }}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeLink === "services" ? "active service" : "service"}
            style={{ color: activeLink === "services" ? "#00abf0" : "white" }}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activeLink === "resume" ? "active resume" : "resume"}
            style={{ color: activeLink === "resume" ? "#00abf0" : "white" }}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("resume");
            }}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={
              activeLink === "portfolio" ? "active portfolio" : "portfolio"
            }
            style={{ color: activeLink === "portfolio" ? "#00abf0" : "white" }}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("portfolio");
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active contact" : "contact"}
            style={{ color: activeLink === "contact" ? "#00abf0" : "white" }}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
