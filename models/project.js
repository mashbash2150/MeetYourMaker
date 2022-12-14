//populated based on plants exercises

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        maker: { type: String, required: false },
        skills: { type: Array, required: true },
        image:{type:String, required:false},
        gallery: { type: Array, required: false },
        featured:{type:Boolean,required:false}
        

    },
    { timestamps: true },
)


module.exports = mongoose.model('Project', Project)