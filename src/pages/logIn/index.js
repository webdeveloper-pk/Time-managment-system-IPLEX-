import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../redux/actions";
import LoginUI from "../../components/UI/loginUI";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const loginuserrole = useSelector(
    (state) => state.loginposts?.postItems?.user?.roles[0].name
  );

  const onChangeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.loginData.fetchPost(inputData));

    if (loginuserrole === "admin") {
      history.push("/admindashboard");
    } else if (loginuserrole === "manager") {
      history.push("/managerdashboard");
    } else if (loginuserrole === "user") {
      history.push("/userdashboard");
    }
  };

  return (
    <LoginUI
      inputData={inputData}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default Login;
