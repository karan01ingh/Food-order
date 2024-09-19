import express from "express";
import multer from "multer";
import { CreateFoodItem , DisplayFoodItems} from "../Controllers/Food.controller.js";
//multer is used for making image storage System
// import { Signup } from "../Controllers/user.controller.js";
const FoodRoute=express.Router();
const storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage})
FoodRoute.post("/createnew",upload.single("image"),CreateFoodItem);
FoodRoute.post("/DisplayAll",DisplayFoodItems);
export default FoodRoute
// here we used the disk storage management sytem to store the uploaded images by the user