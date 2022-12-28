const { Router } = require('express');
const controllers=require('../controllers')
const router = Router();

router.get('/', controllers.getFeaturedMakers)
router.get('/about',controllers.about)
router.get("/skills",controllers.getAllSkills)
router.get("/skills/:skillgroup",controllers.getSkill)
router.get(`/makers/skills/:skillgroup`, controllers.getAllByCraft)
router.get(`/makers/:id`, controllers.getMakersById)
router.get('/makers/update/:id', controllers.getMakerToUpdate)
router.put('/makers/update/:id', controllers.updateMaker)
router.delete('/makers/:id', controllers.deleteMaker)
router.get("/makers/add", controllers.createMaker)
router.post("/makers/add", controllers.createMaker)
router.get("/makers",controllers.getMakers)
router.get(`/makers/:id`, controllers.getMakersById)
router.post(`/makers/:id/add`, controllers.createProject)
router.get(`/makers/:id/projects`, controllers.getMakerProjects)
router.delete(`/makers/:id/projects/:pid`, controllers.deleteProject)
router.get('/search',controllers.search)
router.get('/search/:query',controllers.searchResult)

module.exports = router;