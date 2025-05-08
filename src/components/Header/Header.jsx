import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../images/Chanakya.png";

function Header() {
  const location = useLocation();
  // Determine if the current route matches a course detail route
  const isCourseDetailRoute = location.pathname.startsWith("/courses/");
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <img src={logo} width={180} height={180} />
        </div>
      </Link>
      <div className={styles.headercontent}>
        <h1 className={styles.uniName}>Chanakya Public School Tarwan, Siwan</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? styles.active : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? styles.active : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={
                  location.pathname === "/courses" || isCourseDetailRoute
                    ? styles.active
                    : ""
                }
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className={
                  location.pathname === "/admission" ? styles.active : ""
                }
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                to="/rank_holders1"
                className={
                  location.pathname === "/rank_holders1"
                    ? styles.active
                    : ""
                }
              >
                Rank Holders
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={
                  location.pathname === "/gallery" ? styles.active : ""
                }
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
