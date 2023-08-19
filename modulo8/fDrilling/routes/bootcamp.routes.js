const { createBootcamp, addUserBootcamp, findUserBootcamp, getBootcamps } = require("../controllers/bootcampController")
const { authMiddleware } = require("../middlewares/auth")
const router = require("express").Router()

// public 
router.get('/', getBootcamps)

// token required
router.post('/', authMiddleware, createBootcamp)
router.post('/add-user', authMiddleware, addUserBootcamp)
router.get('/users/:id', authMiddleware, findUserBootcamp)

module.exports = router