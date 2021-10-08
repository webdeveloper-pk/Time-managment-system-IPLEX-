import React , {useState} from "react";
import SignUpUI from "../../components/UI/signUpUI";

const SignUp = () => {

  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // const [data, setData] = useState([]);

  // const dispatch = useDispatch();
  // const stateData = useSelector(state => state.todoReducer);
  // console.log("redux data" , stateData)

  const onChangeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch("http://34.210.129.167/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((inputData) => alert(inputData, "success"));
  };

  return (
    <SignUpUI inputData={inputData} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
  );
};

export default SignUp;
