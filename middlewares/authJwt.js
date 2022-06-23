const jwt = require("jsonwebtoken");
const db = require("../models");
const { User, Role } = db;

verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  const accessToken = token.split(" ")[1];

  jwt.verify(accessToken, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.userId;
   req.userPhone = decoded.phone;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!",
      });
    });
  });
};
isEmployeeOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }

        if (roles[i].name === "register") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require admin or register Role!",
      });
    });
  });
};



const authJwt = {
  verifyToken: verifyToken,
  
  isAdmin: isAdmin,
  isEmployeeOrAdmin: isEmployeeOrAdmin,
};
module.exports = authJwt;
