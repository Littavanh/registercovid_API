const express = require("express");
const router = express.Router();
const controller = require("../controllers/province.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/",
  // [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllProvinces
); // get all provinces
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.createNewProvince
); // create new province
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.updateProvinceById
); // update province data
router.post(
  "/delete",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteProvinceById
); // delete province

module.exports = router;
