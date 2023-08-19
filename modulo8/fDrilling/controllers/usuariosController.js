const { generateToken } = require('../config/jwToken')
const {Bootcamp, User, UserBootcamp } = require('../models/index')
const bcrypt = require('bcrypt')

const createUser = async (_, res) => {
  const { first_name, last_name, password, confirm_password, email } = _.body
  try {
    if(password === confirm_password){
      
      if(password.length < 8 ) return res.status(422).json({message: 'Password must be 8 character minimun'})
      
      const hashedPassword = bcrypt.hashSync(password, 10)
      const user = await User.create({first_name, last_name, password: hashedPassword, email})
      
      return res.status(201).json(user)
    
    }
    else return res.status(422).json({message: 'Password dont match'})

  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const login = async(_, res) => {
  const { email, password } = _.body
  try {
    
    if(!email || !password) return res.status(422).json({message: 'Invalid Fields'})

    const user = await User.findOne({where: {email}})

    if(!user) return res.status(401).json({ message: 'Email or password is incorrect' })

    const match = bcrypt.compareSync(password, user.password)

    if (!match) return res.status(401).json({ message: 'Email or password is incorrect' })

    const token = generateToken(user?.id)

    user.token = token
    await user.save()

    res.cookie('token', token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
    res.json({token})
  } catch (error) {
    res.json(error.message)
  }
}

const logout = async(_, res) => {
  const cookies = _.cookies
  try {
    if(!cookies.token) {
      return res.json({message: 'No token in cookies'})
    }
    const token = cookies.token
    const user = await User.findOne({where: {token}})
    if(!user){
     return  res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true })
    }
  
    user.token = null
    await user.save()
  
    res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true })
    res.sendStatus(204)
  } catch (error) {
    res.json(error.message)
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
      where:{id},
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

module.exports = { createUser, findAll, getUserById, deleteUserById, updateUserById, login, logout }
