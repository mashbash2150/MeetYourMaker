

const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes=require('./routes')
const mongoose=require('mongoose')
// const makerController = require('./controllers/MakerController.js')
// const loginController = require('./controllers/LoginController.js')
// const { Maker } = require('./models')
const db=require('./db')

const PORT = process.env.PORT || 3001


const app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/',routes);
app.use("*",(req,res)=>res.status(404).json({error:"Page Not Hello"}))
app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

