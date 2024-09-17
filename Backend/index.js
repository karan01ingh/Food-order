 import express from 'express'
 import cors from "cors"
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// 
app.use(cors());

// Route for the root URL
app.listen(port, (req, res) => {
  console.log("server is listening",port);
});
app.get("/",(req,res)=>{
    res.send("done");
})