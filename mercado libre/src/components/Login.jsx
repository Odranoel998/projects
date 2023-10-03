import { useState } from 'react';
import axios from 'axios';
import { FormLog, BoxLeft, BodyLogin } from '../views/LoginStyle'
import { useNavigate } from "react-router-dom";

const baseUrl = 'http://localhost:3010/api/users'

//------------------------------------------------------------------
export const Login = () => {
    // const [username,setUsername]=useState('');
    // const [password,setPassword]= useState('');
    const navigate = useNavigate()

    const [step, setStep] = useState('login');

    const [state, setState] = useState({
        user: {
            username: '',
            password: ''
        }
    });

    //------------------------------------------------------------------
    const hadleChange = (e) => {
        e.preventDefault()
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleLogin = async () => {
        await axios.get(baseUrl, { params: { username: state.user.username } })
            .then(response => {
                response.data;
                setStep('password');

            }).catch(error => {
                alert(error)
            });
    }


    const handlePassword = async () => {
        await axios.get(baseUrl, { params: { username: state.user.username, password: state.user.password } })
            .then(response => {
                response.data;
                if (response.data) {
                    setStep('home');
                    console.log('Welcome ' + response.data[0].username + 'tu contrase;a es ' + response.data[0].password)
                }

            }).catch(error => {
                console.log(error.message)
                alert(error.message)
            });
    }

    const RedirectionHome = () => {
        navigate("/Home")
    }
    //------------------------------------------------------------------
    const LoginForm = () => {
        return (<BodyLogin>
            <BoxLeft>
                <h1>Ingresá tu e‑mail, teléfono o usuario de Mercado Libre</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem culpa nostrum explicabo neque? Esse, aliquid aspernatur,
                    reprehenderit sit atque voluptatibus possimus eum numquam
                    consequatur sequi vero dolorum sint voluptate? Eligendi?</p>
            </BoxLeft>
            <FormLog >
                <label >Usuario</label>
                <br />
                <input type="text"
                    className='user-control'
                    name='username'
                    value={state.user.username}
                    onChange={hadleChange}
                    autoFocus
                />
                <br />
                <button onClick={handleLogin}>Continuar</button>
            </FormLog>
        </BodyLogin>
        )
    }
    const PasswordForm = () => {
        return (
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
                <FormLog >
                    <label >Contraseña</label>
                    <br />
                    <input type="text"
                        className='user-control'
                        name='password'
                        value={state.user.password}
                        onChange={hadleChange}
                        autoFocus
                    />
                    <br />
                    <button onClick={handlePassword} >Continuar</button>
                </FormLog>

            </BodyLogin>
        )
    }

    //------------------------------------------------------------------

    return (
        <div>
            {step == 'login' && (
                <LoginForm />
            )}

            {step === 'password' && (
                <PasswordForm />
            )}
            {step === 'home' && (
                <RedirectionHome />
            )}

        </div>

    )

}
export default {
    Login
}