import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./SignUpUI.module.css";

const SignUpUI = ({ inputData, onChangeHandler, onSubmitHandler }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login_wrapper}>
        <div className={styles.image_wrapper}>
          <img src="/images/signin.jpeg" alt="signin" />
        </div>
        <div className={styles.form_outer_wrapper}>
          <div className={styles.form_wrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <h3>SIGN UP</h3>
            <form onSubmit={onSubmitHandler}>
              <div className={styles.inner_form_wrapper}>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  value={inputData.firstName}
                  onChange={onChangeHandler}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  value={inputData.lastName}
                  onChange={onChangeHandler}
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={inputData.email}
                  onChange={onChangeHandler}
                />
                <input
                  type="password"
                  placeholder="*******"
                  id="password"
                  name="password"
                  value={inputData.password}
                  onChange={onChangeHandler}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={inputData.password_confirmation}
                  onChange={onChangeHandler}
                />
                <button className={styles.signup_button} type="submit">
                  SIGN UP
                </button>
                <div>
                  <p>
                    Back to
                    <Link to="/dashboard" className={styles.dashboard_link}>
                      Dashboard
                    </Link>
                  </p>
                </div>
              </div>
            </form>
            {/* <div className={styles.bottom_wrapper}>
              Already Have an Account?
              <span>
                <Link to="/login" className={styles.link}>
                  Log In
                </Link>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpUI;
