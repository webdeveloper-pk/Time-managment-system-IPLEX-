// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
// import styles from "./Display.module.css";

// const DisplayDetails = () => {

//   const [detailData, setDetailData] = useState();

//   const { id } = useParams();

//   const getUserPost = async () => {
//     const userToken = localStorage.getItem("token");
//     console.log("token", userToken);
//     try {
//       await axios
//         .get(`http://34.210.129.167/api/users/${id}`, {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//           },
//         })
//         .then((res) => {
//           const userData = res.data;
//           console.log(userData, "detail data");
//         });
//     } catch (error) {}
//   };

//   useEffect(() => {
//     getUserPost();
//   }, []);

//   return <div className={styles.display}>Testing</div>;
// };

// export default DisplayDetails;
