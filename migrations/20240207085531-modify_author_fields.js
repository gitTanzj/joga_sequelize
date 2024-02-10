'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await Promise.all([
      queryInterface.changeColumn('Authors', 'id', {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.changeColumn('Authors', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Authors')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
