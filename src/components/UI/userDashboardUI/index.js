import React, { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";
import styles from "./UserDashboardUI.module.css";

const UserDashboardUI = ({ logData, onChangeHandler, onSubmitHandler }) => {
  const [hamburg, setHamburg] = useState(false);

  const dispatch = useDispatch();
  const userslog = useSelector((state) => state?.getuserlogss?.postItems?.workLogs?.data);
  console.log(userslog , "logs")
  
  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };

  useEffect(() => {
    dispatch(allActions.getlogsusers.getUserLogs());
    // eslint-disable-next-line
  }, []);

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
        <form onSubmit={onSubmitHandler}>
          <h3>Add Record Here</h3>
          <input
            type="date"
            placeholder="Add Date"
            name="logDate"
            value={logData.logDate}
            onChange={onChangeHandler}
          />
          <input
            type="number"
            placeholder="Add Hours"
            name="hours"
            value={logData.hours}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Add Description"
            name="description"
            value={logData.description}
            onChange={onChangeHandler}
          />
          <button className={styles.create_btn}>Add Record</button>
        </form>
      </div>
      <div className="container">
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
                {userslog?.length ? (
                  userslog.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.logDate}</td>
                        <td>{data.hours}</td>
                        <td>{data.description}</td>
                        <td>
                          <button>
                            <FontAwesomeIcon
                              icon={faPen}
                              className="edit_icon"
                            />
                          </button>
                          <button>
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="dlt_icon"
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h3>Loading</h3>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardUI;
