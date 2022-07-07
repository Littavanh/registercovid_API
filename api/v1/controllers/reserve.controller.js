
const db = require("../../../models");
const { Reserve ,Vaccine,Vaccinationsites, User,Profile } = db;

module.exports = {
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
};
