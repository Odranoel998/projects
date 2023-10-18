import { Routes, Route } from "react-router-dom";
import {Ofertas,Historial,Supermercado,Moda,Vender,Ayuda,MisCompras,Carrito,} from "./components/Body"
import {HeadCenter,HeadRight,ButtonStyle} from "./views/HeadStyle"
import{SearchrHead} from "./components/Search"
import {CrearCuenta} from "./components/CreateAcount"
import {Login} from "./components/Login";
import {Home} from "./components/Home"
import { useNavigate } from "react-router-dom";
import { Result } from "./components/Search";
import {useState } from "react";
import {ResultDescription} from "./components/Search"






const App= () =>{

const [searchValue, setSearchValue] = useState("");
const [enter,setEnter]= useState(false)
const [idProduct,setID]= useState('')
const navigate = useNavigate();

//--------------------------------------------------------------------------------------
const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
}

//---------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------
return(
    <>
        <div className="Head">
            <SearchrHead value={searchValue}  handleChange={handleChange} setEnter={setEnter}/>
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
                <Route path="/search/:product" element={<Result  enter={enter} setEnter={setEnter} prompt={searchValue} value={idProduct} setID={setID} />} />
                <Route path="/search/:product/:id" element={<ResultDescription prompt={idProduct} value={searchValue} />}/>
                <Route path="/" element={<Home/>}/>
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