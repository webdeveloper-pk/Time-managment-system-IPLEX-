import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";
import CreateUI from "../../components/UI/createUI";
import { useParams } from "react-router-dom";

const Create = () => {
  const [createData, setCreateData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType: "user",
  });
  const [updateData, setUpdateData] = useState([]);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setCreateData({
      ...createData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (createData?.id) {
      dispatch(
        allActions?.updateUserPost?.updatePosts(createData, createData?.id)
      );
    } else {
      dispatch(allActions.userDataPosts.userPost(createData));
    }
    setUpdateData(id);
    setCreateData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
      userType: "user",
    });
  };

  const managerUpdatedData = useSelector(
    (state) => state?.getuserposts?.postItems?.users?.data
  );

  const { id } = useParams();
  //   const filteredUpdateData = async() => {
  //   return await dispatch(allActions?.getSingleDataPost?.getSingleUserPost(id));
  // }

  useEffect(() => {
    const filteredData = managerUpdatedData.find(
      (arr) => arr.id === parseInt(id)
    );
    // const filteredData = filteredUpdateData();
    // replace filter with get user API Method
    setCreateData(
      // firstName: filteredData?.firstName,
      // lastName: filteredData?.lastName,
      // email: filteredData?.email,
      // password: filteredData?.password,
      // password_confirmation: filteredData?.password_confirmation,
      // userType: filteredData?.userType,
      { ...filteredData }
    );
    // eslint-disable-next-line
  }, [id, updateData]);

  return (
    <CreateUI
      createData={createData}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default Create;
