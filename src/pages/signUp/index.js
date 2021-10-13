import React, { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

  const { id } = useParams();

  const adminUpdatedData = useSelector(
    (state) => state?.getuserposts?.postItems?.users?.data
  );

  const managerData = adminUpdatedData?.filter((arr) => {
    return arr.roles[0].name === "manager";
  });

  console.log(managerData , "data")

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
        allActions?.updateManagersPost?.updateManagerPosts(inputData, inputData?.id)
      );
    } else {
      dispatch(allActions.signup.signupManager(inputData));
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

console.log(id , "params")

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
