const mongoose = require("mongoose");

const dbConnect = async()=>{
    
    try{
        const conn = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("db Connected to "+conn.connection.name+conn.connection.host)
    }
    catch(e)
    {
        console.log(e)
        process.exit(1);
    }
}

module.exports = dbConnect;