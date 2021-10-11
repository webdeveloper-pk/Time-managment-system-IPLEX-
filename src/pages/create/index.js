import React, { useState } from 'react'
// import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions"
import CreateUI from '../../components/UI/createUI'

const Create = () => {
  const [createData, setCreateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType:"user"
  });

  const dispatch = useDispatch();

   const onChangeHandler = (e) => {
     setCreateData({
       ...createData,
       [e.target.name]: e.target.value,
     });
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.userDataPosts.userPost(createData));
  };
  
  return (
    <CreateUI createData={createData} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
  )
}

export default Create;
