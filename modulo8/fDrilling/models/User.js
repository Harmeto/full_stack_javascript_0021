'use strict';
const {
  Model
} = require('sequelize');
const UserBootcamp = require('./User_bootcamp');
const Bootcamp = require('./bootcamp');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Bootcamp, {through: 'UserBootcamp'})
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true      
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING
    },
    full_name:{
      type: DataTypes.VIRTUAL,
      get(){
        return `${this.first_name} ${this.last_name}`
      }
    }
  }, {
    sequelize,
    timestamps: true, 
    paranoid: true,
    modelName: 'User',
  });
  return User;
};
