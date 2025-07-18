import React, { useState } from "react";
import axios from "axios";
import "./SuggestionBox.css";

const SuggestionBox = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Invalid email";
        break;
      case "phone":
        if (value && !phoneRegex.test(value))
          error = "Invalid phone (10 digits)";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value); // real-time validate
  };

  const isFormValid = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
      if (errors[key]) newErrors[key] = errors[key];
    });

    return Object.values(errors).every((val) => val === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!isFormValid()) {
      setStatus("❌ Please correct the highlighted errors.");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVERNAME}/api/suggestion/send`,
        formData
      );
      setStatus("✅ Suggestion sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Email error:", error);
      setStatus("❌ Failed to send suggestion. Try again.");
    }
  };

  return (
    <div className="suggestion-box-container">
      <h2 className="suggestion-title">Suggestion Box</h2>
      {status && <p className="status-message">{status}</p>}
      <form onSubmit={handleSubmit} className="suggestion-form">
        <label>
          Full Name<span>*</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </label>

        <label>
          Email<span>*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </label>

        <label>
          Phone (Optional)
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </label>

        <label>
          Subject<span>*</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error-text">{errors.subject}</p>}
        </label>

        <label>
          Your Suggestion<span>*</span>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </label>

        <button type="submit" className="submit-btn">
          Submit Suggestion
        </button>
      </form>
    </div>
  );
};

export default SuggestionBox;
