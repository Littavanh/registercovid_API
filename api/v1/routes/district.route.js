const express = require("express");
const router = express.Router();
const controller = require("../controllers/district.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllDistrict
); //
router.get(
  "/:provinceId",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllDistrictByProvinceId
); // get all provinces
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.createNewDistrict
); // create new province
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.updateDistrictById
); // update province data
router.post(
  "/delete",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteDistrictById
); // delete province

module.exports = router;
