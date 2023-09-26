import { useState, useRef, useEffect } from "react";
// import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Form } from "../styles/CreateAcountStyle";
//import { set } from "mongoose"
// import axios from "axios"

// const baseUrl = 'http://localhost:3001/userss'

export const CrearCuenta = () => {
  const [state, setState] = useState({
    isPerson: false,
    isUsername: false,
    isPassword: false,
    isNumber: false,
  });
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [userData, setUserData] = useState({
    username: "",
    password: "" ,
    numberPhone: "",
    legalEntity: "",
  });
  //------------------------------------------------------------

  // OnChangeMethods

  const onChangePerson = (event) => {
    setState({
        ...state,
        isPerson: true,
    });
    setUserData({
      ...userData,
      legalEntity: event.target.id === 1 ? false : true,
    });
    console.log(userData);
  };

  const handleChangeUser = (e) => {
    setUserData({
        ...userData,
        username: e.target.value,
      });
  };

  useEffect(
    () => {
      // This runs AFTER the first render,
      // so the ref is set by now.
      console.log("render");
      inputRef.current.focus();
    },
		// The effect "depends on" inputRef
    [inputRef]
  );

  const handleChangePassword = (event) => {
    setUserData({
      ...userData,
      password: event?.target?.value,
    });
    console.log(userData);
  };

  // OnSubmitMethods

  const onSubmitUser = () => {
    setState({
        ...state,
        isUsername: true,
    });
  };

  const onSubmitPassword = () => {
    setState({
        ...state,
        isPassword: true,
    });
  };

  // Navigation

  const ReturnHome = () => {
    navigate("/Home");
  };

  //------------------------------------------------------------

  const CardLogin = () => {
    if (!state.isPerson) {
      return (
        <Form>
          <h2>Para crear tu cuenta te pediremos algunos datos</h2>
          <br />
          <h3>Solo te tomará unos minutos.</h3>
          <button id={1} onClick={onChangePerson}>Soy persona fisica</button>
          <br />
          <button id={2} onClick={onChangePerson}>Soy persona juridica</button>
        </Form>
      );
    }
    if (state.isPerson && !state.isUsername) {
      return (
        <Form>
          <label>Ingrese su usuario</label>
          <br />
          <input type="text" value={userData.username} onChange={(event) => handleChangeUser(event)} />
          <br />
          <button type="submit" onClick={onSubmitUser}>
            Agregar
          </button>
        </Form>
      );
    }
    if (state.isUsername && !state.isPassword) {
      return (
        <Form>
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
        </Form>
      );
    }
    if (state.isPassword && !state.isNumber) {
      return (
        <Form>
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
        </Form>
      );
    }
  };

  return (
    <CardLogin/>
  )

  /*

const Person=()=>{

    const controlState= async (e) =>{
            setState('person')
            setPerson(e.value)
            setForm(form.users.legalEntity)
            console.log(person)
            console.log(form)
    }

    return(
        <Form>
            <h2>Para crear tu cuenta te pediremos algunos datos</h2>
            <br />
            <h3>Solo te tomará unos minutos.</h3>
            <button  onClick={onChangePerson}>Soy persona fisica</button>
            <br />
            <button  onClick={onChangePerson}>Soy persona juridica</button>
        </Form>
    )
}

const User=() =>{

    const controlState=async() =>{   
        await setState('user')
        console.log(user)
    }
    
const handleChange = (e) => {
    setUser(e.target.value);
}

return(
    <div>
        <Form >  
            <label >Ingrese su usuario</label>
            <br />
            <input type="text" ref={inputRef} onChange={onChangeUser}/>
            <br />
            <button type="submit" onClick={onSubmitUser}>Agregar</button>
        </Form>
    </div>
)
}

const Number=() =>{

        const controlState=() =>{
            setState('number')
            console.log(numberPhone)
        }

return(
    <div>
        <Form >
            <label htmlFor="">Ingrese su numero de telefono</label>
            <br />
            <input type="text" value={numberPhone} onChange={(e)=>setNumberPhone(e.value)}  />
            <br />
            <button type="sumit" onClick={controlState}>Agregar</button>
        </Form>
    </div>
)
}
const Password=() =>{

    const controlState=() =>{
        setState('password')
        console.log(password)
    }

return(
    <div>
        <Form >
            <label htmlFor="">Ingrese su Contrase;a</label>
            <br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br />
            <button type="sumit" onClick={controlState}>Agregar</button>
        </Form>
    </div>
)
}

//------------------------------------------------------------

return(
    <div>
        {state=="login"&&(<Person/>)}
        {state=="person"&&(<User/>)}
        {state=="user"&&(<Number/>)}
        {state=="number"&&(<Password/>)}
        {state=="password"&&(<ReturnHome/>)}
    </div>    
)




*/
};

export default {
  CrearCuenta,
};
