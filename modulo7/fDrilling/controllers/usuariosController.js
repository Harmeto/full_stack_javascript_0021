const {Bootcamp, User, UserBootcamp } = require('../models/index')

const createUser = async (_, res) => {
  const data = _.body
  try {
    const user = await User.create(data)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const findAll = async (_, res) => {
  try {
    const user = await User.findAll({
      include: {
        model: Bootcamp,
        attributes: {
          exclude:['id', 'createdAt', 'updatedAt', 'deletedAt', 'description']
        },
      }
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

const getUserById = async(_,res) => {
  const {id} = _.params
  try {
    const user = await User.findOne({
      where: id,
      include: {
        model: Bootcamp
      }
    })

    if(!user) throw new Error('User id not found or not valid')

    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

const deleteUserById = async(_, res) => {
  const id = _.params
  try {
    const user = await User.destroy({
      where: id,
      include: {
        model: Bootcamp
      }
    })

    if(!user) throw new Error('User id not found or not valid')

    res.status(200).json({message: 'User Deleted and remove from bootcamp associated'})
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

const updateUserById = async(_, res) => {
  const id = _.params
  const data = _.body
  try {

    const user = await User.update(data,
      {where: id},
    )

    if(!user) throw new Error('User id not found or not valid')

    const updatedUser = await User.findOne({
      where: id,
      include: {
        model: Bootcamp
      }
    })

    res.status(200).json({updatedUser: updatedUser})
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = { createUser, findAll, getUserById, deleteUserById, updateUserById }
