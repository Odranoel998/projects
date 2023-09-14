import { useState } from "react";
import Login from "./Login";

const Home=() => {
    return(
        <h2>Home</h2>
    )
}

const Pages= (promt)=>{
    const [page,setPages]=useState('home');

    const nextPage=(page)=>(event){
        event.predefault()
        setPages(page)
    }

    const Page=(nextPage)=>{
        if(page=='home'){
            return Home
        }if(page=='login'|'Login'){
            return Login
        }else{
            return alert('No se encuentra la pagina')
        }
    }

    return (
        <div>
        {Page(promt)}
        </div>
    )

}