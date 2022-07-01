"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class VaccineSiteStorage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VaccineSiteStorage.init(
    {
      vaccineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vaccinationSiteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
    {
      sequelize,
      modelName: "VaccineSiteStorage",
      tableName: "vaccineSiteStorages",
    }
  );

  return VaccineSiteStorage;
};
