import { Search, ResultStyle, Tarjet, SelectDescription } from "../views/HeadStyle"
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

  function formatNumberWithCommas(number) {
    const numStr = number.toString();

    const parts = numStr.split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1] || '';

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    if (decimalPart) {
      return `${integerPart},${decimalPart}`;
    } else {
      return integerPart;
    }
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${prompt}&limit=12`);
        const producto = response.data.results.map((result) => ({
          id: result.id,
          title: result.title,
          thumbnail: result.thumbnail,
          price: formatNumberWithCommas(result.price),
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
                  <h1>$ {item.price}</h1>
                  <p value={item.id}>{item.title}</p>
                </div>
                <div className="divSpan">
                  <span className="ml-auto">{item.seller_address.city.name}</span>
                </div>
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

  function formatNumberWithCommas(number) {
    const numStr = number.toString();

    const parts = numStr.split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1] || '';

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    if (decimalPart) {
      return `${integerPart},${decimalPart}`;
    } else {
      return integerPart;
    }
  }

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
            price: formatNumberWithCommas(producto.price),
            redondeo:formatNumberWithCommas(((producto.price)/12).toFixed(2)),
            descripcion: (fetchDescription),
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
    <SelectDescription >
      <div className="divThree">
        <div className="divImg">
          <img src={data.thumbnail} alt={data.title} />
        </div>

        <div className="divInfo">
          <p>Nuevo| +500 vendido</p>
          <h2>{data.title}</h2>
          <p>Mas Vendido</p>
          <h3>$ {data.price} </h3>
          <h4>en 12x $ {(data.redondeo)}</h4>
        </div>

        <div className="divTarget">
          <div className="divButton">
            <p className="pText">Llega gratis el viernes
              <p className="pBlue1">Mas formas de entrega</p>
            </p>
            <p className="pText">Mas formas de entrega</p>
            <p className="pTextBlack">Stock Disponible
              <p className="pTextBlackSub">Almacenado y enviado por FULL</p>
            </p>
            <p className="pText">Cantidad de unidades: 10</p>
            <button className="buttonShopping">Comprar</button>
            <button className="buttonAdd">Agregar al carrito</button>
            <p className="pBlue">Devolucion gratis.
              <p className="pTextBlue">Tenes 30 dias desde que lo recibis.</p>
            </p>
            <p className="pBlue">Compra Protegida
              <p className="pTextBlue">Recibi el producto que esperabas o te devolvemos tu dinero</p>
            </p>
            <p className="pBlue">Mercado Puntos.
              <p className="pTextBlue">Sumas 1599 puntos.</p>
            </p>
          </div>
          <div className="divInfoStore">
            <h3>Informacion de la tienda</h3>
          </div>
        </div>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
    </SelectDescription >
  )
}

export default {
  SearchrHead,
  Result,
  ResultDescription
}