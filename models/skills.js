//populated based on plants exercises

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Skill = new Schema(
    {
        skillgroup: { type: String, required: true },
        category:{ type:String,required:true},
        subskills: { type: Array, required: true },
        media:{ type: Array, required: true },
        makers: { type: Array, required: false },
        projects: { type: Array, required: false },
        image:{type:String, required:false}
      
    },
    { timestamps: true },
)

// module.exports=Maker


//i need help understanding why db will ony seed with this, but server will only run with above
module.exports = mongoose.model('Skill', Skill)