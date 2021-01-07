"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      // a class can have multiple teachers
      this.belongsToMany(models.teacher, { through: models.teacherSubjects });
      this.belongsToMany(models.subject, { through: models.teacherSubjects });
    }
  }
  Class.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      classCode: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "class",
    }
  );
  return Class;
};
