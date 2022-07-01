const db = require("../../../models");
const {VaccineSiteStorage ,Vaccine,Vaccinationsites} = db;

module.exports = {
 
  getAllVaccineSiteStorage: async (req, res, next) => {
    

    try {
      let vacsites = await VaccineSiteStorage.findAll({
       
        include: [
          { model: Vaccine,
          foreignKey: "vaccineId",
          as: "vaccine",
          attributes: ["id", "name"],},
          {
            model: Vaccinationsites,
            foreignKey: "vaccinationSiteId",
            as: "vaccinationsites",
            attributes: ["id", "name"],
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
  createNewVaccineSiteStorage: async (req, res, next) => {
    const { vaccineId, vaccinationSiteId , level , amount } = req.body;

    const t = await db.sequelize.transaction();

    try {
      let check = await VaccineSiteStorage.findAll(
        {
          where: { vaccineId: vaccineId, vaccinationSiteId:vaccinationSiteId,level:level },
        },
        {transaction: t}
        );
        if (!check) {
          let vac = await VaccineSiteStorage.create(
            {
              vaccineId,
              vaccinationSiteId,
              level,
              amount
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
        }
  
        await VaccineSiteStorage.update(
          {
            amount:Sequelize.literal(`amount + ${element.amount}`)
          },
          { where : {id: VaccineSiteStorage.id} }
        );
  
       
      
    } catch (error) {
      await t.rollback();
      next(error);
    }
  },

  // updateVaccineSiteStorageById: async (req, res, next) => {
  //   const { id, amount } = req.body;

  //   const t = await db.sequelize.transaction();

  //   try {
  //     let vac = await VaccineSiteStorage.findOne(
  //       {
  //         where: { id: id },
  //       },
  //       { transaction: t }
  //     );

  //     if (!vac) {
  //       const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
  //       error.status = 404;
  //       throw error;
  //     }

  //     await VaccineSiteStorage.update(
  //       {
  //         amount
  //       },
  //       { transaction: t }
  //     );

  //     await t.commit();

  //     res.status(200).json({
  //       message: "ການແກ້ໄຂສໍາເລັດ",
  //     });
  //   } catch (error) {
  //     await t.rollback();
  //     next(error);
  //   }
  // },

  // deleteVaccineSiteStorageById: async (req, res, next) => {
  //   const { id } = req.body;

  //   const t = await db.sequelize.transaction();

  //   try {
  //     let vac = await VaccineSiteStorage.findOne(
  //       {
  //         where: { id: id},
  //       },
  //       { transaction: t }
  //     );

  //     if (!vac || VaccineSiteStorage.isDelete === "yes") {
  //       const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
  //       error.status = 404;
  //       throw error;
  //     }

  //     await VaccineSiteStorage.update(
  //       {
  //         isDelete: "yes",
  //       },
  //       { transaction: t }
  //     );

  //     await t.commit();

  //     res.status(200).json({ message: "ການລຶບສໍາເລັດ" });
  //   } catch (error) {
  //     await t.rollback();
  //     next(error);
  //   }
  // },
};
