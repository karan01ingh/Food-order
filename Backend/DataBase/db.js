import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
 const connect= async ()=>{
    try {
        await mongoose.connect(process.env.URI);
        console.log("database connected sucessfully");
    } catch (error) {
        console.log("error in connecting",error);
    }
    
}
export default connect;