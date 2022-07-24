const db = require("../../../models");
const {Vaccinationsites ,Province, VaccineSiteStorage} = db;

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

  getAvailableVacSite: async (req, res, next) => {
    const provinceId = req.params.provinceId;

    try {
      let vacsites = await Vaccinationsites.findAll({
        where: {
          provinceId: provinceId,
          isDelete: "no",
        },
        include: [ 
          {
            model: Province,
            foreignKey: "provinceId",
            as: "province",
            attributes: ["id", "name", "section"],
          },
          {
            model: VaccineSiteStorage,
            as: "VaccineSiteStorages",
            where: {
              status: "Available"
            },
            required: true
          }
        ],
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
      let vac = await Vaccinationsites.create(
        {
          provinceId,
          name,
        },
        { transaction: t }
      );

      if (!vac) {
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
    const { id, provinceId, name } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let vac = await Vaccinationsites.findOne(
        {
          where: { id: id, provinceId },
        },
        { transaction: t }
      );

      if (!vac) {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await vac.update(
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
    const { id, provinceId } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let vac = await Vaccinationsites.findOne(
        {
          where: { id: id, provinceId },
        },
        { transaction: t }
      );

      if (!vac || vac.isDelete === "yes") {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await vac.update(
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
