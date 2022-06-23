const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
const { authJwt, verifySignUp } = require("../../../middlewares");

router.get("/", authJwt.verifyToken, controller.readUserById);
router.post("/", verifySignUp.checkDuplicatePhone, controller.createNewUser);
router.post("/change-password", controller.changePassword);
router.put("/", authJwt.verifyToken, controller.update);

module.exports = router;
