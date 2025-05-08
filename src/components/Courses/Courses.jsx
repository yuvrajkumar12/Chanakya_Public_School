import React from "react";
import styles from "./Courses.module.css";
import { Link, Route, Routes } from "react-router-dom";

const courses = [
  { id: 1, name: "Our Curriculum" },
  { id: 2, name: "Dress code" },
  { id: 3, name: "Fee Structure" },
  { id: 4, name: "Application" },
  { id: 5, name: "Academic calendar" },
  { id: 5, name: "Transport services" },
];

function Courses() {
  return (
    <>
      <div className={styles.courses}>
        <h2>Academics Details</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/courses/${course.id}/${course.name}`}>
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Courses;
