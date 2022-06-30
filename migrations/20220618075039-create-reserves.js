"use strict";

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "reserves",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.UUID,
          collate: "utf8_bin",
          references: {
            model: "users",
            key: "id",
          },
          onDelete: "CASCADE",
        },
        vaccineId: {
          allowNull: false,
          type: Sequelize.INTEGER,
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
        date:{
          allowNull: false,
        type: Sequelize.DATEONLY,
        
        },
        level:{
          allowNull:false,
          type: Sequelize.INTEGER,
        },
        status: {
          allowNull: false,
          type: Sequelize.ENUM,
          values: ["Pending", "Cancel","Complete"],
          
        },
        isDelete: {
          allowNull: false,
          type: Sequelize.ENUM,
          values: ["no", "yes"],
          default: "no",
        }
       
      
    },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("reserves");
  },
};
