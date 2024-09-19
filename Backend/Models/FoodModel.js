import mongoose from "mongoose";
const FoodSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
    Category:{
        type:String,
        required:true
    },
    Image:{
        type:String
    },
    Order:{
        type:Array,
        default:null
    },
    Address:{
        type:Object,
        default:null
    },
    isUser:{
        type:Boolean,
        default:true
    }
},{timestamps:true});
const FoodItem=mongoose.model('foodModel',FoodSchema);
export default FoodItem;