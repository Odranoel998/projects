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

export const Targets = styled.div`
background-color: white;
font-family: Proxima Nova,-apple-system,Helvetica Neue,helvetica,roboto,arial,sans-serif;
border-color: transparent;
border-radius: 5px;
display: flex;
justify-content: center;
width: 80%;
margin-top: 3%;
margin-left: 10%;
padding: 2%;
`

export const Target = styled.div`
 width: 100%;
`


export default {
    ButtonLeft,
    ButtonRigth,
    DivImage,
    ImgFond,
    Targets,
    Target
}