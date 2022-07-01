const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccinesitestorage.controller");
const { authJwt } = require("../../../middlewares");

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllVaccineSiteStorage
); //

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
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
