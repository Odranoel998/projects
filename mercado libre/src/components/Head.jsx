import { useState} from "react";
//import Pages from "./Pages"

const Header= () =>{

const [contentInput, setContentInput] = useState(' ')
//const [token,setToken]=useState(null);

const hadleClick=()=>{
console.log('click Login')
    
}


return(
        <div className="Head">
            <form action="">
            <input type="text" value={contentInput}
            onChange={(e)=>setContentInput(e.target.value)} className="search"/>
            </form>
            <div className="Elements">
            <select className="Buttons" name="Categorias">
                <option className="category">Vehiculos</option>
                <option className="category">Inmuebles</option>
                <option className="category">Supermercado</option>
                <option className="category">Tecnologia</option>
                <option className="category" >Hogar y Muebles</option>
                <option className="category">Electrodomesticos</option>
                <option className="category">Herramientas</option>
            </select>
            <button className="Buttons">Ofertas</button>
            <button className="Buttons">Historial</button>
            <button className="Buttons">Supermercado</button>
            <button className="Buttons">Moda</button>
            <button className="Buttons">Vender</button>
            <button className="Buttons">Ayuda</button>
            <button className="Buttons">Crea tu cuenta</button>
            <button className="Buttons" onClick={hadleClick}>Ingresa</button>
            <button className="Buttons">Mis compras</button>
            <button className="Buttons">Carrito</button>
            </div>    
        </div>
    );
}


export default Header;