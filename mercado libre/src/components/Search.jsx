/* eslint-disable no-unused-vars */
import { Search, ResultStyle, Tarjet, SelectDescription } from "../views/SearchStyle"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactImageMagnify from 'react-image-magnify';

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
// ---------------------------------------------------------------------------------------------------------------------

// eslint-disable-next-line react/prop-types
export const Result = ({ prompt, value, setID, setEnter, enter }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  //---------------------
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
  const fetchProductData = async (productId) => {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/items/${productId}`);
      return {
        id: response.data.id,
        title: response.data.title,
        thumbnail: response.data.pictures[0].url,
        price: formatNumberWithCommas(response.data.price),
        currency_id: response.data.currency_id,
        warranty: response.data.warranty,
        seller_address: {
          city: {
            name: response.data.seller_address.city.name,
          },
        },
      };
    } catch (error) {
      console.error('Error al obtener datos del producto:', error);
      return null;
    }
  };

  useEffect(() => {
    if (prompt && enter) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${prompt}&limit=12`);
          const products = await Promise.all(response.data.results.map((result) => fetchProductData(result.id)));
          setData(products.filter((product) => product !== null));
        } catch (error) {
          console.error('Error al obtener datos de productos:', error);
        }
      };

      fetchData();
      setEnter(false);
    }
  }, [prompt, enter]);

  //----------------------------
  const selectDescription = (e) => {
    e.preventDefault()
    const respuesta = e.currentTarget.getAttribute('value');
    value = respuesta
    setID(value)
    navigate(`/search/:product/:${value}`)
  }
  //------------------
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
export const ResultDescription = ({ prompt }) => {
  const [data, setData] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [valueImg, setValueImg] = useState('')
  const [zoom, setZoom] = useState(false);
  //const [position, setPosition] = useState({ x: 0, y: 0 });
  //---------------
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

  const fetchProductData = async (productId) => {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/items/${productId}`);
      const responseDescription = await axios.get(`https://api.mercadolibre.com/items/${productId}/description`)
      const fetchDescription = responseDescription.data.plain_text
      const datos = {
        id: response.data.id,
        title: response.data.title,
        thumbnail: response.data.pictures[0].url,
        price: formatNumberWithCommas(response.data.price),
        redondeo: formatNumberWithCommas(((response.data.price) / 12).toFixed(2)),
        cantidad: response.data.initial_quantity,
        descripcion: fetchDescription,
        quantity: response.data.available_quantity,
        sold_quantity: response.data.sold_quantity,
        warranty: response.data.warranty,
      }
      const urls = response.data.pictures.map((picture) => picture.url);

      setImageUrls(urls);
      setData(datos);
      setValueImg(datos.thumbnail)
    } catch (error) {
      console.error('Error al obtener datos del producto:', error);
      return null;
    }
  };

  const handleMouseEnter = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };
  const handleMouseMove = (e) => {
    //setPosition({ x: e.clientX, y: e.clientY });
    if (zoom === true) {
      const cursor = document.querySelector(".divCursor")
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }


  }

  //---------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (prompt) {
      fetchProductData(prompt)

    }
  }, [prompt]);

  return (
    <SelectDescription >
      {zoom ? (<div className="divImgZoom">
        <img className="imgSelectZoom" src={valueImg} alt={data.title} />
      </div>) : false
      }
      <div className="divThree">
        <div className="divImg">
          <div className="divImgsLeft">
            {imageUrls.slice(0, 6).map((imageUrl, index) => (
              <button key={index + 1} onClick={() => setValueImg(imageUrl)}>
                <img
                  className="imgPicture"
                  src={imageUrl}
                  alt={`Imagen ${index + 1}`}
                />
              </button>
            ))}
          </div>
          <div >
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: valueImg
              },
              largeImage: {
                src: valueImg,
                width: 1129,
                height: 2050,
                sizes: '(min-width: 4000px)  (min-width: 4200px) '

              },

              className:"ImageMagnify",
              
            }}  />
          </div>
          {/* <div className="areaImg"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="image-container">
                <img className="imgSelect" src={valueImg} alt={data.title} />
              </div>
              {zoom?(<div className="divCursor"></div>)
              : false
              }
            </div> */}
        </div>
        <div className="divInfo">
          <p>Nuevo| +{data.sold_quantity} vendido</p>
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
            <p className="pText">Cantidad de unidades: {data.quantity}</p>
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
            <p className="pText">{data.warranty}</p>
          </div>

          <div className="divInfoStore">
            <h3>Informacion de la tienda</h3>
            <h4>MercadoLider
              <p>Es uno de los mejore del sitio!</p>
            </h4>
            <div className="divBoxesColors">
              <p className="pbox"></p>
              <p className="pbox1"></p>
              <p className="pbox2"></p>
              <p className="pbox3"></p>
              <p className="pbox4"></p>
            </div>
            <div className="divShoppBottom">
              <div>
                <h2>+1000</h2>
                <p>Ventas concretadas</p>
              </div>
              <div>
                <h2>Logo</h2>
                <p>Brinda buena atencion</p>
              </div>
              <div className="divEnd">
                <h2>Logo</h2>
                <p>Despacha sus productos a tiempo</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="divDescription">
        <h2>Descripcion</h2>
        <p className="pDescription">{data.descripcion}</p>
      </div>
    </SelectDescription >
  )
}

export default {
  SearchrHead,
  Result,
  ResultDescription
}