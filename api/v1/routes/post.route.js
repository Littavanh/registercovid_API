const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");
const { authJwt } = require("../../../middlewares");

router.get("/", controller.getAllPost);
router.get("/:postId", controller.getPostById);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.createPost
);
router.put(
  "/",
  [authJwt.verifyToken, authJwt.isEmployeeOrAdmin],
  controller.updatePost
);
router.post(
  "/delete/:postId",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deletePost
);

module.exports = router;
