const mongoose = require('mongoose')
const MakerSchema = require('./maker')

const Maker = mongoose.model('Maker', MakerSchema)

// const Maker = new Schema(
  {
      name: { type: String, required: true },
      location: { type: String, required: true },
      summary: { type: String, required: false },
      skills: { type: Array, required: true },
      gallery: { type: Array, required: false },
      phone: { type: String, required: false },
      status: { type: Number, required: false },
      rating: { type: String, required: false },

  },
  { timestamps: true },
)

module.exports = {
Maker
}