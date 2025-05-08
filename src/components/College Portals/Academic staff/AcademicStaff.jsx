import React from "react";
import styles from "./AcademicStaff.module.css";
import yuvraj1 from "../../images/Yuvraj.jpg";
import monu from "../../images/Monu.jpg";
function AcademicStaff() {
  return (
    <>
      <div className={styles.academicStaff}>
        <h2>Academic Staff Details</h2>
        <p>
        At our school, we pride ourselves on having a dedicated 
        team of academic staff who are experts in their respective fields. 
        Our teachers play a vital role in shaping the future of our students 
        by providing a quality education and fostering a dynamic, engaging learning environment.
        </p>

        <h3>Meet Our Professors</h3>
        <ul className={styles.professorsList}>
          <li>
            <img
              src={yuvraj1}
              alt="Professor 1"
            />
            <p>MR.Yuvraj Kumar</p>
            <p>Department of Computer Science</p>
          </li>
          <li>
            <img
              src={monu}
              alt="Professor 2"
            />
            <p>Prof. Monu Kumar</p>
            <p>Department of Mathematics</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/1366724990/photo/smiling-computer-science-teacher-using-laptop-during-a-class-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=zVHFiRTY0aSu3zpDGM3jWV1sXBkPurXfr4GmClgvsiI="
              alt="Professor 2"
            />
            <p>Prof. Sakshi Gautam</p>
            <p>Department of CPS</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/1354640844/photo/portrait-of-happy-high-school-teacher-in-the-classroom-looking-at-camera.jpg?s=612x612&w=0&k=20&c=KD2uhqHrVIQpFbnb8oe6C3abBBW6Fq2n1dFjkGPzKLE="
              alt="Professor 2"
            />
            <p>Prof. Nitish Kumar</p>
            <p>Department of CPS</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/1330255708/photo/portrait-of-smiling-teacher-in-school-corridor-with-books-in-hand.jpg?s=612x612&w=0&k=20&c=uL_vENUw7dccgUwjGcIwMMU_5Ew9BM5C8A0jInwn_hk="
              alt="Professor 2"
            />
            <p>Prof. Sobha pandey</p>
            <p>Department of CPS</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/1333800469/photo/teacher-guiding-student-on-there-project-in-lab-teacher-helping-student-in-there-project-in.jpg?s=612x612&w=0&k=20&c=-qXcWxSZZk_pryMS8RZYQXufQxKuQUE7pmNMo13gvYo="
              alt="Professor 2"
            />
            <p>Prof. Rohtash Dwivedi</p>
            <p>Department of Physics</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/986272220/photo/teenage-boy-receives-help-from-attentive-science-teacher.jpg?s=612x612&w=0&k=20&c=I9bvwJ7C_1jr6x8IRlUmvH0bOHDY8oQukD_e7xyuAGk="
              alt="Professor 2"
            />
            <p>Prof. Sourav Saraf</p>
            <p>Department of Math</p>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/id/1168175766/photo/portrait-of-an-indian-man-in-a-diverse-team-of-creative-millennial-coworkers-in-a-startup.jpg?s=612x612&w=0&k=20&c=3WkAMECbELOCwAgrf3sXjyQ-s68et79d7mg9TIxa5x0="
              alt="Professor 2"
            />
            <p>Prof. Jayesh Vyas</p>
            <p>Department of Science</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AcademicStaff;
