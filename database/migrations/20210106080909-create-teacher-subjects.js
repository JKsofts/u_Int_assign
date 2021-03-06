'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teacherSubjects', {
      teacherId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'teachers',
          key: 'id',
        },
        allowNull: false,
      },
      subjectId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'subjects',
          key: 'id',
        },
        allowNull: false,
      },
      classId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'classes',
          key: 'id',
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
  down: async (queryInterface) => {
    await queryInterface.dropTable('teacherSubjects');
  },
};
