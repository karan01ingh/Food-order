 import express from 'express'
 import cors from "cors"
 import connect from './DataBase/db.js';
 import UserRoute from './Routes/auth.route.js';
 import FoodRoute from './Routes/Fooditem.route.js';
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use('/api/User',UserRoute);
app.use('/api/Food',FoodRoute);
app.use("/images",express.static('uploads'));
// db
connect();

// Route for the root URL
app.listen(port, (req, res) => {
  console.log("server is listening",port);
});
app.get("/api",(req,res)=>{
    res.send("done");
})
