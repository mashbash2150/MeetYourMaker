

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
app.use('/api',routes);
app.use("*",(req,res)=>res.status(404).json({error:"Page Not Found"}))

// app.get('/', (req,res) =>{
//   res.send("This is the Landing Page")
// })

// app.get(`/about`,(req,res)=>{
//   res.send("This is the About page")
// })

// // app.get(`/makers`, makerController.getMakers)
// app.get("/makers",async (req,res)=>{
//   const makers=await Maker.find({})
//   res.json(makers)
// })

// app.get("/makers/:id",async (req,res)=>{
//   const{id}=req.params
//   const maker=await Maker.findById(id)
//   res.json(maker)
// })

// app.get(`/makers/add`,(req,res)=>{
//   res.send("This is where the add maker form will go")
// })

// app.post(`/makers/add`,(req,res)=>{
//   res.send("This is the post route for input data from the form")
// })

// app.get(`/login`,loginController.userLogin)


// app.get('/search', (req, res) => {
//     res.send("This is the search page")
//   })


//   app.get(`/makers/:makerId`, makerController.getMakersById)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

