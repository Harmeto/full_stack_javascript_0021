const { createBootcamp, addUserBootcamp, findUserBootcamp, getBootcamps } = require("../controllers/bootcampController")
const router = require("express").Router()

router.post('/', createBootcamp)
router.get('/', getBootcamps)
router.post('/add-user', addUserBootcamp)
router.get('/users/:id', findUserBootcamp)

module.exports = router