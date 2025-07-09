require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/uploadConfig");
const app = express();
dbConnect();
const PORT = process.env.PORT || 5001;

app.use("/fileupload",require("./routers/filerouter"));
app.use("uploads/",express.static("uploads"));
app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`server connected to the port ${PORT}`);
    }
})