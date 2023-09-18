
import { useState } from "react";
import {ButtonLeft,ButtonRigth,DivImage,ImgFond} from "./BodyStyles"


export const Home=() => {
    const [num,setNumer]= useState(1)

    const url= `images/img${num}.webp`;

    const NextNumber=()=>{
        if(num===5){
            setNumer(1)
        }else
        setNumer(num+1)
    }
    const PreviousNumber=()=>{
        if(num===1){
            setNumer(5)
        }else
        setNumer(num-1)
    }

    const right=' >'
    const left= ' <'

    return(
        <div>
            <DivImage>
                <ImgFond src={url} alt="publicidad one" ></ImgFond>
                <ButtonLeft onClick={PreviousNumber}>{left}</ButtonLeft>
                <ButtonRigth onClick={NextNumber}>{right}</ButtonRigth>
            </DivImage>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />

        </div>
        
    )
    }

export const Ofertas=()=>{
    return(
        <h2>404 error</h2>
    )
}
export const Historial=()=>{
    return(
        <h2>404 error</h2>
    )
}
export const Supermercado=()=>{
    return(
        <h2>404 error</h2>
    )
}
export const Moda=()=>{
    return(
        <h2>404 error</h2>
    )
}
export const Vender=()=>{
    return(
        <h2>404 error</h2>
    )
}
export const Ayuda=()=>{
    return(
        <h2>404 error</h2>
    )
}
export const CrearCuenta=()=>{
    return(
        <div>
            <h2>Para crear tu cuenta te pediremos algunos datos</h2>
            <h3>Solo te tomará unos minutos.</h3>
            <button>Soy persona fisica</button>
            <br />
            <button>Soy persona juridica</button>
        </div>


    )
}

export const Login=()=>{

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const hadleSumit=(e)=>{
        e.preventDefault();
        console.log(username, password);
    }

    return(
        <div>
        <h1>Login</h1>        
        <form action={hadleSumit}>
            <label>E-mail,telefono o usuario</label>
            <br />
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <br />
            <label>Contraseña</label>
            <br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br />
            <button type="submit">Iniciar Sesión</button>
        </form>
        </div>

    )
}

export const MisCompras=()=>{
    return(
        <h2>404 error</h2>
    )
}
export const Carrito=()=>{
    return(
        <h2>404 error</h2>
    )
}


export default {
    Home,
    Ofertas,
    Historial,
    Supermercado,
    Moda,
    Vender,
    Ayuda,
    CrearCuenta,
    Login,
    MisCompras,
    Carrito,

}
