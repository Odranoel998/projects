import { useState } from 'react';
import axios from '../api/axios';
// import "bootstrap/dist/css/bootstrap.css";
// import Cookies from 'universal-cookie';
import {FormLog,BoxLeft,BodyLogin} from '../styles/LoginStyle'

// const cookies= new Cookies();
const baseUrl = "http://localhost:3001/users";

export const Login = () => {
    const [username,setUsername]=useState('');
    // const [password,setPassword]= useState('');

    const [state,setState]= useState({
        user:{
        username: '',
        password: ''
    }});
    

    const hadleChange= async e=>{
        await setState({
            user:{
                ...state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    const LoginUser=async()=>{
        await axios.get(baseUrl,{params: {username: state.user.username}})
        .then(response=>{
            const user=response.data;
            setUsername(user[0].username)
            console.log(user)
        }).catch(error=>{
            console.log(error.message)
            alert('Usuario No valido')
        });
    }


    const IniciarSesion= async()=>{
        await axios.get(baseUrl,{params: {username: state.user.username,password: state.user.password}})
        .then(response=>{
            response.data
            console.log('Welcome ' + response.data[0].username)
            }).catch(error=>{
            console.log(error.message)
            alert(error.message)
        }); 
    }



    if(username!=''){
        return(
            <BodyLogin>
                <BoxLeft>
                    <h1>Ingresá tu contraseña de Mercado Libre</h1>
                    <h2>Bienvenido {state.user.username}</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Rem culpa nostrum explicabo neque? Esse, aliquid aspernatur, 
                        reprehenderit sit atque voluptatibus possimus eum numquam 
                        consequatur sequi vero dolorum sint voluptate? Eligendi?</p>
                </BoxLeft>
                <FormLog>
                    <label >Contraseña</label>
                    <br />
                    <input type="text"
                    className='user-control' 
                    name='password' 
                    value={state.user.password}
                    onChange={hadleChange}
                    
                    />
                    <br />
                    <button onClick={IniciarSesion}>Continuar</button>
                </FormLog>
            </BodyLogin>
            )
    }


    return (<BodyLogin>
                <BoxLeft>
                    <h1>Ingresá tu e‑mail, teléfono o usuario de Mercado Libre</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Rem culpa nostrum explicabo neque? Esse, aliquid aspernatur, 
                        reprehenderit sit atque voluptatibus possimus eum numquam 
                        consequatur sequi vero dolorum sint voluptate? Eligendi?</p>
                </BoxLeft>
                <FormLog>
                <label >E-mail,telefono o usuario</label>
                <br />
                <input type="text"
                className='user-control' 
                name='username'
                value={state.user.username}
                onChange={hadleChange}
                 
                />
                <br />
                <button onClick={LoginUser}>Continuar</button>
                </FormLog>
            </BodyLogin>
        

    )
}

export default {
    Login
}