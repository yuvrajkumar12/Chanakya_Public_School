import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";
import styles from './AdmissionListNotices.module.css'

function AdmissionListNotices() {
  const { notice } = useParams();

  // Define content for each notice based on 'notice'
  let noticeContent = null;
  
  if (notice === "Issue of Admission Form") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>Issue of Admission Form</h2>
        <p>
          Forms are available at the school office or can be downloaded from the official website.
        </p>
      </div>
    );
  } else if (notice === "Form Submission") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>Submit the Filled Form With:</h2>
        <p>
        <p>
  2 passport-size photographs<br />
  Aadhar card copy of student & parents<br />
  Birth Certificate (for Nursery to Class 1)<br />
  Previous class mark sheet/report card (for Class 2–10)<br />
  Transfer Certificate (TC) (for Class 2–10)
</p>

        </p>
      </div>
    );
  } else if (notice === "Document Verification") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>Document Verification</h2>
        <p>
          Scheduled at the time of form submission.<br />
          Please bring original documents for verification.
        </p>
      </div>
    );
  } else if (notice === "Interaction Assessment") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>Interaction / Assessment</h2>
        <p>
          <strong>Nursery to Class 1:</strong> Child–Parent interaction with teachers.<br />
          <strong>Class 2 to 10:</strong> Written test in English, Math & Science followed by an interview.
        </p>
      </div>
    );
  } else if (notice === "Merit List Selection") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>Merit List Selection</h2>
        <p>
          Based on interaction/test performance and seat availability.<br />
          The list will be published on the school notice board and website.
        </p>
      </div>
    );
  } else if (notice === "Fee Submission") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>Fee Submission</h2>
        <p>
          Selected students must submit the admission fee within the given deadline to confirm their seat.
        </p>
      </div>
    );
  } else if (notice === "Final Admission Confirmation") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>Final Admission Confirmation</h2>
        <p>
          Receipt of fees and document verification marks the final step.<br />
          ID card and books will be issued after confirmation.
        </p>
      </div>
    );
  }
  
  // If 'noticeContent' is null, it means the noticeName is not recognized
  if (!noticeContent) {
    return (
      <PageNotFound />
    );
  }

  return <div>{noticeContent}</div>;
}

export default AdmissionListNotices;
