'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await Promise.all([
      queryInterface.bulkInsert('Authors', [{
        id: 1,
        name: "Ashley Galvin",
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 2,
        name: "Patrick Beach",
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 3,
        name: "MacKenzie MIller",
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
