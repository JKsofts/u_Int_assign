"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      this.belongsToMany(models.teacher, { through: models.teacherSubjects });
      this.belongsToMany(models.class, { through: models.teacherSubjects });
    }
  }
  Subject.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      subjectCode: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "subject",
    }
  );
  return Subject;
};
