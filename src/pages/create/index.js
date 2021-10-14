import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";
import CreateUI from "../../components/UI/createUI";
import { useParams, useHistory } from "react-router-dom";

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
  const history = useHistory();

  const role = useSelector(
    (state) => state.loginposts?.postItems?.user?.roles[0].name
  );

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
      setCreateData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        userType: "user",
      });

      if (role === "admin") {
        history.push("/admindashboard");
      } else if (role === "manager") {
        history.push("/managerdashboard");
      }
    } else {
      dispatch(allActions?.userDataPosts?.userPost(createData));
      if (role === "admin") {
        history.push("/admindashboard");
      } else if (role === "manager") {
        history.push("/managerdashboard");
      }
    }
    history.goBack();
    setUpdateData(id);
    setCreateData({
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

  useEffect(() => {
    const filteredData = managerUpdatedData?.find(
      (arr) => arr.id === parseInt(id)
    );
    setCreateData({ ...filteredData });
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
