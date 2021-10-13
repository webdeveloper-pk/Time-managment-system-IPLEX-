import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allActions from "../../redux/actions";
import styles from "./AddRecord.module.css";

const AddRecord = () => {
  const [logData, setLogData] = useState({
    id:"",
    logDate: "",
    hours: "",
    description: "",
  });

  const dispatch = useDispatch();

  const userslog = useSelector(
    (state) => state?.getuserlogss?.postItems?.workLogs?.data
  );

  const onChangeHandler = (e) => {
    setLogData({
      ...logData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (logData?.id) {
      dispatch(
        allActions?.updateLogsPosts?.updateLogPosts(logData, logData?.id)
      );
    }

    else {
      dispatch(allActions?.createUserData?.creatework(logData));
    }
    // setUpdateData();
    setLogData({
      logDate: "",
      hours: "",
      description: "",
    });
  };

  const { id } = useParams();

  useEffect(() => {
    const filteredLogsData = userslog.find((arr) => arr.id === parseInt(id));
    setLogData({ ...filteredLogsData });
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className={styles.addrecord_wrapper}>
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
    </div>
  );
};

export default AddRecord;
