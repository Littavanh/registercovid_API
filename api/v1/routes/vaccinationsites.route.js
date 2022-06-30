const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccinationsites.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllVaccinationsites
); //
router.get(
  "/:provinceId",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllVaccinationsitesByProvinceId
); // get all provinces
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.createNewVaccinationsites
); // create new province
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.updateVaccinationsitesById
); // update province data
router.post(
  "/delete",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteVaccinationsitesById
); // delete province

module.exports = router;
