const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const db = require("../../../models");
const Op = db.Sequelize.Op;
const { User, Role, Profile, Province, District } = db;
const moment = require("moment");

module.exports = {
  createNewUser: async (req, res, next) => {
    const {
      phone,
      password,
      firstname,
      lastname,
      gender,
      birthDate,
      provinceId,
      districtId,
      village,
      relation,
      job,
    } = req.body;

    const t = await db.sequelize.transaction();

    try {
     

      let hashPassword = bcrypt.hashSync(password, 10);

      const user = await User.create(
        {
          id: uuidv4(),
          phone,
          password: hashPassword,
        },
        { transaction: t }
      );

      const isRoles = await Role.findAll({
        where: { name: "register" },
      });

      await user.setRoles(isRoles, { transaction: t });

      await Profile.create(
        {
          userId: user.id,
          firstname,
          lastname,
          gender,
          phone,
          birthDate,
          provinceId,
          districtId,
          village,
          relation,
          job,
        },
        { transaction: t }
      );

      await t.commit();

      res.status(201).json({
        message: "ການເພີ່ມສໍາເລັດ",
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  readUserById: async (req, res, next) => {
    const userId = req.userId;

    try {
      let user = await User.findOne({
        where: { isDelete: "no", id: userId },
        attributes: { exclude: ["password"] },
        include: [
          {
            model: Profile,
            foreignKey: "userId",
            as: "Profile",
            include: [
              { model: Province, foreignKey: "provinceId" },
              { model: District, foreignKey: "districtId" },
            ],
          },
          { model: Role, as: "Roles", attributes: ["id", "name"] },
        ],
      });

      if (!user) {
        const error = new Error("ໄອດີບໍ່ຖືກ");
        error.status = 404;
        throw error;
      }

      var authorities = [];
      // var authorityIds = [];
      user.Roles.forEach((role) => {
        // authorityIds.push(role.id);
        authorities.push({
          id: role.id,
          name: role.name,
          displayName: role.displayName,
        });
      });

      userModify = {
        id: user.id,
        phone: user.phone,
        isDelete: user.isDelete,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        Profile: {
          id: user.Profile.id,
          firstname: user.Profile.firstname,
          lastname: user.Profile.lastname,
          gender: user.Profile.gender,
          birthDate: user.Profile.birthDate,
         phone: user.Profile.phone,
          provinceId: user.Profile.provinceId,
          Province: user.Profile.Province,
          districtId: user.Profile.districtId,
          District: user.Profile.District,
          village: user.Profile.village,
          relation: user.Profile.relation,
          job:user.Profile.job,
          createdAt: user.Profile.createdAt,
          updatedAt: user.Profile.updatedAt,
        },
        roles: authorities,
        // roleIds: authorityIds,
      };

      res.status(200).json({
        user: userModify,
      });
    } catch (error) {
      next(error);
    }
  },

  changePassword: async (req, res, next) => {
    const { phone, password } = req.body;
    const userId = req.userId;

    const t = await db.sequelize.transaction();

    try {
      const user = await User.findOne(
        {
          where: userId != null ? { id: userId, phone } : { phone },
        },
        { transaction: t }
      );

      if (!user) {
        const error = new Error("ຂໍ້ມູນທີ່ໃສ່ມາບໍ່ຖືກຕ້ອງ");
        error.status = 404;
        throw error;
      }

      let hashPassword = bcrypt.hashSync(password, 10);
      await user.update(
        {
          password: hashPassword,
        },
        { transaction: t }
      );

      await t.commit();

      res.status(200).json({ message: "ປ່ຽນລະຫັດຜ່ານສໍາເລັດ" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  update: async (req, res, next) => {
    const {
      
      phone,
      roles,
      firstname,
      lastname,
      gender,
      birthDate,
      provinceId,
      districtId,
      village,
      relation,
      job,
    } = req.body;

    const userId = req.body.userId != null ? req.body.userId : req.userId;

    const t = await db.sequelize.transaction();

    try {
      const user = await User.findOne(
        {
          where: { id: userId, phone: phone },
        },
        { transaction: t }
      );

      if (!user) {
        const error = new Error("ຂໍ້ມູນທີ່ໃສ່ມາບໍ່ຖືກຕ້ອງ");
        error.status = 404;
        throw error;
      }

      const isRoles = await Role.findAll({
        where: { id: { [Op.in]: roles } },
      });

      await user.setRoles([], { transaction: t });

      await user.setRoles(isRoles, { transaction: t });

      const profile = await Profile.findOne(
        {
          where: { userId: user.id },
        },
        { transaction: t }
      );

      await profile.update(
        {
          firstname,
          lastname,
          gender,
          birthDate,
          phone,
          provinceId,
          districtId,
          village,
          relation,
          job,
        },
        { transaction: t }
      );

      await t.commit();

      res.status(200).json({ message: "ແກ້ໄຂຂໍ້ມູນສໍາເລັດ" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },
};
