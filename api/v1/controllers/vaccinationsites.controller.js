const db = require("../../../models");
const {Vaccinationsites ,Province} = db;

module.exports = {
  getAllVaccinationsitesByProvinceId: async (req, res, next) => {
    const provinceId = req.params.provinceId;

    try {
      let vacsites = await Vaccinationsites.findAll({
        where: {
          provinceId: provinceId,
          isDelete: "no",
        },
        include: {
          model: Province,
          foreignKey: "provinceId",
          as: "province",
          attributes: ["id", "name", "section"],
        },
        order: [["id", "ASC"]],
      });

      if (!vacsites || vacsites.length === 0) {
        const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
        error.status = 403;
        throw error;
      }

      res.status(200).json({
        vacsites,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllVaccinationsites: async (req, res, next) => {
    

    try {
      let vacsites = await Vaccinationsites.findAll({
        where: {
          
          isDelete: "no",
        },
        include: {
          model: Province,
          foreignKey: "provinceId",
          as: "province",
          attributes: ["id", "name", "section"],
        },
        
        order: [["id", "ASC"]],
      });

      if (!vacsites || vacsites.length === 0) {
        const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
        error.status = 403;
        throw error;
      }

      res.status(200).json({
        vacsites,
      });
    } catch (error) {
      next(error);
    }
  },
  createNewVaccinationsites: async (req, res, next) => {
    const { provinceId, name } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let Vaccinationsites = await Vaccinationsites.create(
        {
          provinceId,
          name,
        },
        { transaction: t }
      );

      if (!Vaccinationsites) {
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

  updateVaccinationsitesById: async (req, res, next) => {
    const { VaccinationsitesId, provinceId, name } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let Vaccinationsites = await Vaccinationsites.findOne(
        {
          where: { id: VaccinationsitesId, provinceId },
        },
        { transaction: t }
      );

      if (!Vaccinationsites) {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await Vaccinationsites.update(
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

  deleteVaccinationsitesById: async (req, res, next) => {
    const { VaccinationsitesId, provinceId } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let Vaccinationsites = await Vaccinationsites.findOne(
        {
          where: { id: VaccinationsitesId, provinceId },
        },
        { transaction: t }
      );

      if (!Vaccinationsites || Vaccinationsites.isDelete === "yes") {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await Vaccinationsites.update(
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
