'use strict';
const {
  Model
} = require('sequelize');
const UserBootcamp = require('./User_bootcamp');
const User = require('./User')
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bootcamp.belongsToMany(models.User, {through: 'UserBootcamp'})
    }
  }
  Bootcamp.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt: true,
        min: 5,
        max: 20
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true, 
    paranoid: true,
    modelName: 'Bootcamp',
  });
  return Bootcamp;
};