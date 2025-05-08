import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>Contact Us</h3>
          <p className={styles.contactInfo}>Email: support@Chanakya.com</p>
          <p className={styles.contactInfo}>
            Website: Chanakya Public school.app
          </p>
          <p className={styles.contactInfo}>Phone: +1 (123) 456-7890</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <a className={styles.link} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={styles.link} href="/courses">
                Courses
              </a>
            </li>
            <li>
              <a className={styles.link} href="/admission">
                Admission
              </a>
            </li>
            <li>
              <a className={styles.link} href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a
              className={styles.socialIcon}
              href="#"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              className={styles.socialIcon}
              href="#"
            >
              <i class="fa-brands fa-codepen"></i>
            </a>
            <a
              className={styles.socialIcon}
              href="#"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <Link to={"/share_your_feedback"}>
            <div className={styles.feedbackDiv}>Share your feedback</div>
          </Link>
        </div>
      </div>
      <p className={styles.creator}>&copy; All rights reserved 2025, Yuvraj/Monu</p>
    </footer>
  );
}

export default Footer;
