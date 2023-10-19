import { Search, ResultStyle, Tarjet, DescripcionStyle } from "../views/HeadStyle"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



// eslint-disable-next-line react/prop-types
export const SearchrHead = ({ value, handleChange, setEnter }) => {

  const placeholder = '  Buscar productos,marcas y mas ...';
  const navigate = useNavigate()
  //--------------------------------------------------------------------------------



  const handleKeyPress = (e) => {
    if (e.key === "Enter" && value != "") {
      e.preventDefault()
      navigate(`/search/${value}`);
      setEnter(true);

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
export const Result = ({ prompt, value, setID, setEnter, enter }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${prompt}&limit=12`);
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
    if (prompt && enter == true) {
      fetchData();
      setEnter(false)
    }
  }, [enter]);
  const selectDescription = (e) => {
    e.preventDefault()
    const respuesta = e.currentTarget.getAttribute('value');
    value = respuesta
    setID(value)
    navigate(`/search/:product/:${value}`)
  }
  //--------------------------------------------------------
  return (
    <ResultStyle >
      <section >
        <article  >
          <ul>
            {data.map((item) => (
              <Tarjet key={item.id} value={item.id} onClick={selectDescription}>
                <div className="divImg">
                  <img src={item.thumbnail} alt={item.title} srcSet="" />
                </div>
                <div>
                  <hr></hr>
                  <h3>${item.price}</h3>
                  <p value={item.id}>{item.title}</p>
                </div>
                <span className="ml-auto">{item.seller_address.city.name}</span>
              </Tarjet>
            ))}
          </ul>
        </article>
      </section>
    </ResultStyle>
  );
};

//--------------------------------------------------------------------------------------------

// eslint-disable-next-line react/prop-types
export const ResultDescription = ({ prompt, value }) => {
  const [data, setData] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${value}&limit=12`);
        const responseDescription = await axios.get(`https://api.mercadolibre.com/items/${prompt}/description`)
        const fetchDescription = responseDescription.data.plain_text
        const productos = response.data.results;
        const producto = productos.find((result) => result.id === prompt);
        if (producto) {
          setData({
            id: producto.id,
            title: producto.title,
            thumbnail: producto.thumbnail,
            price: producto.price,
            descripcion: fetchDescription
          });

        } else {
          alert("Producto no encontrado");
        }
      } catch (error) {
        console.log(error);
      }
    };
    //--------------------------------------------------------

    if (prompt) {
      fetchData();
      //console.log("llamado") 
    }

  }, [prompt]);

  return (
    <DescripcionStyle>
      <div className="divTop">
        <div className="divImg">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div>
          <h2>{data.title}</h2>
          <h3>${data.price}</h3>
          <button>Comprar</button>
        </div>
      </div>
      <h2>Descripcion del producto</h2>
      <p>{data.descripcion}</p>
    </DescripcionStyle>
  )
}

export default {
  SearchrHead,
  Result,
  ResultDescription
}