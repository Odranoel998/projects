import styled from "styled-components";

export const Search = styled.input`
border:2px solid violet;
border-radius:5px;
margin-top:-5px;
margin-left: 200px;
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
margin-left: 50px;
max-width:1300px;
min-height:100%;
display: flex;
flex-direction: column;

    .divImgZoom{
        //border: 1px solid grey;
        background-color: white;
        min-width: 900px;
        min-height: 300px;
        margin-top: 11px;
        margin-left: 400px;
        position: absolute;
        display: flex;
        justify-content: center;

        .divImgZoom{
            //border: 2px solid black;
            /* min-width: 900px;
            min-height: 600px; */
            
        }
    }
    
    .divThree{
        //border: 2px solid red;
        background-color: white;
        font-family: Helvetica, Arial, sans-serif;
        margin: 0px;
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
            position: relative;
            
            .divImgsLeft{
                //border: 2px solid pink;
                margin: 10px;
                width: 100px;
                button{
                    background-color:transparent;
                    width: 60px; /* Ancho del botón */
                    height: 60px; /* Alto del botón */
                    border: 0.5px solid grey;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    margin-top: 5px;
     
                    .imgPicture{
                    margin-top: 8px;
                    margin-left: 3.5px;
                    position: absolute;
                    width:40px;
                    height: 40px;
                    border-radius: 2px;
                    }
                }
                
            }
            .ImageMagnify {
                border: 1px solid black;
                margin: 20px;
                margin-top: 50px;
                width: 100px;
                max-height: 300px;
                /* margin: 10px;
                margin-top: 50px;
                background-color:white;
                position: relative;
                width: 80%;
                max-height: 30%;
                overflow: hidden;
                display: flex;  */

                /* .image-container{
                    //border: 2px solid red;
                    width: 100px;
                    height: 100px;

                    .imgSelect{
                        margin: auto;
                        margin-top: 40px;
                        max-width: 350px;
                    }
                }
                .divCursor{
                    cursor: zoom-in;
                    width: 200px; 
                    height: 200px; 
                    background-color: grey; 
                    opacity: 50%;
                    position: absolute;
                    transform: translate(-120%, -60%); 
                    pointer-events: visible;
                    border: 2px solid #fff; 
                    border-radius: 10px; 
                } */
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
            margin-right: 20px;
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

export default {
    Search,
    ResultStyle,
    Tarjet,
    SelectDescription,


}