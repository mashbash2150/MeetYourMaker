const { response } = require("express");

const userLogin=(req,res)=>{
  res.send({
    message: "Getting Login Page"   
  })
}


module.exports={
userLogin,
}