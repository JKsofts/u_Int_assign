"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teacherClasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  teacherClasses.init(
    {
      teacherId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "teacher",
          key: "id",
        },
      },
      classId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "class",
          key: "id",
          primaryKey: true,
        },
      },
    },
    {
      sequelize,
      modelName: "teacherClasses",
    }
  );
  return teacherClasses;
};
