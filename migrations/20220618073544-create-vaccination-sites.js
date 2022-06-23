"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "vaccinationSites",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        provinceId: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: "provinces",
            key: "id",
          },
          onDelete: "SET NULL",
        },
        districtId: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: "districts",
            key: "id",
          },
          onDelete: "SET NULL",
        },
        village:{
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        status: {
          allowNull: false,
          type: Sequelize.ENUM,
          values: ["closed", "opened"],
          
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
    await queryInterface.dropTable("vaccinationSites");
  },
};
