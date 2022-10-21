const mongoose = require('mongoose')
const MakerSchema = require('./maker')

const Maker = mongoose.model('Maker', MakerSchema)


module.exports = {
Maker
}