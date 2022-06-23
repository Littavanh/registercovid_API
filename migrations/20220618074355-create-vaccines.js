"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "vaccines",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
       
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        vaccinetype: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        isDelete: {
          allowNull: false,
          type: Sequelize.ENUM,
          values: ["no", "yes"],
          default: "no",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("vaccines");
  },
};
