import { useState } from "react"

const Login=()=>{

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

export default Login;