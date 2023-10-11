//import { useState } from "react"
import { Search } from "../views/HeadStyle"
import { useNavigate, } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SearchrHead = ({ value, handleChange }) => {

  const placeholder = '  Buscar productos,marcas y mas ...';
  const navigate = useNavigate()
  //--------------------------------------------------------------------------------
  const handleKeyPress = (e) => {
       if (e.key === "Enter" && value!="") {
        navigate(`/search/${value}`);
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${prompt}&limit=4`);
        const producto = response.data.results.map((result) => ({
          id: result.id,
          title: result.title,
          thumbnail: result.thumbnail,
          price: result.price,
          currency_id: result.currency_id,
          seller_address: {
            city: {
              name: result.seller_address.city.name
            }
          }
        }));
        setData(producto);
      } catch (error) {
        console.log(error);
      }
    };
//--------------------------------------------------------
    if (prompt) {
      fetchData();
    }
  }, [prompt]);
//--------------------------------------------------------
  return (
    <div>
      <h1>Tus resultados de búsqueda para {prompt} son:</h1>
      <section>
        <article>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};




export default {
  SearchrHead,
  Result
}