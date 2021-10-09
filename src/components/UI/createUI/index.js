import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./CreateUI.module.css";

const CreateUI = ({ createData, onChangeHandler, onSubmitHandler }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login_wrapper}>
        <div className={styles.image_wrapper}>
          <img src="/images/signin.jpg" alt="signin" />
        </div>
        <div className={styles.form_outer_wrapper}>
          <div className={styles.form_wrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <h3>Create User</h3>
            <form onSubmit={onSubmitHandler}>
              <div className={styles.inner_form_wrapper}>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  value={createData.firstName}
                  onChange={onChangeHandler}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  value={createData.lastName}
                  onChange={onChangeHandler}
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={createData.email}
                  onChange={onChangeHandler}
                />
                <input
                  type="password"
                  placeholder="*******"
                  id="password"
                  name="password"
                  value={createData.password}
                  onChange={onChangeHandler}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={createData.password_confirmation}
                  onChange={onChangeHandler}
                />
                <div className={styles.usertype_wrapper}>
                  <p>User Type:</p>
                  <input
                    type="radio"
                    id="manager"
                    name="userType"
                    value={createData.userType}
                  />
                   <label for="manager">Manager</label>
                  <input
                    type="radio"
                    id="user"
                    name="userType"
                    value={createData.userType}
                  />
                  <label for="user">User</label>
                </div>
                <button className={styles.signup_button} type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUI;
