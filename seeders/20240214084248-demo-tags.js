'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Tags', [
      {
        id: 1,
        name: 'yogapractice',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),
    queryInterface.bulkInsert('Tags', [
      {
        id: 2,
        name: 'yogainspiration',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),
    queryInterface.bulkInsert('Tags', [
      {
        id: 3,
        name: 'wellness',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    queryInterface.bulkInsert('Tags', [
      {
        id: 4,
        name: 'nature',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    queryInterface.bulkInsert('Tags', [
      {
        id: 5,
        name: 'spiritual',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),
    queryInterface.bulkInsert('Tags', [
      {
        id: 6,
        name: 'sport',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),
    queryInterface.bulkInsert('Tags', [
      {
        id: 7,
        name: 'yogateacher',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {})
  }
};
