import { useState } from "react"
import { Search } from "../views/HeadStyle"
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import axios from "axios";


// axios.get('/',)

export const SearchrHead = () => {

    const placeholder = '  Buscar productos,marcas y mas ...';
    const [value, setValue] = useState('')
    const navigate = useNavigate();


    // axios.get("/",(request,response)=>{
    //     try{
    //         const {}

    //     }catch(error){

    //     }
    // })
    const handleChange = (e) => {
        const newValue = e.target.value
        setValue(newValue);
        // if (e.key === "Enter") {
        //     navigate("/search")
        //     console.log("Enter presionado. Valor actual del input:", value);
        // }
    }

    // useEffect(() => {

    //     console.log('Efecto secundario ejecutado');

    //     return () => {
    //         console.log('Limpieza del efecto secundario');
    //     };
    // }, []);



    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
         navigate("/search")
          console.log("Enter presionado. Valor actual del input:", value);
        }
      };


    return (
        <Search type="search" values={value} placeholder={placeholder} onChange={handleChange} onKeyDown={handleKeyPress} ></Search>
    )

}


export default {
    SearchrHead
}