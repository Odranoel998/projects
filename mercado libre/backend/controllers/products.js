import { Router } from "express";
import Product from "../models/productsModel.js";

const productRouter= Router()


productRouter.post('/',async(request,response)=>{
    try{
        const {name,date,img,precio}= request.body;

        const product= new Product({
            name,
            date,
            img,
            precio
        })
        const saveProduct= await product.save();
        response.status(201).json(saveProduct)
    }catch(error){
        console.log(error)
        response.status(500).json({error:"Something went wrong"})
    }
})


productRouter.get('/', async (request,response)=>{
    try{
        const product= await Product.find({}) 
        response.status(200).json(product)
    }catch(error){
        console.log(error)
        response.status(500).json({error:'"Something went wrong"'})

    }
})