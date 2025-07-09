const express = require("express");
const router = express.Router();
const upload = require("../middleware/uplo");
const {fileupload,download} = require("../Controllers/uploadfile");
router.post("/",upload.single("file"),fileupload)
router.get("/:id",download)

module.exports= router;