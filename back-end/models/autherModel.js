const mongoose  = require("mongoose");



const autherSchema = new mongoose.Schema({
  name : {
    type : String ,
    required : [true , "auther name required"] ,
  
  
  } 
}, {timestamps : true})


const AutherModel = mongoose.model("Auther" , autherSchema);
module.exports = AutherModel;