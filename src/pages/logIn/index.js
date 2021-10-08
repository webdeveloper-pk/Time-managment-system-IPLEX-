import React, { useState } from "react";
import LoginUI from "../../components/UI/loginUI";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch("http://34.210.129.167/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.user.lastName);
      });
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
