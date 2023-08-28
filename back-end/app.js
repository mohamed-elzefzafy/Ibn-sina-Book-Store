const express = require("express");
const  mongoose  = require("mongoose");
const autherRoute = require("./routes/autherRoute");
const dotenv = require("dotenv").config({path : "./config.env"});
const app = express();


mongoose.connect("mongodb://127.0.0.1/bookStore-DB").then((connect) => {
  console.log(`database connected : ${connect}`);
}).catch((error) => {
  console.log(`error is ${error}`);
})
app.use(express.json())

// mount routes 
app.use("/api/v1/authers" , autherRoute);

app.all("*" , (req , res , next) => {
  const error = new Error(`can't find this route ${req.originalUrl}`);
  next(error.message)
})
// global handling error middleware 
app.use((err , req , res , next) => {
  res.status(400).json({error : err});
})



const port = process.env.PORT;
app.listen(port , () => {
  console.log(`app listening on port ${port}`);
})