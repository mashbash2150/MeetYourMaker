const { response } = require("express");
const Maker = require('../models/maker');

const createMaker = async (req, res) => {
  try {
      const maker = await new Maker(req.body)
      await maker.save()
      return res.status(201).json({
          maker,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}


const getMakers=async(req,res)=>{
  try {
    const makers = await Maker.find()
    return res.status(200).json({ makers })
} catch (error) {
    return res.status(500).send(error.message);
}
}

const getFeaturedMakers=async(req,res)=>{
  try {
    const makers = await Maker.find({featured:true})
    return res.status(200).json({ makers })
} catch (error) {
    return res.status(500).send(error.message);
}
}

const getMakersById= async (req,res)=>{
  try {
    const { id } = req.params;
    const maker = await Maker.findById(id)
    if (maker) {
        return res.status(200).json({ maker});
    }
    return res.status(404).send('Maker with the specified ID does not exists');
} catch (error) {
    return res.status(500).send(error.message);
}
}

const search=(req,res)=>{
  res.send({
    message: `Search Page Here`   
  })
}

const searchResult=(req,res)=>{
  res.send({
    message: `Search Results Here`   
  })
}

const about=(req,res)=>{
  res.send({
    message: `About Page Here`   
  })
}

const updateMaker = async (req, res) => {
  try {
      const maker = await Maker.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(maker)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteMaker = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Maker.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Maker deleted");
      }
      throw new Error("Maker not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}



module.exports={
  createMaker,
  getMakers,
  getFeaturedMakers,
  getMakersById,
  search,
  searchResult,
  about,
  updateMaker,
  deleteMaker
}