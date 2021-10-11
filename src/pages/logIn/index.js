import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import allActions from "../../redux/actions";
import LoginUI from "../../components/UI/loginUI";

const Login = () => {

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  
  // const logindata = useSelector((state) => state.loginposts);
  
  const onChangeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // fetch("http://34.210.129.167/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(inputData),
    // })
    //   .then((response) => console.log(response , "resssss"))
    //   .then((data) => {
    //     alert(data.user.lastName);
    //   });
    dispatch(allActions.loginData.fetchPost(inputData));
    
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
