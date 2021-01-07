"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("teacherClasses", {
      teacherId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "teachers",
          key: "id",
        },
        allowNull: false,
      },
      classId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "classes",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("teacherClasses");
  },
};
