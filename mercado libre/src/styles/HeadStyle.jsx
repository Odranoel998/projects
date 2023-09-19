import styled from "styled-components";

export const Body= styled.body`
    background-color:#EDEDED;
  `
  
export const Head= styled.div`
    background-color:#FFF159; 
    width: auto;
    padding: 2%;
    display: flex;
    height: 100%;
    float: none;
`

export const Search=styled.div`
  border: 0;
  border-color: blue;
  border-radius: 2.5px;
  width: 590px;
  height: 40px;  
  margin-top: -10px;
  margin-bottom: 10px;
  margin-left: 30%;
`

export const HeadCenter=styled.div`
  color: black;
  height: 40px;
  width: 400px;
  margin-top: 30px;
  margin-bottom: -30px;
  margin-left: -420px;  
`

export const HeadRight= styled.div`
  height: 40px;
  width: 400px;
  margin-top: 30px;
  margin-bottom: -30px;
  margin-left: 240px;
`

export default{
    Body,
    Head,
    Search,
    HeadCenter,
    HeadRight,
}