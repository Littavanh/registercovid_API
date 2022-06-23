require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../../models");
const { User, Role, Profile } = db;

module.exports = {
  signIn: async (req, res, next) => {
    User.findOne({
      where: {
        phone: req.body.phone,
        isDelete: "no",
      },
      include: [
        {
          model: Role,
          as: "Roles",
        },
        { model: Profile, as: "Profile" },
      ],
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }

        var authorities = [];
        user.Roles.forEach((role) => {
          authorities.push(role.name);
        });

        const token = jwt.sign(
          {
            userId: user.id,
            phone: user.phone,
            roles: authorities,
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1d",
          }
        );

        res.status(200).send({
          id: user.id,
          phone: user.phone,
          firstname: user.Profile.firstname,
          lastname: user.Profile.lastname,
         
          roles: authorities,
          accessToken: token,
          // expi: 3600 * 24,
        });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  },
};
