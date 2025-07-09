const multer = require("multer");
const path = require("path");

const storage= multer.diskStorage({

destination: (req,file,cb)=>{
    cb(null,"uploads/");
},

filename : (req,file,cb)=>{
    cb(null,file.originalname);
}

})

// this will not work because multer expects a key named storage, not uplod.
// const upload = multer({uplod});

const upload =multer({storage})
module.exports = upload;





