const { District } = require("../../../models");
const db = require("../../../models");
const { Vaccsite, Province } = db;

module.exports = {
  getAllVaccsiteByProvinceId: async (req, res, next) => {
    const provinceId = req.params.provinceId;
    const districtId = req.params.districtId;

    try {
      let vaccinationtes = await Vaccsite.findAll({
        where: {
          provinceId: provinceId,
          isDelete: "no",
        },
          where: {
            districtId: districtId,
            isDelete: "no",
          
        },
        include: {
          model: Province,
          foreignKey: "provinceId",
          as: "province",
          attributes: ["id", "name", "section"],
        },
        order: [["id", "ASC"]],
        include: {
            model: District,
            foreignKey: "districtId",
            ad: "district",
            attributes: ["id", "name", ],
        },
      });

      if (!vaccinationtes || vaccinationtes.length === 0) {
        const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
        error.status = 403;
        throw error;
      }

      res.status(200).json({
        vaccinationtes,
      });
    } catch (error) {
      next(error);
    }
  },

  createNewVaccsitet: async (req, res, next) => {
    const { provinceId, name } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let vaccsite = await Vaccsite.create(
        {
          provinceId,
          name,
        },
        
        { transaction: t }
        
      );

      if (!vaccsite) {
        const error = new Error("ໃສ່ຂໍ້ມູນບໍ່ຄົບ");
        error.status = 403;
        throw error;
      }

      await t.commit();

      res.status(201).json({
        message: "ການເພີ່ມສໍາເລັດ",
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  updateVaccsiteById: async (req, res, next) => {
    const { vaccsiteId, provinceId, name } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let district = await District.findOne(
        {
          where: { id: vaccsiteId, provinceId },
        },
        { transaction: t }
      );

      if (!vaccsite) {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await vaccsite.update(
        {
          provinceId,
          name,
        },
        { transaction: t }
      );

      await t.commit();

      res.status(200).json({
        message: "ການແກ້ໄຂສໍາເລັດ",
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  deleteVaccsiteById: async (req, res, next) => {
    const { vaccsiteId, provinceId } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let vaccsite = await Vaccsite.findOne(
        {
          where: { id: vaccsiteId, provinceId },
        },
        { transaction: t }
      );

      if (!vaccsite || vaccsite.isDelete === "yes") {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await vaccsite.update(
        {
          isDelete: "yes",
        },
        { transaction: t }
      );

      await t.commit();

      res.status(200).json({ message: "ການລຶບສໍາເລັດ" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },
};
