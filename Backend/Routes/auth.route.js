import express from "express";
import multer from "multer";
//multer is used for making image storage System
import { Login, Signup } from "../Controllers/user.controller.js";
const UserRoute=express.Router();
UserRoute.post("/Signup",Signup);
UserRoute.post("/Login",Login)
export default UserRoute