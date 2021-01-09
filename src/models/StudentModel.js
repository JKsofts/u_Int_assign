'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    //static associate(models) {} use to associate other tables if needed
  }
  Student.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: 'student',
    }
  );
  return Student;
};
