
import { Routes, Route } from "react-router-dom";
import {Ofertas,Historial,Supermercado,Moda,Vender,Ayuda,MisCompras,Carrito,} from "./components/Body"
import {HeadCenter,HeadRight,ButtonStyle} from "./views/HeadStyle"
import{SearchrHead} from "./components/Search"
import {CrearCuenta} from "./components/CreateAcount"
import {Login} from "./components/Login";
import {Home} from "./components/Home"
import { useNavigate } from "react-router-dom";
import { Result } from "./components/searchResult";

// import {LogoML} from ".../images/logoML";

//   const padding = {
//     padding: 5,
//   }


//   const LogoML = "https://img2.freepng.es/20180630/tpw/kisspng-e-marketplace-free-market-salesperson-e-commerce-5b3806a3328a15.227853431530398371207.jpg"
const App= () =>{

const navigate = useNavigate();

const navigateToHome=() =>{
    navigate('/Home')
};
const navigateToOfertas=() =>{
    navigate('/Ofertas')
};
const navigateToHistorial=() =>{
    navigate('/Historial')
};
const navigateToSupermercado=() =>{
    navigate('/Supermercado')
};
const navigateToModa=() =>{
    navigate('/Moda')
};
const navigateToVender=() =>{
    navigate('/Vender')
};
const navigateToAyuda=() =>{
    navigate('/Ayuda')
};
const navigateToCrearCuenta=() =>{
    navigate('/CrearCuenta')
};
const navigateToIngresar=() =>{
    navigate('/Ingresar')
};
const navigateToMisCompras=() =>{
    navigate('/MisCompras')
};
const navigateToCarrito=() =>{
    navigate('/Carrito')
};


return(
    <>
        <div className="Head">
            {/* <img src={LogoML} className="image"  /> */}
                <SearchrHead/>
            <br />
            <HeadCenter>
            <ButtonStyle onClick={navigateToHome}>Home</ButtonStyle>
            <ButtonStyle onClick={navigateToOfertas}>Ofertas</ButtonStyle>
            <ButtonStyle onClick={navigateToHistorial}>Historial</ButtonStyle>
            <ButtonStyle onClick={navigateToSupermercado}>Supermercado</ButtonStyle>
            <ButtonStyle onClick={navigateToModa}>Moda</ButtonStyle>
            <ButtonStyle onClick={navigateToVender}>Vender</ButtonStyle>
            <ButtonStyle onClick={navigateToAyuda}>Ayuda</ButtonStyle>
            </HeadCenter>
            <HeadRight>
            <ButtonStyle onClick={navigateToCrearCuenta}>Crear Cuenta</ButtonStyle>
            <ButtonStyle onClick={navigateToIngresar}>Ingresar</ButtonStyle>
            <ButtonStyle onClick={navigateToMisCompras}>Mis Compras</ButtonStyle>
            <ButtonStyle onClick={navigateToCarrito}>Carrito</ButtonStyle>
            </HeadRight>

        </div>
            <Routes >
                <Route path="/search" element={<Result/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Ofertas" element={<Ofertas/>}/>
                <Route path="/Historial" element={<Historial/>}/>
                <Route path="/Supermercado" element={<Supermercado/>}/>
                <Route path="/Moda" element={<Moda/>}/>
                <Route path="/Vender" element={<Vender/>}/>
                <Route path="/Ayuda" element={<Ayuda/>}/>
                <Route path="/CrearCuenta" element={<CrearCuenta/>}/>
                <Route path="/Ingresar" element={<Login/>}/>
                <Route path="/MisCompras" element={<MisCompras/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
    </>
    );

}


export default App;