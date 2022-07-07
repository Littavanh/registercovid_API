"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reserve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reserve.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          vaccineId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          vaccinationSiteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          level: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          status: DataTypes.STRING,
            
          
      isDelete: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE

    },
    {
      sequelize,
      modelName: "Reserve",
      tableName: "reserves",
    }
  );

  return Reserve;
};
