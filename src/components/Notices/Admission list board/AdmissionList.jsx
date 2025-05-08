import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdmissionList.module.css";

const notices = [
  {
    id: 1,
    text: "Issue of Admission Form",
  },
  {
    id: 2,
    text: "Form Submission",
  },
  {
    id: 3,
    text: "Document Verification",
  },
 
  {
    id: 4,
    text: "Interaction Assessment",
  },
  {
    id: 5,
    text: "Merit List Selection",
  },
  {
    id: 6,
    text: "Fee Submission",
  },
  {
    id: 7,
    text: "Final Admission Confirmation",
  },
];

function AdmissionNoticeBoard() {
  return (
    <>
      <div className={styles.noticeBoard}>
        <h2 className={styles.noticeheading}> Admission Process (Nursery to Class 10)</h2>
        <ul className={styles.noticeList}>
          {notices.map((notice) => (
            <Link to={`/admission-list/${notice.text}`}>
              <li key={notice.id} className={styles.noticeItem}>
                {notice.text}
                <span className={styles.badge}>
                  <img
                    src="http://results.amucontrollerexams.com/result/cons/test.gif"
                    alt="Smiley face"
                    height="20"
                    width="35"
                  />
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AdmissionNoticeBoard;
