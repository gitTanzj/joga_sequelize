'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await Promise.all([
      queryInterface.changeColumn('Tags', 'id', {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.changeColumn('Tags', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tags');
  }
};
