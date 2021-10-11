import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import allActions from "../../../redux/actions";
import styles from "./ManagerDashboardUI.module.css";

const ManagerDashboardUI = () => {
  const [hamburg, setHamburg] = useState(false);

  const dispatch = useDispatch();

  const managerUpdatedData = useSelector(
    (state) => state?.getuserposts?.postItems?.users?.data
  );

  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };

  useEffect(() => {
    dispatch(allActions.getUserData.getUserPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <div className={styles.dashboard_wrapper}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.logo_wrapper}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.menuItem_wrapper}>
          <button className={styles.create_btn}>
            <Link to="/create" className={styles.user_link}>
              Create User
            </Link>
          </button>
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
      <div className={styles.filtring_wrapper}>
        <h5>From : </h5>
        <input type="date" id="startdate" name="startdate" />
        <h5>To : </h5>
        <input type="date" id="enddate" name="enddate" />
        <button>Search</button>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <h3 className={styles.list_heading}>Users List</h3>
          <div className="col-8">
            <table className="table">
              <thead className={styles.thead}>
                <tr className="text-center">
                  <th scope="col">id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {managerUpdatedData?.length ? (
                  managerUpdatedData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
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

export default ManagerDashboardUI;
