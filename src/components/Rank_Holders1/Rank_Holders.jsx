import React from "react";
import styles from "./Rank_Holders.module.css";

function Rank_Holders() {
  const classData = {
    Nursery: [
      { id: 1, name: "Student A", marks: 95, percentage: 95 },
      { id: 2, name: "Student B", marks: 90, percentage: 90 },
    ],
    LKG: [
      { id: 1, name: "Student C", marks: 89, percentage: 89 },
      { id: 2, name: "Student D", marks: 88, percentage: 88 },
    ],
    UKG: [
      { id: 1, name: "Student E", marks: 87, percentage: 87 },
      { id: 2, name: "Student F", marks: 86, percentage: 86 },
    ],
    "Class 1": [
      { id: 1, name: "Student G", marks: 85, percentage: 85 },
      { id: 2, name: "Student H", marks: 84, percentage: 84 },
    ],
    "Class 2": [
      { id: 1, name: "Student I", marks: 83, percentage: 83 },
      { id: 2, name: "Student J", marks: 82, percentage: 82 },
    ],
    "Class 3": [
      { id: 1, name: "Student K", marks: 81, percentage: 81 },
      { id: 2, name: "Student L", marks: 80, percentage: 80 },
    ],
    "Class 4": [
      { id: 1, name: "Student M", marks: 79, percentage: 79 },
      { id: 2, name: "Student N", marks: 78, percentage: 78 },
    ],
    "Class 5": [
      { id: 1, name: "Student O", marks: 77, percentage: 77 },
      { id: 2, name: "Student P", marks: 76, percentage: 76 },
    ],
    "Class 6": [
      { id: 1, name: "Student Q", marks: 75, percentage: 75 },
      { id: 2, name: "Student R", marks: 74, percentage: 74 },
    ],
    "Class 7": [
      { id: 1, name: "Student S", marks: 73, percentage: 73 },
      { id: 2, name: "Student T", marks: 72, percentage: 72 },
    ],
    "Class 8": [
      { id: 1, name: "Student U", marks: 71, percentage: 71 },
      { id: 2, name: "Student V", marks: 70, percentage: 70 },
    ],
    "Class 9": [
      { id: 1, name: "Student W", marks: 69, percentage: 69 },
      { id: 2, name: "Student X", marks: 68, percentage: 68 },
    ],
    "Class 10": [
      { id: 1, name: "Student Y", marks: 67, percentage: 67 },
      { id: 2, name: "Student Z", marks: 66, percentage: 66 },
    ],
  };
  return (
    <div className={styles.collegesContainer}>
      {Object.entries(classData).map(([className, students]) => (
        <div key={className}>
          <h2>{className}</h2>
          <table className={styles.collegeTable}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Percentage(%)</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.marks}</td>
                  <td>{student.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Rank_Holders;
