"use strict";
const { Model } = require("sequelize");
const vaccinationtes = require("../api/v1/controllers/vaccinationsite");
module.exports = (sequelize, DataTypes) => {
  class Vaccsite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vaccsite.init(
    {
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      districtId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
    village: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    vaccsitestatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      isDelete: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Vaccinationsite",
      tableName: "vaccinationtes",
    }
  );

  return Vaccsite;
};
