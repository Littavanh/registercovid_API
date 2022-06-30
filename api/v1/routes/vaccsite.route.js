const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccsite.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/:provinceId",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllVaccsitetByProvinceId
); // get all provinces
router.get(
    "/:districtId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getAllVaccsitetByDistrictId
  ); // get all provinces
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.createNewVaccsite
); // create new province
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.updateVaccsiteById
); // update province data
router.post(
  "/delete",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteVaccsiteById
); // delete province

module.exports = router;