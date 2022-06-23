const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccine.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/",
  // [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllVaccines
); // get all provinces
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.createNewVaccine
); // create new province
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.updateVaccineById
); // update province data
router.post(
  "/delete",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteVaccineById
); // delete province

module.exports = router;
