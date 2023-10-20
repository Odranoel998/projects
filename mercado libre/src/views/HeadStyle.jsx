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
export const DescripcionStyle = styled.div`
// background-color: white;
// margin-left: 10%; 
// margin-top: 3%;
// border-radius: 8px;
// width: 800px;
// min-height: 500px; 
// display: inline-block;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// overflow: hidden; 
//     .divTop{
//         display: flex;
//         //border: 2px solid blue;
//         width: 780px;
//         hedth: 50px;

//         .divImg{ 
//             display:flex;
//             justify-content: flex-start;
//             //border: 2px solid red;
//             width: 480px;
//             img{
//                 margin-left:50px;
//                 width: 50%;
//                 hedth: 50%;  
//             }
//         }
//         div{
//             margin-top: 20px;
//             maring-left: 20px;
//             //border: 2px solid yellow;
//             width: 250px;
//             hedth: 50px;

//             h3{
//                 font-size:30px
//             }
//             button{
//                 color:white;
//                 background-color:#165cc8;
//                 border: transparent;
//                 width: 150px;
//                 padding: 10px;
//                 border-radius:8px
//             }
//         }
//     }
//     h2{
//         margin:5px;
//     }
//     p{
//         //border: 2px solid black;
//         font-size: 15px;
//         margin:5px;
//     }
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
border: 2px solid violet;
background-color:white;
margin: 20px;
display: flex;
flex-direction: column;
    
    .divThree{
        //border: 2px solid red;
        background-color: white;
        font-family: Helvetica, Arial, sans-serif;
        margin: 20px;
        width:1300px;
        min-height:100%;
        display: flex;
        flex-direction: row;
        justify-content:flex-end;

        .divImg{
            //border: 2px solid blue;
            margin-top: 10px;
            background-color: white;
            width:500px;
            height:100%;
            display: flex;
            flex-direction: row;
            justify-content:flex-end;
            img{
                //border: 2px solid blue;
                width:70%;
                height: 100%;
                margin-right: 10px;
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
                    //border: 1px solid #3483FA;
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
                min-height:500px;
                display: flex;
                flex-direction: column;
            }
        }
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
    SelectDescription,
    HeadCenter,
    HeadRight,
    ButtonStyle,
}