import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./LoginUI.module.css";
import { Link } from "react-router-dom";

const LoginUI = ({onSubmitHandler , onChangeHandler,inputData}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.login_wrapper}>
        <div className={styles.image_wrapper}>
          <img src="/images/signin.jpg" alt="signin" />
        </div>
        <div className={styles.form_outer_wrapper}>
      <div className={styles.form_wrapper}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h3>SIGN IN</h3>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.inner_form_wrapper}>
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
            <button className={styles.login_button} type="submit">
              LOG IN
            </button>
          </div>
        </form>
        <div className={styles.bottom_wrapper}>
          Dont have an Account ?
          <span>
            <Link to="/signup" className={styles.link}>
              Sign Up
            </Link>
          </span>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default LoginUI;
