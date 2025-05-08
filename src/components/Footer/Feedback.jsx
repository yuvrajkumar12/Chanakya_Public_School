import React, { useState } from "react";
import styles from "./Feedback.module.css";

function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [facilities, setFacilities] = useState("");

  const handleSubmitFeedback = (e) => {
    e.preventDefault(); // Prevent form submission to avoid page reload
    if (name && phone && experience && facilities) {
      setSubmitted(true); // Set submitted state to true if all fields are filled
    } else {
      alert("Please fill all the required fields.");
    }
  };

  return (
    <div className={styles.feedbackContainer}>
      <h1 className={styles.feedHeading}>School Feedback Form</h1>
      {submitted ? (
        <div className={styles.submittedMessage}>
          Thank you for sharing your feedback!
        </div>
      ) : (
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Student Feedback Form</h2>
          <p className={styles.description}>
            We appreciate your time and feedback to help us improve the school.
          </p>
          <form className={styles.surveyForm} onSubmit={handleSubmitFeedback}>
            <div className={styles.formGroup}>
              <label className={styles.nameLabel} htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.controlForm}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.numberLabel} htmlFor="number">
                Your Phone Number
              </label>
              <input
                type="text"
                id="number"
                name="phone"
                className={styles.controlForm}
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.sel}>How do you find the school?</label>
              <select
                id="experience"
                name="experience"
                className={styles.controlForm}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="" disabled>
                  Select your experience
                </option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.sel}>Facilities Rating</label>
              <select
                id="facilities"
                name="facilities"
                className={styles.controlForm}
                value={facilities}
                onChange={(e) => setFacilities(e.target.value)}
              >
                <option value="" disabled>
                  Rate the facilities
                </option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.btn}>
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Feedback;
