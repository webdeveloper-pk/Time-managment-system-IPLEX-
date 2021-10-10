import React , {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./UserDashboardUI.module.css";

const UserDashboardUI = () => {

    const [hamburg, setHamburg] = useState(false);

    const clickHandler = () => {
      if (hamburg === false) {
        setHamburg(true);
      } else {
        setHamburg(false);
      }
  };
  
  return (
    <div className={styles.dashboard_wrapper}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.logo_wrapper}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.menuItem_wrapper}>
          <button className={styles.logout_btn}>Log Out</button>
          <button className={styles.humberg_button} onClick={clickHandler}>
            <span
              className={
                hamburg === false ? `${styles.topbar}` : `${styles.topbarcross}`
              }
            ></span>
            <span
              className={
                hamburg === false ? `${styles.midbar}` : `${styles.midbarcross}`
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
      <div className={styles.form_wrapper}>
        <form>
          <h3>Add Record Here</h3>
          <input type="date" placeholder="Add Date" />
          <input type="number" placeholder="Add Hours" />
          <input type="text" placeholder="Add Description" />
          <button className={styles.create_btn}>Add Record</button>
        </form>
      </div>
      <div>
        <div className="row justify-content-center">
          <div className="col-8">
            <table className="table">
              <thead className={styles.thead}>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Log Date</th>
                  <th scope="col">Hours</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>
                    <button>
                      <FontAwesomeIcon icon={faPen} className="edit_icon" />
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faTrash} className="dlt_icon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardUI;
