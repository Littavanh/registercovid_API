const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
const { authJwt, verifySignUp } = require("../../../../middlewares");

router.post("/create-admin", controller.createAdmin); // create super admin
router.get(
  "/roles",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getAllRoles
);
router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.readAllUsers
);
router.get(
  "/:userId",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.readUserById
);
router.post(
  "/change-password",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.changePassword
);
router.post(
  "/",
  [
    // authJwt.verifyToken,
    // authJwt.isAdmin,
    verifySignUp.checkDuplicatePhone,
    verifySignUp.checkRolesExisted,
  ],
  controller.createNewUser
); // create user

router.put(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted],
  controller.update
);

router.post(
  "/delete",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.delete
);

module.exports = router;
