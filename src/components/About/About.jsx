import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
  <h2>About Our School</h2>
  <p>
    Our school, founded in 19XX, is a renowned institution dedicated to
    providing high-quality education and fostering an environment of
    academic excellence. Located in the heart of the city, our school
    offers classes from Grade 1 to Grade 10, focusing on holistic development
    across academic and co-curricular areas.
  </p>

  <h3>Our Mission</h3>
  <p>
    At our school, our mission is to empower students with knowledge and
    skills that will help them grow intellectually, emotionally, and socially.
    We are committed to nurturing talent, encouraging creativity, and
    instilling values of integrity, discipline, and leadership.
  </p>

  <h3>Our Faculty</h3>
  <p>
    We take pride in our dedicated and experienced teachers who are
    passionate about educating young minds. They provide a supportive and
    engaging learning environment, helping each student reach their full
    potential. Our faculty regularly updates their skills through training
    and workshops.
  </p>

  <h3>Infrastructure</h3>
  <p>
    Our school campus features modern classrooms, well-equipped science and
    computer labs, a rich library, and spacious playgrounds. These facilities
    support both academic learning and physical development, offering students
    a balanced and enjoyable school experience.
  </p>
</div>
  );
}

export default About;
