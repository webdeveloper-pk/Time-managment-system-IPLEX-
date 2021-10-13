import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import allActions from "../../../redux/actions";
import styles from "./AdminDashboardUI.module.css";

const AdminDashboardUI = () => {
  const [hamburg, setHamburg] = useState(false);

  const dispatch = useDispatch();

  const { push } = useHistory();

  const adminUpdatedData = useSelector(
    (state) => state?.getuserposts?.postItems?.users?.data
  );

  console.log(adminUpdatedData, "admin users");

  const managerData = adminUpdatedData?.filter((arr) => {
    return arr.roles[0].name === "manager";
  });

  const userData = adminUpdatedData?.filter((arr) => {
    return arr.roles[0].name === "user";
  });

  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };

  const onDelete = (id) => {
    dispatch(allActions.deleteusers.deleteUser(id));
  };

  useEffect(() => {
    dispatch(allActions.getUserData.getUserPost());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.dashboard_wrapper}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.logo_wrapper}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.menuItem_wrapper}>
          <button className={styles.create_btn}>
            <Link to="/signup" className={styles.create_manager}>
              Create Manager
            </Link>
          </button>
          <button className={styles.create_btn}>
            <Link to="/create/:id" className={styles.create_manager}>
              Create User
            </Link>
          </button>
          <button className={styles.logout_btn}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
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
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="text-center mb-4">Manager List</h3>
            <table className="table">
              <thead className={styles.thead}>
                <tr className="text-center">
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {managerData?.length ? (
                  managerData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.roles[0].name}</td>
                        <td>
                          <button onClick={() => push(`/signup/${data.id}`)}>
                            <FontAwesomeIcon
                              icon={faPen}
                              className="edit_icon"
                            />
                          </button>
                          <button
                            onClick={() => {
                              onDelete(data.id);
                            }}
                          >
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
        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h3 className="text-center mb-4">Users List</h3>
            <table className="table">
              <thead className={styles.thead}>
                <tr className="text-center">
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData?.length ? (
                  userData.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.roles[0].name}</td>
                        {/* <td>
                          <Link
                            to={`/displaydetails/${data.id}`}
                            className="link-styling"
                          >View Details</Link>
                        </td> */}
                        <td>
                          <button onClick={() => push(`/create/${data.id}`)}>
                            <FontAwesomeIcon
                              icon={faPen}
                              className="edit_icon"
                            />
                          </button>
                          <button
                            onClick={() => {
                              onDelete(data.id);
                            }}
                          >
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

export default AdminDashboardUI;
