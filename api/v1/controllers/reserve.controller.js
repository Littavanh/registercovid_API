
const db = require("../../../models");
const { Province,District,Reserve ,Vaccine,Vaccinationsites, User,Profile,VaccineSiteStorage } = db;
const sequelize = db.Sequelize;
const Op = db.Sequelize.Op;

module.exports = {
  getReserveCompleteByUser: async (req, res, next) => {
    try {
      let reserve = await Reserve.findAll({
        where: {
          userId: req.userId,
          status: "Complete",
         
       
        },
        include: [
          {
            model: Vaccine,
            as: "Vaccine",
            attributes: ["id", "name"],
          },
          {
            model: Vaccinationsites,
            foreignKey: "vaccinationSiteId",
            as: "Vaccinationsite",
            attributes: ["id", "name"],
          },
          
        ],
      });

      if (reserve) res.status(200).json({ reserve });
      else res.status(404).json({ message: "ບໍ່ພົບຂໍ້ມູນ" });
    } catch (error) {
      next(error);
    }
  },
  getReservePendingByUser: async (req, res, next) => {
    try {
      let reserve = await Reserve.findAll({
        where: {
          userId: req.userId,
          status: "Pending",
         
       
        },
        include: [
          {
            model: Vaccine,
            as: "Vaccine",
            attributes: ["id", "name"],
          },
          {
            model: Vaccinationsites,
            foreignKey: "vaccinationSiteId",
            as: "Vaccinationsite",
            attributes: ["id", "name"],
          },
          
        ],
      });

      if (reserve) res.status(200).json({ reserve });
      else res.status(404).json({ message: "ບໍ່ພົບຂໍ້ມູນ" });
    } catch (error) {
      next(error);
    }
  },
  getReserveNotifications: async (req, res, next) => {
    try {
      let reserve = await Reserve.findOne({
        where: {
          userId: req.userId,
          status: "Pending",
          [Op.and]: [
            sequelize.where(
              sequelize.fn("date", sequelize.col("date")),
              "=",
              sequelize.fn("CURDATE")
            ),
          ],
        },
        include: [
          {
            model: Vaccine,
            as: "Vaccine",
            attributes: ["id", "name"],
          },
          {
            model: Vaccinationsites,
            foreignKey: "vaccinationSiteId",
            as: "Vaccinationsite",
            attributes: ["id", "name"],
          },
          
        ],
      });

      if (reserve) res.status(200).json({ reserve });
      else res.status(404).json({ message: "ບໍ່ພົບຂໍ້ມູນ" });
    } catch (error) {
      next(error);
    }
  },

  getAllReserveByUserLogin: async (req, res, next) => {
    try {
      const userId = req.userId;
      const { status } = req.query;

      let isStatus = status ? status : "";

      let reserve = await Reserve.findAll({
        order: [["createdAt", "DESC"]],
        where: {
          status: {
            [Op.substring]: isStatus,
          },
          userId: userId,
        },
        include: [
          
          {
            model: User,
            as: "User",
            attributes: ["id", "phone"],
            include: {
              model: Profile,
              as: "Profile",
              attributes: [
                "id",
                "firstname",
                "lastname",
                "gender",
                "village",
              ],
              include: [
                {
                  model: Province,
                  as: "Province",
                  attributes: ["id", "name"],
                },
                {
                  model: District,
                  as: "District",
                  attributes: ["id", "name"],
                },
              ],
            },
          },
          {
            model: Vaccine,
            as: "Vaccine",
            attributes: ["id", "name"],
          },
         
        ],
      });

      if (reserve != null)
        res.status(200).json({
          reserve,
        });
      else res.status(404).json({ message: "ບໍ່ພົບຂໍ້ມູນ" });
    } catch (error) {
      next(error);
    }
  },
    getAllReserve: async (req, res, next) => {
    

        try {
          let reserve = await Reserve.findAll({
            where: {
              
              isDelete: "no",
            },
            include: [
                {
                    model: User,
                    foreignKey: "userId",
                    as: "User",
                    attributes: ["id"],
                    include: {
                      model: Profile,
                      as: "Profile",
                      attributes: [
                        "id",
                        "firstname",
                        "lastname",
                        "phone",

                      ],}
                  },
                //   {
                //     model: Profile,
                //     foreignKey: "userId",
                //     as: "Profile",
                //     attributes: ["firstname", "lastname"],
                //   },
                {
                  model: Vaccine,
                  foreignKey: "vaccineId",
                  as: "Vaccine",
                  attributes: ["id", "name"],
                },
                {
                  model: Vaccinationsites,
                  foreignKey: "vaccinationSiteId",
                  as: "Vaccinationsite",
                  attributes: ["id", "name"],
                },
              ],
              order: [["id", "ASC"]],
           
          });
    
          if (!reserve || reserve.length === 0) {
            const error = new Error("ຍັງບໍ່ມີຂໍ້ມູນ");
            error.status = 403;
            throw error;
          }
    
          res.status(200).json({
            reserve,
          });
        } catch (error) {
          next(error);
        }
      },
      createNewReserve: async (req, res, next) => {
       
    
        const t = await db.sequelize.transaction();
    
        try {
          const { userId, vaccineId,vaccinationSiteId,date,level } = req.body;

            let vacAmount =1;
            let check = await VaccineSiteStorage.findOne(
              {
                where:{
                  vaccineId:vaccineId,
                  vaccinationSiteId:vaccinationSiteId,
                  level:level,
                }
              },
            {transaction: t,}
            );
            let checkAmount = await VaccineSiteStorage.findOne(
              {
                where:{
                  vaccineId:vaccineId,
                  vaccinationSiteId:vaccinationSiteId,
                  level:level,
                  amount: 0,
                }
              },
            {transaction: t,}
            );
            if(check){

              if(!checkAmount){
                let reserve = await Reserve.create(
                  {
                    userId,
                    vaccineId,
                    vaccinationSiteId,
                    date,
                    level,
                  },
                  { transaction: t }
                );
          
                if (!reserve) {
                  const error = new Error("ໃສ່ຂໍ້ມູນບໍ່ຄົບ");
                  error.status = 403;
                  throw error;
                }

                await check.update(
                  {
                      
                    amount: sequelize.literal(`amount - ${vacAmount}`),
                  },
                  { transaction: t }
                );
            
              await t.commit();
          
              res.status(201).json({
                message: "ການຈອງສໍາເລັດ",
              });
            }else{
              const error = new Error("ຈຳນວນວັກຊີນເຫຼືອ 0");
                error.status = 403;
                throw error;
                }
              }
              else{
                const error = new Error("ບໍ່ພົບວັກຊີນໃນສະຕ໋ອກ");
                  error.status = 402;
                  throw error;
              }
             

              
              



            





         
      
   
    
          
          
      
        } catch (error) {
          await t.rollback();
          next(error);
        }
      },
      cancelReserve: async (req, res, next) => {
        const t = await db.sequelize.transaction();
    
        try {
          const { id,vaccineId,vaccinationSiteId,level } = req.body;
         
        let vacAmount =1;
        let check = await VaccineSiteStorage.findOne(
          {
            where:{
              vaccineId:vaccineId,
              vaccinationSiteId:vaccinationSiteId,
              level:level,
            }
          },
        {transaction: t,}
        );
        if(check){
          let reserve = await Reserve.findOne(
            {
              where: {
                id: id,
                vaccineId:vaccineId,
                vaccinationSiteId:vaccinationSiteId,
                level:level,
                status: "Pending",
              },
            },
            {
              transaction: t,
            }
          );
       
         
    
          if (!reserve || reserve.length === 0) {
            const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
            error.status = 400;
            throw error;
          }
    
    
          await reserve.update(
            {
              status: "Cancel",
            },
            {
              transaction: t,
            }
          );
    
        }
          await check.update(
            {
              amount: sequelize.literal(`amount + ${vacAmount}`),
            },
            { transaction: t }
          );


          await t.commit();
    
          res.status(200).json({
            message: "ຍົກເລີກການຈອງສຳເລັດ",
          });
        } catch (error) {
          await t.rollback();
          next(error);
        }
      },

      CompleteReserve: async (req, res, next) => {
        const t = await db.sequelize.transaction();
    
        try {
         
          const { id } = req.body;

       
          let reserve = await Reserve.findOne(
            {
              where: {
                id: id,
               
                status: "Pending"
              },
            },
            {
              transaction: t,
            }
          );
    
          if (!reserve || reserve.length === 0) {
            const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
            error.status = 400;
            throw error;
          }
    
    
          await reserve.update(
            {
              status: "Complete",
            },
           
            {
              transaction: t,
            }
          );
    

         


          await t.commit();
    
          res.status(200).json({
            message: "ສັກວັກຊີນສຳເລັດ",
          });
        } catch (error) {
          await t.rollback();
          next(error);
        }
      },
    
};
