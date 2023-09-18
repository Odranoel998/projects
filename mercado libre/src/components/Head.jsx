
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import { Home,Ofertas,Historial,Supermercado,Moda,Vender,Ayuda,CrearCuenta,Login,MisCompras,Carrito,} from "./Body"
import "bootstrap/dist/css/bootstrap.css";

  const padding = {
    padding: 5,
  }
  const placeholder = '  Buscar productos,marcas y mas ...';

const Header= () =>{


const hadleClick=(event) =>{
    event.preventDefault()

}

return(
    <Router>
        <div className="Head">
            <form action={hadleClick}  >
                <input type="search" values={''} placeholder={placeholder} className="Search"/>
            </form>
            <div className="HeadCenter">
            <Link style={padding} to='/Home'>Home</Link>
            <Link style={padding} to='/Ofertas'>Ofertas</Link>
            <Link style={padding} to='/Historial'>Historial</Link>
            <Link style={padding} to='/Supermercado'>Supermercado</Link>
            <Link style={padding} to='/Moda'>Moda</Link>
            <Link style={padding} to='/Vender'>Vender</Link>
            <Link style={padding} to='/Ayuda'>Ayuda</Link>
            </div>
            <div className="HeadRight">
            <Link style={padding} to='/CrearCuenta'>Crear Cuenta</Link>
            <Link style={padding} to='/Login'>Ingresar</Link>
            <Link style={padding} to='/Mis compras'>Mis Compras</Link>
            <Link style={padding} to='/Carrito'>Carrito</Link>
            </div>

        </div>
            <Routes >
            <Route path="/Home" element={<Home/>}/>
                <Route path="/Ofertas" element={<Ofertas/>}/>
                <Route path="/Historial" element={<Historial/>}/>
                <Route path="/Supermercado" element={<Supermercado/>}/>
                <Route path="/Moda" element={<Moda/>}/>
                <Route path="/Vender" element={<Vender/>}/>
                <Route path="/Ayuda" element={<Ayuda/>}/>
                <Route path="/CrearCuenta" element={<CrearCuenta/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/MisCompras" element={<MisCompras/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
        </Router>
    );
}


export default Header;