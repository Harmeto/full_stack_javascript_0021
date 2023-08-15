const { createUser, findAll, getUserById, updateUserById, deleteUserById } = require("../controllers/usuariosController")
const router = require("express").Router()

router.post('/', createUser)
router.get('/', findAll)
router.get('/:id', getUserById)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)

module.exports = router