import { useNavigate } from "react-router-dom";

//Navegacion a Home
export const Navigate=()=>{
    const navigate = useNavigate()
    return navigate("/Home")
}


export default{
    Navigate
}

