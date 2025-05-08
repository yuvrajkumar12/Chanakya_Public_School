import React from "react";
import { Link } from "react-router-dom";
import styles from "./E-Learning.module.css";

function ELearning() {
  return (
    <>
      <div className={styles.eLearning}>
        <h2>E-Learning Platform</h2>
        <p>
          Welcome to our E-Learning platform! We provide a wide range of online
          courses and resources to support your learning journey. Explore our
          offerings and enhance your knowledge.
        </p>

        <h3>Available Courses</h3>
        <ul className={styles.coursesList}>
          <li>
            <Link to={"#"}>
              Course 1: Introduction to Chanakya
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Advanced-Java"}>
              Course 2: Advanced Java
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Programming-in-C"}>
              Course 3: Programming in C
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Marketing-Management"}>
              Course 4: Marketing Management
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Numerical-Analysis"}>
              Course 5: Numerical Analysis
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Organic-Chemistry"}>
              Course 6: Organic Chemistry
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Business-Communication"}>
              Course 7: Business Communication
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Multimedia-Technologies"}>
              Course 8: Multimedia Technologies
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Electrodynamics"}>
              Course 9: Electrodynamics
            </Link>
          </li>
          <li>
            <Link to={"/e-learning/Construction-Materials-and-Technology"}>
              Course 10: Construction Materials and Technology
            </Link>
          </li>
        </ul>
        <div className={styles.quizDiv}>
          <a href="#" target="_blank">
            <button className={styles.quizBtn}>Play Quiz</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default ELearning;
