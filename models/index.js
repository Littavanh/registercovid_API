"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
require("dotenv").config();
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// -------------------------- Import Tables
db.User = require("./user")(sequelize, Sequelize);
db.Role = require("./role")(sequelize, Sequelize);
db.Province = require("./province")(sequelize, Sequelize);
db.Post = require("./posts")(sequelize, Sequelize);
db.District = require("./district")(sequelize, Sequelize);
db.Profile = require("./profile")(sequelize, Sequelize);
db.Vaccine = require("./vaccine")(sequelize, Sequelize);
db.Vaccinationsites = require("./vaccinationsites")(sequelize, Sequelize);
db.VaccineSiteStorage = require("./vaccinesitestorage")(sequelize, Sequelize);
db.Reserve = require("./reserve")(sequelize, Sequelize);
// -------------------------- Import Tables

// -------------------------- Relationships
db.User.hasOne(db.Profile, {
  foreignKey: "userId",
 
});
db.User.belongsToMany(db.Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
db.Role.belongsToMany(db.User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.Province.hasMany(db.District, { foreignKey: "provinceId", as: "districts" });
db.District.belongsTo(db.Province, {
  foreignKey: "provinceId",
  as: "province",
});
db.Province.hasMany(db.Profile, {
  foreignKey: "provinceId"
});
db.Profile.belongsTo(db.Province, {
  foreignKey: "provinceId"
});

db.District.hasMany(db.Profile, {
  foreignKey: "districtId"
});
db.Profile.belongsTo(db.District, {
  foreignKey: "districtId"
});
db.Vaccinationsites.belongsTo(db.Province, {
  foreignKey: "provinceId",
  as: "province",
});

db.Vaccine.hasMany(db.VaccineSiteStorage, {
  foreignKey: "vaccineId",
  
});
db.VaccineSiteStorage.belongsTo(db.Vaccine, {
  foreignKey: "vaccineId",
});

db.Vaccinationsites.hasMany(db.VaccineSiteStorage, {
  foreignKey: "vaccinationSiteId",
});
db.VaccineSiteStorage.belongsTo(db.Vaccinationsites, {
  foreignKey: "vaccinationSiteId",
});


db.Vaccine.hasMany(db.Reserve, {
  foreignKey: "vaccineId",
});
db.Reserve.belongsTo(db.Vaccine, {
  foreignKey: "vaccineId",
});

db.Vaccinationsites.hasMany(db.Reserve, {
  foreignKey: "vaccinationSiteId",
});
db.Reserve.belongsTo(db.Vaccinationsites, {
  foreignKey: "vaccinationSiteId",
});
db.Profile.hasMany(db.Reserve, {
  foreignKey: "userId",
});
db.Reserve.belongsTo(db.Profile, {
  foreignKey: "userId",
});

db.User.hasMany(db.Reserve, {
  foreignKey: "userId",
});
db.Reserve.belongsTo(db.User, {
  foreignKey: "userId",
});

module.exports = db;
