import styled from "styled-components";


export const Head = styled.div`
  //border: 2px solid black;
  background-color:#FFF159; 
  padding: 1.5% ;
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  display:flex;
  flex-direction: column;
  position: center;

    .Search{
        //border:2px solid violet;
        border-radius:5px;
        margin-left: 200px;
        display:block;
        width:600px;
        height:40px; 
    }
    .Buttons{
        margin-top:10px;
        display: flex;
        flex-direction: row;
        .HeadCenter{
        //border: 2px solid red;
        margin-left: 200px;
        width: 450px;
        }
        .Head-Rigth{
            //border: 2px solid red;
            margin-left: 200px;
            width: 400px;
        }   
    }

`
/* export const HeadCenter = styled.div`
display: inline;
width: 500px;
height: 25px;
margin-top: 20px;
margin-left: 16.5%;
*/
export const ButtonStyle = styled.button`
background-color: transparent;
border-color: transparent;
`

export const HeadRight = styled.div`

display: inline;
width: 500px;
height: 25px;
margin-left: 16.5%;
`
export default {
    Head,
    ButtonStyle,
}