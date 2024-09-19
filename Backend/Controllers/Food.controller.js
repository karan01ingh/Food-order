import FoodItem from "../Models/FoodModel.js";
import bcryptjs from "bcryptjs"
import fs from 'fs'
// this fs is the pre built/in built file system in the node js
const CreateFoodItem=async (req,res)=>{
    const {name,description,price,category}=req.body;
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image file is required" });
    }
    const image_filename =`${req.file.filename}`; 
    const newFoodItem=new FoodItem({
        Name:req.body.name,
        Description:req.body.description,
        Price:req.body.price,
        Category:req.body.category,
        Image:image_filename
    }) 
    try {
        await newFoodItem.save();
        res.json({success:true,message:"FoodItem Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Item Not added"});
    }
}
// create new food item
const DisplayFoodItems=async(req,res)=>{
    // user id,saare,category
    try {
          if(req.body.category){
            const Fooditems=await FoodItem.find({Category:category});
            if(!Fooditems){
                return res.status(401).json({message:"No result Found",success:false});
            }
            return res.status(201).json({message:"All the result from category",success:true,items:Fooditems});
          }
          if(req.body.all){
            const Fooditems=await FoodItem.find();
            return res.status(201).json({message:"All the result",success:true,items:Fooditems});
          }
    } catch (error) {
        console.log("error",error);
        return res.status(401).json({message:"ho gya kaam",success:false});
    }
}
export {CreateFoodItem,DisplayFoodItems}