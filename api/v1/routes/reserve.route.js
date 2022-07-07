const express = require("express");
const router = express.Router();
const controller = require("../controllers/reserve.controller");
const { authJwt } = require("../../../middlewares");

router.get("/", authJwt.verifyToken, controller.getAllReserve);
// router.post("/", verifySignUp.checkDuplicatePhone, controller.createNewUser);
// router.post("/change-password", controller.changePassword);
// router.put("/", authJwt.verifyToken, controller.update);

module.exports = router;
