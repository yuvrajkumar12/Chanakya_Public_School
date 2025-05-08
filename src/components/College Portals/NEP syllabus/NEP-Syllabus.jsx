import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./NEP-Syllabus.module.css";

function NEPSyllabus() {
  // Sample syllabus data for 13 courses
  const syllabusData = {
    class1: `
    Class I:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Environmental Studies (EVS)
  `,
  class2: `
    Class II:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Environmental Studies (EVS)
  `,
  class3: `
    Class III:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Environmental Studies (EVS)  
    (v) Computer
  `,
  class4: `
    Class IV:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Environmental Studies (EVS)  
    (v) Computer
  `,
  class5: `
    Class V:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Environmental Studies (EVS)  
    (v) Computer
  `,
  class6: `
    Class VI:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Science  
    (v) Social Science  
    (vi) Sanskrit  
    (vii) Computer
  `,
  class7: `
    Class VII:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Science  
    (v) Social Science  
    (vi) Sanskrit  
    (vii) Computer
  `,
  class8: `
    Class VIII:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Science  
    (v) Social Science  
    (vi) Sanskrit  
    (vii) Computer
  `,
  class9: `
    Class IX:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Science  
    (v) Social Science  
    (vi) Information Technology (IT)  
    (vii) Sanskrit
  `,
  class10: `
    Class X:
    (i) English  
    (ii) Hindi  
    (iii) Mathematics  
    (iv) Science  
    (v) Social Science  
    (vi) Information Technology (IT)  
    (vii) Sanskrit
    `,
  };

  // Use React Router's useParams to get the course name from the URL
  const { courseName } = useParams();
  const selectedSyllabus = syllabusData[courseName];

  return (
    <>
      <div className={styles.nepSyllabus}>
        <h2> Chanakya Public School  CBSE Syllabus (As per NEP Guidelines)</h2>
        <p>
        The National Education Policy (NEP) aims to provide a holistic, flexible, multidisciplinary approach to education. At Chanakya Public School, we follow the CBSE curriculum aligned with NEP 
        to build strong foundational, cognitive, and life skills in students.
        </p>

        {/* Conditionally render the syllabus content or the course list */}
        {selectedSyllabus ? (
          <div className={styles.syllabusContent}>
            <h3>{courseName} Syllabus</h3>
            <pre>{selectedSyllabus}</pre>
          </div>
        ) : (
          <ul className={styles.coursesList}>
            {Object.keys(syllabusData).map((course, index) => (
              <li key={index}>
                <Link to={`/NEP-syllabus/${course}`}>{course} syllabus</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default NEPSyllabus;
