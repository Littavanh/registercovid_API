const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

module.exports = multerConfig = {
  config: {
    storage: multer.diskStorage({
      destination: (req, file, next) => {
        const folder = "./uploads/images/";
        if (!fs.existsSync(folder)) {
          fs.mkdirSync(folder, {recursive: true});
        }
        next(null, folder);
      },
      filename: (req, file, next) => {
        // const ext = file.mimetype.split("/")[1];
        const ext = MIME_TYPE_MAP[file.mimetype];
        next(null, `${uuidv4()}.${ext}`);
      },
    }),
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, next) => {
      const image = file.mimetype.startsWith("image/");
      if (image) {
        next(null, true);
      } else {
        next({ message: "File type not supported" }, false);
      }
    },
  },
  keyUpload: "photo",
};
