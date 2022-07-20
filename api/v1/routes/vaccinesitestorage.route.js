const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccinesitestorage.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.getAllVaccineSiteStorage
); 
router.get(
  "/:level",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.getVacsiteByLevel
); //
router.get(
  "/provinceId/:provinceId",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.getVacsiteByProvinceId
); //
router.get(
  "/CheckVacsiteOpen",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.getCheckVacsiteOpen
);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.createNewVaccineSiteStorage
); // create new province
// router.put(
//   "/",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   controller.updateVaccineSiteStorageById
// ); // update province data
// router.post(
//   "/delete",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   controller.deleteVaccineSiteStorageById
// ); // delete province

module.exports = router;
