import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [hamburg, setHamburg] = useState(false);

  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_wrapper}>
            <h2>Dashboard</h2>
          </div>
          <div className={styles.menuItem_wrapper}>
            <button className={styles.create_btn}>Create User</button>
            <button className={styles.logout_btn}>Log Out</button>
            <button className={styles.humberg_button} onClick={clickHandler}>
              <span
                className={
                  hamburg === false
                    ? `${styles.topbar}`
                    : `${styles.topbarcross}`
                }
              ></span>
              <span
                className={
                  hamburg === false
                    ? `${styles.midbar}`
                    : `${styles.midbarcross}`
                }
              ></span>
              <span
                className={
                  hamburg === false
                    ? `${styles.bottombar}`
                    : `${styles.bottombarcross}`
                }
              ></span>
            </button>
            {hamburg === true ? (
              <div className={styles.absolute_wrapper}>
                <div className={styles.absolute_wrapper_items}>
                  <p>Dashboard</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
