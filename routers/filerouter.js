const express = require("express");
const router = express.Router();
const upload = require("../middleware/uplo");
const {fileupload} = require("../Controllers/uploadfile")
router.post("/",upload.single("file"),fileupload)

module.exports= router;