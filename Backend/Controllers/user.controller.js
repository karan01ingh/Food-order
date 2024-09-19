import User from "../Models/UserModel.js";
// import bcryptjs from "bcryptjs"
import bcrypt from "bcrypt"
const Signup= async (req,res)=>{
    const {name,email,password}=req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
        const newUser=new User({
            Name:name,Email:email,Password:hashedPassword
        })
    try {
        await newUser.save();
        return res.status(202).json({ success: true, message: "Signup done",new:req.body});
    } catch (error) {
        return res.status(400).json({ success: false, message: "Sing up not done"});
        console.log(error);
    }
}
const Login=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const validuser=await User.findOne({Email:email});
        if(!validuser){
            return res.status(200).json({message:"Invalid User",success:false});
        }
        const isMatch = await bcrypt.compare(password,validuser.Password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Password' });
        }
        else{
            return res.status(201).json({message:"Login Successfully",success:true});
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Error aa gya",success:false});
    }
}
export {Signup,Login}