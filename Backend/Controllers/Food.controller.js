import FoodItem from "../Models/FoodModel.js";
import bcryptjs from "bcryptjs"
import fs from 'fs'
// this fs is the pre built/in built file system in the node js
const CreateFoodItem=async (req,res)=>{
    const {name,description,price,category,userid}=req.body;
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image file is required" });
    }
    const image_filename =`${req.file.filename}`; 
    const newFoodItem=new FoodItem({
        Name:req.body.name,
        Description:req.body.description,
        Price:req.body.price,
        Category:req.body.category,
        Image:image_filename,
        userId:userid
    }) 
    try {
        await newFoodItem.save();
        res.json({success:true,message:"FoodItem Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Item Not added"});
    }
}
// create new food item having data in the body
const DisplayFoodItems=async(req,res)=>{
    const {all,category}=req.body;
    try {
          if(category!=""){
            const Fooditems=await FoodItem.find({Category:category});
            if(!Fooditems){
                return res.status(401).json({message:"No result Found",success:true});
            }
            return res.status(201).json({message:"All the result from category",success:true,items:Fooditems});
          }
          else if(all){
            const Fooditems=await FoodItem.find();
            return res.status(201).json({message:"All the result",success:true,items:Fooditems});
          }
          else{
            return res.status(401).json({message:"kuch nahi yaa",success:false});
          }
    } catch (error) {
        console.log("error",error);
        return res.status(401).json({message:"ho gya kaam",success:false});
    }
}
// display food items according to the category and all the food items  given in the body
const RemoveFoodItem=async(req,res)=>{
    const {Foodid}=req.body;
    if(!Foodid){
        return res.status(401).json({success:false,message:"Foood Item  id is reqired"});
    }
    try {
        const demoitem=await FoodItem.findById(Foodid);
        if(!demoitem){
            return res.status(200).json({message:"No FoodItem found having given id",success:true});
        }
        await FoodItem.deleteOne({_id:Foodid});
        fs.unlink(`uploads/${demoitem.Image}`,()=>{});
        console.log(demoitem);
        return res.status(201).json({message:"Deleted Successfully",success:true});
    } catch (error) {
        console.log(error);
        return res.status(401).json({success:false,message:"Error occur"});
    }
}
// remove FoodItem using the id given in the body
// Remove FoodItem with object is . Food Item should be deleted only by the user who uploaded it
const UpdateFoodItem=async(req,res)=>{
    const {FoodId,description,name,price,category}=req.body
    // var image_filename = req.body.image;
    try {
        // if(req.file){
            const item=await FoodItem.findById(FoodId);
            const image_filename =`${req.file.filename}`;
            fs.unlink(`uploads/${item.Image}`,()=>{}); 
        // }
        const updateditem=await FoodItem.findByIdAndUpdate(FoodId,{
                $set:{
                    Description:description,
                    Price:price,
                    Category:category,
                    Name:name,
                    Image:image_filename,
                }},{new:false},
        )
        console.log(updateditem);
        return res.status(200).json({message:"Food Item updated successfully",success:true,updateditem:updateditem});

    } catch (error) {
        console.log(error);
        return res.status(401).json({message:"error in updating the food item",success:false});
    }
}
// updated function which update the food item with item also if you upload a new image 
export {CreateFoodItem,DisplayFoodItems,RemoveFoodItem,UpdateFoodItem}