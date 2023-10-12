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
    if (e.key === "Enter" && value != "") {
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
//Componente de result ---------------------------------------------------------------------------------------------------------

// eslint-disable-next-line react/prop-types
export const Result = ({ prompt, value, setID }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()


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
    
    if (prompt ) {
      fetchData();
    }
  }, [prompt]);



  const selectDescription = (e) => {
    e.preventDefault()
    const respuesta = e.currentTarget.getAttribute('value');
    value = respuesta
    setID(value)
    navigate(`/search/:product/:${value}`)

  }
  //--------------------------------------------------------
  return (
    <div >
      <h1>Tus resultados de búsqueda para {prompt} son:</h1>
      <section >
        <article  >
          <ul>
            {data.map((item) => (
              <div key={item.id} >
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <p>{item.id}</p>
                  <p>${item.price}</p>
                  <p value={item.id} onClick={selectDescription}>{item.title}</p>
                </div>
                <span className="ml-auto">{item.seller_address.city.name}</span>
              </div>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

//--------------------------------------------------------------------------------------------

// eslint-disable-next-line react/prop-types
export const ResultDescription = ({ prompt, value }) => {

  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${value}&limit=4`);
        const productos = response.data.results;
        const producto = productos.find((result) => result.id === prompt);
  
        if (producto) {
          setData({
            id: producto.id,
            title: producto.title,
            thumbnail: producto.thumbnail,
            price: producto.price,
          });
        } else {
          alert("Producto no encontrado");
        }
        console.log('ResultDescription: ', producto);
      } catch (error) {
        console.log(error);
      }
    };
    //--------------------------------------------------------
    if (prompt) {
      fetchData();
    }
  }, [prompt]);

  return (
    <div>
      <p>El id del producto:{prompt}</p>
      <img src={data.thumbnail} alt={data.title} />
      <p>{data.price}</p>
      <h2>Descripcion del producto</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laboriosam pariatur harum magnam itaque consectetur id perferendis aperiam, amet et
        doloribus obcaecati nulla alias atque ad tenetur, commodi laborum, dicta qui?</p>
    </div>
  )
}

export default {
  SearchrHead,
  Result,
  ResultDescription
}