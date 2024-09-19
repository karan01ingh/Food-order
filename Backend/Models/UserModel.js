import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
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
const User=mongoose.model('uesrModel',userSchema);
export default User;