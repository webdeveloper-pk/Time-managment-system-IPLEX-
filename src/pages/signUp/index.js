import React, { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions"
import SignUpUI from "../../components/UI/signUpUI";

const SignUp = () => {

  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.signup.signupManager(inputData));
  };

  return (
    <SignUpUI inputData={inputData} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
  );
};

export default SignUp;
