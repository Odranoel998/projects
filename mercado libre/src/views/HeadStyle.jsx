import styled from "styled-components";

export const Body = styled.body`
    background-color:#EDEDED;
    border: 1px solid blue;
  `

export const Head = styled.div`
    background-color:#FFF159; 
    border: 1px solid red; 
    padding: 2%;
    display: flex;
    height: 100%;
    float: none;
`

export const Search = styled.input`
border-color: transparent;
border-radius:5px
margin-top: -5px;
margin-left: 16.5%;
display: block;
width: 600px;
height: 40px;

`
export const DescripcionStyle= styled.div`
background-color: white;
margin-left: 10%; 
margin-top: 3%;
border-radius: 8px;
width: 800px;
min-height:: 500px; 
display: inline-block;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow: hidden; 
    .divTop{
        display: flex;
        //border: 2px solid blue;
        width: 780px;
        hedth: 50px;

        .divImg{ 
            display:flex;
            justify-content: flex-start;
            //border: 2px solid red;
            width: 480px;
            img{
                margin-left:50px;
                width: 50%;
                hedth: 50%;  
            }
        }
        div{
            margin-top: 20px;
            maring-left: 20px;
            //border: 2px solid yellow;
            width: 250px;
            hedth: 50px;

            h3{
                font-size:30px
            }
            button{
                color:white;
                background-color:#165cc8;
                border: transparent;
                width: 150px;
                padding: 10px;
                border-radius:8px
            }
        }
    }
    h2{
        margin:5px;
    }
    p{
        //border: 2px solid black;
        font-size: 15px;
        margin:5px;
    }
`

export const ResultStyle = styled.div`
display: inline-block;
`
export const Tarjet = styled.div`
background-color: white;
margin-left: 20px; 
margin-top: 20px;
border-radius: 8px;
width: 300px;
height: 500px; 
display: inline-block;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow: hidden;
    .divImg{
        margin:5px;
        //border: 2px solid red;
        windth:50%;
        img {
            border-radius: 8px 8px 8px 8px;
            width: 100%;
            hedth: 100%;
            aspect-ratio: 3/2;
            object-fit: contain;
        }
    }
    div{
            margin-left: 5px;
        h3{
            margin-left: 20px;
        }
        p{
            font-weight: bold;
            font-size: 10px;
            padding: 20px;
        }
    }
    span{
        margin-left: 25px;
        font-size: 15px;
    }
`;

export const HeadCenter = styled.div`
display: inline;
width: 500px;
height: 25px;
margin-top: 20px;
margin-left: 16.5%;
`
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
    Body,
    Head,
    Search,
    ResultStyle,
    Tarjet,
    DescripcionStyle,
    HeadCenter,
    HeadRight,
    ButtonStyle,
}