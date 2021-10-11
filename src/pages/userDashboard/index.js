import React , {useState} from "react";
// import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import UserDashboardUI from "../../components/UI/userDashboardUI";

const UserDashboard = () => {

    const [logData, setLogData] = useState({
      logDate: "",
      hours: "",
      description: "",
    });
  
   const dispatch = useDispatch();

   const onChangeHandler = (e) => {
     setLogData({
       ...logData,
       [e.target.name]: e.target.value,
     });
   };

   const onSubmitHandler = (e) => {
     e.preventDefault();
     dispatch(allActions.createUserData.creatework(logData));
   };


  return <UserDashboardUI onSubmitHandler={onSubmitHandler}
    onChangeHandler={onChangeHandler}
    logData={logData}
  />;
};

export default UserDashboard;
