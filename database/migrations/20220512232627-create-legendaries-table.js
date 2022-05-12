'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('legendaries', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      healthPoints: {
        type: Sequelize.FLOAT,
      },      
      specialAttack: {
        type: Sequelize.FLOAT,
      },
      defense: {
        type: Sequelize.FLOAT,
      },
      attack: {
        type: Sequelize.FLOAT,
      },
      experience: {
        type: Sequelize.FLOAT,
      },
      specialDefense: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('legendaries');
  }
};
