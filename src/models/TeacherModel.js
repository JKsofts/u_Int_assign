"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    // a teacher can be associated with multiple classes
    static associate(models) {
      this.belongsToMany(models.class, { through: models.teacherSubjects });
      this.belongsToMany(models.subject, { through: models.teacherSubjects });
    }
  }
  Teacher.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "teacher",
    }
  );
  return Teacher;
};
