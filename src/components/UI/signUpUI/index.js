import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./SignUpUI.module.css";

const SignUpUI = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h2>Sign Up</h2>
        <form>
          <div className={styles.inner_form_wrapper}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
            />
            <input type="email" placeholder="Email" name="email" id="email" />
            <input
              type="password"
              placeholder="*******"
              name="password"
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password_confirmation"
              id="password_confirmation"
            />
            <button className={styles.signup_button} type="submit">
              SIGN UP
            </button>
          </div>
        </form>
        <div className={styles.bottom_wrapper}>
          Already Have an Account?{" "}
          <span>
            <Link to="/login" className={styles.link}>
              Log In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpUI;
