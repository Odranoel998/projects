import { Form } from "../views/CreateAcountStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const baseUrl = 'http://localhost:3010/api/users';

export const CrearCuenta = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("");
  const [passwordd, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    Phone: "",
    password: "",
    legalEntity: Boolean,
  });

  //   //-------------------------

  const RedirectionHome=() => {
    navigate("/Home")
} 

  const addUser = async (e) => {
    e.preventDefault;
    const schemaUser = {
      username: userData.username,
      Phone: userData.Phone,
      password: userData.password,
      legalEntity: userData.legalEntity,
      // eslint-disable-next-line no-undef
      // id:3,
      // content: user,
      // important: Math.random() > 0.5,
    };
    await axios
      .post(baseUrl, schemaUser)
      .then((response) => {
        console.log(response);
        console.log("Enviado");
      })
      .catch((error) => {
        console.log(error);
      });
      RedirectionHome()
  };

  const onChangePerson = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      legalEntity: e.target.value === "2" ? true : false,
    });
    console.log(userData.legalEntity);
  };

  const onSubmitUser = (e) => {
    e.preventDefault();
    // obtenerDato()
    setUserData({
      ...userData,
      username: user,
      password: passwordd,
      Phone: number,
    });
    // console.log(userData);
  };

  useEffect(()=>{
    console.log(userData);
  },[onSubmitUser])

  //   //-------------------------------------------------------------
  const CardLogin = () => {
    //Persona Juridica
    if (userData.legalEntity === Boolean) {
      return (
        <Form>
          <h2>Para crear tu cuenta te pediremos algunos datos</h2>
          <br />
          <h3>Solo te tomará unos minutos.</h3>
          <button value={"2"} onClick={onChangePerson}>
            Soy persona fisica
          </button>
          <br />
          <button value={"1"} onClick={onChangePerson}>
            Soy persona juridica
          </button>
        </Form>
      );
    }
    //Username
    if (userData.username == "") {
      return (
        <Form>
          <label>Ingrese su usuario</label>
          <br />
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoFocus
          />
          <br />
          <button type="submit" onClick={onSubmitUser}>
            Agregar
          </button>
        </Form>
      );
    }
    //Password
    if (userData.password == "") {
      return (
        <Form>
          <label htmlFor="">Ingrese su Contrasenia</label>
          <br />
          <input
            type="text"
            value={passwordd}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <br />
          <button type="sumit" onClick={onSubmitUser}>
            Agregar
          </button>
        </Form>
      );
    }
    //NumberPhone
    if (userData.Phone == "") {
      return (
        <Form>
          <label htmlFor="">Ingrese su numero de telefono</label>
          <br />
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            autoFocus
          />
          <br />
          <button type="sumit" onClick={onSubmitUser}>
            Agregar
          </button>
        </Form>
      );
    } else {
      return (
        <>
          <p>Muchas gracias verifique su email</p>
          <button onClick={addUser}>Inicio</button>
        </>
      );
    }
  };
  //-----------------------------------------------------------------------------------------
  return <CardLogin />;
};

export default {
  CrearCuenta,
};
