import { useState } from "react";


const Header= () =>{

const [contentInput, setContentInput] = useState(' ')


return(
        <div>
            <form action="">
            <input type="text" value={contentInput}
            onChange={(e)=>setContentInput(e.target.value)}/>
            </form>
            <br />
            <select name="Categorias" id="category">
                <option>Vehiculos</option>
                <option>Inmuebles</option>
                <option>Supermercado</option>
                <option>Tecnologia</option>
                <option>Hogar y Muebles</option>
                <option>Electrodomesticos</option>
                <option>Herramientas</option>
            </select>
            <br />
            <button>Ofertas</button>
            <br />
            <button>Historial</button>
            <br />
            <button>Supermercado</button>
            <br />
            <button>Moda</button>
            <br />
            <button>Vender</button>
            <br />
            <button>Ayuda</button>
            
        </div>
    );
}


export default Header;