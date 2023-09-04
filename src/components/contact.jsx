import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(enteredEmail)) {
      setEmailError("Email address invalid");
    } else {
      setEmailError("");
    }
  };

  const handleBlur = (field) => {
    if (!field) {
      alert("This field is required.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-info">
          <label htmlFor="name">Name:   </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur(name)}
            required
          />
        </div>
        <div className="form-info">
          <label htmlFor="email">Email:   </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur(email)}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-info">
          <label htmlFor="message">Message:   </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => handleBlur(message)}
            required
          />
        </div>
        <button type="submit">Done</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
