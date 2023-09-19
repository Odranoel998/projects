import styled from 'styled-components'

export const DivImage= styled.div`
display:flex;
float: none;
height: 100%;

`
export const ImgFond= styled.img`
object-fit: cover;
width: 100%;
height: 100%;
position: relative;
z-index: 1;
`

export const ButtonLeft= styled.button `
color: blue;
font-size: 30px;
position: absolute;
top: 200px; 
left: 0px;
z-index: 2;
width: 35px; 
height: 70px;
border-radius: 0 35px 35px 0;
border-color: transparent 

`
export const ButtonRigth= styled.button `
color: blue;
font-size: 30px;
position: absolute;
top: 200px; 
right: 0px;
z-index: 2;
width: 35px; 
height: 70px;
border-radius: 35px 0 0 35px ; 
border-color: transparent
`


export default {
    ButtonLeft,
    ButtonRigth,
    DivImage,
    ImgFond,
}