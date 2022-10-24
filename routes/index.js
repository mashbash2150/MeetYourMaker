const { Router } = require('express');
const controllers=require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

// app.get(`/makers`, makerController.getMakers)
router.get("/makers/add", controllers.createMaker)

router.post("/makers/add", controllers.createMaker)

router.get("/makers",controllers.getMakers)

router.get(`/makers/:id`, controllers.getMakersById)

router.put('/makers/:id', controllers.updateMaker)

router.delete('/makers/:id', controllers.deleteMaker)


router.get('/search',controllers.search)

router.get('/search/:makerId',controllers.searchResult)

router.get('/about',controllers.about)



// app.get('/', (req,res) =>{
//   res.send("This is the Landing Page")
// })

// app.get(`/about`,(req,res)=>{
//   res.send("This is the About page")
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

// // app.get(`/login`,loginController.userLogin)


// app.get('/search', (req, res) => {
//     res.send("This is the search page")
//   })




module.exports = router;