import { useState } from 'react';
import {ButtonLeft,ButtonRigth,DivImage,ImgFond,Targets,Target} from "../views/HomeStyles"
import { Link } from 'react-router-dom'

export const Home=() => {
    const [num,setNumer]= useState(1)

    const url= `images/img${num}.webp`;

    const NextNumber=()=>{
        if(num===5){
            setNumer(1)
        }else
        setNumer(num+1)
    }
    const PreviousNumber=()=>{
        if(num===1){
            setNumer(5)
        }else
        setNumer(num-1)
    }

    const right=' >'
    const left= ' <'

    return(
        <div>
            <DivImage>
                <ImgFond src={url} alt="publicidad one" ></ImgFond>
                <ButtonLeft onClick={PreviousNumber}>{left}</ButtonLeft>
                <ButtonRigth onClick={NextNumber}>{right}</ButtonRigth>
            </DivImage>
         <Targets>
            <Target>
                <p>Tarjeta de credito</p>
                <Link>Ver promociones bancarias</Link>
            </Target>
            <Target>
                <p>Tarjeta de debito</p>
                <Link>Ver más</Link>
            </Target>
            <Target>
                <p>Cuotas sin tarjeta</p>
                <Link>Conocé Mercado Crédito</Link>
            </Target>
            <Target>
            <p>Efectivo</p>
            <Link>Ver más</Link>
            </Target>
        </Targets>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi non odio laboriosam blanditiis repudiandae inventore excepturi rem possimus animi eius perferendis illo,
         et deleniti alias tempora eum mollitia libero tempore?</p>
         <br />

        </div>
        
    )
    }

    export default {
        Home,
    }