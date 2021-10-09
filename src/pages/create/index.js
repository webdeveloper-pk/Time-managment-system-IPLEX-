import React , {useState} from 'react'
import CreateUI from '../../components/UI/createUI'

const Create = () => {
  const [createData, setCreateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType:""
  });

   const onChangeHandler = (e) => {
     setCreateData({
       ...createData,
       [e.target.name]: e.target.value,
     });
  };
  
   const onSubmitHandler = (e) => {
  };
  
  return (
    <CreateUI createData={createData} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
  )
}

export default Create
