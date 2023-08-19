const {Bootcamp, User, UserBootcamp } = require('../models/index')
const jwt = require('jsonwebtoken');

const authMiddleware = async(_, res, next) => {
  let token;
  if(_?.headers?.authorization?.startsWith('Bearer')){
    token = _.headers.authorization.split(' ')[1]
    try {
      if(token){
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
        const user = await User.findOne({where:{id: decoded?.id}})
        _.user = user
        next()
      }
    } catch (error) {
      res.json('Not authorized')
    }
  }else{ res.json('There is no token attached to header')}
}

module.exports = {authMiddleware}