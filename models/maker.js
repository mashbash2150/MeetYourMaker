//populated based on plants exercises

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Maker = new Schema(
    {
        name: { type: String, required: true},
        city: { type: String, required: false},
        state: { type: String, required: false },
        summary: { type: String, required: false },
        skillgroup: { type: String, required: false },
        subskills:{type:Array,required:false},
        image:{type:String, required:false},
        email:{type:String,required:false},
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