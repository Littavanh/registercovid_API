"use strict";

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "vaccineSiteStorages",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        vaacineId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          collate: "utf8_bin",
          references: {
            model: "vaccines",
            key: "id",
          },
          onDelete: "CASCADE",
        },
      
        vaccinationSiteId:{
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "vaccinationSites",
            key: "id",
        },
        onDelete: "CASCADE",
      },
        level:{
          allowNull:false,
          type: Sequelize.INTEGER,
        },
        amount: {
          allowNull: false,
          type: Sequelize.INTEGER,
         
          
        },
        status: {
          allowNull: false,
          type: Sequelize.ENUM,
          values: ["Available", "Unavailable"],
          
        }
       
      
    },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("districts");
  },
};
