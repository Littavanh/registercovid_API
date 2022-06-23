"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init(
    {
      userId: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      birthDate:DataTypes.DATE,
      provinceId: DataTypes.INTEGER,
      districtId: DataTypes.INTEGER,
      village: DataTypes.STRING,
      relation: DataTypes.STRING,
      job: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "profiles",
    }
  );

  return Profile;
};
