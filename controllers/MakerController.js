const { response } = require("express");

const getMakers=(req,res)=>{
  res.send({
    message: "Getting Makers"   
  })
}

const getMakersById=(req,res)=>{
  res.send({
    message: `Getting maker with id ${req.params.makerId}`   
  })
}

module.exports={
  getMakers,
  getMakersById,
}