const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const db = require("../../../../models");
const Op = db.Sequelize.Op;
const { User, Role, Profile, Province, District } = db;
const moment = require("moment");

module.exports = {
  getAllRoles: async (req, res, next) => {
    const roles = await Role.findAll();

    try {
      res.status(200).json({
        roles,
      });
    } catch (error) {
      next(error);
    }
  },

  createNewUser: async (req, res, next) => {
    const {
      phone,
      password,
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
        where: { id: { [Op.in]: roles } },
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

  readEmployeeUsers: async (req, res, next) => {
    try {
      let users = await User.findAll({
        where: { isDelete: "no" },
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
          { 
            model: Role, 
            as: "Roles", 
            where: {
              name: "register"
            },
            attributes: ["id", "name"] 
          },
        ],
      });

      // if (!users) {
      //   const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
      //   error.status = 403;
      //   throw error;
      // }

      // console.log(users.length);

      userList = [];

      users.forEach((item) => {
        var authorities = [];
        // var authorityIds = [];
        item.Roles.forEach((role) => {
          authorities.push({
            id: role.id,
            name: role.name,
            displayName: role.displayName,
          });
          // authorityIds.push(role.id);
        });
        userList.push({
          id: item.id,
          phone: item.phone,
          isDelete: item.isDelete,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          Profile: {
            id: item.Profile.id,
            firstname: item.Profile.firstname,
            lastname: item.Profile.lastname,
            gender: item.Profile.gender,
            birthDate: item.Profile.birthDate,
           phone: item.Profile.phone,
            provinceId: item.Profile.provinceId,
            Province: item.Profile.Province,
            districtId: item.Profile.districtId,
            District: item.Profile.District,
            village: item.Profile.village,
            relation: iem.Profile.relation,
            job:item.Profile.job,
            createdAt: item.Profile.createdAt,
            updatedAt: item.Profile.updatedAt,
          },
          roles: authorities,
          // roleIds: authorityIds,
        });
      });

      res.status(200).json({
        users: userList,
      });
    } catch (error) {
      next(error);
    }
  },

  readCustomerUsers: async (req, res, next) => {
    try {
      let users = await User.findAll({
        where: { isDelete: "no" },
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
          { 
            model: Role, 
            as: "Roles", 
            where: {
              name: "register"
            },
            attributes: ["id", "name"] 
          },
        ],
      });

      // if (!users) {
      //   const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
      //   error.status = 403;
      //   throw error;
      // }

      // console.log(users.length);

      userList = [];

      users.forEach((item) => {
        var authorities = [];
        // var authorityIds = [];
        item.Roles.forEach((role) => {
          authorities.push({
            id: role.id,
            name: role.name,
            displayName: role.displayName,
          });
          // authorityIds.push(role.id);
        });
        userList.push({
          id: item.id,
          phone: item.phone,
          isDelete: item.isDelete,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          Profile: {
            id: item.Profile.id,
            firstname: item.Profile.firstname,
            lastname: item.Profile.lastname,
            gender: item.Profile.gender,
            birthDate: item.Profile.birthDate,
            provinceId: item.Profile.provinceId,
            Province: item.Profile.Province,
            districtId: item.Profile.districtId,
            District: item.Profile.District,
            village: item.Profile.village,
            relation: iem.Profile.relation,
            job:item.Profile.job,
            createdAt: item.Profile.createdAt,
            updatedAt: item.Profile.updatedAt,
          },
          roles: authorities,
          // roleIds: authorityIds,
        });
      });

      res.status(200).json({
        users: userList,
      });
    } catch (error) {
      next(error);
    }
  },

  readAllUsers: async (req, res, next) => {
    try {
      let users = await User.findAll({
        where: { isDelete: "no" },
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

      // if (!users) {
      //   const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
      //   error.status = 403;
      //   throw error;
      // }

      // console.log(users.length);

      userList = [];

      users.forEach((item) => {
        var authorities = [];
        // var authorityIds = [];
        item.Roles.forEach((role) => {
          authorities.push({
            id: role.id,
            name: role.name,
            displayName: role.displayName,
          });
          // authorityIds.push(role.id);
        });
        userList.push({
          id: item.id,
          phone: item.phone,
          isDelete: item.isDelete,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          Profile: {
            id: item.Profile.id,
            firstname: item.Profile.firstname,
            lastname: item.Profile.lastname,
            gender: item.Profile.gender,
            birthDate: item.Profile.birthDate,
        
            provinceId: item.Profile.provinceId,
            Province: item.Profile.Province,
            districtId: item.Profile.districtId,
            District: item.Profile.District,
            village: item.Profile.village,
            relation: item.Profile.relation,
            job:item.Profile.job,
            createdAt: item.Profile.createdAt,
            updatedAt: item.Profile.updatedAt,
          },
          roles: authorities,
          // roleIds: authorityIds,
        });
      });

      res.status(200).json({
        users: userList,
      });
    } catch (error) {
      next(error);
    }
  },

  readUserById: async (req, res, next) => {
    const userId = req.params.userId;

    try {
      let user = await User.findOne({
        where: { isDelete: "no", id: userId },
        attributes: { exclude: ["password"] },
        include: [
          { 
            model: Profile, 
            foreignKey: "userId", 
            as: "Profile" ,
            include: [
              { model: Province, foreignKey: "provinceId" },
              { model: District, foreignKey: "districtId" },
            ]
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
          
          provinceId: user.Profile.provinceId,
          Province: user.Profile.Province,
          districtId: user.Profile.districtId,
          District: user.Profile.District,
          village: user.Profile.village,
          relation: iem.Profile.relation,
          job:item.Profile.job,
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
    const { userId, phone, password } = req.body;

    const t = await db.sequelize.transaction();

    try {
      const user = await User.findOne(
        {
          where: { id: userId, phone },
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
      userId,
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

      let img = req.file ? req.file.filename : profile.image;

      await profile.update(
        {
          firstname,
          lastname,
          gender,
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

      res.status(200).json({ message: "ແກ້ໄຂຂໍ້ມູນສໍາເລັດ" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  delete: async (req, res, next) => {
    const { userId, phone } = req.body;

    const t = await db.sequelize.transaction();

    try {
      const user = await User.findOne(
        {
          where: { id: userId, phone: phone },
        },
        { transaction: t }
      );

      if (!user || user.isDelete === "yes") {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await user.update(
        {
          isDelete: "yes",
        },
        { transaction: t }
      );

      await t.commit();

      res.status(200).json({ message: "ລຶບສໍາເລັດ" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  createAdmin: async (req, res, next) => {
    const {
      phone,
      password,
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

    let userId = uuidv4();

    const t = await db.sequelize.transaction();

    try {
      

      let hashPassword = bcrypt.hashSync(password, 10);

      const user = await User.create(
        {
          id: userId,
          phone,
          password: hashPassword,
        },
        { transaction: t }
      );

      await user.setRoles(roles, { transaction: t });

      await Profile.create(
        {
          userId: user.id,
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

      res.status(201).json({
        message: "ການເພີ່ມ Admin ສໍາເລັດ",
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },
};
