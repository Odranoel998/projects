//import { useState } from "react"
import { Search } from "../views/HeadStyle"
import { useNavigate,  } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SearchrHead = ({ value, handleChange }) => {

    const placeholder = '  Buscar productos,marcas y mas ...';
    const navigate = useNavigate()
    const pokemon= "https://pokeapi.co/api/v2/pokemon"
//--------------------------------------------------------------------------------
    const handleKeyPress = async (e) => {
        if (e.key === "Enter") {
            //console.log("Enter presionado. Valor actual del input:", value);
            try{
            const response=await axios.get(pokemon)
            const data=response.data.results.find((poke)=>poke.name===value)
            console.log('Datos de ', data)
            if (data) {
                // Navega a la ruta "/search/:product" con el nombre del Pokémon como parámetro
                navigate(`/search/${data.name}`);
              } else {
                alert("Pokemon no registrado");
              }
            }catch (error){
                alert("Pokemon no registrado")
                console.log(error)
            }
        }
      };

//-------------------------------------------------------------------------

    return (
        <div>
        <Search type="search" 
        values={value} 
        placeholder={placeholder} 
        onChange={handleChange} 
        onKeyDown={handleKeyPress} >
        </Search>
        </div>
    )

}
//Componente Aparte---------------------------------------------------------------------------------------------------------
// eslint-disable-next-line react/prop-types
export const Result = ({ prompt }) => {
    const [pokemonData, setPokemonData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${prompt}`);
          setPokemonData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      if (prompt) {
        fetchData();
      }
    }, [prompt]);
  
    return (
      <div>
        <h1>Tu pokemon es: {prompt}</h1>
  
        {pokemonData && (
          <div>
            <p>Nombre: {pokemonData.name}</p>
            <p>Altura: {pokemonData.height}</p>
            {/* Agrega más información sobre el Pokemon aquí según tus necesidades */}
          </div>
        )}
      </div>
    );
  };




export default {
    SearchrHead,
    Result
}