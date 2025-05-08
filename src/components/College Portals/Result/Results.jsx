import React, { useState, useEffect } from "react";
import styles from "./Results.module.css";
import sign from "../../images/signature-png.png";
import clglogo from "../../images/Chanakya.png";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Results() {
  const resultsData = [
    { id: "Chanakya Public School", title: "Chanakya Public School(1 to 10)" },
    { id: "Chanakya Coaching Center", title: "Chanakya Coaching Center" },
   
  ];

  const [selectedResult, setSelectedResult] = useState(null);
  const [captchaCode, setCaptchaCode] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [studentResult, setStudentResult] = useState(null); // To store the student's result
  const [error, setError] = useState("");

  useEffect(() => {
    // Generate a random CAPTCHA code when the component mounts
    generateCaptcha();
  }, []);

  const handleResultClick = (resultId) => {
    setSelectedResult(resultId);
  };

  const generateCaptcha = () => {
    // Generate a random CAPTCHA code (you can customize this code as needed)
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    const captchaLength = 6; // Adjust the length as needed
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    setCaptchaCode(captcha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered CAPTCHA matches the generated CAPTCHA
    if (enteredCaptcha === captchaCode) {
      // Check if the entered roll number exists in the available roll numbers
      if (availableRollNumbers.includes(rollNumber)) {
        // To retrieve the result based on the roll number
        const Response = fetchResultByRollNumber(rollNumber);

        if (Response) {
          // Display the result for the student
          setStudentResult(Response);
          setError("");
        }

        // Reset the form, including CAPTCHA
        setRollNumber("");
        setEnteredCaptcha("");
        generateCaptcha();
      } else {
        // Roll number not found, display an error message
        setStudentResult(null);
        setError("Roll number not found.");
      }
    } else {
      // CAPTCHA code entered incorrectly
      setError("Captcha not matched.");
    }

    if (
      enteredCaptcha !== captchaCode &&
      !availableRollNumbers.includes(rollNumber)
    ) {
      // If both roll number and captcha code are invalid
      setError("Either invalid roll number or captcha code.");
    }
  };

  const handleDownloadResult = () => {
    const resultSection = document.getElementById("resultSection"); // ID of the result section

    if (!resultSection) {
      console.error("Result section not found.");
      return;
    }

    // Use html2canvas to capture the result section as an image
    html2canvas(resultSection, { allowTaint: true, useCORS: true }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Calculate the page size based on the result section's size
        const pageWidth = 210; // A4 page width in mm
        const pageHeight =
          (resultSection.clientHeight * pageWidth) / resultSection.clientWidth;
        const orientation = "p"; // Portrait

        // Create a new jsPDF instance
        const pdf = new jsPDF(orientation, "mm", "a4");

        // Add the captured image to the PDF
        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

        // Download the PDF with a unique filename (e.g., based on the student's name)
        pdf.save(`Chanakya_Result_${studentResult.name}.pdf`);
      }
    );
  };

  const handlePrintResult = () => {
    // Hide the header when printing
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");
    if (header) {
      header.classList.add(styles.header);
    }
    if (footer) {
      footer.classList.add(styles.footer);
    }

    // Add the "printOnly" class to elements you want to print
    const elementsToPrint = document.querySelectorAll(".studentResult");
    elementsToPrint.forEach((element) => {
      element.classList.add(styles.printOnly);
    });

    window.print();

    // Remove the "printOnly" class and reset the header visibility after printing
    elementsToPrint.forEach((element) => {
      element.classList.remove(styles.printOnly);
    });
    if (header) {
      header.classList.remove(styles.header);
    }
    if (footer) {
      footer.classList.remove(styles.footer);
    }
  };

  const availableRollNumbers = ["12345", "67890", "54321", "78199"]; // We can add more roll numbers as needed

  const studentResults = {
    12345: {
      rollNo: "12345",
      name: "Dhanu Kumar",
      fatherName: "Manoj Sah",
      photograph:
        "https://media.istockphoto.com/id/1438437093/photo/young-adult-woman-in-studio-shots-making-facial-expressions-and-using-fingers-and-hands.jpg?s=612x612&w=0&k=20&c=dLMqlllzmEyWRCTFNcQhsEyi4Xth6e5yJhcAel3PsXg=",
      dateOfBirth: "01/15/2002",
      instituteName: "Chanakya Coaching Center Tarwan, Siwan",
      enrollNo: "CHU24",
      course: "X",
      semester: "1st S",
      subjects: [
        {
          coursecode: "CH031101T",
          papertitle: "M.l.L. HINDI",
          obtainedmarks: 87,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "CH031102T",
          papertitle: "S.l.L.Sanskrit",
          obtainedmarks: 83,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "CH031103T",
          papertitle: "Mathematics",
          obtainedmarks: 88,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "CH031104T",
          papertitle: "Science",
          obtainedmarks: 73,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "CH031105T",
          papertitle: "Socal Science",
          obtainedmarks: 88,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "",
          papertitle: "",
          obtainedmarks: 429,
          totalmarks: 500,
          grade: "",
        },
      ],
      resultStatus: "PASS",
      resultDate: "07/05/2025",
    },
    67890: {
      rollNo: "67890",
      name: "RAHUL YADAV",
      fatherName: "SURESH YADAV",
      photograph:
        "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=",
      dateOfBirth: "01/15/2003",
      instituteName: "RAJKIYE MAHAVIDYALAYA, ALIGARH",
      enrollNo: "VDU9068",
      course: "BSC(CS)",
      semester: "5th Sem",
      subjects: [
        {
          coursecode: "VD060901T",
          papertitle: "Python programming",
          obtainedmarks: 75,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD060902T",
          papertitle: "Introduction to Software Engineering",
          obtainedmarks: 79,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD060903T",
          papertitle: "Mobile Application Development",
          obtainedmarks: 83,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "VD060904T",
          papertitle: "Personality Development Program",
          obtainedmarks: 70,
          totalmarks: 100,
          grade: "C",
        },
        {
          coursecode: "VD060905T",
          papertitle: "Mini Project-I",
          obtainedmarks: 90,
          totalmarks: 100,
          grade: "B",
        },
        {
          coursecode: "",
          papertitle: "",
          obtainedmarks: 491,
          totalmarks: 600,
          grade: "",
        },
      ],
      resultStatus: "PASS",
      resultDate: "03/10/2023",
    },
  };

  const fetchResultByRollNumber = (rollNumber) => {
    if (availableRollNumbers.includes(rollNumber)) {
      return studentResults[rollNumber];
    } else {
      return null; // Roll number not found
    }
  };

  const handleRegenerateCaptcha = () => {
    generateCaptcha();
  };

  return (
    <>
      <div className={styles.resultpage}>
        <div className={styles.resultsList}>
          <h2 className={styles.resultheading}>Result Session 2023-24</h2>
          <ul>
            {resultsData.map((result) => (
              <li
                key={result.id}
                onClick={() => handleResultClick(result.id)}
                className={selectedResult === result.id ? styles.selected : ""}
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.resultForm}>
          <h2>Result</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="rollNumber">Roll Number:</label>
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                placeholder="Enter 12345, 54321, 67890 or 781995 as roll number."
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="enteredCaptcha">Enter CAPTCHA:</label>
              <input
                type="text"
                id="enteredCaptcha"
                name="enteredCaptcha"
                value={enteredCaptcha}
                onChange={(e) => setEnteredCaptcha(e.target.value)}
                required
              />
            </div>

            <div className={styles.captchadiv}>
              <label htmlFor="generatedCaptcha">CAPTCHA Code:</label>
              <input
                type="text"
                id="generatedCaptcha"
                name="generatedCaptcha"
                value={captchaCode}
                className={styles.captcha}
                readOnly
                required
              />
            </div>
            <div className={styles.regeneratecaptcha}>
              <button
                type="button"
                onClick={handleRegenerateCaptcha}
                className={styles.regeneratecaptchabtn}
              >
                Regenerate CAPTCHA
              </button>
            </div>

            <button type="submit" className={styles.getresultbtn}>
              Get Result
            </button>
          </form>
        </div>
      </div>
      {/* Display the student's result or error */}
      {studentResult !== null ? (
        <section>
          <div id="resultSection" className={styles.studentResult}>
            <div className={styles.resultHeader}>
              <img
                src={clglogo}
                className={styles.resultHeaderLogo}
                alt="universityLogo"
              />
              <div className={styles.resultHeaderDetail}>
                <h3>Chanakya Public School Tarwan, Siwan</h3>
                <h3>EXAMINATION: 2024-25</h3>
                <h3>
                  {studentResult.course}-<span>{studentResult.semester}</span>
                </h3>
              </div>
            </div>

            <div className={styles.basicDetails}>
              <div>
                <p>
                  <span>Roll number:</span> {studentResult.rollNo}
                </p>
                <p>
                  <span>Name:</span> {studentResult.name}
                </p>
                <p>
                  <span>Father's Name:</span> {studentResult.fatherName}
                </p>
                <p>
                  <span>Date of Birth:</span> {studentResult.dateOfBirth}
                </p>
                <p>
                  <span>Enrollment Number:</span> {studentResult.enrollNo}
                </p>
                <p>
                  <span>Institute Name:</span> {studentResult.instituteName}
                </p>
              </div>
              <div>
                {/* Add the student's photograph */}
                <img
                  src={studentResult.photograph}
                  alt="Student Photograph"
                  className={styles.studentPhoto}
                />
              </div>
            </div>

            <div className={styles.resultTable}>
              <h3>Subject-wise Marks/Grades:</h3>
              <table className={styles.subjectTable}>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Paper title</th>
                    <th>Obtained marks</th>
                    <th>Total marks</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {studentResult.subjects.map((subject, index) => (
                    <tr key={index}>
                      <td>{subject.coursecode}</td>
                      <td>{subject.papertitle}</td>
                      <td>{subject.obtainedmarks}</td>
                      <td>{subject.totalmarks}</td>
                      <td>{subject.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.resultStatus}>
              <h3>
                Result Status: <span>{studentResult.resultStatus}</span>
              </h3>
            </div>
            <div className={styles.resultFooter}>
              <p>
                <span>Remarks:</span>In case of any discrepancy between the 
                entries in the marksheet and the records maintained by Chanakya Public School, 
                the official school record shall be considered final.
              </p>
              <div style={{ marginTop: "20px" }}>
                <p>
                  <span>Result Declared on: </span>
                  {studentResult.resultDate}
                </p>
                <p className={styles.signaturePara}>
                  <span>Authorized Signature: </span>
                  <img
                    src={sign}
                    alt="Authorized Signature"
                    className={styles.signature}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.downloadPrintButtonDiv}>
            {/* ... Download result as pdf ... */}
            <button
              onClick={handleDownloadResult}
              className={styles.downloadButton}
            >
              Download Result (PDF)
            </button>
            {/* ... print result ... */}
            <button onClick={handlePrintResult} className={styles.printButton}>
              Print Result
            </button>
          </div>
        </section>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </>
  );
}

export default Results;
