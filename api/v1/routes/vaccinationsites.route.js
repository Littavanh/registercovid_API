const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccinationsites.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.getAllVaccinationsites
); //
router.get(
  "/:provinceId",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.getAllVaccinationsitesByProvinceId
); // get all provinces
router.get(
  "/available/:provinceId",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.getAvailableVacSite
); // get all provinces
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.createNewVaccinationsites
); // create new province
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.updateVaccinationsitesById
); // update province data
router.post(
  "/delete",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.deleteVaccinationsitesById
); // delete province

module.exports = router;
