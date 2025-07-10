const express = require("express");
const router = express.Router();
const upload = require("../middleware/uplo");
const {fileupload,download,delefile} = require("../Controllers/uploadfile");
router.post("/",upload.single("file"),fileupload)
router.get("/:id",download);
router.delete("/:id",delefile);

module.exports= router;