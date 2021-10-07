import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./LoginUI.module.css";
import { Link } from "react-router-dom";

const LoginUI = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h2>SIGN IN</h2>
        <form>
          <div className={styles.inner_form_wrapper}>
            <input type="email" placeholder="Email" name="email" id="email" />
            <input
              type="password"
              placeholder="*******"
              name="password"
              id="password"
            />
            <button className={styles.login_button} type="submit">
              LOG IN
            </button>
          </div>
        </form>
        <div className={styles.bottom_wrapper}>
          Dont have an Account ?
          <span>
            <Link to="/signup" className={styles.link}>Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
