'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserBootcamp.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    BootcampId: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    timestamps: true, 
    paranoid: true,
    modelName: 'UserBootcamp',
  });
  return UserBootcamp;
};