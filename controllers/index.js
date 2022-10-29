const { response } = require("express");
const Maker = require('../models/maker');
const Project = require('../models/project');
const Skill=require('../models/skills')

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

const getMakerProjects=async(req,res)=>{
  try {
    const {id}=req.params
    const projects = await Project.find({maker:id})
    return res.status(200).json({ projects })
} catch (error) {
    return res.status(500).send(error.message);
}
}

const createProject = async (req, res) => {
  try {
      const project = await new Project(req.body)
      await project.save()
      return res.status(201).json({
          project,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const getMakersById= async (req,res)=>{
  try {
    const { id } = req.params;
    console.log(req.params)
    const maker = await Maker.findById(id)
    if (maker) {
        return res.status(200).json({ maker});
    }
    return res.status(404).send('Maker with the specified ID does not exist');
} catch (error) {
    return res.status(500).send(error.message);
}
}

const getAllSkills= async (req,res)=>{
    try {
      const skills = await Skill.find()
      return res.status(200).json({ skills })
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

const getSkill= async (req,res)=>{
  try {
    const { skillgroup } = req.params;
    console.log(skillgroup)
    const skill = await Skill.find({category:skillgroup})
    if (skill) {
        return res.status(200).json({ skill});
    }
    return res.status(404).send('skill with the specified ID does not exist');
} catch (error) {
    return res.status(500).send(error.message);
}
}

const getAllByCraft= async (req,res)=>{
  try {
    const { skillgroup } = req.params;
    console.log(skillgroup)
    const craft = await Maker.find({skillgroup:skillgroup})
    if (craft) {
        return res.status(200).json({ craft});
    }
    return res.status(404).send('Craft with the specified skillgroup does not exist');
} catch (error) {
    return res.status(500).send(error.message);
}
}

const getMakerToUpdate= async (req,res)=>{
  try {
    const { id } = req.params;
    console.log(req.params)
    const maker = await Maker.findById(id)
    if (maker) {
        return res.status(200).json({ maker});
    }
    return res.status(404).send('Maker with the specified ID does not exist');
} catch (error) {
    return res.status(500).send(error.message);
}
}

const search=async (req,res)=>{
  res.send({
    message: `Search Results Here`   
  })
}


const searchResult=async(req,res)=>{
  try {
    const { query } = req.params;
    const makers = await Maker.find({city:query})
    return res.status(200).json({ makers })
} catch (error) {
    return res.status(500).send(error.message);
}
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

const deleteProject = async (req, res) => {
  try {
      const { pid } = req.params;
      const deleted = await Project.findByIdAndDelete(pid)
      if (deleted) {
          return res.status(200).send("Project deleted");
      }
      throw new Error("Project not found");
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
  deleteMaker,
  getMakerToUpdate,
  getAllByCraft,
  getSkill,
  getAllSkills,
  getMakerProjects,
  createProject,
  deleteProject
}