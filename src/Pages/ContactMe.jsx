import React, { useState } from "react";
import "../Styles/ContactMe.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill in all fields",
        isError: true,
        isSubmitted: false,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: "Please enter a valid email address",
        isError: true,
        isSubmitted: false,
      });
      return;
    }

    setFormStatus({
      message: "Message sent successfully!",
      isError: false,
      isSubmitted: true,
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        message: "",
        isError: false,
        isSubmitted: false,
      });
    }, 5000);
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>saadilyas966@gmail.com</p>
            <a href="mailto:saadilyas966@gmail.com">Send a message</a>
          </div>

          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+923131578027</p>
            <a href="tel:+923131578027">Call me</a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-input message-input"
                rows="6"
              ></textarea>
            </div>

            {formStatus.message && (
              <div
                className={`form-message ${
                  formStatus.isError ? "error" : "success"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
