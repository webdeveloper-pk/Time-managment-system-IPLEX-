import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import allActions from "../../redux/actions";
import SignUpUI from "../../components/UI/signUpUI";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [updateData, setUpdateData] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const adminUpdatedData = useSelector(
    (state) => state?.getuserposts?.postItems?.users?.data
  );

  const role = useSelector(
    (state) => state.loginposts?.postItems?.user?.roles[0].name
  );

  const managerData = adminUpdatedData?.filter((arr) => {
    return arr.roles[0].name === "manager";
  });

  const onChangeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputData?.id) {
      dispatch(
        allActions?.updateManagersPost?.updateManagerPosts(
          inputData,
          inputData?.id
        )
      );
      if (role === "admin") {
        history.push("/admindashboard");
      }
    } else {
      dispatch(allActions.signup.signupManager(inputData));
      if (role === "admin") {
        history.push("/admindashboard");
      } else if (role === "manager") {
        history.push("/managerdashboard");
      }
    }
    setUpdateData(id);
    setInputData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };

  useEffect(() => {
    const filteredManagerData = managerData?.find(
      (arr) => arr.id === parseInt(id)
    );
    // todo : replace find with get user API Method
    console.log(filteredManagerData, "fitered data");
    setInputData({ ...filteredManagerData });
    // eslint-disable-next-line
  }, [id, updateData]);

  return (
    <SignUpUI
      inputData={inputData}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default SignUp;
