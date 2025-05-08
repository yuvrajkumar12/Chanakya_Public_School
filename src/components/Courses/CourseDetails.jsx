import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import PageNotFound from "../404 error page/404Page";

function CourseDetails() {
  // Access the route parameters using useParams
  const { id, name } = useParams();

  const courseDetails = {
    1: {
      title: "Our Curriculum",
      description:
        "Chanakya Public School holds classes from Beginners to Xth. The medium of instruction is English, and the school consistently conducts curricular, co-curricular, and extra-curricular programs such as Music and Dance, Dramatics, Arts & Crafts, Indoor & Outdoor Games, Physical Training (P.T), Yoga, Practice, Natural Health Training, Handicrafts, etc., to encourage students to take advantage of various opportunities for holistic development. Chanakya Public School believes that academic qualifications alone do not make an individual truly educated. The classrooms are well-equipped, offering a healthy atmosphere and modern educational methods.",
    },
  };

  // Get the course details based on the route parameter
  const course = courseDetails[id];

  // Check if the course exists otherwise show page not found page
  if (!course) {
    return <PageNotFound />;
  }

  return (
    <div className={styles["course-details-container"]}>
      <div className={styles["course-details"]}>
        <h2>{course.title}</h2>
        <p>
          <strong></strong> {course.description}
        </p>
        <Link to={"/admission"}>
          <button className={styles.applybtn}>Apply now</button>
        </Link>
      </div>
    </div>
  );
}

export default CourseDetails;
