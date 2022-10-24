//populated based on plants exercises

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Maker = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        summary: { type: String, required: false },
        skills: { type: Array, required: true },
        image:{type:String, required:false},
        gallery: { type: Array, required: false },
        phone: { type: String, required: false },
        status: { type: Number, required: false },
        rating: { type: String, required: false },

    },
    { timestamps: true },
)

// module.exports=Maker


//i need help understanding why db will ony seed with this, but server will only run with above
module.exports = mongoose.model('Maker', Maker)