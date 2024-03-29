const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require("multer");
require("dotenv").config();

const multerConfig = require("./config/multer");

// ----- Import Routes Begin ----- //
const loginRoutes = require("./api/v1/routes/login.route");
const userRoutes = require("./api/v1/admin/routes/user.route");
const provinceRoutes = require("./api/v1/routes/province.route");
const districtRoutes = require("./api/v1/routes/district.route");
const postRoutes = require("./api/v1/routes/post.route");
const registerRoutes = require("./api/v1/routes/user.route");
const vaccineRoutes = require("./api/v1/routes/vaccine.route");
const vaccsiteRoutes = require("./api/v1/routes/vaccinationsites.route");
const vaccsiteStorageRoutes = require("./api/v1/routes/vaccinesitestorage.route");
const reserveRoutes = require("./api/v1/routes/reserve.route")
// ----- Import Routes End ----- //

// const corsOptions = {
//   origin: ["http://localhost:4200"],
//   methods: ["POST"],
//   optionsSuccessStatus: 200,
// };

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(multer(multerConfig.config).single(multerConfig.keyUpload));
app.use("/images", express.static(__dirname + "/uploads/images/"));

// ----- Route Begin ----- //
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/admin/users", userRoutes);
app.use("/api/v1/provinces", provinceRoutes);
app.use("/api/v1/districts", districtRoutes);
app.use("/api/v1/posts",postRoutes );
app.use("/api/v1/users", registerRoutes);
app.use("/api/v1/vaccines", vaccineRoutes);
app.use("/api/v1/vaccinationsites", vaccsiteRoutes);
app.use("/api/v1/vaccinesitestorage", vaccsiteStorageRoutes);
app.use("/api/v1/reserve", reserveRoutes);
// ----- Route End ----- //

app.use((req, res, next) => {
  const error = new Error("ບໍ່ພົບຂໍ້ມູນ");
  error.status = 404;
  next(error);
});

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const socket = require("socket.io")(server);
const room = "#notification";

socket.on("connect", async (client) => {
  await client.join(room);

  client.on("promotion", (data) => {
    socket.to(room).emit("prm_msg", { data: data });
  });

  client.on("post", (data) => {
    socket.to(room).emit("post_msg", { data: data });
  });

  client.on("notifi", (data) => {
    socket.to(room).emit("notifi_msg", { data: data });
  });

  client.on("disconnect", async () => {
    await client.leave(room);
    await client.leave(client.id);
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      statusCode: error.status,
      message: error.message,
    },
  });
});

server.listen(
  PORT,
  console.log(`RegisterCovid System API Server started on port ${PORT}`)
);
