'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'vaccines',
        'createdAt',
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
      ),
      queryInterface.addColumn(
        'vaccines',
        'updatedAt',
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('vaccines','createdAt'),
      queryInterface.removeColumn('vaccines','updatedAt'),
    ]);
  }
};
