const filedata = require("../model/uploadModel");
const path = require("path");

const fileupload = async(req,res)=>{
    try
    {
        if(req.file)
        {
            console.log(req.file.originalname);
            const filename = req.file.originalname;
            const upl = await filedata.create({
                filename:filename
            });
            res.status(200).json({message:"uploaded successfully"});
        }
    }
    catch(e)
    {
        res.status(400).json({message:"Something went wrong",error:e})
        
    }
    
}

const download = async(req,res)=>{
    try{
        const filedetails = await filedata.findById(req.params.id);
        console.log(filedetails+"filee");
        if(!filedetails)
        {
            res.status(400).json({message:"file not found"})
        }
        else{
            
        // This means:

        // __dirname = D:\file-sharing\Controllers

        // ".." = goes up one directory → D:\file-sharing

        // "uploads" = goes into the uploads folder → D:\file-sharing\uploads
            // console.log(path.join(__dirname,"..","uploads",filedetails.filename));
           const fullpath = path.join(__dirname,"..","uploads",filedetails.filename);
           res.status(200).download(fullpath,filedetails.filename);
        }
    }
    catch(e)
    {
        console.log(e)
    }
}


module.exports= {fileupload,download}