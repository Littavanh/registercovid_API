const express = require("express");
const router = express.Router();
const controller = require("../controllers/reserve.controller");
const { authJwt } = require("../../../middlewares");

router.get("/", authJwt.verifyToken, controller.getAllReserve);
router.get("/getUserReserve", authJwt.verifyToken, controller.getAllReserveByUserLogin);
router.get("/user", authJwt.verifyToken, controller.getReserveNotifications);
router.get("/userpending", authJwt.verifyToken, controller.getReservePendingByUser);
router.get("/usercomplete", authJwt.verifyToken, controller.getReserveCompleteByUser);
router.post("/", authJwt.verifyToken, controller.createNewReserve);
router.put("/cancel/:reserveId", [authJwt.verifyToken], controller.cancelReserve);
router.put("/", [authJwt.verifyToken], controller.CompleteReserve);
// router.post("/", verifySignUp.checkDuplicatePhone, controller.createNewUser);
// router.post("/change-password", controller.changePassword);
// router.put("/", authJwt.verifyToken, controller.update);

module.exports = router;
