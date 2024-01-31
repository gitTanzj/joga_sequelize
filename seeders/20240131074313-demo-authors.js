'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await Promise.all([
      queryInterface.bulkInsert('Authors', [{
        id: 1,
        name: "Ashley Galvin"
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 2,
        name: "Patrick Beach"
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 3,
        name: "MacKenzie MIller"
      }])
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
