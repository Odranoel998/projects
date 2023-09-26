// /* eslint-disable react-hooks/exhaustive-deps */
// // import Box from "@mui/material/Box";
// // import TextField from "@mui/material/TextField";
// // import { useForm } from "react-hook-form";
// import { form } from "../styles/CreateAcountStyle";
// import { useState, useEffect } from "react";

// export const CrearCuenta = () => {
//   const [state, setState] = useState({
//     isPerson: false,
//     isUsername: false,
//     isPassword: false,
//     isNumber: false,
//   });
//   const [userData, setUserData] = useState({
//     username: "",
//     password: "",
//     numberPhone: "",
//     legalEntity: Boolean,
//   });
//   //-------------------------
//   //OnchangeMethods

//   const onChangePerson = (e) => {
//     e.preventDefault();
//     setUserData({
//       ...userData,
//       legalEntity: e.target.value === "2" ? true : false,
//     });
//     console.log(userData.legalEntity);
//   };

//   const onSubmitUser=()=>{
//     console.log(userData)
//   }

//   useEffect(() => {
//     console.log("render");
//     console.log(userData)
//   }, [onSubmitUser]);

//   //-------------------------------------------------------------
//   const CardLogin = () => {
//     // if (userData.legalEntity === Boolean) {
//     //   return (
//     //     <Form>
//     //       <h2>Para crear tu cuenta te pediremos algunos datos</h2>
//     //       <br />
//     //       <h3>Solo te tomará unos minutos.</h3>
//     //       <button value={"2"} onClick={onChangePerson}>
//     //         Soy persona fisica
//     //       </button>
//     //       <br />
//     //       <button value={"1"} onClick={onChangePerson}>
//     //         Soy persona juridica
//     //       </button>
//     //     </Form>
//     //   );
//     // }
//     if (userData.username == "") {
//       return (
//         <Form>
//           <label>Ingrese su usuario</label>
//           <br />
//           <input
//             type="text"
//             value={userData.username}
//             onChange={(e) => {
//               e.preventDefault();
//               setUserData({
//                 ...userData,
//                 [e.target.name]: e.target.value
//               });
//             }}
//           />
//           <br />
//           <button type="submit" onClick={onSubmitUser}>
//             Agregar
//           </button>
//         </Form>
//       );
//     }
//     if (userData.password == "") {
//       return (
//         <Form>
//           <label htmlFor="">Ingrese su Contrasenia</label>
//           <br />
//           <input
//             type="text"
//             value={userData.password}
//             onChange={(e) => {
//               e.preventDefault();
//               setUserData({
//                 ...userData,
//                 [e.target.name]: e.target.value
//               });
//             }}
//           />
//           <br />
//           <button type="sumit" onClick={onSubmitUser}>
//             Agregar
//           </button>
//         </Form>
//       );
//     }
//     if (userData.numberPhone == "") {
//       return (
//         <Form>
//           <label htmlFor="">Ingrese su numero de telefono</label>
//           <br />
//           <input
//             type="text"
//             value={userData.numberPhone}
//             onChange={(e) => {
//               e.preventDefault();
//               setUserData({
//                 ...userData,
//                 [e.target.name]: e.target.value
//               });
//             }}
//           />
//           <br />
//           <button type="sumit" onClick={onSubmitUser}>
//             Agregar
//           </button>
//         </Form>
//       );
//     }
//   };

//   //-----------------------------------------------------------------------------------------
//   return (
//     <CardLogin/>
//   )
// };

import { useState } from "react";
// import { useForm } from "react-hook-form"
// import { useNavigate } from "react-router-dom";
// import { Form } from "../styles/CreateAcountStyle";
//import { set } from "mongoose"
// import axios from "axios"

// const baseUrl = 'http://localhost:3001/userss'
// const Form=styled.form`
// background-color: #fff;
// border: 1px solid black;
// border-radius: 5px;
// padding: 50px;
// width: 500px;
// margin-top:5%;
// margin-left: 5%;

let flag = false;

export const CrearCuenta = () => {
  // const navigate = useNavigate();
  // const inputRef = useRef(null);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    numberPhone: "",
    legalEntity: "",
  });

  //------------------------------------------------------------

  // OnChangeMethods

  const onChangePerson = (event) => {
    setUserData({
      ...userData,
      legalEntity: event.target.id === 1 ? false : true,
    });
    
    
  };

  const handleChangeUser = (e) => {
    setUserData({
      ...userData,
      username: e.target.value,
    });
  };

  const handleChangePassword = (event) => {
    setUserData({
      ...userData,
      password: event?.target?.value,
    });
    console.log(userData);
  };

  // OnSubmitMethods

  const onSubmitUser = () => {
    return (
      <form>
        <label htmlFor="">Ingrese su Contrasenia</label>
        <br />
        <input
          type="text"
          value={userData.password}
          onChange={handleChangePassword}
        />
        <br />
        <button type="sumit" onClick={onSubmitPassword}>
          Agregar
        </button>
      </form>
    );
  };

  const onSubmitPassword = () => {
    return (
      <form action="">
        <label htmlFor="">Ingrese su numero de telefono</label>
        <br />
        <input
          type="text"
          value={numberPhone}
          onChange={(e) => setNumberPhone(e.value)}
        />
        <br />
        <button type="sumit" onClick={controlState}>
          Agregar
        </button>
      </form>
    );
  };

  // Navigation

  // const ReturnHome = () => {
  //   navigate("/Home");
  // };

  //------------------------------------------------------------

  const CardLogin = () => {
    return (flag) ? (
      <>
        <h2>Para crear tu cuenta te pediremos algunos datos</h2>
        <br />
        <h3>Solo te tomará unos minutos.</h3>
        <button id={1} onClick={onChangePerson}>
          Soy persona fisica
        </button>
        <br />
        <button id={2} onClick={onChangePerson}>
          Soy persona juridica
        </button>
      </>
    ) :
   (
      <>
        <label>Ingrese su usuario</label>
        <input
          type="text"
          value={userData.username}
          onChange={(event) => handleChangeUser(event)}
          autoFocus
        />
        <button type="submit" onClick={onSubmitUser}>
          Agregar
        </button>
      </>
    )

  };

  return <CardLogin />;
};
