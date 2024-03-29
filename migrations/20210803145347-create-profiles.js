"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "profiles",
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
        firstname: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        lastname: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        gender: {
          type: Sequelize.ENUM,
          values: ["m", "f"],
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        birthDate:{
          allowNull: false,
          type: Sequelize.DATEONLY,
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
        village: {
          type: Sequelize.STRING(100),
          allowNull: false,
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
        relation: {
          allowNull: false,
          type: Sequelize.ENUM,
          values: ["ໂສດ", "ແຕ່ງງານ","ອື່ນໆ"],
          
        }, job: {
          allowNull: false,
          type: Sequelize.STRING(100),

          
        },
        isDelete: {
          allowNull: false,
          type: Sequelize.ENUM,
          values: ["no", "yes"],
          default: "no",
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("profiles");
  },
};
