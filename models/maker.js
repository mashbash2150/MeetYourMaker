//populated based on plants exercises

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Maker = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        summary: { type: String, required: false },
        skillgroup: { type: String, required: true },
        subskills:{type:Array,required:false},
        image:{type:String, required:false},
        email:{type:String,required:true},
        phone: { type: String, required: false },
        status: { type: String, required: false },
        rating: { type: String, required: false },
        featured:{type:Boolean,required:false}

    },
    { timestamps: true },
)

// module.exports=Maker


//i need help understanding why db will ony seed with this, but server will only run with above
module.exports = mongoose.model('Maker', Maker)