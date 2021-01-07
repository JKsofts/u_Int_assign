'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacherSubjects extends Model {
    static associate(models) {
      this.hasMany(models.teacher);
      this.hasMany(models.subject);
      this.hasMany(models.class);
    }
  }
  teacherSubjects.init(
    {
      teacherId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'teachers',
          key: 'id'
        }
      },
      subjectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'subjects',
          key: 'id'
        }
      },
      classId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'classes',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'teacherSubjects'
    }
  );
  return teacherSubjects;
};
