// import bcrypt from "bcrypt";
import User from'../models/usersModels.js'
import { Router } from "express";
import jwt from 'jsonwebtoken'
 

console.log("init Login")

const userLogin= Router()

//-------------------------------------------

userLogin.post('/',async(request,response)=>{

const {body}= request;

console.log(body,"primer console")

//el problema es el User
const user= await User.findOne({username:body.username})

// const passwordCorrect= user===null 
// ? false
// : await bcrypt.compare(body.password, user.paswordHash)

// console.log(user, passwordCorrect)

if(!(user )){
    response.status(401).json({
        error: 'invalid user or password'
    })
}

const userToken={
    // id:user._id,
    username:user.username
  }
const token= jwt.sign(userToken,'123')

response.json(
    {   
    username: user.username,
    token
    }
    .catch(error=>{
        console.log(error)
    })
    )
    });
 
export default userLogin