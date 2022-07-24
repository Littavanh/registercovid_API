const db = require("../../../models");
const { Vaccine, VaccineSiteStorage } = db;

module.exports = {
  getAllVaccines: async (req, res, next) => {
    try {
      let vaccines = await Vaccine.findAll({
        where: { isDelete: "no" }
        
      });

      if (!vaccines || vaccines.length === 0) {
        const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
        error.status = 403;
        throw error;
      }

      res.status(200).json({
        vaccines,
      });
    } catch (error) {
      next(error);
    }
  },

  getVacFromVacSite: async (req, res, next) => {

    const vaccinationSiteId = req.params.vacSiteId;
    try {
      let vaccines = await Vaccine.findAll({
        where: { isDelete: "no" },
        include: {
          model: VaccineSiteStorage,
          where: {
            vaccinationSiteId,
            status: "Available"
          },
          required: true
        }
      });

      if (!vaccines || vaccines.length === 0) {
        const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
        error.status = 403;
        throw error;
      }

      res.status(200).json({
        vaccines,
      });
    } catch (error) {
      next(error);
    }
  },

  createNewVaccine: async (req, res, next) => {
    const { name, vaccinetype } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let vaccine = await Vaccine.create(
        {
          name,
          vaccinetype,
        },
        { transaction: t }
      );

      if (!vaccine) {
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

  updateVaccineById: async (req, res, next) => {
    const { id, name, vaccinetype } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let vaccine = await Vaccine.findOne(
        {
          where: { id: id },
        },
        { transaction: t }
      );

      if (!vaccine) {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await vaccine.update(
        {
          name,
          vaccinetype,
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

  deleteVaccineById: async (req, res, next) => {
    const { id } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let vaccine = await Vaccine.findOne(
        {
          where: { id: id },
        },
        { transaction: t }
      );

      if (!vaccine || vaccine.isDelete === "yes") {
        const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
        error.status = 404;
        throw error;
      }

      await vaccine.update(
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
