const db = require("../models");
const Op = db.Sequelize.Op;
const User = db.User;
const Role = db.Role;

checkDuplicatePhone = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      phone: req.body.phone,
    },
  });

  if (user) {
    res.status(400).send({
      message: "ເບີຊໍ້າ",
    });
    return;
  }

  next();
};

checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    const roles = await Role.findAll({
      where: { id: { [Op.in]: req.body.roles } },
    });

    // console.log("Role Count: ----------------- " + roles.length);

    if (roles.length === 0) {
      res.status(400).send({
        message: "ສິດນີ້ບໍ່ມີໃນລະບົບ",
      });
      return;
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicatePhone: checkDuplicatePhone,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
