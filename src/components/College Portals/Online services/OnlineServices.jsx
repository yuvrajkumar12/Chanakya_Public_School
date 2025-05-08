import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./OnlineServices.module.css";
import FeeReceipt from "./FeeReceipt";
export function FeesPayment() {
  // Create a ref for the form element
  const formRef = useRef(null);
  const [paymentData, setPaymentData] = useState(null); // State to store payment data

  // Simulated fee payment function
  const handlePayment = (e) => {
    e.preventDefault();

    // Get form data
    const studentId = e.target.studentId.value;
    const amount = e.target.amount.value;
    const paymentMethod = e.target.paymentMethod.value;

    // Check if the student ID exists in localStorage(Which is stored at the admisssion time)
    const studentData = localStorage.getItem(studentId);

    if (!studentData) {
      // Display an error message if the student ID doesn't exist
      alert("Student ID not found. Please check your ID.");
      return;
    }

    // Log the fee details
    console.log("Submitted Fee Details:");
    console.log("Student ID:", studentId);
    console.log("Payment Amount:", amount);
    console.log("Payment Method:", paymentMethod);

    // Reset the form to clear input values after the fee payment
    formRef.current.reset();

    // Set payment data in state
    setPaymentData({
      studentId,
      amount,
      paymentMethod,
    });

    alert("Payment successful! Thank you for your payment.");
  };

  return (
    <>
      <div className={styles.feePage}>
        <div className={styles.FeesPaymentDetails}>
          <h2>Fees Payment</h2>
          <p>
            Use our Fees Payment service to pay your tuition and other fees online
            securely.
          </p>
        </div>
        <div className={styles.feeService}>
          <div className={styles.paymentForm}>
            <form ref={formRef} onSubmit={handlePayment}>
              <div className={styles.formGroup}>
                <label htmlFor="studentId">Student ID</label>
                <input type="text" id="studentId" name="studentId" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="amount">Payment Amount ($)</label>
                <input type="text" id="amount" name="amount" min="1" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="paymentMethod">Payment Method</label>
                <select id="paymentMethod" name="paymentMethod" required>
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="PayTM">PayTM</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Google Pay">Google Pay</option>
                  <option value="Amazon Pay">Amazon Pay</option>
                </select>
              </div>

              <div className={styles.feesubmitbtn}>
                <button type="submit">Submit Payment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Conditionally render the FeeReceipt component after successfully payment */}
      {paymentData && (
        <FeeReceipt
          studentId={paymentData.studentId}
          amount={paymentData.amount}
          paymentMethod={paymentData.paymentMethod}
        />
      )}
    </>
  );
}

export function LibraryContent({ onLogout }) {
  // Initialize bookData state with data from local storage if available
  const [bookData, setBookData] = useState(() => {
    const storedData = localStorage.getItem("libraryData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [newBook, setNewBook] = useState({
    id: "",
    name: "",
    author: "",
    date: "",
    borrower: "",
  });

  useEffect(() => {
    // Save bookData to local storage whenever it changes
    localStorage.setItem("libraryData", JSON.stringify(bookData));
  }, [bookData]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  // Handle form submission to add a new book
  const handleAddBook = () => {
    // Validate and add the new book to the bookData state
    if (newBook.name && newBook.author && newBook.date && newBook.borrower) {
      setBookData([...bookData, newBook]);
      // Reset the newBook state for the next entry
      setNewBook({
        id: "", 
        name: "",
        author: "",
        date: "",
        borrower: "",
      });
    }
  };

  const handleDeleteBook = (bookId) => {
    const updatedBookData = bookData.filter((book) => book.id !== bookId);
    setBookData(updatedBookData);
  };

  return (
    <>
      <div className={styles.libraryPage}>
        <div className={styles.libraryDetails}>
          <h2 style={{ color: "red" }}>Library Content</h2>
          <p>Welcome to the library! You can access books, resources, and more.</p>
        </div>
        <Link
          to="/online-services/library-access"
          onClick={onLogout}
          className={styles.logout}     //after library access login, logout option will be there.
        >
          Logout
        </Link>
        <div className={styles.librarySections}>
          <h3>Add a New Book</h3>
          {/* Add Book Form */}
          <div className={styles.addBookForm}>
            <form className={styles.formContainer}>
              <div className={styles.formGroup}>
                <label htmlFor="newId" className={styles.booklabel}>
                  Book ID
                </label>
                <input
                  type="text"
                  id="newId"
                  name="id"
                  value={newBook.id}
                  onChange={handleInputChange}
                  className={styles.bookinput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="newName" className={styles.booklabel}>
                  Book Name
                </label>
                <input
                  type="text"
                  id="newName"
                  name="name"
                  value={newBook.name}
                  onChange={handleInputChange}
                  className={styles.bookinput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="newAuthor" className={styles.booklabel}>
                  Author Name
                </label>
                <input
                  type="text"
                  id="newAuthor"
                  name="author"
                  value={newBook.author}
                  onChange={handleInputChange}
                  className={styles.bookinput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="newDate" className={styles.booklabel}>
                  Date
                </label>
                <input
                  type="date"
                  id="newDate"
                  name="date"
                  value={newBook.date}
                  onChange={handleInputChange}
                  className={styles.bookinputdate}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="newBorrower" className={styles.booklabel}>
                  Borrower
                </label>
                <input
                  type="text"
                  id="newBorrower"
                  name="borrower"
                  value={newBook.borrower}
                  onChange={handleInputChange}
                  className={styles.bookinput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <button
                  onClick={handleAddBook}
                  className={styles.addButton}
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Book Table */}
        <table className={styles.bookTable}>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Date</th>
              <th>Borrower</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookData.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.date}</td>
                <td>{book.borrower}</td>
                <td>
                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function OnlineServices() {
  return (
    <>
      <div className={styles.onlineServices}>
        <h2>Online Services Portal</h2>
        <p>
          Welcome to our online services portal! We offer various online
          services to make your college experience more convenient. Please
          select a service from the options below:
        </p>

        <ul className={styles.servicesList}>
          <div>
            <li>
              <Link
                to="/online-services/examination-form"
                className={styles.iconLink}
              >
                <div className={styles.icondiv}>
                  <i className="material-icons">assignment</i>
                </div>
                <p>Examination Form</p>
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link
                to="/online-services/fees-payment"
                className={styles.iconLink}
              >
                <div className={styles.icondiv}>
                  <i className="material-icons">payment</i>{" "}
                </div>
                <p>Fees Payment</p>
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link
                to="/online-services/library-access"
                className={styles.iconLink}
              >
                <div className={styles.icondiv}>
                  <i className="material-icons">library_books</i>{" "}
                </div>
                <p>Library Access</p>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default OnlineServices;