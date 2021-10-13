import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";
import styles from "./UserDashboardUI.module.css";

const UserDashboardUI = () => {
  const [hamburg, setHamburg] = useState(false);
  // const [updateData, setUpdateData] = useState("");
  const { push } = useHistory();
  const dispatch = useDispatch();

  const userslog = useSelector(
    (state) => state?.getuserlogss?.postItems?.workLogs?.data
  );

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

  const onLogout = () => {
   localStorage.clear()
  };

  return (
    <div className={styles.dashboard_wrapper}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.logo_wrapper}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.menuItem_wrapper}>
          <button>
            <Link to="/addrecord/:id" className={styles.add_record}>
              Add Record
            </Link>
          </button>
           <Link to="/">
          <button className={styles.logout_btn} onClick={onLogout}>
           
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
          </Link>
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
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h3 className="text-center mb-2">List of Records</h3>
            <table className="table">
              <thead className={styles.thead}>
                <tr className="text-center">
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
                        <td>{data.log_date}</td>
                        <td>{data.hours}</td>
                        <td>{data.description}</td>
                        <td>
                          <button onClick={() => push(`/addrecord/${data.id}`)}>
                            <FontAwesomeIcon
                              icon={faPen}
                              className="edit_icon"
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
