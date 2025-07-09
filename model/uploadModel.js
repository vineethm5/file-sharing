const mongoose = require("mongoose");

const Upload_sc= mongoose.Schema({
    filename : {
        type:String,
        required:true
    }
},
{
    timestamp: true
}
);

module.exports= mongoose.model("filedata",Upload_sc);