import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error_page}>
      <img src="/images/error.jpg" alt="error" />
      <div>
        <Link to="/" className={styles.link}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
