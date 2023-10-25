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
border-radius:5px;
margin-top:-5px;
margin-left:16.5%;
display:block;
width:600px;
height:40px;

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
min-height: 400px; 
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
            //border: 2px solid blue;
        h1{
            font-family: "Segoe IU", sans-serif;
            margin-left: 20px;
            font-size: 22px;
            font-weight: lighter;
        }
        p{
            font-size: 12px;
            //padding: 20px;
            margin-left: 20px;
            font-family: "Segoe UI";
        }
    }
    .divSpan{
        //border: 2px solid black;
        padding: 30px;
        display:flex;
        justify-content: flex-end;
        flex-direction: column;
        
        
        span{
            font-weight: lighter;
            margin-left: -10px;
            font-size: 10px;
            font-family: "Segoe UI";
           // border: 2px solid red;
        }
    }
`;
export const SelectDescription = styled.div`
//border: 2px solid violet;
border-radius: 8px;
background-color:white;
font-family: Helvetica, Arial, sans-serif;
margin: 20px;
width:1350px;
min-height:100%;
display: flex;
flex-direction: column;
    
    .divThree{
        //border: 2px solid red;
        background-color: white;
        font-family: Helvetica, Arial, sans-serif;
        margin: 20px;
        width:1300px;
        min-height:100px;
        display: flex;
        flex-direction: row;
        justify-content:flex-end;

        .divImg{
            //border: 2px solid yellow;
            margin-top: 10px;
            background-color: white;
            width:500px;
            min-height:100%;
            display: flex;
            flex-direction: row;
            
            .divImgsLeft{
               // border: 2px solid pink;
                margin: 10px;
                width: 100px;
                display: flex;
                flex-direction:column;
                
                img{
                    border: 1px solid grey ;
                    border-radius: 8px;
                    margin: 5px;
                    width: 70px ;
                    height: 70px;
                }
            }
            img{
                //border: 2px solid blue;
                max-width:370px;
                max-height: 250px;
                margin-top: 70px;
                //margin-right: 10px;
            }
        }
        .divInfo{
            //border: 2px solid green;
            margin-top: 10px;
            background-color: white;
            width:400px;
            height:100%;
        }
        .divTarget{
            //border: 2px solid yellow;
            margin-top: 10px;
            background-color: white;
            width:400px;
            height:100%;
            display: flex;
            flex-direction: column;

            .divButton{
                border: 1px solid grey;
                margin: 15px;
                margin-left:3%;
                border-radius: 8px;
                min-height:500px;
                display: flex;
                flex-direction: column;

                .pText{
                    //border: 1px solid black;
                    font-size: 14px;
                    margin-left: 5%;
                    .pBlue1{
                    //border: 1px solid blue;
                    font-size: 12px;
                    color:#3483FA;
                    margin-top: 1%;
                    margin-left: 0%;
                    display: flex;
                    flex-direction: column;
                    }
                }
                .pTextBlack{
                    //border: 1px solid black;
                    font-size: 14px;
                    font-weight: bold;
                    margin-left: 5%;
                    .pTextBlackSub{
                        margin-top: 0px;
                        font-size: 12px;
                        font-weight: lighter;
                        color: grey;
                    }
                    
                }
                .pBlue{
                    //border: 1px solid #3483FA;
                    font-size: 12px;
                    color:#3483FA;
                    margin-left: 10%;
                    display: flex;
                    flex-direction: column;
                
                    .pTextBlue{
                        //border: 1px solid black;
                        margin-top: 1px;
                        margin-left: 1px;
                        color:black;
                    }
                
                }
                .buttonShopping{
                    color:white;
                    background-color:#2968C8;
                    border: transparent;
                    width: 250px;
                    padding: 17px;
                    border-radius:8px;
                    margin:5px;
                    margin-left: 15%;
                }
                .buttonAdd{
                    color:#3483FA;
                    background-color:#D9E7FA;
                    border: transparent;
                    width: 250px;
                    padding: 17px;
                    border-radius:8px;
                    margin:5px;
                    margin-left: 15%;
                }
            }
            .divInfoStore{
                border: 1px solid grey;
                margin: 15px;
                margin-left:3%;
                border-radius: 8px;
                min-height:100px;
                display: flex;
                flex-direction: column;
                h3{
                    margin:20px;
                }
                h4{
                    //border: 2px solid #00A650;
                    margin:20px;
                    color: #00A650;
                    p{
                        //border: 2px solid grey;
                        margin:2px;
                        margin-left: 10px;
                        color:grey;
                        font-size: 12px;
                    }
                }
                .divBoxesColors{
                    //border: 2px solid red;
                    display: flex;
                    .pbox{
                        margin-top: 7px;
                        margin-left: 15px;
                        background-color: #F24E06;
                        border: 2px solid #F24E06; 
                        width:60px;
                        height:10px;
                        opacity: 50%;
                    }
                    .pbox1{
                        margin-top: 7px;
                        margin-left: 2px;
                        background-color:#F2A006;
                        border: 2px solid #F2A006;
                        width:60px;
                        height:10px;
                        opacity: 50%;
                    }
                    .pbox2{
                        margin-top: 7px;
                        margin-left: 2px;
                        background-color:#E5C918;
                        border: 2px solid #E5C918;
                        width:60px;
                        height:10px;
                        opacity: 50%;
                    }
                    .pbox3{
                        margin-top: 7px;
                        margin-left: 2px;
                        background-color:#BAE518;
                        border: 2px solid #BAE518;
                        width:60px;
                        height:10px;
                        opacity: 50%;
                    }
                    .pbox4{
                        margin: 2px;
                        background-color: #06F231;
                        border: 2px solid #06F231;
                        width:80px;
                        height:20px;
                    }
                }
                .divShoppBottom{
                //border: 2px solid blue;
                display: flex;
                div{
                    margin-left: 5px;
                    border:1px solid grey;
                    border-left-width:0px;
                    border-top-width:0px;
                    border-bottom-width:0px;
                }
                .divEnd{
                    border-width:0px;
                }

                
            }
        }
    }
    }
.divDescription{
        //border: 2px solid black;
        margin:20px;
        .pDescription{
            margin: 10px;
            font-weight:lighter;
            color: grey;
            line-height: 1.5;
        }
}
`

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
    SelectDescription,
    HeadCenter,
    HeadRight,
    ButtonStyle,
}