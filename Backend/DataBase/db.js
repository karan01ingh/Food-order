import mongoose from "mongoose";
 const connect= async ()=>{
    try {
        await mongoose.connect('mongodb+srv://kunalmanral45:2Oa2oONjRPMbMBdv@cluster0.kxwkp.mongodb.net/');
        console.log("database connected sucessfully");
    } catch (error) {
        console.log("error in connecting",error);
    }
    
}
export default connect;