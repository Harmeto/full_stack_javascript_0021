const {Bootcamp, User, UserBootcamp } = require('../models/index')

const createBootcamp = async (_, res) => {
  const data = _.body
  try {
    const user = await Bootcamp.create(data)
    if(!user) throw new Error('Error on create user, invalid fields')
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const addUserBootcamp = async (_, res) => {
  const { bootcampId, userId } = _.body
  try {
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    if (!bootcamp) {
      throw new Error('Bootcamp not found')
    }

    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found')
    }

    await bootcamp.addUser(user);

    res.status(200).json({msg: 'User added to bootcamp successfully.'});
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

const findUserBootcamp = async (_, res) => {
  const {id} = _.params
  try {
    const usersInBootcamp = await Bootcamp.findAll({
      where: {
        id
      },
      include: {
        model: User
      }
    });
    if(usersInBootcamp.length === 0) throw new Error('Bootcamp id not found or not have users')
    res.json(usersInBootcamp)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

const getBootcamps = async (_, res) => {
  try {
    const bootcamps = await Bootcamp.findAll({
      include: {
        model: User
      }
    });
    if(bootcamps.length === 0) throw new Error('There is no bootcamps created')
    res.json(bootcamps)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = { createBootcamp, addUserBootcamp, findUserBootcamp, getBootcamps }
