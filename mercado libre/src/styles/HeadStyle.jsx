import styled from "styled-components";

export const Body= styled.body`
    background-color:#EDEDED;
    border: 1px solid blue;
  `
  
export const Head= styled.div`
    background-color:#FFF159; 
    border: 1px solid red; 
    padding: 2%;
    display: flex;
    height: 100%;
    float: none;
`

export const Search=styled.input`
border-color: transparent;
border-radius:5px
margin-top: -5px;
margin-left: 16.5%;
display: block;
width: 600px;
height: 40px;

`

export const HeadCenter=styled.div`
display: inline;
width: 500px;
height: 25px;
margin-top: 20px;
margin-left: 16.5%;
`
export const ButtonStyle=styled.button`
background-color: transparent;
border-color: transparent;
`

export const HeadRight= styled.div`

display: inline;
width: 500px;
height: 25px;
margin-left: 16.5%;
`

export default{
    Body,
    Head,
    Search,
    HeadCenter,
    HeadRight,
    ButtonStyle,
}