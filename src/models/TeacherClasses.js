'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacherClasses extends Model {
    //static associate(models) {} +==> can be used for associations
  }
  teacherClasses.init(
    {
      teacherId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'teacher',
          key: 'id',
        },
      },
      classId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'class',
          key: 'id',
          primaryKey: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'teacherClasses',
    }
  );
  return teacherClasses;
};
