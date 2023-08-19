const { createUser, findAll, getUserById, updateUserById, deleteUserById, login, logout } = require("../controllers/usuariosController")
const { authMiddleware } = require("../middlewares/auth")
const router = require("express").Router()

// public 
router.post('/singup', createUser)
router.post('/singin', login)
router.get('/logout', logout)
// token required
router.get('/:id', authMiddleware, getUserById)
router.get('/', authMiddleware, findAll)
router.put('/:id', authMiddleware, updateUserById)
router.delete('/:id', authMiddleware, deleteUserById)

module.exports = router