// const mongoose = require('mongoose')

// mongoose
//   .connect('mongodb://127.0.0.1:27017/makersDatabase')
//   .then(() => {
//     console.log('Successfully connected to MongoDB.')
//   })
//   .catch((e) => {
//     console.error('Connection error', e.message)
//   })
// mongoose.set('debug', true)
// const db = mongoose.connection

// module.exports = db





const mongoose = require('mongoose')
require('dotenv').config() // Add this line

let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/MERN'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db